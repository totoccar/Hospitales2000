
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\julia\\Documents\\hospitales2000\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\julia\\Documents\\hospitales2000\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.20.0",
  "engineVersion": "06fc58a368dc7be9fbbbe894adf8d445d208c284",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated/client\"\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"POSTGRES_PRISMA_URL\")\n  directUrl = env(\"POSTGRES_URL_NON_POOLING\")\n}\n\nmodel Ubicacion {\n  id            String      @id @default(uuid())\n  calle         String\n  numero        String\n  codigo_postal String\n  ciudad        String\n  provincia     String\n  medico        Medico?\n  paciente      Paciente?\n  secretaria    Secretaria?\n}\n\nmodel Secretaria {\n  usuario_id      String    @id\n  numero_telefono String\n  ubicacion_id    String    @unique\n  ubicacion       Ubicacion @relation(fields: [ubicacion_id], references: [id])\n  usuario         Usuario   @relation(fields: [usuario_id], references: [id])\n}\n\nmodel Medico {\n  usuario_id       String            @id\n  tipo_matricula   TipoMatriculaEnum\n  numero_matricula String            @unique\n  numero_telefono  String\n  ubicacion_id     String            @unique\n  especialidad_id  String\n  descripcion      String?\n  especialidad     Especialidad      @relation(fields: [especialidad_id], references: [id])\n  ubicacion        Ubicacion         @relation(fields: [ubicacion_id], references: [id])\n  usuario          Usuario           @relation(fields: [usuario_id], references: [id])\n}\n\nmodel Paciente {\n  usuario_id          String      @id\n  fecha_nacimiento    DateTime\n  lugar_nacimiento    String\n  contacto_emergencia String\n  numero_telefono     String\n  ubicacion_id        String      @unique\n  obra_social_id      String\n  ficha_medica_id     String      @unique\n  ficha_medica        FichaMedica @relation(fields: [ficha_medica_id], references: [id])\n  obra_social         ObraSocial  @relation(fields: [obra_social_id], references: [id])\n  ubicacion           Ubicacion   @relation(fields: [ubicacion_id], references: [id])\n  usuario             Usuario     @relation(fields: [usuario_id], references: [id])\n}\n\nmodel Admin {\n  usuario_id String  @id\n  usuario    Usuario @relation(fields: [usuario_id], references: [id])\n}\n\nmodel Usuario {\n  id                 String            @id @default(uuid())\n  tipo_documento     TipoDocumentoEnum\n  numero_documento   String            @unique\n  nombre             String\n  apellido           String\n  correo_electronico String\n  contrasena         String\n  admin              Admin?\n  medico             Medico?\n  paciente           Paciente?\n  secretaria         Secretaria?\n}\n\nmodel FichaMedica {\n  id                     String    @id @default(uuid())\n  alergias               String\n  diagnostico            String\n  tratamientos           String\n  medicamentos_recetados String\n  paciente               Paciente?\n}\n\nmodel Especialidad {\n  id     String   @id @default(uuid())\n  nombre String   @unique\n  medico Medico[]\n}\n\nmodel ObraSocial {\n  id       String     @id @default(uuid())\n  nombre   String     @unique\n  paciente Paciente[]\n}\n\nenum TipoDocumentoEnum {\n  CEDULA_IDENTIDAD\n  DOCUMENTO_NACIONAL_IDENTIDAD\n  LIBRETA_CIVICA\n  LIBRETA_ENROLAMIENTO\n  PASAPORTE\n}\n\nenum TipoMatriculaEnum {\n  nacional\n  provincial\n}\n",
  "inlineSchemaHash": "6fd786115aa1017551c5538516fb9f57b6316c3f6b9f3e9a1d9e85a8a7e9161e",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Ubicacion\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"calle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_postal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ciudad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provincia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medico\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Medico\",\"relationName\":\"MedicoToUbicacion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paciente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Paciente\",\"relationName\":\"PacienteToUbicacion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"secretaria\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Secretaria\",\"relationName\":\"SecretariaToUbicacion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Secretaria\":{\"dbName\":null,\"fields\":[{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ubicacion_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ubicacion\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ubicacion\",\"relationName\":\"SecretariaToUbicacion\",\"relationFromFields\":[\"ubicacion_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"relationName\":\"SecretariaToUsuario\",\"relationFromFields\":[\"usuario_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Medico\":{\"dbName\":null,\"fields\":[{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_matricula\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoMatriculaEnum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_matricula\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ubicacion_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialidad_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"especialidad\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Especialidad\",\"relationName\":\"EspecialidadToMedico\",\"relationFromFields\":[\"especialidad_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ubicacion\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ubicacion\",\"relationName\":\"MedicoToUbicacion\",\"relationFromFields\":[\"ubicacion_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"relationName\":\"MedicoToUsuario\",\"relationFromFields\":[\"usuario_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Paciente\":{\"dbName\":null,\"fields\":[{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_nacimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lugar_nacimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contacto_emergencia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ubicacion_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obra_social_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ficha_medica_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ficha_medica\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FichaMedica\",\"relationName\":\"FichaMedicaToPaciente\",\"relationFromFields\":[\"ficha_medica_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obra_social\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ObraSocial\",\"relationName\":\"ObraSocialToPaciente\",\"relationFromFields\":[\"obra_social_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ubicacion\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ubicacion\",\"relationName\":\"PacienteToUbicacion\",\"relationFromFields\":[\"ubicacion_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"relationName\":\"PacienteToUsuario\",\"relationFromFields\":[\"usuario_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Admin\":{\"dbName\":null,\"fields\":[{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Usuario\",\"relationName\":\"AdminToUsuario\",\"relationFromFields\":[\"usuario_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Usuario\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo_documento\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoDocumentoEnum\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero_documento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apellido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo_electronico\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrasena\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medico\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Medico\",\"relationName\":\"MedicoToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paciente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Paciente\",\"relationName\":\"PacienteToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"secretaria\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Secretaria\",\"relationName\":\"SecretariaToUsuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FichaMedica\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alergias\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diagnostico\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tratamientos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medicamentos_recetados\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paciente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Paciente\",\"relationName\":\"FichaMedicaToPaciente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Especialidad\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"medico\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Medico\",\"relationName\":\"EspecialidadToMedico\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ObraSocial\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paciente\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Paciente\",\"relationName\":\"ObraSocialToPaciente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"TipoDocumentoEnum\":{\"values\":[{\"name\":\"CEDULA_IDENTIDAD\",\"dbName\":null},{\"name\":\"DOCUMENTO_NACIONAL_IDENTIDAD\",\"dbName\":null},{\"name\":\"LIBRETA_CIVICA\",\"dbName\":null},{\"name\":\"LIBRETA_ENROLAMIENTO\",\"dbName\":null},{\"name\":\"PASAPORTE\",\"dbName\":null}],\"dbName\":null},\"TipoMatriculaEnum\":{\"values\":[{\"name\":\"nacional\",\"dbName\":null},{\"name\":\"provincial\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    POSTGRES_PRISMA_URL: typeof globalThis !== 'undefined' && globalThis['POSTGRES_PRISMA_URL'] || typeof process !== 'undefined' && process.env && process.env.POSTGRES_PRISMA_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

