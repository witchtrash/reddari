import { PrismaClient } from '@prisma/client';
import Typesense from 'typesense';
import { map } from 'lodash';

import { getIngestConfig } from '@app/modules/typesense/config';

export const indexData = async () => {
  const config = getIngestConfig();
  const client = new Typesense.Client(config);
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
