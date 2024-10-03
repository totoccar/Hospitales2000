'use client'
import { ArrowRightIcon } from 'lucide-react';
import React, { useState } from 'react'


export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="rounded-lg w-96 bg-gray-200 px-6 pb-4 pt-8">
            <div className="text-center mb-3 font-bold text-3xl text-[#025951]"> Seleccionar Rol</div>
            <div className="flex justify-center mt-6">
            <RolButton rol="Administrador"/>
            </div>
            <div className="flex justify-center mt-6">
            <RolButton rol="Medico"/>
            </div>
            <div className="flex justify-center mt-6">
            <RolButton rol="Secretaria" disabled={true}/>
            </div>
            <div className="flex justify-center mt-6">
            <RolButton rol="Paciente" disabled={true}/>
            </div>
        </div>
    </div>
  )
}


function RolButton({ rol, disabled }: { rol: string; disabled?: boolean }) {
    return (
      <button
        type="submit"
        className={`relative flex items-center justify-center bg-[#025951] hover:bg-[#28b78ee7] text-white font-bold text-lg mt-4 w-full py-3 rounded-md transition duration-300 ease-in-out transform ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:scale-105 active:scale-95'}`}
        aria-label={`clic aquí para seleccionar ${rol}`}
        disabled={disabled}
      >
        {rol}
      </button>
    );
  }
  

