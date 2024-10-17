import { deleteCitaById } from '@/src/lib/searchappointments';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        const { id } = req.query;
        const result = await deleteCitaById(String(id));

        if (result.error) {
            return res.status(500).json(result);
        }
        
        return res.status(200).json(result);
    } else {
        return res.status(405).json({ message: 'Método no permitido' });
    }
}
