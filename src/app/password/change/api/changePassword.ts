// pages/api/changePassword.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function changePassword() {


}



/** Primer funcion =') nunca olvidar */
export async function getPassword(nombre: string): Promise<string> {
    try {
        const user = await prisma.usuario.findFirst({
            where: { nombre: nombre },
        });
        console.log(user);

        if (!user) {
            throw new Error('User not found.');
        }
        console.log(user);

        return user.contrasena;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export async function getPasswordByDocument(documento: string) {
    try {
        const user = await prisma.usuario.findUnique({
            where: { numero_documento: documento }, // Cambiar aquí para buscar por documento
        });

        if (!user) {
            throw new Error('User not found.');
        }

        console.log(user);
        return user.contrasena; // Devuelve la contraseña del usuario
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}
