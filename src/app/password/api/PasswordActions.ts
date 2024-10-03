'use server';

import { TipoDocumentoEnum } from "@/src/lib/definitions";
import {
    getPassword, changePassword, getUserIdByDocument,
    getUserEmailByDocument
} from "./changePassword";
import bcrypt from 'bcryptjs';


export async function authenticateDocument(
    documento: string,
    tipo_documento: TipoDocumentoEnum
): Promise<boolean> {

    const userId = await getUserIdByDocument(documento, tipo_documento);

    if (userId) {
        return true; 
    } else {
        return false;  
    }
}


export async function authenticatePassword(
    user_id: string,
    param_contrasena: string
): Promise<boolean> {
    try {
        const password = await getPassword(user_id);

        const passwordMatch = await bcrypt.compare(param_contrasena, password);

        if (passwordMatch) {
            console.log("Password correcta");
            return true; 
        } else {
            console.log("Password incorrecta");
            return false;  
        }
    } catch (error) {
        console.error('Error al autenticar la contraseña:', error);
        return false;  
    }

}

export async function changePasswordAPI(
    param_nueva_contrasena: string,
    documento: string,
    tipo_documento: TipoDocumentoEnum 
): Promise<void> {
    await changePassword(param_nueva_contrasena, documento);
}

export async function getUserEmail(user_document: string, tipo_documento: TipoDocumentoEnum): Promise<string> {
    const user_email = await getUserEmailByDocument(user_document, tipo_documento);

    if (user_email) {
        return user_email;  
    } else {
        return ""; 
    }
}

export async function getUserName(
    user_document: string,
    tipo_documento: TipoDocumentoEnum
): Promise<string> {
    const user_email = await getUserEmailByDocument(user_document, tipo_documento);

    if (user_email) {
        return user_email;     

    } else return "null";
}
