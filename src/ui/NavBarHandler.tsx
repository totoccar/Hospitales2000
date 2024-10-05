"use client";

import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import NavBarDoctor from './DoctorNav';
import NavBarSecretary from './SecretaryNav';
import NavBarAdmin from './AdminNav';



export default function NavBarHandler() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const noNavbarRoutes = ['/login', '/selectrole', '/404', '/password/recover', '/password/change'];


  if (noNavbarRoutes.includes(pathname)) {
    return null;
  }


  if (status === 'loading') {
    return <div>Cargando...</div>;
  }


  const role = session?.user?.role;
  console.log("rol de la session:", role)

  if (!role) {
    return <NavBarSecretary />; //entra aca la pongo solo para poder cerrar sesion
  }

  switch (role) {
    case 'Admin':
      return <NavBarAdmin />;
    case 'Medico':
      return <NavBarDoctor />;
    case 'Secretaria':
      return <NavBarSecretary />;
    default:
      return null;
  }
}
