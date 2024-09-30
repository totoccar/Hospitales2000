'use server';

import {
    getPassword, changePassword, getUserIdByDocument,
    getUserEmailByDocument
} from "./changePassword";
import bcrypt from 'bcryptjs';


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
            console.log("Password correcta");
            return true;  // Retorna true si la contraseña coincide
        } else {
            console.log("Password incorrecta");
            return false;  // Retorna false si la contraseña no coincide
        }
    } catch (error) {
        console.error('Error al autenticar la contraseña:', error);
        return false;  // En caso de error, devuelve false
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
