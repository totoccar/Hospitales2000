'use client';

import { useFormState } from 'react-dom';
import Link from 'next/link';
import { createSecretary, SecretaryState } from '@/src/lib/createUsers';
import { Input } from '@/src/components/ui/input';
import { Button } from '@/src/components/ui/button';

export default function CreateSecretaryForm() {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, pattern: RegExp) => {
    const { value } = e.target
    if (pattern.test(value) || value === '') {
      e.target.value = value
    } else {
      e.target.value = value.slice(0, -1)
    }
  }

  const initialState: SecretaryState = { message: null, errors: {} };
  const [state, formAction] = useFormState(createSecretary, initialState);

  return (
    <form action={formAction} className="space-y-8 max-w-2xl mx-auto">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Crear Secretaria</h2>
        <p className="text-gray-500">Ingrese la información de la secretaria.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
          <select 
            id="documentType" 
            name="tipo_documento"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
            <option value="DOCUMENTO_NACIONAL_IDENTIDAD">Documento Nacional de Indentidad</option>
            <option value="CEDULA_IDENTIDAD">Cédula de Identidad</option>
            <option value="LIBRETA_CIVICA">Libreta Cívica</option>
            <option value="LIBRETA_ENROLAMIENTO">Libreta de Enrolamiento</option>
            <option value="PASAPORTE">Pasaporte</option>
          </select>
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre de la Secretaria</label>
          <Input 
            id="name"
            name="nombre" 
            placeholder="Ingrese el nombre de la secretaria" 
            onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido de la Secretaria</label>
          <Input 
            id="lastName" 
            name="apellido"
            placeholder="Ingrese el apellido de la secretaria" 
            onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
          <div className="flex space-x-2">
            {/*<Input 
              id="cellphoneCountryCode" 
              placeholder="+54" className="w-20" 
              onChange={(e) => handleInputChange(e, /^\d*$/)}
              required
            />*/}
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
      </div>

      <div className="flex gap-4 w-full">
        <Button type="submit" className="flex-1">
          Crear Secretaria
        </Button>
        <Button asChild className="flex-1">
          <Link href="/search/secretary">
            Cancel
          </Link>
        </Button>
      </div>
    </form>
  )
}