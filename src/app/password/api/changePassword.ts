"use server"
import prisma from '@/src/lib/db';
import { TipoDocumentoEnum } from '@prisma/client';
import bcrypt from 'bcryptjs';


export async function getPassword(user_id: string): Promise<string> {
    try {
        const user = await prisma.usuario.findUnique({
            where: { id: user_id },
        });
        if (!user) {
            throw new Error('User not found.');
        }
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
            return null;
        }
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
            return null;
        }
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
            return null;
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}

export async function getsessionIdByDocument(documento: string): Promise<string> {
    try {
        const user = await prisma.usuario.findUnique({
            where: {
                numero_documento: documento,
            },
        });
        if (!user) {
            return "Ocurrio un Error en logeo";
        }
        return user.id;
    } catch (error) {
        console.error('Error fetching user:', error);
        return "Ocurrio un Error";
    }
}