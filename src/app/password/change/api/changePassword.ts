// pages/api/changePassword.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();


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

export async function changePassword(
    nueva_contrasena: string,
    documento: string
) {
    try {
        // Hash de la nueva contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(nueva_contrasena, 10);

        // Actualizar la contraseña hasheada en la base de datos
        const user = await prisma.usuario.update({
            where: { numero_documento: documento },
            data: { contrasena: hashedPassword },
        });

        if (!user) {
            throw new Error('User not found.');
        }

        console.log('Password updated successfully for user:', user);
    } catch (error) {
        console.error('Failed to update password:', error);
        throw new Error('Failed to update password.');
    }
}
