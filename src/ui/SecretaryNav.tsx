"use client";

import { Hospital, Search, PowerIcon } from 'lucide-react';
import Link from 'next/link';
import cerrarSesion from '../lib/session';

export default function NavBarSecretary() {
  return (
    <nav className="bg-[#025951] text-[#F2F2F2] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Hospital className="h-8 w-8 text-[#04D99D]" />
            <span className="text-xl font-bold">Hospitales 2000</span>
          </Link>
          <div className="flex space-x-1">
            <Link
              href="/search/doctor"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#012623] hover:text-[#04D99D] transition-colors duration-200"
            >
              <Search className="h-5 w-5 mr-2" />
              Buscar Medico
            </Link>
            <span className="text-md font-medium">Secretaria</span>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await cerrarSesion();
                window.location.reload();
              }}
            >
              <button className="flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-[#012623]">
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Cerrar Sesión</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
