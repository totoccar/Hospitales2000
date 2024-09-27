// auth.ts
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function getUser(numero_documento: string) {
  try {
    const user = await prisma.usuario.findUnique({
     where: {numero_documento},
    });
    console.log(user);
     return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ numero_documento: z.string().min(6), contrasena: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { numero_documento, contrasena } = parsedCredentials.data;
          const user = await getUser(numero_documento);
          if (!user) return null;

          const passwordMatch = await bcrypt.compare(contrasena, user.contrasena);
          if (!passwordMatch) return null;

          return user;
        }

        return null;
      },
    }),
  ],
});
