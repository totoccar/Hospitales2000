"use client";

import { usePathname } from 'next/navigation';
import NavBar from './NavBar';

export default function NavBarHandler() {
  const pathname = usePathname();

  // Rutas donde no queremos mostrar el NavBar
  const noNavbarRoutes = ['/login', '/selectrole', '/404'];

  // Mostramos el NavBar solo si la ruta actual no está en el arreglo
  if (noNavbarRoutes.includes(pathname)) {
    return null;
  }

  return <NavBar />;
}
