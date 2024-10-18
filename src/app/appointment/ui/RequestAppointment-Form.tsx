"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
import {
  AppointmentState,
  computeAvailableTimeslots,
  createAppointment,
} from "@/src/lib/requestAppointment";
import { useFormState } from "react-dom";
import { Calendar } from "@/components/ui/calendar";
import { getMonth, getYear, isWeekend, set } from "date-fns";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { getUTCHoursAndMinutes } from "@/src/lib/utils";

interface RequestAppointmentFormProps {
  medico_id: string;
  paciente_id: string;
  duracion_cita?: number;
}

export default function RequestAppointmentForm({
  medico_id,
  paciente_id,
  duracion_cita,
}: RequestAppointmentFormProps) {
  const initialState: AppointmentState = { message: null, errors: {} };
  const [state, formAction] = useFormState(createAppointment, initialState);

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isFirstTime, setIsFirstTime] = useState<string | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [fecha_hora, setFecha_hora] = useState<string | null>(null);
  const [unavailableDates, setUnavailableDates] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth() + 1); // Mes actual
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [intervalosPosibles, setIntervalosPosibles] = useState<{ start: Date; end: Date }[]>([]);

  const [loading, setLoading] = useState(false);

  const fetchDoctorIntervals = async (date: Date) => {
    setLoading(true);
    try {
      console.log("FRAN RATA")
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
    const fetchUnavailableDates = async () => {
      // const dates = await fetchDoctorUnavailableDates(medico_id, currentYear, currentMonth);
      // setUnavailableDates(dates);
    };
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
        <h2 className="text-xl font-bold">Selecciona el día y el horario que desees</h2>
        <h3 className="text-md">Puedes agregar una aclaración para tu médico</h3>

        <div className="md:flex flex-row gap-4 ">
        <Calendar
          mode="single"
          selected={date}
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
              El medico no establecio horarios de atencion para el dia seleccionado
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

            <div className="md:mt-3 text-center items-center justify-center">
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

        <input type="hidden" name="paciente_id" required value={paciente_id} />
        <input type="hidden" name="medico_id" required value={medico_id} />

        <div className=" md:w-full  lg:w-auto bg-white m-3 p-3 rounded-xl shadow">
          <Label className="mb-2 block text-center">Descripción</Label>
          <textarea
            id="description"
            name="description"  
            className="w-full p-2 border rounded-md resize-none"
            rows={4}
            placeholder="Añadir una descripción o pequeña acalaración"
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit" disabled={intervalosPosibles.length === 0} className="items-center justify-center md:w-full bg-primario">
            Solicitar cita
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