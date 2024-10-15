import prisma from "@/src/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { alergias, diagnostico, tratamientos, medicamentos_recetados } = req.body;

    try {
      const updatedFichaMedica = await prisma.fichaMedica.update({
        where: { id: String(id) },
        data: {
          alergias,
          diagnostico,
          tratamientos,
          medicamentos_recetados,
        },
      });

      res.status(200).json(updatedFichaMedica);
    } catch (error) {
      console.error("Error al actualizar la ficha médica:", error);
      res.status(500).json({ error: "Error al actualizar la ficha médica" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
