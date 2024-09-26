/*
  Warnings:

  - You are about to drop the `Especialidad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FichaMedica` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Medico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ObraSocial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Paciente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Secretaria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ubicacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuarioRoles` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "tipoMatriculaEnum" AS ENUM ('nacional', 'provincial');

-- DropForeignKey
ALTER TABLE "FichaMedica" DROP CONSTRAINT "FichaMedica_paciente_id_fkey";

-- DropForeignKey
ALTER TABLE "Medico" DROP CONSTRAINT "Medico_especialidad_id_fkey";

-- DropForeignKey
ALTER TABLE "Medico" DROP CONSTRAINT "Medico_ubicacion_id_fkey";

-- DropForeignKey
ALTER TABLE "Medico" DROP CONSTRAINT "Medico_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_obra_social_id_fkey";

-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_ubicacion_id_fkey";

-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Secretaria" DROP CONSTRAINT "Secretaria_ubicacion_id_fkey";

-- DropForeignKey
ALTER TABLE "Secretaria" DROP CONSTRAINT "Secretaria_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_ubicacion_id_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioRoles" DROP CONSTRAINT "UsuarioRoles_rol_id_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioRoles" DROP CONSTRAINT "UsuarioRoles_usuario_id_fkey";

-- DropTable
DROP TABLE "Especialidad";

-- DropTable
DROP TABLE "FichaMedica";

-- DropTable
DROP TABLE "Medico";

-- DropTable
DROP TABLE "ObraSocial";

-- DropTable
DROP TABLE "Paciente";

-- DropTable
DROP TABLE "Roles";

-- DropTable
DROP TABLE "Secretaria";

-- DropTable
DROP TABLE "Ubicacion";

-- DropTable
DROP TABLE "Usuario";

-- DropTable
DROP TABLE "UsuarioRoles";

-- DropEnum
DROP TYPE "TipoMatriculaEnum";

-- CreateTable
CREATE TABLE "ubicacion" (
    "id" TEXT NOT NULL,
    "calle" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "codigo_postal" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,

    CONSTRAINT "ubicacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "secretaria" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,

    CONSTRAINT "secretaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medico" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "tipo_matricula" "tipoMatriculaEnum" NOT NULL,
    "numero_matricula" TEXT NOT NULL,
    "especialidad_id" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paciente" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "lugar_nacimiento" TEXT NOT NULL,
    "contacto_emergencia" TEXT NOT NULL,
    "obra_social_id" TEXT NOT NULL,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "tipo_documento" "TipoDocumentoEnum" NOT NULL,
    "numero_documento" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "correo_electronico" TEXT NOT NULL,
    "numero_telefono" TEXT NOT NULL,
    "ubicacion_id" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rol" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarioRol" (
    "usuario_id" TEXT NOT NULL,
    "rol_id" TEXT NOT NULL,

    CONSTRAINT "usuarioRol_pkey" PRIMARY KEY ("usuario_id","rol_id")
);

-- CreateTable
CREATE TABLE "fichaMedica" (
    "id" TEXT NOT NULL,
    "paciente_id" TEXT NOT NULL,
    "alergias" TEXT,
    "diagnostico" TEXT,
    "tratamientos" TEXT,
    "medicamentos_recetados" TEXT,

    CONSTRAINT "fichaMedica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "especialidad" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "especialidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obraSocial" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "obraSocial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "secretaria_usuario_id_key" ON "secretaria"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "medico_usuario_id_key" ON "medico"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "medico_numero_matricula_key" ON "medico"("numero_matricula");

-- CreateIndex
CREATE UNIQUE INDEX "paciente_usuario_id_key" ON "paciente"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_numero_documento_key" ON "usuario"("numero_documento");

-- CreateIndex
CREATE UNIQUE INDEX "rol_nombre_key" ON "rol"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "especialidad_nombre_key" ON "especialidad"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "obraSocial_nombre_key" ON "obraSocial"("nombre");

-- AddForeignKey
ALTER TABLE "secretaria" ADD CONSTRAINT "secretaria_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medico" ADD CONSTRAINT "medico_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medico" ADD CONSTRAINT "medico_especialidad_id_fkey" FOREIGN KEY ("especialidad_id") REFERENCES "especialidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paciente" ADD CONSTRAINT "paciente_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paciente" ADD CONSTRAINT "paciente_obra_social_id_fkey" FOREIGN KEY ("obra_social_id") REFERENCES "obraSocial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_ubicacion_id_fkey" FOREIGN KEY ("ubicacion_id") REFERENCES "ubicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioRol" ADD CONSTRAINT "usuarioRol_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarioRol" ADD CONSTRAINT "usuarioRol_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fichaMedica" ADD CONSTRAINT "fichaMedica_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
