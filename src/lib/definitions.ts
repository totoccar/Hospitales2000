// interfaces.ts

export interface Ubicacion {
  id: string;
  calle: string;
  numero: string;
  codigo_postal: string;
  ciudad: string;
  provincia: string;
  paciente?: Paciente | null;
  secretaria?: Secretaria | null;
  medico?: Medico | null;
}

export interface Usuario {
  id: string;
  tipo_documento: TipoDocumentoEnum;
  numero_documento: string;
  nombre: string;
  apellido: string;
  correo_electronico: string;
  contrasena: string;
  secretaria?: Secretaria | null;
  medico?: Medico | null;
  paciente?: Paciente | null;
  admin?: Admin | null;
}

export interface Paciente extends Usuario {
  usuario: unknown;
  fecha_nacimiento: Date;
  lugar_nacimiento: string;
  contacto_emergencia: string;
  numero_telefono: string;
  ubicacion: Ubicacion;
  ubicacion_id: string;
  obra_social: ObraSocial;
  obra_social_id: string;
  ficha_medica: FichaMedica;
  ficha_medica_id: string;
}

export interface Secretaria extends Usuario {
  numero_telefono: string;
  ubicacion: Ubicacion;
  ubicacion_id: string;
}

export interface Medico extends Usuario {
  tipo_matricula: TipoMatriculaEnum;
  numero_matricula: string;
  numero_telefono: string;
  ubicacion: Ubicacion;
  ubicacion_id: string;
  especialidad: Especialidad;
  especialidad_id: string;
  descripcion?: string | null;
}


export type Admin = Usuario
export interface FichaMedica {
  id: string;
  paciente?: Paciente | null;
  alergias: string;
  diagnostico: string;
  tratamientos: string;
  medicamentos_recetados: string;
}

export enum TipoMatriculaEnum {
  nacional = "nacional",
  provincial = "provincial"
}

export interface Especialidad {
  id: string;
  nombre: string;
  medico: Medico[];
}

export interface ObraSocial {
  id: string;
  nombre: string;
  paciente: Paciente[];
}

export enum TipoDocumentoEnum {
  CEDULA_IDENTIDAD = "CEDULA_IDENTIDAD",
  DOCUMENTO_NACIONAL_IDENTIDAD = "DOCUMENTO_NACIONAL_IDENTIDAD",
  LIBRETA_CIVICA = "LIBRETA_CIVICA",
  LIBRETA_ENROLAMIENTO = "LIBRETA_ENROLAMIENTO",
  PASAPORTE = "PASAPORTE"
}

export enum RoleProfile{
  Medico = "Medico",
  Secretaria = "Secretaria",
  Paciente= "Paciente",
  Administrador = "Administrador",
}
