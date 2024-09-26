import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
//import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function getUser(dni: string, tipo_documento: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { dni, tipo_documento },
    });
    return user;  // Retorna el usuario encontrado o `null` si no existe
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
        const TipoDocumentoEnum = z.enum(['Cedula_de_identidad', 'DNI', 'Libreta_civica', 'Libreta_de_enrolamiento', 'Pasaporte']);
        const parsedCredentials = z
          .object({ numero_documento: z.string().min(6),tipo_documento:TipoDocumentoEnum, password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { numero_documento, tipo_documento, password } = parsedCredentials.data;
          const user = await getUser(numero_documento,tipo_documento);
          if (!user) return null;

         //const passwordMatch = await bcrypt.compare(password, user.password); 
         const passwordMatch = password === user.password; // BORRAR CUANDO TENGAMOS LAS CONTRASEÑAS ENCRIPTADAS
          if (!passwordMatch) return null;

          return user;
        }

        return null;
      },
    }),
  ],
});
