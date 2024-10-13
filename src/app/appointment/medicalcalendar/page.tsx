"use client";
import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { isWeekend } from "date-fns";
import { getTurnosByMedicoId } from "@/src/lib/calendarActions";
import { getMedicoByDNI, getUserNameById} from "@/src/lib/getUsuarioById";
import { getDni } from "../../lib/actions";


export default  function MedCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [turnos, setTurnos] = useState<any[]>([]);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);

 
  const fetchDoctorTurns = async (selectedDate: Date | undefined) => {
    if (!selectedDate) return; 
    setLoading(true);
    const dni = await getDni();
    const medico = await getMedicoByDNI(dni); 
    const medico_id = medico.id
    try {
      console.log("Fetching turnos for medicoId:", medico_id, " and date:", selectedDate);
      const fetchedTurnos = await getTurnosByMedicoId(medico_id, selectedDate);
      const turnosWithPatients = await Promise.all(
        fetchedTurnos.map(async (turno) => {
          const patientName = await getUserNameById(turno.paciente_id);
          return { ...turno, nombre: patientName };
        })
      );

      setTurnos(turnosWithPatients); // Actualizar el estado de turnos
      console.log("Turnos con nombres de pacientes:", turnosWithPatients);
    } catch (error) {
      console.error("Error al cargar los turnos:", error);
      setError("Error al cargar los turnos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MaxWidthWrapper>
      <div className="mt-10 bg-white text-center w-full rounded-xl shadow border m-3 p-6">
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
                const currentDate = new Date(); // Fecha actual
                const normalizedDate = new Date(date.toISOString().split('T')[0]); // Normalizar la fecha a UTC sin la hora

                return (
                  isWeekend(normalizedDate) ||
                  normalizedDate < new Date(currentDate.toISOString().split('T')[0]) || // Comparar fechas normalizadas a UTC
                  !availableDates.some(d => new Date(d.toISOString().split('T')[0]).getTime() === normalizedDate.getTime())
                );
              }}
              required
            />
          </div>
          <div className="bg-white text-center w-full rounded-xl shadow m-3 p-3 text-gray-500 flex-1">
            <h1 className="text-xl m-2 font-bold">Turnos</h1>
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
                            <strong>Fecha y Hora:</strong> {new Date(turno.fecha_hora).toLocaleString()}<br />
                            <strong>Paciente:</strong> {turno.paciente?.usuario ? `${turno.paciente.usuario.nombre} ${turno.paciente.usuario.apellido}` : 'Desconocido'}<br />
                            <strong>Obra Social:</strong> {turno.paciente?.obra_social.nombre ? `${turno.paciente.obra_social.nombre}` : 'Desconocido'}<br />
                          </p>
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