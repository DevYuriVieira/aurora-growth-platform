import { z } from 'zod';

export const publicacaoComunidadeSchema = z.object({
    titulo: z
        .string()
        .min(3, 'O título precisa ter pelo menos 3 caracteres.'),

    conteudo: z
        .string()
        .min(10, 'O conteúdo precisa ter pelo menos 10 caracteres.'),

    area: z.enum([
        'educacao',
        'trabalho',
        'saude',
        'financas',
        'tecnologia',
        'carreira',
    ]),

    tipo: z.enum(['historia', 'duvida', 'dica', 'conquista']),
});

export type PublicacaoComunidadeFormData = z.infer<
    typeof publicacaoComunidadeSchema
>;