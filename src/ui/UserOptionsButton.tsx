
import cerrarSesion from "../lib/session";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { getUserNameByDNI } from "../lib/getUsuarioById";
import { getDni } from "../app/lib/actions";

export default async function UserOptionsButton() {

    return (
        <DropdownMenu>
        <DropdownMenuTrigger className="flex  items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-[#012623]">Mi Cuenta</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
                onSelect={async () => {
                    await cerrarSesion();
                    window.location.reload();
                }}
            >
                Cerrar Sesion
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href="/password/change" passHref>
                   Cambiar Contraseña
                </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    );
}

