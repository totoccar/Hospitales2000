"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Label } from "@/src/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"
import { getEspecialidadById, getUsuarioById } from "@/src/lib/getMedicoById"
import { get } from "http"


export async function AppointmentBooking({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeSlot, setTimeSlot] = useState<string | undefined>()
  const [isFirstTime, setIsFirstTime] = useState<string | undefined>()
  const name = await getUsuarioById(params.id);

  // Mock function to get available time slots
  const getAvailableTimeSlots = (date: Date) => {
    // This should be replaced with actual logic to fetch available time slots
    return ["8:00", "9:00", "10:00", "11:00", "14:00", "15:00", "16:00"]
  }

  const availableTimeSlots = date ? getAvailableTimeSlots(date) : []

  return (
    <MaxWidthWrapper>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Busca el horario y el día que desees</CardTitle>
          <p className="text-sm">
            Estás viendo los días disponibles del profesional: {name.nombre} {name.apellido}
          </p>
          <p className="text-sm">
            Especialidad: {name.medico ? getEspecialidadById(name.medico.especialidad_id) : "N/A"}
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Label className="mb-2 block">Selecciona una fecha</Label>
              <Calendar 
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="time-slot" className="mb-2 block">Horario Disponible</Label>
                <Select value={timeSlot} onValueChange={setTimeSlot}>
                  <SelectTrigger id="time-slot">
                    <SelectValue placeholder="Seleccionar horario" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2 block">¿Es la primera vez que se atiende?</Label>
                <RadioGroup value={isFirstTime} onValueChange={setIsFirstTime}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-primario">Reservar cita</Button>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  )
}

export default AppointmentBooking