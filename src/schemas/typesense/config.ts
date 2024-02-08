import { z } from 'zod';

export const TypesenseConfigSchema = z.object({
  host: z.string().min(1),
  port: z
    .string()
    .min(1)
    .transform((p) => Number(p)),
  protocol: z.enum(['http', 'https']),
  apiKey: z.string().min(1),
});

export type TypesenseConfig = z.infer<typeof TypesenseConfigSchema>;
