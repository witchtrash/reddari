import { z } from 'zod';

export const TypesenseConfigSchema = z.object({
  apiKey: z.string(),
  nodes: z
    .object({
      host: z.string().min(1),
      port: z
        .string()
        .min(1)
        .transform((p) => Number(p)),
      protocol: z.enum(['http', 'https']),
    })
    .array(),
  numRetries: z.number(),
  connectionTimeoutSeconds: z.number(),
});

export type TypesenseNode = z.infer<typeof TypesenseConfigSchema>;
