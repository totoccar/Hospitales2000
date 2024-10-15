/*"use client";

import { Button } from "@/src/components/ui/button";
import { deletePatient } from "@/src/lib/deleteUsers";

interface ClientButtonsProps {
  id: string;
}

const ClientButtons: React.FC<ClientButtonsProps> = ({ id }) => {
  return (
    <div className="flex justify-end space-x-4 mt-6">
      <Button disabled={true} variant="outline">Editar</Button>
      <Button onClick={() => deletePatient(id)}>Eliminar</Button>
    </div>
  );
};

export default ClientButtons;*/

"use client";

import { Button } from "@/src/components/ui/button";
import { modifyPatient } from "@/src/lib/modifyUser";

interface ClientButtonsProps {
  id: string;
  disabledEdit: boolean;
}

const ClientButtons: React.FC<ClientButtonsProps> = ({ id, disabledEdit }: {id: string, disabledEdit: boolean}) => {
  /*const handleDelete = () => {
    const confirmed = window.confirm("Está a punto de eliminar toda la información relacionada con el paciente. ¿Está seguro?");
    if (confirmed) {
        modifyPatient(id);
    }
  };*/

  return (
    <div className="flex justify-end space-x-4 mt-6">
     <Button disabled={disabledEdit} variant="outline">Editar</Button>
    </div>
  );
};

export default ClientButtons;