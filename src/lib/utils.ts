import { TipoDocumentoEnum } from "@prisma/client";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export function obtenerIniciales(tipoDocumento: TipoDocumentoEnum): string {
  const tipoDocumentoStr = TipoDocumentoEnum[tipoDocumento];
  
  if (tipoDocumentoStr === "PASAPORTE")
    return "PAS";
  const palabras = tipoDocumentoStr.split('_');
  
  const iniciales = palabras.map(palabra => palabra.charAt(0)).join('');
  
  return iniciales;
}

export function getUTCHoursAndMinutes(date: Date) {
  return date.toISOString().split('T')[1].split('.')[0].slice(0, 5);
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  // Formatear día, mes y año
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = String(date.getFullYear()).slice(-2); 

  // Formatear horas y minutos
  const hours = String(date.getHours() + 3).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Crear el formato final
  return `${day}/${month}/${year} a las ${hours}:${minutes}`;
}