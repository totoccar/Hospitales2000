'use server';

import { getPassword } from "./changePassword";

export async function authenticatePassword(
    nombre_user: string
) {
    try {
        await getPassword(nombre_user);
    } catch (error) {

    }

}
