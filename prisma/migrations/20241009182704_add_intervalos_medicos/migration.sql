-- CreateEnum
CREATE TYPE "DiaSemanaEnum" AS ENUM ('LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES');

-- CreateTable
CREATE TABLE "IntervaloAtencion" (
    "id" TEXT NOT NULL,
    "diaSemana" "DiaSemanaEnum" NOT NULL,
    "horaInicio" TIMESTAMP(3) NOT NULL,
    "horaFin" TIMESTAMP(3) NOT NULL,
    "medico_id" TEXT NOT NULL,

    CONSTRAINT "IntervaloAtencion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IntervaloAtencion" ADD CONSTRAINT "IntervaloAtencion_medico_id_fkey" FOREIGN KEY ("medico_id") REFERENCES "Medico"("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE;
