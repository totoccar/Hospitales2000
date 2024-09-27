'use server';

import { getPassword } from "./changePassword";
import bcrypt from 'bcryptjs';

export async function authenticatePassword(
    nombre_user: string,
    param_contrasena: string
) {
    try {
        const password = await getPassword(nombre_user);

        const passwordMatch = await bcrypt.compare(param_contrasena, password);

        if (passwordMatch) {
            console.log("Password correcta");
        } else {
            console.log("Password incorrecta");
        }
    } catch (error) {

    }

}
