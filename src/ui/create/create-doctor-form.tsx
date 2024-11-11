'use client';

import { useFormState } from 'react-dom';
import Link from 'next/link';
import { Especialidad } from "@prisma/client";
import { createDoctor, DoctorState } from '@/src/lib/createUsers';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';

export default function CreateDoctorForm({specialties}: {specialties: Especialidad[]}) {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, pattern: RegExp) => {
    const { value } = e.target
    if (pattern.test(value) || value === '') {
      e.target.value = value
    } else {
      e.target.value = value.slice(0, -1)
    }
  }

  const initialState: DoctorState = { message: null, errors: {} };
  const [state, formAction] = useFormState(createDoctor, initialState);

  return (
    <form action={formAction} className="space-y-8 max-w-3xl rounded-md xs:p-1 p-2 bg-fondo md:p-4 mx-auto">
      
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Crear Médico</h2>
        <p className="text-gray-500">Ingrese la información del médico.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
          <select 
            id="documentType"
            name="tipo_documento" 
            defaultValue=""
            aria-describedby="customer-error"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
            <option value="" disabled>Seleccione el tipo de documento</option>
            <option value="DOCUMENTO_NACIONAL_IDENTIDAD">Documento Nacional de Indentidad</option>
            <option value="CEDULA_IDENTIDAD">Cédula de Identidad</option>
            <option value="LIBRETA_CIVICA">Libreta Cívica</option>
            <option value="LIBRETA_ENROLAMIENTO">Libreta de Enrolamiento</option>
            <option value="PASAPORTE">Pasaporte</option>
          </select>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.typeId &&
              state.errors.typeId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700">Número de Documento</label>
          <Input 
            id="documentNumber" 
            name="numero_documento"
            placeholder="Ingrese el número de documento" 
            onChange={(e) => handleInputChange(e, /^\d*$/)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre del Médico</label>
          <Input 
            id="name" 
            name="nombre"
            placeholder="Ingrese el nombre del médico" 
            onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="typeOfRegistration" className="block text-sm font-medium text-gray-700">Tipo de Matrícula</label>
          <select 
            id="typeOfRegistration" 
            name="tipo_matricula"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
            <option value="provincial">Matrícula Provincial</option>
            <option value="nacional">Matrícula Nacional</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido del Médico</label>
          <Input 
            id="lastName"
            name="apellido" 
            placeholder="Ingrese el apellido del médico" 
            onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700">Número de Matricula</label>
          <Input 
            id="registrationNumber" 
            name="numero_matricula"
            placeholder="Ingrese el número de matrícula" 
            onChange={(e) => handleInputChange(e, /^\d*$/)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
          <div className="flex space-x-2">
            <Input 
              id="cellphoneNumber" 
              name="numero_telefono"
              placeholder="Ingrese el número de teléfono" 
              onChange={(e) => handleInputChange(e, /^\d*$/)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">Especialidad</label>
          <select 
            id="specialty" 
            name="especialidad"
            aria-describedby="customer-error"
            defaultValue=""
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="" disabled>
              Seleccione una especialidad
            </option>
            {specialties.map(especialidad => (
              <option key={especialidad.id} value={especialidad.id}>
                {especialidad.nombre}
              </option>
            ))}
          </select>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.specialty &&
              state.errors.specialty.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="streetName" className="block text-sm font-medium text-gray-700">Calle</label>
          <Input 
            id="streetName" 
            name="calle"
            placeholder="Ingrese el nombre de la calle" 
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="streetNumber" className="block text-sm font-medium text-gray-700">Número</label>
          <Input 
            id="streetNumber" 
            name="numero"
            placeholder="Ingrese el número de la calle" 
            onChange={(e) => handleInputChange(e, /^\d*$/)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Código Postal</label>
          <Input 
            id="postalCode" 
            name="codigo_postal"
            placeholder="Ingrese el código postal" 
            onChange={(e) => handleInputChange(e, /^\d*$/)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
          <Input 
            id="city" 
            name="ciudad"
            placeholder="Ingrese la ciudad" 
            onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">Provincia</label>
          <Input 
            id="state" 
            name="provincia"
            placeholder="Ingrese la provincia" 
            onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
          <Input 
            id="email" 
            name="correo_electronico"
            type="email" 
            placeholder="Ingrese el correo electrónico" 
            aria-describedby="customer-error"
            required
          />
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            id="additionalInfo"
            name="descripcion"
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Ingrese información adicional"
          ></textarea>
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <Button type="submit" className="flex-1 bg-primario">
          Crear Doctor
        </Button>
        <Button asChild className="flex-1 bg-primario">
          <Link href="/search/doctor">
            Cancel
          </Link>
        </Button>
      </div>
    </form>
  )
}