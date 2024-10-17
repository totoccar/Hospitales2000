'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Especialidad, TipoDocumentoEnum } from '@prisma/client'
import { RadioGroup, RadioGroupItem } from '@/src/components/ui/radio-group'
import { Label } from '@/src/components/ui/label'
import { Input } from '@/src/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select'
import { Button } from '@/src/components/ui/button'
import { obtenerIniciales } from '@/src/lib/utils'
import { RotateCcw } from 'lucide-react'

export default function AppointmentSearch({especialidades}: {especialidades: Especialidad[]}) {
  const [searchType, setSearchType] = useState('dni')
  const [dni, setDni] = useState('')
  const [apellido, setApellido] = useState('')
  const [especialidad, setEspecialidad] = useState('')

  const [tipoDocumento, setTipoDocumento] = useState<TipoDocumentoEnum>(TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const queryParams = new URLSearchParams()

    if (searchType === 'dni' && dni) {
      queryParams.append('dni', dni)
      queryParams.append('tipoDocumento', tipoDocumento)
    } else if (searchType === 'apellido' && apellido) {
      queryParams.append('apellido', apellido)
    } else if (searchType === 'especialidad' && especialidad) {
      queryParams.append('especialidad', especialidad)
    }

    router.push(`/appointment/request?${queryParams.toString()}`)
  }

  return (
    <div className="w-full p-6 rounded-lg bg-gray-50">
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 space-y-2">
        <div className="flex items-center space-x-4 mb-2">
          <RadioGroup defaultValue="dni" onValueChange={setSearchType} className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="apellido" id="apellido" />
            <Label htmlFor="apellido">Apellido</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="especialidad" id="especialidad" />
            <Label htmlFor="especialidad">Especialidad</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dni" id="dni" />
            <Label htmlFor="dni">DNI</Label>
          </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
          <Label htmlFor="apellido-input" className="sr-only">Apellido</Label>
          <Input
            id="apellido-input"
            placeholder="Apellido"
            disabled={searchType === 'dni' || searchType === 'especialidad'}
            value={apellido}
            onChange={(e) => {
            const value = e.target.value;
            if (/^[a-zA-Z\s]{0,20}$/.test(value)) {
              setApellido(value);
            }
            }}
          />
          </div>
            <div className="flex-1">
            <Label htmlFor="especialidad" className="sr-only">Especialidad</Label>
            <Select disabled={searchType === 'apellido' || searchType === 'dni'} onValueChange={(value) => setEspecialidad(value)}>
            <SelectTrigger id="esp</SelectTrigger>ecialidad">
              <SelectValue placeholder="Especialidad"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              {especialidades.map((especialidad) => (
              <SelectItem key={especialidad.id} value={especialidad.id}>{especialidad.nombre}</SelectItem>))}
            </SelectContent>
            </Select>
            </div>
          
          <div className="flex-1">
          <Label htmlFor="dni-input" className="sr-only">DNI</Label>
          <Input
            id="dni-input"
            placeholder="DNI"
            disabled={searchType === 'apellido' || searchType === 'especialidad'}
            value={dni}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,9}$/.test(value)) {
                setDni(value);
              }
              }}
          />
          </div>
          <div className="w-full md:w-48">
          <Label htmlFor="document-type" className="sr-only">Tipo de documento</Label>
          <Select disabled={searchType === 'apellido' || searchType === 'especialidad'} onValueChange={(value) => setTipoDocumento(value as TipoDocumentoEnum)} defaultValue={TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD}>
            <SelectTrigger id="document-type">
            <SelectValue placeholder="Tipo de documento" />
            </SelectTrigger>
            <SelectContent>
            {Object.values(TipoDocumentoEnum).map((tipo) => (
              <SelectItem key={tipo} value={tipo}>{obtenerIniciales(tipo)}</SelectItem>
            ))}
            </SelectContent>
          </Select>
          </div>
        </div>
        </div>
        <Button type="submit" className='bg-primario md:w-20 w-48' size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <span className="sr-only">Buscar</span>
        </Button>
        <Button className='bg-primario md:w-20 w-48' 
          onClick={() => {
            setSearchType('dni');
            setDni('');
            setApellido('');
            setEspecialidad('');
            setTipoDocumento(TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD);
            router.push('/appointment/request');
          }}>
          <RotateCcw className="w-6 h-6" />
        </Button>
      </div>
      </form>
    </div>
  )
}
