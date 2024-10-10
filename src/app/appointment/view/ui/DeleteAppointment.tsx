// File: src/ui/Buttons.tsx
'use client';
import MaxWidthWrapper from '@/src/ui/MaxWidthWrapper';
import { SquareX } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CancelComponent({ params }: { params: { id: string } }) {
  const router = useRouter();
  const handleDelete = async () => {
      const confirmation = confirm('¿Estás seguro que deseas cancelar esta cita?');
      if (!confirmation) return;

      try {
          const response = await fetch(`/api/deleteCita?id=${params.id}`, {
              method: 'DELETE',
          });

          if (!response.ok) {
              const { message } = await response.json();
              alert(`Error: ${message}`);
              return;
          }

          alert('Cita eliminada exitosamente');
          router.push('/'); 
      } catch (error) {
          console.error('Error al eliminar la cita:', error);
          alert('Ocurrió un error al intentar eliminar la cita');
      }
  };

  return (
            <button onClick={handleDelete} className=" hover:bg-red-200 text-white font-bold py-2 px-4 rounded">
                <SquareX style={{ color: '#e85454', width: '32px', height: '32px' }} />
            </button>
)
}
