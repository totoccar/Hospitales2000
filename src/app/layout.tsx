import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { cn } from "../lib/utils";
import { getDni, getRole } from "./lib/actions";
import NavBarDoctor from "../ui/DoctorNav";
import NavBarSecretary from "../ui/SecretaryNav";
import NavBarPacient from "../ui/PacientNavBar";
import NavBarAdmin from "../ui/AdminNav";
import { getUserNameByDNI } from "../lib/getUsuarioById";


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
  const dni = await getDni();
  const name = await getUserNameByDNI(dni);
  console.log(name)
  return (
    <html lang='en' className='h-full'>
      <body className={cn(
        'relative h-full font-sans antialiased',
        inter.className
      )}>
        <main className='relative flex flex-col min-h-screen'>
          {role === 'Administrador' && <NavBarAdmin userName={name} />} 
          {role === 'Medico' && <NavBarDoctor userName={name} />} 
          {role === 'Secretaria' && <NavBarSecretary userName={name} />} 
          {role === 'Paciente' && <NavBarPacient userName={name} />}
          <div className='flex-grow flex-1'>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
