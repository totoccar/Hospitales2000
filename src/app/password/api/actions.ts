'use server';

import { getPassword, changePassword, getUserIdByEmail } from "./changePassword";
import bcrypt from 'bcryptjs';


export async function authenticateEmail(
    email: string,
): Promise<boolean> {

    const userId = await getUserIdByEmail(email);

    if (userId) {
        return true;  // Retorna true si el correo electrónico coincide con algun usuario
    } else {
        return false;  // Retorna false si el correo electrónico no coincide
    }
}


export async function authenticatePassword(
    nombre_user: string,
    param_contrasena: string
): Promise<boolean> {
    try {
        const password = await getPassword(nombre_user);

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

/*Falta hash*/
export async function changePasswordAPI(
    param_nueva_contrasena: string,
    documento: string
): Promise<void> {
    await changePassword(param_nueva_contrasena, documento);
}


