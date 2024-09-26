import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const adminRole = await prisma.rol.create({
    data: { nombre: 'ADMIN' },
  });

  const pacienteRole = await prisma.rol.create({
    data: { nombre: 'Paciente' },
  });

  const medicoRole = await prisma.rol.create({
    data: { nombre: 'Medico' },
  });

  const secretariaRole = await prisma.rol.create({
    data: { nombre: 'Secretaria' },
  });

  // Crear ubicaciones
  const ubicacion1 = await prisma.ubicacion.create({
    data: {
      calle: 'Calle Falsa',
      numero: '123',
      codigo_postal: '1000',
      ciudad: 'Ciudad',
      provincia: 'Provincia',
    },
  });

  const ubicacion2 = await prisma.ubicacion.create({
    data: {
      calle: 'Calle Verdadera',
      numero: '456',
      codigo_postal: '2000',
      ciudad: 'Otra Ciudad',
      provincia: 'Otra Provincia',
    },
  });

  // Crear usuarios
  const adminUser = await prisma.usuario.create({
    data: {
      tipo_documento: 'DNI',
      numero_documento: '12345678',
      nombre: 'Admin',
      apellido: 'User',
      correo_electronico: 'admin@example.com',
      numero_telefono: '123456789',
      contrasena: 'adminpassword',
      ubicacion: { connect: { id: ubicacion1.id } },
      usuarioRol: {
        create: {
          rol: { connect: { id: adminRole.id } },
        },
      },
    },
  });

  const pacienteUser = await prisma.usuario.create({
    data: {
      tipo_documento: 'DNI',
      numero_documento: '87654321',
      nombre: 'Paciente',
      apellido: 'User',
      correo_electronico: 'paciente@example.com',
      numero_telefono: '987654321',
      contrasena: 'pacientepassword',
      ubicacion: { connect: { id: ubicacion2.id } },
      usuarioRol: {
        create: {
          rol: { connect: { id: pacienteRole.id } },
        },
      },
      paciente: {
        create: {
          fecha_nacimiento: new Date('1990-01-01'),
          lugar_nacimiento: 'Ciudad Nacimiento',
          contacto_emergencia: 'Contacto Emergencia',
          obra_social: {
            create: {
              nombre: 'Obra Social Ejemplo',
            },
          },
        },
      },
    },
  });

  const especialidad = await prisma.especialidad.create({
    data: { nombre: 'Cardiología' },
  });

  const medicoUser = await prisma.usuario.create({
    data: {
      tipo_documento: 'DNI',
      numero_documento: '11223344',
      nombre: 'Medico',
      apellido: 'User',
      correo_electronico: 'medico@example.com',
      numero_telefono: '12344321',
      contrasena: 'medicopassword',
      ubicacion: { connect: { id: ubicacion1.id } },
      usuarioRol: {
        create: {
          rol: { connect: { id: medicoRole.id } },
        },
      },
      medico: {
        create: {
          tipo_matricula: 'nacional',
          numero_matricula: 'ABC123',
          especialidad: { connect: { id: especialidad.id } },
          descripcion: 'Especialista en Cardiología',
        },
      },
    },
  });

  const secretariaUser = await prisma.usuario.create({
    data: {
      tipo_documento: 'DNI',
      numero_documento: '55667788',
      nombre: 'Secretaria',
      apellido: 'User',
      correo_electronico: 'secretaria@example.com',
      numero_telefono: '98761234',
      contrasena: 'secretariapassword',
      ubicacion: { connect: { id: ubicacion2.id } },
      usuarioRol: {
        create: {
          rol: { connect: { id: secretariaRole.id } },
        },
      },
      secretaria: {
        create: {},
      },
    },
  });

  console.log('Datos iniciales insertados correctamente');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
