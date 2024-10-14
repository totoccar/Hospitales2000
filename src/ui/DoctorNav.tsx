"use client";

import { useState } from 'react';
import { Menu, X, Hospital, Search, PowerIcon, Calendar } from 'lucide-react';
import Link from 'next/link';
import UserOptionsButton from './UserOptionsButton';

export default function DoctorNav({ userName }: { userName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Buscar Paciente', href: '/search/patient', icon: Search },
    { name: 'Buscar Medico', href: '/search/doctor', icon: Search },
    { name: 'Establecer horario de atencion', href: '', icon: Clock },
    { name: 'Ver calendario', href: 'appointment/medicalcalendar', icon: Calendar }
  ];

  return (
    <nav className="bg-[#025951] text-[#F2F2F2] shadow-lg">
      <nav className='bg-secundario py-2'>
        <Link href="/" className="flex justify-center items-center p-2 space-x-2">
          <Hospital className="h-8 w-8 text-[#04D99D]" />
          <span className="text-xl font-bold">Hospitales 2000</span>
        </Link>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center w-full h-16">
          <h1></h1>
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href} icon={item.icon}>
                {item.name}
              </NavLink>
            ))}
            <UserOptionsButton rol="Medico" userName={userName} />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#F2F2F2] hover:bg-[#012623] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#04D99D] transition-colors duration-200"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 text-center">
            {navItems.map((item) => (
              <MobileNavLink key={item.name} href={item.href} icon={item.icon}>
                {item.name}
              </MobileNavLink>
            ))}
            <MobileNavLink href="/password/change" icon={PowerIcon}>
              <UserOptionsButton rol="Medico" userName={userName} />
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: React.ElementType }) {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-[#012623] hover:text-[#04D99D] transition-colors duration-200"
    >
      <Icon className="h-5 w-5 mr-2" />
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: React.ElementType }) {
  return (
    <Link
      href={href}
      className="flex text-center items-center px-3 py-2 rounded-md text-base font-medium hover:bg-[#012623] hover:text-[#04D99D] transition-colors duration-200"
    >
      <Icon className="h-5 w-5 mr-3" />
      {children}
    </Link>
  );
}
