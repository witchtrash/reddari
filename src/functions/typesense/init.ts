import Typesense from 'typesense';

import { ProductCollection } from '@app/modules/typesense/collections';
import { getIngestConfig } from '@app/modules/typesense';

export const initializeCollections = async () => {
  const config = getIngestConfig();
  const client = new Typesense.Client(config);

  try {
    // Check if the collection already exists
    await client.collections('products').retrieve();
  } catch {
    // A 404 is thrown if the collection wasn't found, so create it
    await client.collections().create(ProductCollection);
  }
};
