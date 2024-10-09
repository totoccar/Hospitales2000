"use client";

import MaxWidthWrapper from "@/src/ui/MaxWidthWrapper";
import AppointmentCalendar from "../../ui/AppointmentCalendar";
import { getTurnosByMedicoId } from "@/src/lib/getMedicoById";

export default async  function SecCalendar({ params }: { params: { id: string } }) {
    const turnos = await getTurnosByMedicoId(params.id, new Date()); //como hacemos ese fetch todos los turnos? solo dia seleccionado
  return (
    <MaxWidthWrapper>
      <div className="m-6 bg-fondo rounded-md p-6 mt-5">
        <h2 className="text-xl font-bold mb-2">Selecciona el dia y el horario que desees</h2>
        <div className="md:flex flex-row gap-4">
          <AppointmentCalendar />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
