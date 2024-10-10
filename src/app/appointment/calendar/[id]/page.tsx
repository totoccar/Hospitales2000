"use client";
import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";

import { isWeekend } from "date-fns/isWeekend";
import { getTurnosByMedicoId } from "@/src/lib/calendarActions";

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
    <MaxWidthWrapper className="border-gray-500">
      <h2 className="text-xl font-bold">Selecciona el día y el horario que desees</h2>
      <h3 className="text-md">Puedes agregar una aclaración para tu médico</h3>

      <div className="md:flex flex-row gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate);
            if (selectedDate) fetchDoctorTurns(selectedDate);
          }}
          className="rounded-xl shadow border m-3 bg-white"
          disabled={(date) => isWeekend(date) || date < new Date()}
          required
        />

        <div className="bg-white text-center w-full rounded-xl shadow m-3 p-3 text-gray-500">
          <h1 className="text-xl">Resumen de tu cita</h1>
          {turnos.length > 0 ? (
            <div>
              {turnos.map((turno, index) => (
                <div key={index}>{`Turno ${index + 1}: ${JSON.stringify(turno)}`}</div>
              ))}
            </div>
          ) : (
            <p>No hay turnos disponibles.</p>
          )}
        </div>
      </div>

      <div className="w-full md:w-auto lg:w-auto bg-white m-3 p-3 rounded-xl shadow">
        <Label className="mb-2 block text-center">Descripción</Label>
        <textarea
          id="description"
          className="w-full p-2 border rounded-md resize-none"
          rows={4}
          placeholder="Añadir una descripción o pequeña aclaración"
        />
      </div>
      <Button type="submit" className="w-full bg-primario">
        Solicitar cita
      </Button>
    </MaxWidthWrapper>
  );
}
