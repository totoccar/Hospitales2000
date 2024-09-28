'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CreatePatientForm() {
  const [dateOfBirth, setDateOfBirth] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Crear Paciente</h2>
        <p className="text-gray-500">Ingrese la información del paciente.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
          <select id="documentType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="Documento Nacional de Indentidad">Documento Nacional de Indentidad</option>
            <option value="Cédula de Identidad">Cédula de Identidad</option>
            <option value="Libreta Cívica">Libreta Cívica</option>
            <option value="Libreta de Enrolamiento">Libreta de Enrolamiento</option>
            <option value="Pasaporte">Pasaporte</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700">Número de Documento</label>
          <Input id="documentNumber" placeholder="Ingrese el número de documento" />
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre del Paciente</label>
          <Input id="name" placeholder="Ingrese el nombre del paciente" />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido del Paciente</label>
          <Input id="lastName" placeholder="Ingrese el apellido del paciente" />
        </div>

        <div className="space-y-2">
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
          <Input 
            id="dateOfBirth" 
            type="date" 
            value={dateOfBirth} 
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
          <div className="flex space-x-2">
            <Input id="cellphoneCountryCode" placeholder="+54" className="w-20" />
            <Input id="cellphoneNumber" placeholder="Ingrese el número de teléfono" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="placeOfBirth" className="block text-sm font-medium text-gray-700">Lugar de Nacimiento</label>
          <Input id="placeOfBirth" placeholder="Ingrese el lugar de nacimiento" />
        </div>

        <div className="space-y-2">
          <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">Contacto de Emergencia</label>
          <div className="flex space-x-2">
            <Input id="emergencyContactCountryCode" placeholder="+54" className="w-20" />
            <Input id="emergencyContactNumber" placeholder="Ingrese el número de teléfono" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="streetName" className="block text-sm font-medium text-gray-700">Calle</label>
          <Input id="streetName" placeholder="Ingrese el nombre de la calle" />
        </div>

        <div className="space-y-2">
          <label htmlFor="streetNumber" className="block text-sm font-medium text-gray-700">Número</label>
          <Input id="streetNumber" placeholder="Ingrese el número de la calle" />
        </div>

        <div className="space-y-2">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Código Postal</label>
          <Input id="postalCode" placeholder="Ingrese el código postal" />
        </div>

        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
          <Input id="city" placeholder="Ingrese la ciudad" />
        </div>

        <div className="space-y-2">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">Provincia</label>
          <Input id="state" placeholder="Ingrese la provincia" />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
          <Input id="email" type="email" placeholder="Ingrese el correo electrónico" />
        </div>

        <div className="space-y-2">
          <label htmlFor="socialWork" className="block text-sm font-medium text-gray-700">Obra Social</label>
          <select id="socialWork" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="Obra Social Privada">Obra Social Privada</option>
            <option value="Obra Social Estatal">Obra Social Estatal</option>
          </select>
        </div>
      </div>

      <Button type="submit" className="w-full">Crear Paciente</Button>
    </form>
  )
}