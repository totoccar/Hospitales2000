"use client";
import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { getFechasTurnosByMedicoId, getMedicoIdByDNI, getTurnosByMedicoId } from "@/src/lib/calendarActions";
import Link from "next/link";
import { CircleX, Pencil } from "lucide-react";
import { isWeekend } from "date-fns";
import { getDni } from "../../lib/actions";
import { ModifyAppointment } from "@/src/ui/Buttons";
import { cancelAppointmentAsDoctor } from "@/src/lib/cancelAppointment";
import { Button } from "@/components/ui/button";


export default function MedCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [turnos, setTurnos] = useState<any[]>([]);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [medicoId, setMedicoId] = useState<string | null>(null);



  useEffect(() => {
    const fetchMedicoData = async () => {
      setLoading(true);
      const fetchInitialTurnos = async () => {
        await fetchDoctorTurns(date);
      };

      fetchInitialTurnos();
      try {
        const dni = await getDni();
        const id_medico = await getMedicoIdByDNI(dni);

        console.log("Fetching fechas for medicoId:", id_medico);
        const turnos = await getFechasTurnosByMedicoId(id_medico);
        setAvailableDates(turnos);
      } catch (error) {
        console.error("Error al cargar las fechas:", error);
        setError("Error al cargar las fechas.");
      } finally {
        setLoading(false);
      }
    };


    fetchMedicoData();

  }, [date]);

  const fetchDoctorTurns = async (selectedDate: Date | undefined) => {
    if (!selectedDate) return; // Verifica que la fecha no sea undefined
    setLoading(true);

    try {
      const dni = await getDni();
      const id_medico = await getMedicoIdByDNI(dni);
      console.log("Fetching turnos for medicoId:", id_medico, " and date:", selectedDate);
      const turnos = await getTurnosByMedicoId(id_medico, selectedDate);
      setTurnos(turnos); // Actualizar el estado de turnos
      console.log("Turnos del médico obtenidos:", turnos);
    } catch (error) {
      console.error("Error al cargar los turnos:", error);
      setError("Error al cargar los turnos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MaxWidthWrapper>
      <div className="mt-10 bg-fondo w-full rounded-xl shadow border m-3 p-6">
        <h2 className="text-xl font-bold mb-2">Seleccione el día que quiera visualizar</h2>
        <h3 className="text-md mb-4">Podrá ver los turnos disponibles para el día seleccionado</h3>

        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                setDate(selectedDate);
                if (selectedDate) fetchDoctorTurns(selectedDate);
              }}
              className="rounded-xl shadow border bg-white"
              disabled={(date) => {
                const currentDate = new Date();
                const normalizedDate = new Date(date.toISOString().split("T")[0]);

                return (
                  isWeekend(normalizedDate) ||
                  normalizedDate < new Date(currentDate.toISOString().split("T")[0]) ||
                  !availableDates.some(
                    (d) => new Date(d.toISOString().split("T")[0]).getTime() === normalizedDate.getTime()
                  )
                );
              }}
              required
            />
          </div>
          <div className="bg-white text-center w-full rounded-xl shadow-md m-3 p-3 text-gray-500 flex-1">
            <h1 className="text-xl m-2 font-bold">Citas</h1>
            {loading ? (
              <p>Cargando turnos...</p>
            ) : (
              <>
                 {turnos.length > 0 ? (
                  <div className="space-y-4 overflow-auto max-h-[400px]">
                    {turnos.map((turno, index) => (
                      <div key={index} className="p-4 border rounded-lg shadow-md bg-white flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-lg">{`Turno ${index + 1}`}</h3>
                          <p className="text-gray-700">
                          <strong>Fecha y Hora:</strong> {new Date(new Date(turno.fecha_hora).getTime() + 3 * 60 * 60 * 1000).toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', hour12: false })}<br />
                            <strong>Paciente:</strong> {turno.paciente?.usuario ? `${turno.paciente.usuario.nombre} ${turno.paciente.usuario.apellido}` : 'Desconocido'}<br />
                            <strong>Obra Social:</strong> {turno.paciente?.obra_social.nombre ? `${turno.paciente.obra_social.nombre}` : 'Desconocido'}<br />
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <ModifyAppointment appointment_id={turno.id}/>
                            <Button onClick={async () => {
                              await cancelAppointmentAsDoctor(turno.id);
                              alert("Cita eliminada exitosamente");
                            }} className="rounded-md border text-white p-2 bg-red-500 hover:bg-red-400">
                            <CircleX className="w-5" />
                            </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500">No hay turnos disponibles.</p>
                )}
              </>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
