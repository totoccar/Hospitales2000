"use client";

import { Button } from "@/src/components/ui/button";


interface ClientButtonsProps {
  id: string;
  disabledEdit: boolean;
}

const ClientButtons: React.FC<ClientButtonsProps> = ({ id, disabledEdit }: {id: string, disabledEdit: boolean}) => {
  

  return (
    <div className={`flex  justify-end space-x-4 mt-6 ${disabledEdit ? 'cursor-not-allowed opacity-50' : ''}`}>
     <Button className="bg-primario hover:bg-acentos text-white" disabled={disabledEdit} variant="outline">Editar</Button>
    </div>
  );
};

export default ClientButtons;