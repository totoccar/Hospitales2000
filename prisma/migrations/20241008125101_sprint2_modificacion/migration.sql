-- CreateEnum
CREATE TYPE "TipoDocumentoEnum" AS ENUM ('CEDULA_IDENTIDAD', 'DOCUMENTO_NACIONAL_IDENTIDAD', 'LIBRETA_CIVICA', 'LIBRETA_ENROLAMIENTO', 'PASAPORTE');

-- CreateEnum
CREATE TYPE "TipoMatriculaEnum" AS ENUM ('nacional', 'provincial');

-- CreateTable
CREATE TABLE "Ubicacion" (
    "id" TEXT NOT NULL,
    "calle" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "codigo_postal" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,

    CONSTRAINT "Ubicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Secretaria" (
    "usuario_id" TEXT NOT NULL,
    "numero_telefono" TEXT NOT NULL,
    "ubicacion_id" TEXT NOT NULL,

    CONSTRAINT "Secretaria_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateTable
CREATE TABLE "Medico" (
    "usuario_id" TEXT NOT NULL,
    "tipo_matricula" "TipoMatriculaEnum" NOT NULL,
    "numero_matricula" TEXT NOT NULL,
    "numero_telefono" TEXT NOT NULL,
    "ubicacion_id" TEXT NOT NULL,
    "especialidad_id" TEXT NOT NULL,
    "descripcion" TEXT,
    "duracion_cita" INTEGER,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "usuario_id" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "lugar_nacimiento" TEXT NOT NULL,
    "contacto_emergencia" TEXT NOT NULL,
    "numero_telefono" TEXT NOT NULL,
    "ubicacion_id" TEXT NOT NULL,
    "obra_social_id" TEXT NOT NULL,
    "ficha_medica_id" TEXT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "usuario_id" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "tipo_documento" "TipoDocumentoEnum" NOT NULL,
    "numero_documento" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo_electronico" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpires" TIMESTAMP(3),

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FichaMedica" (
    "id" TEXT NOT NULL,
    "alergias" TEXT NOT NULL,
    "diagnostico" TEXT NOT NULL,
    "tratamientos" TEXT NOT NULL,
    "medicamentos_recetados" TEXT NOT NULL,

    CONSTRAINT "FichaMedica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especialidad" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Especialidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObraSocial" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "ObraSocial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cita" (
    "id" TEXT NOT NULL,
    "fecha_hora" TIMESTAMP(3) NOT NULL,
    "medico_id" TEXT NOT NULL,
    "paciente_id" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Cita_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Secretaria_ubicacion_id_key" ON "Secretaria"("ubicacion_id");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_numero_matricula_key" ON "Medico"("numero_matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_ubicacion_id_key" ON "Medico"("ubicacion_id");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_ubicacion_id_key" ON "Paciente"("ubicacion_id");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_ficha_medica_id_key" ON "Paciente"("ficha_medica_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_numero_documento_key" ON "Usuario"("numero_documento");

-- CreateIndex
CREATE UNIQUE INDEX "Especialidad_nombre_key" ON "Especialidad"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "ObraSocial_nombre_key" ON "ObraSocial"("nombre");

-- AddForeignKey
ALTER TABLE "Secretaria" ADD CONSTRAINT "Secretaria_ubicacion_id_fkey" FOREIGN KEY ("ubicacion_id") REFERENCES "Ubicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Secretaria" ADD CONSTRAINT "Secretaria_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "Medico_especialidad_id_fkey" FOREIGN KEY ("especialidad_id") REFERENCES "Especialidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "Medico_ubicacion_id_fkey" FOREIGN KEY ("ubicacion_id") REFERENCES "Ubicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "Medico_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_ficha_medica_id_fkey" FOREIGN KEY ("ficha_medica_id") REFERENCES "FichaMedica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_obra_social_id_fkey" FOREIGN KEY ("obra_social_id") REFERENCES "ObraSocial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_ubicacion_id_fkey" FOREIGN KEY ("ubicacion_id") REFERENCES "Ubicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_medico_id_fkey" FOREIGN KEY ("medico_id") REFERENCES "Medico"("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE;
