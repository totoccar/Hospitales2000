import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Hospitales 2000",
  description: "Comision 1 implementacion de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex flex-col min-h-screen">
        {/* <NavBar/> */}
        <main className="flex-grow">
            {children}
        </main>
      </div>
    </body>
    </html>
  );
}
