"use server";

import { signOut } from "../auth";

export default async function cerrarSesion(){
    await signOut();
}