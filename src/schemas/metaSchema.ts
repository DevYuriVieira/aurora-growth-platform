// src/schemas/metaSchema.ts

import { z } from 'zod';

export const metaSchema = z.object({
  title: z
    .string()
    .min(3, 'O título precisa ter pelo menos 3 caracteres')
    .max(60, 'O título pode ter no máximo 60 caracteres'),
  description: z
    .string()
    .min(10, 'Descreva melhor sua meta (mínimo 10 caracteres)')
    .max(300, 'A descrição pode ter no máximo 300 caracteres'),
  area: z.enum(['educacao', 'trabalho', 'saude', 'financas', 'profissao'], {
    message: 'Selecione uma área',
  }),
});

export type MetaFormData = z.infer<typeof metaSchema>;