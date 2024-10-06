import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { cn } from "../lib/utils";
import { getRole } from "./lib/actions";
import NavBarAdmin from "../ui/AdminNav";
import NavBarDoctor from "../ui/DoctorNav";
import NavBarSecretary from "../ui/SecretaryNav";
import NavBarPacient from "../ui/PacientNavBar";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Hospitales 2000",
  description: "Comision 1 implementacion de software",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const role = await getRole();
  console.log('role:', role);
  return (
    <html lang='en' className='h-full'>
      <body className={cn(
        'relative h-full font-sans antialiased',
        inter.className
      )}>
        {/* <SessionProvider> */}
        <main className='relative flex flex-col min-h-screen'>
          {/* <NavBarHandler /> */}
          {role === 'Administrador' && <NavBarAdmin />} {/* Asumiendo que tienes un componente NavBarAdmin */}
          {role === 'Medico' && <NavBarDoctor />} {/* Asumiendo que tienes un componente NavBarMedico */}
          {role === 'Secretaria' && <NavBarSecretary />} {/* Asumiendo que tienes un componente NavBarSecretary */}
          {role === 'Paciente' && <NavBarPacient />}
          <div className='flex-grow flex-1'>
            {children}
          </div>
        </main>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
