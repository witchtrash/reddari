import { TypesenseConfigSchema } from '@app/schemas/typesense';

export const getIngestConfig = () => {
  return TypesenseConfigSchema.parse({
    apiKey: process.env.TYPESENSE_ADMIN_KEY,
    nodes: [
      {
        host: process.env.NEXT_PUBLIC_TYPESENSE_HOST,
        port: process.env.NEXT_PUBLIC_TYPESENSE_PORT,
        protocol: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL,
      },
    ],
    connectionTimeoutSeconds: 5 * 60,
    numRetries: 0,
  });
};

export const getSearchClientConfig = () => {
  return TypesenseConfigSchema.parse({
    apiKey: process.env.NEXT_PUBLIC_TYPESENSE_SEARCH_KEY,
    nodes: [
      {
        host: process.env.NEXT_PUBLIC_TYPESENSE_HOST,
        port: process.env.NEXT_PUBLIC_TYPESENSE_PORT,
        protocol: process.env.NEXT_PUBLIC_TYPESENSE_PROTOCOL,
      },
    ],
    connectionTimeoutSeconds: 2,
    numRetries: 4,
  });
};
