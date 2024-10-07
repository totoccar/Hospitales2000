import { PrismaClient, TipoDocumentoEnum } from '@prisma/client';
import { hash } from 'bcryptjs'; 

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await hash('comision1', 10);

  // Crear especialidad para el médico
const especialidad = await prisma.especialidad.createMany({
    data: [
        { nombre: 'Cardiología' },
        { nombre: 'Dermatología' },
        { nombre: 'Gastroenterología' },
        { nombre: 'Neurología' },
        { nombre: 'Pediatría' },
        { nombre: 'Psiquiatría' },
        { nombre: 'Radiología' },
        { nombre: 'Oncología' },
        { nombre: 'Oftalmología' },
        { nombre: 'Ortopedia' },
        { nombre: 'Otorrinolaringología' },
    ],
});

  // Crear obra social para los pacientes
  const obraSocial = await prisma.obraSocial.createMany({
    data: [
        { nombre: 'OSDE' },
        { nombre: 'Swiss Medical' },
        { nombre: 'Galeno' },
        { nombre: 'Medicus' },
        { nombre: 'Omint' },
        { nombre: 'Medife' },
        { nombre: 'Sancor Salud' },
        { nombre: 'IOMA' },
    ]
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
      { // Juliana Tobs
        tipo_documento: TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD,
        numero_documento: '12345678',
        nombre: 'Juliana',
        apellido: 'Tobs',
        correo_electronico: 'juliana.tobs@example.com',
        contrasena: hashedPassword,
      },
      { // Antonio Carlos 
        tipo_documento: TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD,
        numero_documento: '42620996',
        nombre: 'Antonio',
        apellido: 'Carlos',
        correo_electronico: 'totocarlos0@outlook.com',
        contrasena: hashedPassword,
      },
      { // Benja Clarke (Admin)
        tipo_documento: TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD,
        numero_documento: '111222333',
        nombre: 'Benja',
        apellido: 'Clarke',
        correo_electronico: 'benja.clarke@example.com',
        contrasena: hashedPassword,
      },
      { // Francisco Clarke 
        tipo_documento: TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD,
        numero_documento: '444555666',
        nombre: 'Francisco',
        apellido: 'Clarke',
        correo_electronico: 'francisco.clarke@example.com',
        contrasena: hashedPassword,
      },
      { // Federica Lamp
        tipo_documento: TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD,
        numero_documento: '777888999',
        nombre: 'Federica',
        apellido: 'Lamp',
        correo_electronico: 'federica.lamp@example.com',
        contrasena: hashedPassword,
      },
      { // Julian Alconcher 
        tipo_documento: TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD,
        numero_documento: '42831094',
        nombre: 'Julian',
        apellido: 'Alconcher',
        correo_electronico: 'alconcherjulian@gmail.com',
        contrasena: hashedPassword,
      },
      { // Francisco Ruiz Gomez 
        tipo_documento: TipoDocumentoEnum.DOCUMENTO_NACIONAL_IDENTIDAD,
        numero_documento: '42831095',
        nombre: 'Francisco',
        apellido: 'Ruiz Gomez',
        correo_electronico: 'francatolico@gmail.com',
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

  await prisma.medico.createMany({
    data: [{
      usuario_id: (await prisma.usuario.findFirst({ where: { correo_electronico: 'totocarlos0@outlook.com' } }))?.id as string,
      tipo_matricula: 'nacional',
      numero_matricula: '122950',
      numero_telefono: '542915163750',
      ubicacion_id: (await prisma.ubicacion.findFirst({ where: { calle: 'Calle Córdoba' } }))?.id as string,
      especialidad_id: (await prisma.especialidad.findFirst({ where: { nombre: 'Cardiología' } }))?.id as string,
      descripcion: 'Médico especializado en Cardiología.',
    },
    {
        usuario_id: (await prisma.usuario.findFirst({ where: { correo_electronico: 'alconcherjulian@gmail.com' } }))?.id as string,
        tipo_matricula: 'nacional',
        numero_matricula: '126094',
        numero_telefono: '542914042089',
        ubicacion_id: (await prisma.ubicacion.findFirst({ where: { calle: 'Av. Santa Fe' } }))?.id as string,
        especialidad_id: (await prisma.especialidad.findFirst({ where: { nombre: 'Psiquiatría' } }))?.id as string,
        descripcion: 'Médico MUY especializado en Psiquiatría.',
    },
    {
        usuario_id: (await prisma.usuario.findFirst({ where: { correo_electronico: 'francatolico@gmail.com' } }))?.id as string,
        tipo_matricula: 'nacional',
        numero_matricula: '126095',
        numero_telefono: '542914041389',
        ubicacion_id: (await prisma.ubicacion.findFirst({ where: { calle: 'San Martín' } }))?.id as string,
        especialidad_id: (await prisma.especialidad.findFirst({ where: { nombre: 'Ortopedia' } }))?.id as string,
        descripcion: 'Medico recibido en la UBA con muy buen promedio, especializado en Ortopedia.',
    }

    ]
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
      usuario_id: (await prisma.usuario.findFirst({ where: { correo_electronico: 'francisco.clarke@example.com' } }))?.id as string,
      fecha_nacimiento: new Date('1990-05-15'),
      lugar_nacimiento: 'Buenos Aires',
      contacto_emergencia: 'Emergencia: 999888777',
      numero_telefono: '555666777',
      ubicacion_id: (await prisma.ubicacion.findFirst({ where: { calle: 'Av. Rivadavia' } }))?.id as string,
      obra_social_id: (await prisma.obraSocial.findFirst({ where: { nombre: 'OSDE' } }))?.id as string,
      ficha_medica_id: fichaMedicaFrancisco.id, 
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
      obra_social_id: (await prisma.obraSocial.findFirst({ where: { nombre: 'Swiss Medical' } }))?.id as string,
      ficha_medica_id: fichaMedicaFederica.id, 
    },
  });

  // Crear una cita con medico Julian y paciente Federica

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