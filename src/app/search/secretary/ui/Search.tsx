'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { TipoDocumentoEnum } from '@/lib/definitions'

export default function SearchForm() {
  const [searchType, setSearchType] = useState('dni')
  const [dni, setDni] = useState('')
  const [apellido, setApellido] = useState('')

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
    }

    router.push(`/search/patient?${queryParams.toString()}`)
  }

  return (
    <div className="w-full p-6 rounded-lg bg-gray-50 ">
      <form onSubmit={handleSubmit}>
        <div className="flex items-end space-x-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center space-x-4 mb-2">
              <RadioGroup defaultValue="dni" onValueChange={setSearchType} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dni" id="dni" />
                  <Label htmlFor="dni">DNI</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="apellido" id="apellido" />
                  <Label htmlFor="apellido">Apellido</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex space-x-4">
            <div className="flex-1">
                <Label htmlFor="apellido-input" className="sr-only">Apellido</Label>
                <Input
                  id="apellido-input"
                  placeholder="Apellido"
                  disabled={searchType === 'dni'}
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <Label htmlFor="dni-input" className="sr-only">DNI</Label>
                <Input
                  id="dni-input"
                  placeholder="DNI"
                  disabled={searchType === 'apellido'}
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
              </div>
              {(
            <div className="w-48">
              <Label htmlFor="document-type" className="sr-only">Tipo de documento</Label>
              <Select disabled={searchType === 'apellido'} onValueChange={(value) => setTipoDocumento(value as TipoDocumentoEnum)}>
                <SelectTrigger id="document-type">
                  <SelectValue placeholder="Tipo de documento" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(TipoDocumentoEnum).map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>{tipo}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
            </div>
          </div>

          <Button type="submit" className='bg-primario' size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <span className="sr-only">Buscar</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
