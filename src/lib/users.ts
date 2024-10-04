import prisma from "./db";
import { RoleProfile } from "./definitions";

export async function fetchRolesDeUsuario(numero_documento: string): Promise<RoleProfile[]> {
  const usuario = await prisma.usuario.findUnique({
    where: { numero_documento },
    select: {
      admin: true,
      medico: true,
      paciente: true,
      secretaria: true,
    },
  });

  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }

  const roles: RoleProfile[] = [];
  if (usuario.admin) roles.push(RoleProfile.Administrador);
  if (usuario.medico) roles.push(RoleProfile.Medico);
  if (usuario.paciente) roles.push(RoleProfile.Paciente);
  if (usuario.secretaria) roles.push(RoleProfile.Secretaria);

  return roles;
}