"use client"
import MaxWidthWrapper from '@/src/ui/MaxWidthWrapper'
import React from 'react'
import { useRouter } from 'next/navigation';
import { getCitasById } from '@/src/lib/searchappointments';

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
            router.push('/citas'); // Redirige a la página de citas después de eliminar
        } catch (error) {
            console.error('Error al eliminar la cita:', error);
            alert('Ocurrió un error al intentar eliminar la cita');
        }
    };

    return (
        <MaxWidthWrapper>
            <div className="w-full max-w-3xl mx-auto p-6 bg-fondo mt-5 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Cancelar Cita {params.id}</h2>
                <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Cancelar Cita
                </button>
            </div>
        </MaxWidthWrapper>
    )
}
