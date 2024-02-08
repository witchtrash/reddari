import { PrismaClient } from '@prisma/client';
import Typesense from 'typesense';
import { map } from 'lodash';

import { TypesenseConfigSchema } from '@app/schemas/typesense';

export const indexData = async () => {
  const { apiKey, ...config } = TypesenseConfigSchema.parse({
    host: process.env.TYPESENSE_HOST,
    port: process.env.TYPESENSE_PORT,
    protocol: process.env.TYPESENSE_PROTOCOL,
    apiKey: process.env.TYPESENSE_API_KEY,
  });

  const client = new Typesense.Client({
    nodes: [config],
    apiKey,
    connectionTimeoutSeconds: 5 * 60,
  });

  const prisma = new PrismaClient();

  const products = map(
    await prisma.product.findMany({
      include: {
        producer: true,
      },
      where: {
        indexedAt: null,
      },
    }),
    (p) => {
      return {
        ...p,
        abv: p.abv.toNumber(),
        price: p.price.toNumber(),
        producerId: null,
      };
    },
  );

  if (products.length === 0) {
    console.warn('No products indexed.');
    return;
  }

  await client
    .collections('products')
    .documents()
    .import(products, { action: 'upsert' });

  await prisma.product.updateMany({
    data: {
      indexedAt: new Date(),
    },
    where: {
      indexedAt: null,
    },
  });
};
