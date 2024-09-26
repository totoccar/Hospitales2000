"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import {Menu} from 'lucide-react'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <>
      <div className='h-6 text-xs lg:text-xl lg:h-9 justify-center pt-1 text-center bg-secondary text-white'>
        Inicia sesion y consegui un descuento del 20% en tu primera orden
      </div>
      <header className='flex items-center sticky top-0 z-50 justify-between bg-white'>
        <Link href={"/"} className='m-2 mt-3 pl-4 text-black text-3xl font-bold'>
          Movie Merch
        </Link>
        <nav className='gap-6 items-center mx-3  hidden text-black font-semibold lg:flex'>
          <Link href={"/products"}>Productos</Link>
          <Link href={"/sale"}>Oferta</Link>
          <Link href={"/cart"}>Carrito</Link>
          <Link href={"/login"} className='bg-secondary p-2 px-4 rounded-full text-white'>
            Login
          </Link>
        </nav>
        <Menu className='mr-2 w-10 p-0 h-auto cursor-pointer lg:hidden' onClick={toggleMobileMenu} />
      </header>
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-white text-center text-black p-4'>
          <Link href={"/products"} onClick={toggleMobileMenu} className='block py-2'>Productos</Link>
          <Link href={"/sale"} onClick={toggleMobileMenu} className='block py-2'>Oferta</Link>
          <Link href={"/cart"} onClick={toggleMobileMenu} className='block py-2'>Carrito</Link>
          <Link href={"/login"} onClick={toggleMobileMenu} className='block py-2 bg-secondary p-2 text-center rounded-md text-white'>
            Login
          </Link>
        </div>
      )}
    </>
  )
}

export default Header