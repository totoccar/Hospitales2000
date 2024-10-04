import {User2, LogOut} from "lucide-react"
import {redirect} from "next/navigation";
import {headers} from "next/headers";
import { AlertTriangle } from "lucide-react"
import { auth } from "@/src/auth";
import { logout, selectRole } from "@/login";
import { fetchRolesDeUsuario } from "@/src/lib/users";
import { RoleProfile } from "@/src/lib/definitions";
import { roleDisplayNames } from "@/src/lib/roleDisplayNames";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";

export default async function RoleSelectPage({searchParams: {callbackUrl}}: {searchParams: {callbackUrl?: string}} ) {
    const dni = (await auth())?.user.dni;
    if (!dni) {
        console.error("Could not get user dni")
        return <ErrorPage />
    }

    if((await auth())?.user.role) {     
        redirect("/")
    }
    
    const roles = await fetchRolesDeUsuario(dni).then(profiles => profiles.map(profile => profile));
    console.log(roles)

    if(roles.length === 0) {
        console.error("User has no roles")
        return <ErrorPage/>
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4 transition-colors duration-200">
            <Card className="w-full max-w-sm p-6 space-y-4  bg-gray-200 transition-colors duration-200">
                <h1 className="text-2xl font-bold text-black text-center">Selecciona un rol</h1>
                <div className="space-y-3">
                    {roles.map((role) => (
                        console.log(role),
                        <form action={selectRole.bind(null, role, callbackUrl)} key={role}>
                            <Button
                                type="submit"
                                variant="outline"
                                className="dark w-full h-16 justify-start px-4 hover:bg-gray-100 text-white font-bold transition-colors duration-200"
                            >
                                <User2 className={`mr-4 h-6 w-6 text-black`}/>
                                <span className="text-lg text-[#025951]">{roleDisplayNames[role] || "role"}</span>
                            </Button>
                        </form>
                    ))}
                </div>
                <form action={logout}>
                    <Button variant="destructive" className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg" type="submit">
                        <LogOut className="mr-2 h-4 w-4"/>
                        Cerrar sesión
                    </Button>
                </form>
            </Card>
        </div>
    )
}




function ErrorPage() {

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full space-y-6 text-center">
                <div className="flex justify-center">
                    <AlertTriangle className="h-24 w-24 text-red-500" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">Se ha producido un error</h1>
                <p className="text-gray-600">Prueba cerrar sesión y volver a iniciarla. Si el problema persiste, contacta a un administrador</p>
                <form action={logout}>
                <Button
                    className="w-full"
                    variant="destructive"
                >
                    Cerrar sesión
                </Button>
                </form>
            </div>
        </div>
    )
}
