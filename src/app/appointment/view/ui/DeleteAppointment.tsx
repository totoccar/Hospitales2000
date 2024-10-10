// File: src/ui/Buttons.tsx
'use client';

import { deleteCitaById } from '@/src/lib/searchappointments';
import { useState } from 'react';

export function DeleteAppointment({ citaId, onDelete }: { citaId: string, onDelete: (id: string) => void }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = deleteCitaById(citaId);

    if (!response) {
      console.error('Error al eliminar la cita');
    } else {
      console.log('Cita eliminada exitosamente');
    }
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      {isDeleting ? 'Eliminando...' : 'Eliminar'}
    </button>
  );
}
