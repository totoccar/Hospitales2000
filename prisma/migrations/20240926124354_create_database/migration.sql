/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TipoDocumentoEnum" AS ENUM ('Cedula_de_identidad', 'DNI', 'Libreta_civica', 'Libreta_de_enrolamiento', 'Pasaporte');

-- CreateEnum
CREATE TYPE "TipoMatriculaEnum" AS ENUM ('nacional', 'provincial');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Ubicacion" (
    "id" BIGSERIAL NOT NULL,
    "calle" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "codigo_postal" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,

    CONSTRAINT "Ubicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Secretaria" (
    "id" BIGSERIAL NOT NULL,
    "usuario_id" BIGINT NOT NULL,
    "ubicacion_id" BIGINT NOT NULL,

    CONSTRAINT "Secretaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medico" (
    "id" BIGSERIAL NOT NULL,
    "usuario_id" BIGINT NOT NULL,
    "tipo_matricula" "TipoMatriculaEnum" NOT NULL,
    "numero_matricula" TEXT NOT NULL,
    "especialidad_id" BIGINT NOT NULL,
    "descripcion" TEXT,
    "ubicacion_id" BIGINT NOT NULL,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" BIGSERIAL NOT NULL,
    "usuario_id" BIGINT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "lugar_nacimiento" TEXT NOT NULL,
    "contacto_emergencia" TEXT NOT NULL,
    "obra_social_id" BIGINT NOT NULL,
    "ubicacion_id" BIGINT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" BIGSERIAL NOT NULL,
    "tipo_documento" "TipoDocumentoEnum" NOT NULL,
    "numero_documento" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo_electronico" TEXT NOT NULL,
    "numero_telefono" TEXT NOT NULL,
    "ubicacion_id" BIGINT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" BIGSERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioRoles" (
    "usuario_id" BIGINT NOT NULL,
    "rol_id" BIGINT NOT NULL,

    CONSTRAINT "UsuarioRoles_pkey" PRIMARY KEY ("usuario_id","rol_id")
);

-- CreateTable
CREATE TABLE "FichaMedica" (
    "id" BIGSERIAL NOT NULL,
    "paciente_id" BIGINT NOT NULL,
    "alergias" TEXT,
    "diagnostico" TEXT,
    "tratamientos" TEXT,
    "medicamentos_recetados" TEXT,

    CONSTRAINT "FichaMedica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especialidad" (
    "id" BIGSERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Especialidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObraSocial" (
    "id" BIGSERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "ObraSocial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Secretaria_usuario_id_key" ON "Secretaria"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_usuario_id_key" ON "Medico"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_tipo_matricula_key" ON "Medico"("tipo_matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_numero_matricula_key" ON "Medico"("numero_matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_usuario_id_key" ON "Paciente"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_tipo_documento_key" ON "Usuario"("tipo_documento");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_numero_documento_key" ON "Usuario"("numero_documento");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_nombre_key" ON "Roles"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Especialidad_nombre_key" ON "Especialidad"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "ObraSocial_nombre_key" ON "ObraSocial"("nombre");

-- AddForeignKey
ALTER TABLE "Secretaria" ADD CONSTRAINT "Secretaria_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Secretaria" ADD CONSTRAINT "Secretaria_ubicacion_id_fkey" FOREIGN KEY ("ubicacion_id") REFERENCES "Ubicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "Medico_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "Medico_especialidad_id_fkey" FOREIGN KEY ("especialidad_id") REFERENCES "Especialidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "Medico_ubicacion_id_fkey" FOREIGN KEY ("ubicacion_id") REFERENCES "Ubicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_obra_social_id_fkey" FOREIGN KEY ("obra_social_id") REFERENCES "ObraSocial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_ubicacion_id_fkey" FOREIGN KEY ("ubicacion_id") REFERENCES "Ubicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_ubicacion_id_fkey" FOREIGN KEY ("ubicacion_id") REFERENCES "Ubicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioRoles" ADD CONSTRAINT "UsuarioRoles_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioRoles" ADD CONSTRAINT "UsuarioRoles_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FichaMedica" ADD CONSTRAINT "FichaMedica_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
