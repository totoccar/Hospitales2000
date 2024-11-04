"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import {
  AppointmentState,
  computeAvailableTimeslots,
  modifyAppointment,
  ModifyAppointmentState,
} from "@/src/lib/requestAppointment";
import { useFormState } from "react-dom";
import { Calendar } from "@/components/ui/calendar";
import { getMonth, getYear, isWeekend, set } from "date-fns";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { getUTCHoursAndMinutes } from "@/src/lib/utils";
import { Cita } from "@prisma/client";

interface ModifyAppointmentProps {
  medico_id: string;
  appointment: Cita;
  appointment_id: string;
  duracion_cita?: number;
}

export default function ModifyRequestAppointmentForm({
  medico_id,
  appointment,
  appointment_id,
  duracion_cita
}: ModifyAppointmentProps) {
  const initialState: ModifyAppointmentState = { message: null, errors: {} };
  const [state, formAction] = useFormState(modifyAppointment, initialState);
  
  const [date, setDate] = useState<Date | undefined>(appointment.fecha_hora ? new Date(appointment.fecha_hora) : undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(appointment.fecha_hora ? appointment.fecha_hora.toString() : undefined);
  const [fecha_hora, setFecha_hora] = useState<string | null>(appointment.fecha_hora ? appointment.fecha_hora.toString() : null);
  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState<number>(getMonth(new Date(appointment.fecha_hora)));
  const [currentYear, setCurrentYear] = useState<number>(getYear(new Date(appointment.fecha_hora)));
  const [intervalosPosibles, setIntervalosPosibles] = useState<{ start: Date; end: Date }[]>([]);

  const [loading, setLoading] = useState(false);

  const fetchDoctorIntervals = async (date: Date) => {
    setLoading(true);
    try {
      const intervalos = await computeAvailableTimeslots(medico_id, date, duracion_cita ?? 30);
      setIntervalosPosibles(intervalos);
    } catch (error) {
      console.error("Error fetching doctor intervals:", error);
    } finally {
      setLoading(false);
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

  useEffect(() => {
    const fetchUnavailableDates = async () => {};
    fetchUnavailableDates();
  }, [medico_id, currentMonth, currentYear]);

  const isDateDisabled = (date: Date) => {
    if (isWeekend(date)) return true;
    if (date < new Date()) return true;
    if (unavailableDates.some(d => d.toDateString() === date.toDateString())) return true;
    return false;
  };

  return (
    <MaxWidthWrapper>
      <form action={formAction} className="md:m-6 lg:m-6 m-3 p-4 bg-fondo rounded-md md:p-6 lg:p-6 pt-3 mt-5">
        <h2 className="text-xl font-bold">Cambia el el día y/o el horario que desees</h2>
        <h4 className="text-md text-gray-500">Siempre y cuando sea posible por el profesional</h4>

        <div className="md:flex flex-row gap-4 ">
        <Calendar
          mode="single"
          selected={date}
          month={new Date(appointment.fecha_hora)}
          onSelect={(selectedDate) => {
            setDate(selectedDate);
            if (selectedDate) {
              fetchDoctorIntervals(selectedDate);
            }
            computeFechaHora(selectedDate, selectedTime);
          }}
          className="rounded-xl shadow border m-3 bg-white"
          disabled={isDateDisabled}
          onMonthChange={(date: Date) => {
            setCurrentMonth(getMonth(date) + 1);
            setCurrentYear(getYear(date));
          }}
          required
        />

          <div className="md:w-full rounded-xl shadow bg-white m-3 p-3">
            <Label className="mb-2 block text-center">Selecciona un horario</Label>
            {loading ? (
              <div className="text-center">Cargando horarios...</div>
            ) : intervalosPosibles.length === 0 ? (
              <div className="text-center text-red-500">
              Selecciona un dia para ver los horarios disponibles
              </div>
            ) : (
              <select
              id="time"
              name="fecha_hora"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={selectedTime || ""}
              onChange={(e) => {
                setSelectedTime(e.target.value); 
                computeFechaHora(date, e.target.value);
              }}
              >
              <option value="" disabled>
              Selecciona un horario
              </option>
              {intervalosPosibles.map((intervalo) => (
              <option
              key={intervalo.start.toISOString()}
              value={intervalo.start.toISOString()}
              >
              {getUTCHoursAndMinutes(intervalo.start)}
              </option>
              ))}
              </select>
            )}
            </div>

          <div className="bg-white text-center  md:w-full rounded-xl shadow m-3 p-3 text-gray-500">
            <h1 className="text-xl ">Resumen de tu cita</h1>
            <p>Fecha: {date?.toLocaleDateString("es-ES")}</p>
            <p>
              Hora:{" "}
              {selectedTime && date && fecha_hora ? formatTimeToHs(fecha_hora) : "No seleccionada"}
            </p>
            <p>La duracion del turno es de: {duracion_cita} minutos</p>
            
          </div>
        </div>

        <input type="hidden" name="appointment_id" required value={appointment_id} />


        <div className=" md:w-full  lg:w-auto bg-white m-3 p-3 rounded-xl shadow">
          <Label className="mb-2 block text-center">Descripción</Label>
          <p  className="w-full p-2 border rounded-md resize-none h-36"> {appointment.description}</p>
           
            
          
        </div>
        <div className="flex justify-center">
          <Button type="submit" disabled={intervalosPosibles.length === 0} className="items-center justify-center md:w-full bg-primario">
            Modificar cita
          </Button>
        </div>
      </form>
    </MaxWidthWrapper>
  );
}

function formatTimeToHs(datetime: string): string {
  const date = new Date(datetime);
  date.setHours(date.getHours() + 3);
  return date.toLocaleTimeString("es-AR", { hour: '2-digit', minute: '2-digit', hour12: false });
}