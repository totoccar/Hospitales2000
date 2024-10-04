'use server';

import bcrypt from 'bcryptjs';
import { changePassword, getPassword, getUserEmailByDocument, getUserIdByDocument } from './changePassword';


export async function authenticateDocument(
    documento: string,
): Promise<boolean> {

    const userId = await getUserIdByDocument(documento);

    if (userId) {
        return true;  // Retorna true si el correo electrónico coincide con algun usuario
    } else {
        return false;  // Retorna false si el correo electrónico no coincide
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
            return true; 
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error al autenticar la contraseña:', error);
        return false;  
    }

}

export async function changePasswordAPI(
    param_nueva_contrasena: string,
    documento: string
): Promise<void> {
    await changePassword(param_nueva_contrasena, documento);
}

export async function getUserEmail(user_document: string): Promise<string> {
    const user_email = await getUserEmailByDocument(user_document);

    if (user_email) {
        return user_email;  // Retorna el correo electrónico del usuario
    } else {
        return "";  // Retorna una cadena vacía si el usuario no existe
    }
}

export async function getUserName(
    user_document: string
): Promise<string> {
    const user_email = await getUserEmailByDocument(user_document);

    if (user_email) {
        return user_email;  // Retorna el correo electrónico del usuario    

    } else return "null";
}