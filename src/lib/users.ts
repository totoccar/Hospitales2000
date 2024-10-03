import prisma from "./db";
import { RoleProfile } from "./definitions";

export async function fetchRolesDeUsuario(numero_documento: string): Promise<RoleProfile[]> {
  const usuario = await prisma.usuario.findUnique({
    where: { numero_documento },
    select: {
      Admin: true,
      Medico: true,
      Paciente: true,
      Secretaria: true,
    },
  });

  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }

  const roles: RoleProfile[] = [];
  if (usuario.Admin) roles.push(RoleProfile.Administrador);
  if (usuario.Medico) roles.push(RoleProfile.Medico);
  if (usuario.Paciente) roles.push(RoleProfile.Paciente);
  if (usuario.Secretaria) roles.push(RoleProfile.Secretaria);

  return roles;
}