import NextAuth from "next-auth";
import { RoleProfile } from './lib/definitions';

declare module "next-auth" {
  interface User {
    dni: string | undefinded;
    role: RoleProfile | undefined;
  }

  interface Session {
    user: {
      dni: string | undefinded;
      role: RoleProfile | undefined;
    };
  }

  interface JWT {
    dni: string | undefinded;
    role: RoleProfile | undefined;
  }
}
