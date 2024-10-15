"use client";

import { Button } from "@/src/components/ui/button";
import { deleteSecretary } from "@/src/lib/deleteUsers";

interface ClientButtonsProps {
  id: string;
  disabled: boolean;
}

const ClientButtons: React.FC<ClientButtonsProps> = ({ id, disabled }: {id: string, disabled: boolean}) => {
  const handleDelete = () => {
    const confirmed = window.confirm("Está a punto de eliminar toda la información relacionada con la secretaria. ¿Está seguro?");
    if (confirmed) {
      deleteSecretary(id);
    }
  };

  return (
    <div className="flex justify-end space-x-4 mt-6">
      <Button disabled={true} variant="outline">Editar</Button>
      <Button disabled={disabled} onClick={handleDelete}>Eliminar</Button>
    </div>
  );
};

export default ClientButtons;