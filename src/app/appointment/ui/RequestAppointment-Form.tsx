"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import {
  AppointmentState,
  createAppointment,
  getDoctorIntervalsForIdAndDay,
} from "@/src/lib/requestAppointment";
import { useFormState } from "react-dom";
import { Calendar } from "@/components/ui/calendar";
import { isWeekend } from "date-fns";
import { IntervaloAtencion } from "@prisma/client";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { getDni } from "../../lib/actions";
import { getUsuarioById } from "@/src/lib/getMedicoById";

interface RequestAppointmentFormProps {
  doctor_id: string;
  patient_id: string;
}

export default function RequestAppointmentForm({
  doctor_id,
  patient_id,
}: RequestAppointmentFormProps) {
  const initialState: AppointmentState = { message: null, errors: {} };
  const [state, formAction] = useFormState(createAppointment, initialState);

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState<IntervaloAtencion[]>([]);
  const [isFirstTime, setIsFirstTime] = useState<string | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [fecha_hora, setFecha_hora] = useState<string | null>(null);

  const fetchDoctorIntervals = async (date: Date) => {
    try {
      const intervals = await getDoctorIntervalsForIdAndDay(doctor_id, date);
      setAvailableTimeSlots(intervals);
    } catch (error) {
      console.error("Error fetching doctor intervals:", error);
    }
  };

  const computeFechaHora = (selectedDate: Date | undefined, timeString: string | undefined) => {
    if (selectedDate && timeString) {
      const time = new Date(timeString); 
      const combinedDateTime = new Date(selectedDate); 

      combinedDateTime.setHours(time.getHours());
      combinedDateTime.setMinutes(time.getMinutes());

      setFecha_hora(combinedDateTime.toISOString());
    }
  };

  return (
    <MaxWidthWrapper>
      <form action={formAction} className="m-6 bg-fondo rounded-md p-6 mt-5">
        <h2 className="text-xl font-bold">Selecciona el día y el horario que desees</h2>
        <h3 className="text-md">Puedes agregar una acalaración para tu médico</h3>

        <div className="md:flex flex-row gap-4 ">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              if (selectedDate) fetchDoctorIntervals(selectedDate);
              computeFechaHora(selectedDate, selectedTime); 
            }}
            className="rounded-xl shadow border m-3 bg-white"
            disabled={(date) => isWeekend(date) || date < new Date()}
            required
          />

          <div className="w-full rounded-xl shadow bg-white m-3 p-3">
            <Label className="mb-2 block text-center">Selecciona un horario</Label>
            <select
              id="time"
              name="Horario"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={(e) => {
                setSelectedTime(e.target.value); 
                computeFechaHora(date, e.target.value); 
              }}
            >
              <option value="" disabled selected>
                Selecciona un horario
              </option>
              {availableTimeSlots.map((slot) => (
                <option key={slot.horaInicio.toISOString()} value={slot.horaInicio.toISOString()}>
                  {slot.horaInicio.toLocaleTimeString("es-ES")}
                </option>
              ))}
            </select>
            <div className="mt-3 text-center items-center justify-center">
              <Label>¿Es la primera vez que se atiende?</Label>
              <RadioGroup value={isFirstTime} onValueChange={setIsFirstTime} required>
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
            <p>Hora: {selectedTime ? new Date(selectedTime).toLocaleTimeString("es-ES") : "No seleccionada"}</p>
            <p>Fecha y Hora Completa: {fecha_hora ? new Date(fecha_hora).toLocaleString("es-ES") : "No seleccionada"}</p>
          </div>
        </div>

        <div className="w-full md:w-auto lg:w-auto bg-white m-3 p-3 rounded-xl shadow">
          <Label className="mb-2 block text-center">Descripción</Label>
          <textarea
            id="description"
            className="w-full p-2 border rounded-md resize-none"
            rows={4}
            placeholder="Añadir una descripción o pequeña acalaración"
          />
        </div>
        <Button type="submit" className="w-full bg-primario">
          Solicitar cita
        </Button>
      </form>
    </MaxWidthWrapper>
  );
}