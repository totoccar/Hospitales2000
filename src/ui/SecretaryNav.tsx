"use client";

import { Hospital, Search, PowerIcon } from 'lucide-react';
import Link from 'next/link';
import cerrarSesion from '../lib/session';
import UserOptionsButton from './UserOptionsButton';

export default function NavBarSecretary() {
  return (
    <nav className="bg-[#025951] text-[#F2F2F2] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full h-16">
          {/* Logo y Nombre del Hospital */}
          <Link href="/" className="flex items-center space-x-2">
            <Hospital className="h-8 w-8 text-[#04D99D]" />
            <span className="text-lg sm:text-xl font-bold">Hospitales 2000</span>
          </Link>

          {/* Sección de navegación */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center">
              <span className="text-md font-medium">Secretaria</span>
            </div>

            {/* Botón de Buscar Médico */}
            <Link
              href="/search/doctor"
              className="flex items-center px-2 py-2 rounded-md text-sm font-medium hover:bg-[#012623] hover:text-[#04D99D] transition-colors duration-200"
            >
              <Search className="h-5 w-5 mr-1 sm:mr-2" />
              <span className="hidden sm:block">Buscar Medico</span>
            </Link>

            {/* Botón de Cerrar Sesión */}
            <UserOptionsButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
