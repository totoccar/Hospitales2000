'use server';

import { AuthError } from 'next-auth';
import { auth, signIn, signOut, unstable_update } from "@/src/auth";




export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Credenciales incorrectas';
        default:
          return 'Algo salio mal.';
      }
    }
    throw error;
  }
}

export async function getDni(): Promise<string> {
  const dni = (await auth())?.user.dni;
  return dni;
}

export async function getRole(): Promise<string> {
  const role = (await auth())?.user.role;
  return role;
}

