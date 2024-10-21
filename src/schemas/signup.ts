import { Role } from '@prisma/client';
import { z } from 'zod';

export const signupSchema = z.object({
  firstName: z
    .string({ message: 'Nome é obrigatório.' })
    .min(2, 'precisa ter 2 ou mais caracteres.'),
  lastName: z.string().optional(),
  email: z
    .string({ message: 'E-mail é obrigatório.' })
    .email('E-mail inválido.'),
  password: z
    .string({ message: 'Senha é obrigatória.' })
    .min(4, 'precisa ter 4 ou mais caracteres.'),
  role: z.nativeEnum(Role, { message: 'Role inválida' }).default(Role.USER),
});
