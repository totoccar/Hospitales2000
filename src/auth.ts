// auth.ts
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { z } from 'zod';
import { PrismaClient, TipoDocumentoEnum } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { fetchRolesDeUsuario } from './lib/users';
import { RoleProfile } from './lib/definitions';
import { authConfig } from '@/auth.config';


const prisma = new PrismaClient();

const tipos_documento = [
  TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD,
  TipoDocumentoEnum.CEDULA_IDENTIDAD,
  TipoDocumentoEnum.LIBRETA_CIVICA,
  TipoDocumentoEnum.LIBRETA_ENROLAMIENTO,
  TipoDocumentoEnum.PASAPORTE,
] as const;

async function getUser(numero_documento: string) {
  try {
    const user = await prisma.usuario.findUnique({
     where: {numero_documento},
    });
     return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut, unstable_update } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            numero_documento: z.string().min(6),
            contrasena: z.string().min(6),
            tipo_documento: z.enum(tipos_documento),
          })
          .safeParse(credentials);


        if (parsedCredentials.success) {
          const { numero_documento, contrasena, tipo_documento } = parsedCredentials.data;
          const user = await getUser(numero_documento);
          if (!user) {throw new Error("Usuario no encontrado");
          }

          const passwordMatch = await bcrypt.compare(contrasena, user.contrasena);
          if (!passwordMatch) {throw new Error ("Contraseña incorrecta");};

          if (user.tipo_documento !== tipo_documento) {
            throw new Error('Verifique los datos ingresados');
          };
          const profiles = await fetchRolesDeUsuario(numero_documento);
          if (profiles.length === 1) {
            return { dni: numero_documento, role: profiles[0] as RoleProfile };
          } else {
            return { dni: numero_documento, role: undefined };
          }
        }
        return null;
      },
    }),
  ],
});

