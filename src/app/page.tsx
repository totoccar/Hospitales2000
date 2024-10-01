import { signOut } from '@/auth';
import { PowerIcon } from 'lucide-react';
import HomePage from "@/ui/HomePage";
import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
                  
export default function Home() {
  return (
    <MaxWidthWrapper>
    <div className="grid items-center justify-items-center h-screen bg-fondo">
        <h1 className="font-bold text-3xl text-acentos">PASAR TODO EL FORM AL NAVBAR</h1>
      <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Cerrar Sesión</div>
          </button>
        </form>
    </div>
    <HomePage/>
    </MaxWidthWrapper>
  );
}
