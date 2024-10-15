'use client';

import { useFormState } from 'react-dom';
import { Button } from "@/src/components/ui/button";
import { modifyPatient, PatientState } from "@/src/lib/modifyUser";
import { Input } from "@/src/components/ui/input";

export default function PatientEditForm({ usuario, ubicacionUsuario, obrasSociales }: { 
    usuario: any; 
    ubicacionUsuario: any; 
    obrasSociales: Array<{ id: string; nombre: string }>; 
  }) {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, pattern: RegExp) => {
      const { value } = e.target
      if (pattern.test(value) || value === '') {
          e.target.value = value
      } else {
          e.target.value = value.slice(0, -1)
      }
  }
  
  const initialState: PatientState = { message: null, errors: {} };
  const [state, formAction] = useFormState(modifyPatient, initialState);

  return (
    <form action={formAction} className="space-y-8 max-w-3xl rounded-md xs:p-1 p-2 bg-fondo md:p-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
            <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
            <Input 
                id="documentType"
                name="tipo_documento" 
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue={usuario.tipo_documento}
                readOnly
            />
            </div>
            
            <div className="space-y-2">
            <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700">Número de Documento</label>
            <Input 
                id="documentNumber"
                name="numero_documento" 
                placeholder="Ingrese el número de documento" 
                onChange={(e) => handleInputChange(e, /^\d*$/)}
                defaultValue={usuario.numero_documento}
                readOnly
            />
            </div>

            <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre del Paciente</label>
            <Input 
                id="name"
                name="nombre" 
                placeholder="Ingrese el nombre del paciente" 
                onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
                defaultValue={usuario.nombre}
                required
            />
            </div>

            <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido del Paciente</label>
            <Input 
                id="lastName" 
                name="apellido"
                placeholder="Ingrese el apellido del paciente" 
                onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
                defaultValue={usuario.apellido}
                required
            />
            </div>

            <div className="space-y-2">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                <Input 
                    id="dateOfBirth" 
                    name="fecha_nacimiento"
                    type="date"
                    // Conversión manual de la fecha para evitar problemas de zona horaria
                    defaultValue={usuario.paciente?.fecha_nacimiento 
                        ? new Date(usuario.paciente.fecha_nacimiento).toLocaleDateString('en-CA')  // 'en-CA' formato ISO sin afectar zona horaria
                        : ""
                    }
                    required
                />
            </div>


            <div className="space-y-2">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
            <div className="flex space-x-2">
                <Input 
                id="phoneNumber"
                name="numero_telefono" 
                placeholder="Ingrese el número de teléfono" 
                onChange={(e) => handleInputChange(e, /^\d*$/)}
                defaultValue={usuario.paciente?.numero_telefono || ""}
                required
                />
            </div>
            </div>

            <div className="space-y-2">
            <label htmlFor="placeOfBirth" className="block text-sm font-medium text-gray-700">Lugar de Nacimiento</label>
            <Input 
                id="placeOfBirth" 
                name="lugar_nacimiento"
                placeholder="Ingrese el lugar de nacimiento" 
                onChange={(e) => handleInputChange(e, /^[A-Za-z\s]*$/)}
                defaultValue={usuario.paciente?.lugar_nacimiento || ""}
                required
            />
            </div>

            <div className="space-y-2">
            <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700">Contacto de Emergencia</label>
            <div className="flex space-x-2">
                <Input 
                id="emergencyContactNumber" 
                name="contacto_emergencia"
                placeholder="Ingrese el número de teléfono" 
                onChange={(e) => handleInputChange(e, /^\d*$/)}
                defaultValue={usuario.paciente?.contacto_emergencia || ""}
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
                defaultValue={ubicacionUsuario?.calle || ""} 
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
                defaultValue={ubicacionUsuario?.numero || ""}
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
                defaultValue={ubicacionUsuario?.codigo_postal || ""}
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
                defaultValue={ubicacionUsuario?.ciudad || ""}
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
                defaultValue={ubicacionUsuario?.provincia || ""}
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
                defaultValue={usuario.correo_electronico}
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
            <label htmlFor="socialWork" className="block text-sm font-medium text-gray-700">Obra Social</label>
            <select 
                id="socialWork" 
                name="tipo_obra_social"
                defaultValue={usuario.paciente?.obra_social_id || ""}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                {obrasSociales.map(obra => (
                <option key={obra.id} value={obra.id}>
                    {obra.nombre}
                </option>
                ))}
            </select>
            </div>
        </div>

        <div className="flex gap-4 w-full">
            <Button type="submit" className="flex-1  bg-primario">
            Modificar
            </Button>
            <Button asChild className="flex-1 bg-primario">
            </Button>
        </div>
        </form>
    );
    }