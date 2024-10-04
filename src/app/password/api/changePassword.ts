"use server"
import prisma from '@/src/lib/db';
import { TipoDocumentoEnum } from '@prisma/client';
import bcrypt from 'bcryptjs';


export async function getPassword(user_id: string): Promise<string> {
    try {
        const user = await prisma.usuario.findUnique({
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

export async function getPasswordByDocument(documento: string, tipo_documento: TipoDocumentoEnum) {
    try {
        const user = await prisma.usuario.findUnique({
            where: { 
                numero_documento: documento,
                tipo_documento: tipo_documento,
            }, 
        });

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

export async function changePassword(
    nueva_contrasena: string,
    user_id: string
) {
    try {
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

export async function getUserIdByDocument(documento: string, tipo_documento: TipoDocumentoEnum) {
    try {
        const user = await prisma.usuario.findUnique({
            where: { 
                numero_documento: documento,
                tipo_documento: tipo_documento,
            }, 
        });

        if (!user) {
            console.log('User not found');
            return null;
        }

        console.log("El usuario de documento" + documento + "  es: " + user.nombre + " " + user.apellido); 
        return user.id; 
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}



export async function getUserEmailByDocument(documento: string, tipo_documento: TipoDocumentoEnum) {
    try {
        const user = await prisma.usuario.findUnique({
            where: { 
                numero_documento: documento,
                tipo_documento: tipo_documento,
            }, 
        });

        if (!user) {
            console.log('User not found');
            return null;
        }

        console.log("El usuario de documento " + documento + " y tipo de documento " + tipo_documento + " es: " + user.nombre + " " + user.apellido + " de correo: " + user.correo_electronico);
        return user.correo_electronico;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}

export async function getUserNameByDocument(documento: string, tipo_documento: TipoDocumentoEnum) {
    try {
        const user = await prisma.usuario.findUnique({
            where: { 
                numero_documento: documento,
                tipo_documento: tipo_documento,
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