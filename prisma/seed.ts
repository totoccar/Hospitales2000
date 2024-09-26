import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs'; // Para hashear las contraseñas

const prisma = new PrismaClient();

async function main() {
  // Hashear la contraseña
  const hashedPassword = await hash('comision1', 10);

  // Crear especialidad para el médico
  const especialidad = await prisma.especialidad.create({
    data: { nombre: 'Cardiología' },
  });

  // Crear obra social para los pacientes
  const obraSocial = await prisma.obraSocial.create({
    data: { nombre: 'OSDE' },
  });

  // Crear ubicaciones válidas en Argentina
  const ubicaciones = await prisma.ubicacion.createMany({
    data: [
      { calle: 'Av. Santa Fe', numero: '1234', codigo_postal: 'C1059ABH', ciudad: 'Buenos Aires', provincia: 'Buenos Aires' },  // Juliana Tobs
      { calle: 'Calle Córdoba', numero: '567', codigo_postal: 'X5000EHL', ciudad: 'Córdoba', provincia: 'Córdoba' },           // Antonio Carlos Aka TOTO
      { calle: 'Av. Belgrano', numero: '789', codigo_postal: 'M5502GMK', ciudad: 'Mendoza', provincia: 'Mendoza' },            // Benja Clarke
      { calle: 'Av. Rivadavia', numero: '321', codigo_postal: 'C1033AAB', ciudad: 'Buenos Aires', provincia: 'Buenos Aires' }, // Francisco Ruiz
      { calle: 'San Martín', numero: '654', codigo_postal: 'A4402FMA', ciudad: 'Salta', provincia: 'Salta' },                  // Federica Lamp
    ],
  });

  // Crear usuarios con la contraseña "comision1" sin especificar IDs, Prisma generará UUIDs automáticamente
  const users = await prisma.usuario.createMany({
    data: [
      { // Juliana Tobs (Secretaria)
        tipo_documento: 'DOCUMENTO_NACIONAL_IDENTIDAD',
        numero_documento: '12345678',
        nombre: 'Juliana',
        apellido: 'Tobs',
        correo_electronico: 'juliana.tobs@example.com',
        contrasena: hashedPassword, // Contraseña hasheada "comision1"
      },
      { // Antonio Carlos Aka TOTO (Medico)
        tipo_documento: 'PASAPORTE',
        numero_documento: '87654321',
        nombre: 'Antonio Carlos',
        apellido: 'Aka TOTO',
        correo_electronico: 'antonio.toto@example.com',
        contrasena: hashedPassword,
      },
      { // Benja Clarke (Admin)
        tipo_documento: 'DOCUMENTO_NACIONAL_IDENTIDAD',
        numero_documento: '111222333',
        nombre: 'Benja',
        apellido: 'Clarke',
        correo_electronico: 'benja.clarke@example.com',
        contrasena: hashedPassword,
      },
      { // Francisco Ruiz (Paciente)
        tipo_documento: 'CEDULA_IDENTIDAD',
        numero_documento: '444555666',
        nombre: 'Francisco',
        apellido: 'Ruiz',
        correo_electronico: 'francisco.ruiz@example.com',
        contrasena: hashedPassword,
      },
      { // Federica Lamp (Secretaria y Paciente)
        tipo_documento: 'DOCUMENTO_NACIONAL_IDENTIDAD',
        numero_documento: '777888999',
        nombre: 'Federica',
        apellido: 'Lamp',
        correo_electronico: 'federica.lamp@example.com',
        contrasena: hashedPassword,
      },
    ],
  });

  // Crear registros de secretaria, médico, admin
  await prisma.secretaria.create({
    data: {
      usuario_id: (await prisma.usuario.findFirst({ where: { correo_electronico: 'juliana.tobs@example.com' } }))?.id as string,
      numero_telefono: '123456789',
      ubicacion_id: (await prisma.ubicacion.findFirst({ where: { calle: 'Av. Santa Fe' } }))?.id as string,
    },
  });

  await prisma.medico.create({
    data: {
      usuario_id: (await prisma.usuario.findFirst({ where: { correo_electronico: 'antonio.toto@example.com' } }))?.id as string,
      tipo_matricula: 'nacional',
      numero_matricula: 'MAT-001',
      numero_telefono: '987654321',
      ubicacion_id: (await prisma.ubicacion.findFirst({ where: { calle: 'Calle Córdoba' } }))?.id as string,
      especialidad_id: especialidad.id,
      descripcion: 'Médico especializado en Cardiología.',
    },
  });

  await prisma.admin.create({
    data: {
      usuario_id: (await prisma.usuario.findFirst({ where: { correo_electronico: 'benja.clarke@example.com' } }))?.id as string,
    },
  });

  // Crear la ficha médica antes de crear el paciente
  const fichaMedicaFrancisco = await prisma.fichaMedica.create({
    data: {
      alergias: 'Ninguna',
      diagnostico: 'Saludable',
      tratamientos: 'Ninguno',
      medicamentos_recetados: 'Ninguno',
    },
  });

  // Crear el paciente Francisco Ruiz y pasar ficha_medica_id
  const pacienteFrancisco = await prisma.paciente.create({
    data: {
      usuario_id: (await prisma.usuario.findFirst({ where: { correo_electronico: 'francisco.ruiz@example.com' } }))?.id as string,
      fecha_nacimiento: new Date('1990-05-15'),
      lugar_nacimiento: 'Buenos Aires',
      contacto_emergencia: 'Emergencia: 999888777',
      numero_telefono: '555666777',
      ubicacion_id: (await prisma.ubicacion.findFirst({ where: { calle: 'Av. Rivadavia' } }))?.id as string,
      obra_social_id: obraSocial.id,
      ficha_medica_id: fichaMedicaFrancisco.id, // Se pasa el id de la ficha médica creada
    },
  });

  // Federica Lamp (Paciente y Secretaria)
  await prisma.secretaria.create({
    data: {
      usuario_id: (await prisma.usuario.findFirst({ where: { correo_electronico: 'federica.lamp@example.com' } }))?.id as string,
      numero_telefono: '666777888',
      ubicacion_id: (await prisma.ubicacion.findFirst({ where: { calle: 'San Martín' } }))?.id as string,
    },
  });

  // Crear la ficha médica de Federica
  const fichaMedicaFederica = await prisma.fichaMedica.create({
    data: {
      alergias: 'Polen',
      diagnostico: 'Asma leve',
      tratamientos: 'Inhalador',
      medicamentos_recetados: 'Salbutamol',
    },
  });

  // Crear el paciente Federica Lamp y pasar ficha_medica_id
  const pacienteFederica = await prisma.paciente.create({
    data: {
      usuario_id: (await prisma.usuario.findFirst({ where: { correo_electronico: 'federica.lamp@example.com' } }))?.id as string,
      fecha_nacimiento: new Date('1985-11-20'),
      lugar_nacimiento: 'Salta',
      contacto_emergencia: 'Emergencia: 123123123',
      numero_telefono: '999888777',
      ubicacion_id: (await prisma.ubicacion.findFirst({ where: { calle: 'San Martín' } }))?.id as string,
      obra_social_id: obraSocial.id,
      ficha_medica_id: fichaMedicaFederica.id, // Se pasa el id de la ficha médica creada
    },
  });

  console.log('Seed data created successfully with real Argentinian addresses and unified passwords!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
