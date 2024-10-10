"use client";
import { deleteCitaById } from "@/src/lib/searchappointments";
import { Button } from "@react-email/components";
import { SquareX } from "lucide-react";

export function DeleteAppointment({
  citaId
}: {
  citaId: string;
}) {
  const handleDelete = async () => {
    try {
      console.log("INTENTANDO ELIMINAR CITA");
      await deleteCitaById(citaId); // Llama a la función de eliminación
      // Refresca o actualiza el contenido según sea necesario
      window.location.reload(); // Actualiza la página para reflejar los cambios
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
    }
  };

  return (
    <Button
      className="rounded-md border p-2 hover:bg-red-100"
      onClick={handleDelete} // Llama a la función de eliminación al hacer clic
    >
      <SquareX style={{ color: "#e85454", width: "32px", height: "32px" }} />
    </Button>
  );
}
