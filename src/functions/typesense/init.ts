import Typesense from 'typesense';

import {
  ProductCollection,
  TypesenseConfigSchema,
} from '@app/schemas/typesense';

export const initializeCollections = async () => {
  const { apiKey, ...config } = TypesenseConfigSchema.parse({
    host: process.env.TYPESENSE_HOST,
    port: process.env.TYPESENSE_PORT,
    protocol: process.env.TYPESENSE_PROTOCOL,
    apiKey: process.env.TYPESENSE_API_KEY,
  });

  const client = new Typesense.Client({
    nodes: [config],
    apiKey,
    connectionTimeoutSeconds: 5,
  });

  try {
    // Check if the collection already exists
    await client.collections('products').retrieve();
  } catch {
    // A 404 is thrown if the collection wasn't found, so create it
    await client.collections().create(ProductCollection);
  }
};
