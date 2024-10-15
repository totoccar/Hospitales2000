"use client"
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

export default function UserOptionsButton({ userName,rol }: { userName: string,rol:string }) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex text-center justify-center gap-2 rounded-md md:p-3 lg:p-3 text-md lg:text-sm font-medium hover:bg-[#012623]">
                {userName}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className="text-center">{rol}</DropdownMenuLabel>
                <DropdownMenuSeparator />
    
    
                <DropdownMenuItem asChild>
                    <Link href="/password/change" passHref>
                        Cambiar Contraseña
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem 
                    onSelect={() => {
                        cerrarSesion().then(() => {
                            window.location.reload();
                        });
                    }}
                >
                    Cerrar Sesion
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}    

