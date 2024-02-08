import { Product } from '@prisma/client';
import Typesense from 'typesense';

import { TypesenseConfigSchema } from '@app/schemas/typesense';

interface InsertDataArgs {
  data: Product[];
}
export const insertData = ({ data }: InsertDataArgs) => {
  console.log({ length: data.length });
  return;

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

  client.collections('products').documents().import(data, { action: 'upsert' });
};
