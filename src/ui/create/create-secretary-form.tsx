'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CreateSecretaryForm() {
  const [dateOfBirth] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, pattern: RegExp) => {
    const { value } = e.target
    if (pattern.test(value) || value === '') {
      e.target.value = value
    } else {
      e.target.value = value.slice(0, -1)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Crear Secretaria</h2>
        <p className="text-gray-500">Ingrese la información de la secretaria.</p>
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
          <Input id="documentNumber" 
          placeholder="Ingrese el número de documento" 
          onChange={(e) => handleInputChange(e, /^\d*$/)}
          required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre de la Secretaria</label>
          <Input id="name" 
          placeholder="Ingrese el nombre de la secretaria" 
          onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
          required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido de la Secretaria</label>
          <Input id="lastName" 
          placeholder="Ingrese el apellido de la secretaria" 
          onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
          required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
          <div className="flex space-x-2">
            <Input id="cellphoneCountryCode" 
            placeholder="+54" className="w-20" 
            onChange={(e) => handleInputChange(e, /^\d*$/)}
            required
            />
            <Input id="cellphoneNumber" 
            placeholder="Ingrese el número de teléfono" 
            onChange={(e) => handleInputChange(e, /^\d*$/)}
            required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="streetName" className="block text-sm font-medium text-gray-700">Calle</label>
          <Input id="streetName" 
          placeholder="Ingrese el nombre de la calle" 
          onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
          required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="streetNumber" className="block text-sm font-medium text-gray-700">Número</label>
          <Input id="streetNumber" 
          placeholder="Ingrese el número de la calle" 
          onChange={(e) => handleInputChange(e, /^\d*$/)}
          required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Código Postal</label>
          <Input id="postalCode" 
          placeholder="Ingrese el código postal" 
          onChange={(e) => handleInputChange(e, /^\d*$/)}
          required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
          <Input id="city" 
          placeholder="Ingrese la ciudad" 
          onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
          required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">Provincia</label>
          <Input id="state" 
          placeholder="Ingrese la provincia" 
          onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
          required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
          <Input id="email" type="email" placeholder="Ingrese el correo electrónico" />
        </div>
      </div>

      <Button type="submit" className="w-full">Crear Secretaria</Button>
    </form>
  )
}