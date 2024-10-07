
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.20.0
 * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
 */
Prisma.prismaVersion = {
  client: "5.20.0",
  engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UbicacionScalarFieldEnum = {
  id: 'id',
  calle: 'calle',
  numero: 'numero',
  codigo_postal: 'codigo_postal',
  ciudad: 'ciudad',
  provincia: 'provincia'
};

exports.Prisma.SecretariaScalarFieldEnum = {
  usuario_id: 'usuario_id',
  numero_telefono: 'numero_telefono',
  ubicacion_id: 'ubicacion_id'
};

exports.Prisma.MedicoScalarFieldEnum = {
  usuario_id: 'usuario_id',
  tipo_matricula: 'tipo_matricula',
  numero_matricula: 'numero_matricula',
  numero_telefono: 'numero_telefono',
  ubicacion_id: 'ubicacion_id',
  especialidad_id: 'especialidad_id',
  descripcion: 'descripcion'
};

exports.Prisma.PacienteScalarFieldEnum = {
  usuario_id: 'usuario_id',
  fecha_nacimiento: 'fecha_nacimiento',
  lugar_nacimiento: 'lugar_nacimiento',
  contacto_emergencia: 'contacto_emergencia',
  numero_telefono: 'numero_telefono',
  ubicacion_id: 'ubicacion_id',
  obra_social_id: 'obra_social_id',
  ficha_medica_id: 'ficha_medica_id'
};

exports.Prisma.AdminScalarFieldEnum = {
  usuario_id: 'usuario_id'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  tipo_documento: 'tipo_documento',
  numero_documento: 'numero_documento',
  nombre: 'nombre',
  apellido: 'apellido',
  correo_electronico: 'correo_electronico',
  contrasena: 'contrasena'
};

exports.Prisma.FichaMedicaScalarFieldEnum = {
  id: 'id',
  alergias: 'alergias',
  diagnostico: 'diagnostico',
  tratamientos: 'tratamientos',
  medicamentos_recetados: 'medicamentos_recetados'
};

exports.Prisma.EspecialidadScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre'
};

exports.Prisma.ObraSocialScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.TipoMatriculaEnum = exports.$Enums.TipoMatriculaEnum = {
  nacional: 'nacional',
  provincial: 'provincial'
};

exports.TipoDocumentoEnum = exports.$Enums.TipoDocumentoEnum = {
  CEDULA_IDENTIDAD: 'CEDULA_IDENTIDAD',
  DOCUMENTO_NACIONAL_IDENTIDAD: 'DOCUMENTO_NACIONAL_IDENTIDAD',
  LIBRETA_CIVICA: 'LIBRETA_CIVICA',
  LIBRETA_ENROLAMIENTO: 'LIBRETA_ENROLAMIENTO',
  PASAPORTE: 'PASAPORTE'
};

exports.Prisma.ModelName = {
  Ubicacion: 'Ubicacion',
  Secretaria: 'Secretaria',
  Medico: 'Medico',
  Paciente: 'Paciente',
  Admin: 'Admin',
  Usuario: 'Usuario',
  FichaMedica: 'FichaMedica',
  Especialidad: 'Especialidad',
  ObraSocial: 'ObraSocial'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
