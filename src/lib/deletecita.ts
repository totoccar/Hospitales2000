// pages/api/deleteCita.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './db';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Falta el ID de la cita' });
  }

  try {
    await prisma.cita.delete({
      where: { id },
    });
    res.status(200).json({ message: 'Cita eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la cita:', error);
    res.status(500).json({ message: 'Error al eliminar la cita' });
  }
}
