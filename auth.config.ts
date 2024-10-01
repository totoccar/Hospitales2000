// auth.config.ts
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',  // Página de login
  },
  callbacks: {
    async redirect() {
      // Redirigir al usuario a la página principal después del login
      return '/';
    },
  },
  providers: [], // Añade tus proveedores aquí
} satisfies NextAuthConfig;
