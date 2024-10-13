"use client";

import { Button } from "@/src/components/ui/button";
import { deleteDoctor } from "@/src/lib/deleteUsers";

interface ClientButtonsProps {
  id: string;
}

const ClientButtons: React.FC<ClientButtonsProps> = ({ id }) => {
  return (
    <div className="flex justify-end space-x-4 mt-6">
      <Button disabled={true} variant="outline">Editar</Button>
      <Button onClick={() => deleteDoctor(id)}>Eliminar</Button>
    </div>
  );
};

export default ClientButtons;