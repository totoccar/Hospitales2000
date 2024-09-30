// pages/api/changePassword.ts

import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';



/** Primer funcion =') nunca olvidar */
export async function getPassword(user_id: string): Promise<string> {
    try {
        const user = await prisma.usuario.findFirst({
            where: { id: user_id },
        });
        console.log("Se obtuvo el usuario: ", user);

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
    user_id: string
) {
    try {
        // Hash de la nueva contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(nueva_contrasena, 10);


        const user = await prisma.usuario.update({
            where: { id: user_id },
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

export async function getUserIdByDocument(documento: string) {
    try {
        const user = await prisma.usuario.findUnique({
            where: {
                numero_documento: documento,
            },
        });

        if (!user) {
            console.log('User not found');
            return null;
        }

        console.log("El usuario de documento" + documento + "  es: " + user.nombre + " " + user.apellido); // Muestra el usuario en la consola
        return user.id; // Devuelve el id del usuario
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}



export async function getUserEmailByDocument(user_document: string) {
    try {
        const user = await prisma.usuario.findUnique({
            where: {
                numero_documento: user_document,
            },
        });

        if (!user) {
            console.log('User not found');
            return null;
        }

        console.log("El usuario de documento" + user_document + "  es: " + user.nombre + " " + user.apellido + " d correo :" + user.correo_electronico);
        return user.correo_electronico;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}

export async function getUserNameByDocument(user_document: string) {
    try {
        const user = await prisma.usuario.findUnique({
            where: {
                numero_documento: user_document,
            },
        });

        if (!user) {
            console.log('User not found');
            return null;
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}