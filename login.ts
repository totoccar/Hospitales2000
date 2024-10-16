"use server"
import { z } from "zod";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { LoginData, RoleProfile } from "./src/lib/definitions";
import { fetchRolesDeUsuario } from "./src/lib/users";
import { auth, signIn, signOut, unstable_update } from "./src/auth";

type CallbackError = {
    type: "CallbackRouteError",
    cause: {
        err: Error
    } | any
}

export async function login(_data: LoginData) {
    try {
        const callback = await signIn("credentials", { numero_documento: _data.numero_documento, contrasena: _data.contrasena, tipo_documento: _data.tipo_documento, redirect: false })
        console.log(callback);
        const params = new URLSearchParams({ callbackUrl: callback })
        redirect("/selectrole?" + params.toString())
    } catch (e) {
        const error = e as CallbackError;
        if (error.type == "CallbackRouteError") {
            return error.cause.err.message
        }
        else throw e
    }
}

export async function selectRole(_role: RoleProfile, callbackUrl?: string): Promise<never> {
    const dni = (await auth())?.user.dni;
    if (!dni) {
        console.error("DNI not set")
        redirect("/login")
    }
    if (!(await auth())?.user.role) {
        const role = z.string().safeParse(_role)
        if (role.success) {
            const userProfiles = await fetchRolesDeUsuario(dni) as unknown as string[]; // Array de strings
            console.log('userProfiles:', userProfiles); // ['Paciente', 'Secretaria']
            console.log('role.data:', role.data); // 'Paciente'

            // Comparar directamente el string del rol
            const userProfile = userProfiles.find(profile => profile === role.data);
            console.log(userProfile); // 'Paciente' si lo encuentra, undefined si no

            if (role) {
                await unstable_update({ user: { role: role.data as RoleProfile }, roleChangeKey: process.env.ROLE_CHANGE_KEY } as any)
            }
            else {
                console.error("Invalid role", role)
                redirect("/login")
            }

            if (callbackUrl && new URL(callbackUrl).host === headers().get("host"))
                redirect(callbackUrl);
            else
                redirect("/")
        }
    }
    redirect("/login")
}


export async function logout() {
    await signOut({ redirect: false });
    redirect("/login")
}