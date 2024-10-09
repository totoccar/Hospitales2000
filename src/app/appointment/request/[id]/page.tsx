"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import {
  AppointmentState,
  createAppointment,
} from "@/src/lib/requestAppointment";
import { useFormState } from "react-dom";
import AppointmentCalendar from "../../ui/AppointmentCalendar";

export default function AppointmentBooking({
  params,
}: {
  params: { id: string };
}) {
  const initialState: AppointmentState = { message: null, errors: {} };
  const [state, formAction] = useFormState(createAppointment, initialState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    pattern: RegExp
  ) => {
    const { value } = e.target;
    if (pattern.test(value) || value === "") {
      e.target.value = value;
    } else {
      e.target.value = value.slice(0, -1);
    }
  };

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState<string | undefined>();
  const [isFirstTime, setIsFirstTime] = useState<string | undefined>();

  const getAvailableTimeSlots = (date: Date) => {
    return ["8:00", "9:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
  };

  const availableTimeSlots = date ? getAvailableTimeSlots(date) : [];

  return (
    <MaxWidthWrapper>
      <form action={formAction} className=" m-6  bg-fondo rounded-md p-6 mt-5">
        <h2 className="text-xl font-bold mb-2">Selecciona el dia y el horario que desees</h2>
        <h3 className="text-xs">Puedes agregar una acalaración para tu médico</h3>

          <div className="md:flex flex-row gap-4 ">
            <AppointmentCalendar />
            <div className="w-full rounded-xl shadow bg-white  m-3 p-3 ">
              <Label className="mb-2 block text-center">
                Selecciona un horario
              </Label>
              <Select value={timeSlot} required onValueChange={setTimeSlot}>
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

              <div className="mt-3 text-center items-center justify-center">
                <Label>¿Es la primera vez que se atiende?</Label>
                <RadioGroup
                  value={isFirstTime}
                  onValueChange={setIsFirstTime}
                  required
                >
                  <div className="flex mt-4 items-center space-x-2">
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

            <div className="bg-white text-center w-full rounded-xl shadow m-3 p-3 text-gray-500">
              <h1 className="text-xl ">Resumen de tu cita</h1>
              <p>Fecha: {date?.toLocaleDateString("es-ES")}</p>
              <p>Hora: {timeSlot}</p>
            </div>
          </div>

          <div className="w-full md:w-auto lg:w-auto bg-white m-3 p-3 rounded-xl shadow">
            <Label className="mb-2 block text-center">Descripción</Label>
            <textarea
              id="description"
              className="w-full p-2 border rounded-md resize-none"
              rows={4}
              placeholder="Añadir una descripción o pequeña acalaración"
              onChange={(e) => handleInputChange(e, /^\d*$/)}
            />
          </div>
          <Button type="submit" className="w-full bg-primario">Solicitar cita</Button>
      </form>
    </MaxWidthWrapper>
  );
}
