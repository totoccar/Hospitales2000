"use client";
import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { isWeekend } from "date-fns/isWeekend";
import { getTurnosByMedicoId } from "@/src/lib/calendarActions";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { CircleX, Pencil } from "lucide-react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function SecCalendar({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [turnos, setTurnos] = useState<any[]>([]);

  // Función para hacer el fetch de turnos del médico
  const fetchDoctorTurns = async (selectedDate: Date | undefined) => {
    if (!selectedDate) return; // Verifica que la fecha no sea undefined
    setLoading(true);

    try {
      console.log("Fetching turnos for medicoId:", params.id, " and date:", selectedDate);
      const turnos = await getTurnosByMedicoId(params.id, selectedDate);
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
      <div className="mt-10 bg-white text-center w-full rounded-xl shadow border m-3 p-6">
        <h2 className="text-xl font-bold mb-2">Seleccione el día que quiera visualizar</h2>
        <h3 className="text-md mb-4">Podrá ver los turnos disponibles para el día seleccionado</h3>

        <div className="flex flex-col md:flex-row gap-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              if (selectedDate) fetchDoctorTurns(selectedDate);
            }}
            className="rounded-xl shadow border m-3 bg-white flex-1"
            disabled={(date) => isWeekend(date) || date < new Date()}
            required
          />

          <div className="bg-white text-center w-full rounded-xl shadow m-3 p-3 text-gray-500 flex-1">
            <h1 className="text-xl m-2">Citas</h1>
            {loading ? (
              <p>Cargando turnos...</p>
            ) : (
              <>
                {turnos.length > 0 ? (
                  <div className="space-y-4">
                    {turnos.map((turno, index) => (
                      <div key={index} className="p-4 border rounded-lg shadow-md bg-white flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-lg">{`Turno ${index + 1}`}</h3>
                          <p className="text-gray-700">
                            <strong>Fecha y Hora:</strong> {new Date(turno.fecha_hora).toLocaleString()}<br />
                            <strong>Paciente:</strong> {turno.paciente?.usuario ? `${turno.paciente.usuario.nombre} ${turno.paciente.usuario.apellido}` : 'Desconocido'}<br />
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Link
                            href={'/'}
                            className="rounded-md border p-2 hover:bg-gray-100"
                          >
                            <Pencil className="w-5" />
                          </Link>
                          <Link
                            href={'/'}
                            className="rounded-md border text-white p-2 bg-red-500 hover:bg-red-400"
                          >
                            <CircleX className="w-5" />
                          </Link>

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
