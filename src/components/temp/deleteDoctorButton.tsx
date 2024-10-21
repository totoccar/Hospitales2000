"use client";

import { Button } from "@/src/components/ui/button";
import { deleteDoctor } from "@/src/lib/deleteUsers";

interface ClientButtonsProps {
  id: string;
  disabled: boolean;
}

const ClientButtons: React.FC<ClientButtonsProps> = ({ id, disabled }: {id: string, disabled: boolean}) => {

  const handleDelete = () => {
    const confirmed = window.confirm("Está a punto de eliminar toda la información relacionada con el médico. ¿Está seguro?");
    if (confirmed) {
      deleteDoctor(id);
    }
  };

  return (
    <div className="flex space-x-4 mt-6">
      <Button className="bg-red-500" disabled={disabled} onClick={handleDelete}>Eliminar</Button>
    </div>
  );
};

export default ClientButtons;