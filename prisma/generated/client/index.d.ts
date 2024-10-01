
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Ubicacion
 * 
 */
export type Ubicacion = $Result.DefaultSelection<Prisma.$UbicacionPayload>
/**
 * Model Secretaria
 * 
 */
export type Secretaria = $Result.DefaultSelection<Prisma.$SecretariaPayload>
/**
 * Model Medico
 * 
 */
export type Medico = $Result.DefaultSelection<Prisma.$MedicoPayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model FichaMedica
 * 
 */
export type FichaMedica = $Result.DefaultSelection<Prisma.$FichaMedicaPayload>
/**
 * Model Especialidad
 * 
 */
export type Especialidad = $Result.DefaultSelection<Prisma.$EspecialidadPayload>
/**
 * Model ObraSocial
 * 
 */
export type ObraSocial = $Result.DefaultSelection<Prisma.$ObraSocialPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoMatriculaEnum: {
  nacional: 'nacional',
  provincial: 'provincial'
};

export type TipoMatriculaEnum = (typeof TipoMatriculaEnum)[keyof typeof TipoMatriculaEnum]


export const TipoDocumentoEnum: {
  CEDULA_IDENTIDAD: 'CEDULA_IDENTIDAD',
  DOCUMENTO_NACIONAL_IDENTIDAD: 'DOCUMENTO_NACIONAL_IDENTIDAD',
  LIBRETA_CIVICA: 'LIBRETA_CIVICA',
  LIBRETA_ENROLAMIENTO: 'LIBRETA_ENROLAMIENTO',
  PASAPORTE: 'PASAPORTE'
};

export type TipoDocumentoEnum = (typeof TipoDocumentoEnum)[keyof typeof TipoDocumentoEnum]

}

export type TipoMatriculaEnum = $Enums.TipoMatriculaEnum

export const TipoMatriculaEnum: typeof $Enums.TipoMatriculaEnum

export type TipoDocumentoEnum = $Enums.TipoDocumentoEnum

export const TipoDocumentoEnum: typeof $Enums.TipoDocumentoEnum

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ubicacions
 * const ubicacions = await prisma.ubicacion.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ubicacions
   * const ubicacions = await prisma.ubicacion.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.ubicacion`: Exposes CRUD operations for the **Ubicacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ubicacions
    * const ubicacions = await prisma.ubicacion.findMany()
    * ```
    */
  get ubicacion(): Prisma.UbicacionDelegate<ExtArgs>;

  /**
   * `prisma.secretaria`: Exposes CRUD operations for the **Secretaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Secretarias
    * const secretarias = await prisma.secretaria.findMany()
    * ```
    */
  get secretaria(): Prisma.SecretariaDelegate<ExtArgs>;

  /**
   * `prisma.medico`: Exposes CRUD operations for the **Medico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicos
    * const medicos = await prisma.medico.findMany()
    * ```
    */
  get medico(): Prisma.MedicoDelegate<ExtArgs>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.fichaMedica`: Exposes CRUD operations for the **FichaMedica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FichaMedicas
    * const fichaMedicas = await prisma.fichaMedica.findMany()
    * ```
    */
  get fichaMedica(): Prisma.FichaMedicaDelegate<ExtArgs>;

  /**
   * `prisma.especialidad`: Exposes CRUD operations for the **Especialidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidads
    * const especialidads = await prisma.especialidad.findMany()
    * ```
    */
  get especialidad(): Prisma.EspecialidadDelegate<ExtArgs>;

  /**
   * `prisma.obraSocial`: Exposes CRUD operations for the **ObraSocial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ObraSocials
    * const obraSocials = await prisma.obraSocial.findMany()
    * ```
    */
  get obraSocial(): Prisma.ObraSocialDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "ubicacion" | "secretaria" | "medico" | "paciente" | "admin" | "usuario" | "fichaMedica" | "especialidad" | "obraSocial"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Ubicacion: {
        payload: Prisma.$UbicacionPayload<ExtArgs>
        fields: Prisma.UbicacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UbicacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UbicacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          findFirst: {
            args: Prisma.UbicacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UbicacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          findMany: {
            args: Prisma.UbicacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>[]
          }
          create: {
            args: Prisma.UbicacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          createMany: {
            args: Prisma.UbicacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UbicacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>[]
          }
          delete: {
            args: Prisma.UbicacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          update: {
            args: Prisma.UbicacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          deleteMany: {
            args: Prisma.UbicacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UbicacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UbicacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          aggregate: {
            args: Prisma.UbicacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUbicacion>
          }
          groupBy: {
            args: Prisma.UbicacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UbicacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UbicacionCountArgs<ExtArgs>
            result: $Utils.Optional<UbicacionCountAggregateOutputType> | number
          }
        }
      }
      Secretaria: {
        payload: Prisma.$SecretariaPayload<ExtArgs>
        fields: Prisma.SecretariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecretariaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecretariaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          findFirst: {
            args: Prisma.SecretariaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecretariaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          findMany: {
            args: Prisma.SecretariaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>[]
          }
          create: {
            args: Prisma.SecretariaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          createMany: {
            args: Prisma.SecretariaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecretariaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>[]
          }
          delete: {
            args: Prisma.SecretariaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          update: {
            args: Prisma.SecretariaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          deleteMany: {
            args: Prisma.SecretariaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecretariaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SecretariaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretariaPayload>
          }
          aggregate: {
            args: Prisma.SecretariaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecretaria>
          }
          groupBy: {
            args: Prisma.SecretariaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretariaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecretariaCountArgs<ExtArgs>
            result: $Utils.Optional<SecretariaCountAggregateOutputType> | number
          }
        }
      }
      Medico: {
        payload: Prisma.$MedicoPayload<ExtArgs>
        fields: Prisma.MedicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findFirst: {
            args: Prisma.MedicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          findMany: {
            args: Prisma.MedicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          create: {
            args: Prisma.MedicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          createMany: {
            args: Prisma.MedicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>[]
          }
          delete: {
            args: Prisma.MedicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          update: {
            args: Prisma.MedicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          deleteMany: {
            args: Prisma.MedicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicoPayload>
          }
          aggregate: {
            args: Prisma.MedicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedico>
          }
          groupBy: {
            args: Prisma.MedicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicoCountArgs<ExtArgs>
            result: $Utils.Optional<MedicoCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      FichaMedica: {
        payload: Prisma.$FichaMedicaPayload<ExtArgs>
        fields: Prisma.FichaMedicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FichaMedicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichaMedicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FichaMedicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichaMedicaPayload>
          }
          findFirst: {
            args: Prisma.FichaMedicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichaMedicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FichaMedicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichaMedicaPayload>
          }
          findMany: {
            args: Prisma.FichaMedicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichaMedicaPayload>[]
          }
          create: {
            args: Prisma.FichaMedicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichaMedicaPayload>
          }
          createMany: {
            args: Prisma.FichaMedicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FichaMedicaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichaMedicaPayload>[]
          }
          delete: {
            args: Prisma.FichaMedicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichaMedicaPayload>
          }
          update: {
            args: Prisma.FichaMedicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichaMedicaPayload>
          }
          deleteMany: {
            args: Prisma.FichaMedicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FichaMedicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FichaMedicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FichaMedicaPayload>
          }
          aggregate: {
            args: Prisma.FichaMedicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFichaMedica>
          }
          groupBy: {
            args: Prisma.FichaMedicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FichaMedicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FichaMedicaCountArgs<ExtArgs>
            result: $Utils.Optional<FichaMedicaCountAggregateOutputType> | number
          }
        }
      }
      Especialidad: {
        payload: Prisma.$EspecialidadPayload<ExtArgs>
        fields: Prisma.EspecialidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecialidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecialidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findFirst: {
            args: Prisma.EspecialidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecialidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          findMany: {
            args: Prisma.EspecialidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>[]
          }
          create: {
            args: Prisma.EspecialidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          createMany: {
            args: Prisma.EspecialidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EspecialidadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>[]
          }
          delete: {
            args: Prisma.EspecialidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          update: {
            args: Prisma.EspecialidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          deleteMany: {
            args: Prisma.EspecialidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecialidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EspecialidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadPayload>
          }
          aggregate: {
            args: Prisma.EspecialidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidad>
          }
          groupBy: {
            args: Prisma.EspecialidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecialidadCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadCountAggregateOutputType> | number
          }
        }
      }
      ObraSocial: {
        payload: Prisma.$ObraSocialPayload<ExtArgs>
        fields: Prisma.ObraSocialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObraSocialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObraSocialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          findFirst: {
            args: Prisma.ObraSocialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObraSocialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          findMany: {
            args: Prisma.ObraSocialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>[]
          }
          create: {
            args: Prisma.ObraSocialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          createMany: {
            args: Prisma.ObraSocialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObraSocialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>[]
          }
          delete: {
            args: Prisma.ObraSocialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          update: {
            args: Prisma.ObraSocialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          deleteMany: {
            args: Prisma.ObraSocialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObraSocialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ObraSocialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraSocialPayload>
          }
          aggregate: {
            args: Prisma.ObraSocialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObraSocial>
          }
          groupBy: {
            args: Prisma.ObraSocialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObraSocialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObraSocialCountArgs<ExtArgs>
            result: $Utils.Optional<ObraSocialCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EspecialidadCountOutputType
   */

  export type EspecialidadCountOutputType = {
    medico: number
  }

  export type EspecialidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | EspecialidadCountOutputTypeCountMedicoArgs
  }

  // Custom InputTypes
  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadCountOutputType
     */
    select?: EspecialidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecialidadCountOutputType without action
   */
  export type EspecialidadCountOutputTypeCountMedicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicoWhereInput
  }


  /**
   * Count Type ObraSocialCountOutputType
   */

  export type ObraSocialCountOutputType = {
    paciente: number
  }

  export type ObraSocialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | ObraSocialCountOutputTypeCountPacienteArgs
  }

  // Custom InputTypes
  /**
   * ObraSocialCountOutputType without action
   */
  export type ObraSocialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocialCountOutputType
     */
    select?: ObraSocialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObraSocialCountOutputType without action
   */
  export type ObraSocialCountOutputTypeCountPacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Ubicacion
   */

  export type AggregateUbicacion = {
    _count: UbicacionCountAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  export type UbicacionMinAggregateOutputType = {
    id: string | null
    calle: string | null
    numero: string | null
    codigo_postal: string | null
    ciudad: string | null
    provincia: string | null
  }

  export type UbicacionMaxAggregateOutputType = {
    id: string | null
    calle: string | null
    numero: string | null
    codigo_postal: string | null
    ciudad: string | null
    provincia: string | null
  }

  export type UbicacionCountAggregateOutputType = {
    id: number
    calle: number
    numero: number
    codigo_postal: number
    ciudad: number
    provincia: number
    _all: number
  }


  export type UbicacionMinAggregateInputType = {
    id?: true
    calle?: true
    numero?: true
    codigo_postal?: true
    ciudad?: true
    provincia?: true
  }

  export type UbicacionMaxAggregateInputType = {
    id?: true
    calle?: true
    numero?: true
    codigo_postal?: true
    ciudad?: true
    provincia?: true
  }

  export type UbicacionCountAggregateInputType = {
    id?: true
    calle?: true
    numero?: true
    codigo_postal?: true
    ciudad?: true
    provincia?: true
    _all?: true
  }

  export type UbicacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ubicacion to aggregate.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ubicacions
    **/
    _count?: true | UbicacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UbicacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UbicacionMaxAggregateInputType
  }

  export type GetUbicacionAggregateType<T extends UbicacionAggregateArgs> = {
        [P in keyof T & keyof AggregateUbicacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUbicacion[P]>
      : GetScalarType<T[P], AggregateUbicacion[P]>
  }




  export type UbicacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbicacionWhereInput
    orderBy?: UbicacionOrderByWithAggregationInput | UbicacionOrderByWithAggregationInput[]
    by: UbicacionScalarFieldEnum[] | UbicacionScalarFieldEnum
    having?: UbicacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UbicacionCountAggregateInputType | true
    _min?: UbicacionMinAggregateInputType
    _max?: UbicacionMaxAggregateInputType
  }

  export type UbicacionGroupByOutputType = {
    id: string
    calle: string
    numero: string
    codigo_postal: string
    ciudad: string
    provincia: string
    _count: UbicacionCountAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  type GetUbicacionGroupByPayload<T extends UbicacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UbicacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UbicacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
            : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
        }
      >
    >


  export type UbicacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calle?: boolean
    numero?: boolean
    codigo_postal?: boolean
    ciudad?: boolean
    provincia?: boolean
    medico?: boolean | Ubicacion$medicoArgs<ExtArgs>
    paciente?: boolean | Ubicacion$pacienteArgs<ExtArgs>
    secretaria?: boolean | Ubicacion$secretariaArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacion"]>

  export type UbicacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calle?: boolean
    numero?: boolean
    codigo_postal?: boolean
    ciudad?: boolean
    provincia?: boolean
  }, ExtArgs["result"]["ubicacion"]>

  export type UbicacionSelectScalar = {
    id?: boolean
    calle?: boolean
    numero?: boolean
    codigo_postal?: boolean
    ciudad?: boolean
    provincia?: boolean
  }

  export type UbicacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | Ubicacion$medicoArgs<ExtArgs>
    paciente?: boolean | Ubicacion$pacienteArgs<ExtArgs>
    secretaria?: boolean | Ubicacion$secretariaArgs<ExtArgs>
  }
  export type UbicacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UbicacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ubicacion"
    objects: {
      medico: Prisma.$MedicoPayload<ExtArgs> | null
      paciente: Prisma.$PacientePayload<ExtArgs> | null
      secretaria: Prisma.$SecretariaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      calle: string
      numero: string
      codigo_postal: string
      ciudad: string
      provincia: string
    }, ExtArgs["result"]["ubicacion"]>
    composites: {}
  }

  type UbicacionGetPayload<S extends boolean | null | undefined | UbicacionDefaultArgs> = $Result.GetResult<Prisma.$UbicacionPayload, S>

  type UbicacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UbicacionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UbicacionCountAggregateInputType | true
    }

  export interface UbicacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ubicacion'], meta: { name: 'Ubicacion' } }
    /**
     * Find zero or one Ubicacion that matches the filter.
     * @param {UbicacionFindUniqueArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UbicacionFindUniqueArgs>(args: SelectSubset<T, UbicacionFindUniqueArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ubicacion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UbicacionFindUniqueOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UbicacionFindUniqueOrThrowArgs>(args: SelectSubset<T, UbicacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ubicacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFindFirstArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UbicacionFindFirstArgs>(args?: SelectSubset<T, UbicacionFindFirstArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ubicacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFindFirstOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UbicacionFindFirstOrThrowArgs>(args?: SelectSubset<T, UbicacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ubicacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany()
     * 
     * // Get first 10 Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ubicacionWithIdOnly = await prisma.ubicacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UbicacionFindManyArgs>(args?: SelectSubset<T, UbicacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ubicacion.
     * @param {UbicacionCreateArgs} args - Arguments to create a Ubicacion.
     * @example
     * // Create one Ubicacion
     * const Ubicacion = await prisma.ubicacion.create({
     *   data: {
     *     // ... data to create a Ubicacion
     *   }
     * })
     * 
     */
    create<T extends UbicacionCreateArgs>(args: SelectSubset<T, UbicacionCreateArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ubicacions.
     * @param {UbicacionCreateManyArgs} args - Arguments to create many Ubicacions.
     * @example
     * // Create many Ubicacions
     * const ubicacion = await prisma.ubicacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UbicacionCreateManyArgs>(args?: SelectSubset<T, UbicacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ubicacions and returns the data saved in the database.
     * @param {UbicacionCreateManyAndReturnArgs} args - Arguments to create many Ubicacions.
     * @example
     * // Create many Ubicacions
     * const ubicacion = await prisma.ubicacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ubicacions and only return the `id`
     * const ubicacionWithIdOnly = await prisma.ubicacion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UbicacionCreateManyAndReturnArgs>(args?: SelectSubset<T, UbicacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ubicacion.
     * @param {UbicacionDeleteArgs} args - Arguments to delete one Ubicacion.
     * @example
     * // Delete one Ubicacion
     * const Ubicacion = await prisma.ubicacion.delete({
     *   where: {
     *     // ... filter to delete one Ubicacion
     *   }
     * })
     * 
     */
    delete<T extends UbicacionDeleteArgs>(args: SelectSubset<T, UbicacionDeleteArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ubicacion.
     * @param {UbicacionUpdateArgs} args - Arguments to update one Ubicacion.
     * @example
     * // Update one Ubicacion
     * const ubicacion = await prisma.ubicacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UbicacionUpdateArgs>(args: SelectSubset<T, UbicacionUpdateArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ubicacions.
     * @param {UbicacionDeleteManyArgs} args - Arguments to filter Ubicacions to delete.
     * @example
     * // Delete a few Ubicacions
     * const { count } = await prisma.ubicacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UbicacionDeleteManyArgs>(args?: SelectSubset<T, UbicacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ubicacions
     * const ubicacion = await prisma.ubicacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UbicacionUpdateManyArgs>(args: SelectSubset<T, UbicacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ubicacion.
     * @param {UbicacionUpsertArgs} args - Arguments to update or create a Ubicacion.
     * @example
     * // Update or create a Ubicacion
     * const ubicacion = await prisma.ubicacion.upsert({
     *   create: {
     *     // ... data to create a Ubicacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ubicacion we want to update
     *   }
     * })
     */
    upsert<T extends UbicacionUpsertArgs>(args: SelectSubset<T, UbicacionUpsertArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionCountArgs} args - Arguments to filter Ubicacions to count.
     * @example
     * // Count the number of Ubicacions
     * const count = await prisma.ubicacion.count({
     *   where: {
     *     // ... the filter for the Ubicacions we want to count
     *   }
     * })
    **/
    count<T extends UbicacionCountArgs>(
      args?: Subset<T, UbicacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UbicacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UbicacionAggregateArgs>(args: Subset<T, UbicacionAggregateArgs>): Prisma.PrismaPromise<GetUbicacionAggregateType<T>>

    /**
     * Group by Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UbicacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UbicacionGroupByArgs['orderBy'] }
        : { orderBy?: UbicacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UbicacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUbicacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ubicacion model
   */
  readonly fields: UbicacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ubicacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UbicacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medico<T extends Ubicacion$medicoArgs<ExtArgs> = {}>(args?: Subset<T, Ubicacion$medicoArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    paciente<T extends Ubicacion$pacienteArgs<ExtArgs> = {}>(args?: Subset<T, Ubicacion$pacienteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    secretaria<T extends Ubicacion$secretariaArgs<ExtArgs> = {}>(args?: Subset<T, Ubicacion$secretariaArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ubicacion model
   */ 
  interface UbicacionFieldRefs {
    readonly id: FieldRef<"Ubicacion", 'String'>
    readonly calle: FieldRef<"Ubicacion", 'String'>
    readonly numero: FieldRef<"Ubicacion", 'String'>
    readonly codigo_postal: FieldRef<"Ubicacion", 'String'>
    readonly ciudad: FieldRef<"Ubicacion", 'String'>
    readonly provincia: FieldRef<"Ubicacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ubicacion findUnique
   */
  export type UbicacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion findUniqueOrThrow
   */
  export type UbicacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion findFirst
   */
  export type UbicacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ubicacions.
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * Ubicacion findFirstOrThrow
   */
  export type UbicacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ubicacions.
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * Ubicacion findMany
   */
  export type UbicacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacions to fetch.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ubicacions.
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * Ubicacion create
   */
  export type UbicacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Ubicacion.
     */
    data: XOR<UbicacionCreateInput, UbicacionUncheckedCreateInput>
  }

  /**
   * Ubicacion createMany
   */
  export type UbicacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ubicacions.
     */
    data: UbicacionCreateManyInput | UbicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ubicacion createManyAndReturn
   */
  export type UbicacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Ubicacions.
     */
    data: UbicacionCreateManyInput | UbicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ubicacion update
   */
  export type UbicacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Ubicacion.
     */
    data: XOR<UbicacionUpdateInput, UbicacionUncheckedUpdateInput>
    /**
     * Choose, which Ubicacion to update.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion updateMany
   */
  export type UbicacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ubicacions.
     */
    data: XOR<UbicacionUpdateManyMutationInput, UbicacionUncheckedUpdateManyInput>
    /**
     * Filter which Ubicacions to update
     */
    where?: UbicacionWhereInput
  }

  /**
   * Ubicacion upsert
   */
  export type UbicacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Ubicacion to update in case it exists.
     */
    where: UbicacionWhereUniqueInput
    /**
     * In case the Ubicacion found by the `where` argument doesn't exist, create a new Ubicacion with this data.
     */
    create: XOR<UbicacionCreateInput, UbicacionUncheckedCreateInput>
    /**
     * In case the Ubicacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UbicacionUpdateInput, UbicacionUncheckedUpdateInput>
  }

  /**
   * Ubicacion delete
   */
  export type UbicacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter which Ubicacion to delete.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion deleteMany
   */
  export type UbicacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ubicacions to delete
     */
    where?: UbicacionWhereInput
  }

  /**
   * Ubicacion.medico
   */
  export type Ubicacion$medicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    where?: MedicoWhereInput
  }

  /**
   * Ubicacion.paciente
   */
  export type Ubicacion$pacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
  }

  /**
   * Ubicacion.secretaria
   */
  export type Ubicacion$secretariaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    where?: SecretariaWhereInput
  }

  /**
   * Ubicacion without action
   */
  export type UbicacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
  }


  /**
   * Model Secretaria
   */

  export type AggregateSecretaria = {
    _count: SecretariaCountAggregateOutputType | null
    _min: SecretariaMinAggregateOutputType | null
    _max: SecretariaMaxAggregateOutputType | null
  }

  export type SecretariaMinAggregateOutputType = {
    usuario_id: string | null
    numero_telefono: string | null
    ubicacion_id: string | null
  }

  export type SecretariaMaxAggregateOutputType = {
    usuario_id: string | null
    numero_telefono: string | null
    ubicacion_id: string | null
  }

  export type SecretariaCountAggregateOutputType = {
    usuario_id: number
    numero_telefono: number
    ubicacion_id: number
    _all: number
  }


  export type SecretariaMinAggregateInputType = {
    usuario_id?: true
    numero_telefono?: true
    ubicacion_id?: true
  }

  export type SecretariaMaxAggregateInputType = {
    usuario_id?: true
    numero_telefono?: true
    ubicacion_id?: true
  }

  export type SecretariaCountAggregateInputType = {
    usuario_id?: true
    numero_telefono?: true
    ubicacion_id?: true
    _all?: true
  }

  export type SecretariaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretaria to aggregate.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Secretarias
    **/
    _count?: true | SecretariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretariaMaxAggregateInputType
  }

  export type GetSecretariaAggregateType<T extends SecretariaAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretaria[P]>
      : GetScalarType<T[P], AggregateSecretaria[P]>
  }




  export type SecretariaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecretariaWhereInput
    orderBy?: SecretariaOrderByWithAggregationInput | SecretariaOrderByWithAggregationInput[]
    by: SecretariaScalarFieldEnum[] | SecretariaScalarFieldEnum
    having?: SecretariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretariaCountAggregateInputType | true
    _min?: SecretariaMinAggregateInputType
    _max?: SecretariaMaxAggregateInputType
  }

  export type SecretariaGroupByOutputType = {
    usuario_id: string
    numero_telefono: string
    ubicacion_id: string
    _count: SecretariaCountAggregateOutputType | null
    _min: SecretariaMinAggregateOutputType | null
    _max: SecretariaMaxAggregateOutputType | null
  }

  type GetSecretariaGroupByPayload<T extends SecretariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretariaGroupByOutputType[P]>
            : GetScalarType<T[P], SecretariaGroupByOutputType[P]>
        }
      >
    >


  export type SecretariaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    numero_telefono?: boolean
    ubicacion_id?: boolean
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretaria"]>

  export type SecretariaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    numero_telefono?: boolean
    ubicacion_id?: boolean
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["secretaria"]>

  export type SecretariaSelectScalar = {
    usuario_id?: boolean
    numero_telefono?: boolean
    ubicacion_id?: boolean
  }

  export type SecretariaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SecretariaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $SecretariaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Secretaria"
    objects: {
      ubicacion: Prisma.$UbicacionPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: string
      numero_telefono: string
      ubicacion_id: string
    }, ExtArgs["result"]["secretaria"]>
    composites: {}
  }

  type SecretariaGetPayload<S extends boolean | null | undefined | SecretariaDefaultArgs> = $Result.GetResult<Prisma.$SecretariaPayload, S>

  type SecretariaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SecretariaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SecretariaCountAggregateInputType | true
    }

  export interface SecretariaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Secretaria'], meta: { name: 'Secretaria' } }
    /**
     * Find zero or one Secretaria that matches the filter.
     * @param {SecretariaFindUniqueArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecretariaFindUniqueArgs>(args: SelectSubset<T, SecretariaFindUniqueArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Secretaria that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SecretariaFindUniqueOrThrowArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecretariaFindUniqueOrThrowArgs>(args: SelectSubset<T, SecretariaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Secretaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindFirstArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecretariaFindFirstArgs>(args?: SelectSubset<T, SecretariaFindFirstArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Secretaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindFirstOrThrowArgs} args - Arguments to find a Secretaria
     * @example
     * // Get one Secretaria
     * const secretaria = await prisma.secretaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecretariaFindFirstOrThrowArgs>(args?: SelectSubset<T, SecretariaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Secretarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Secretarias
     * const secretarias = await prisma.secretaria.findMany()
     * 
     * // Get first 10 Secretarias
     * const secretarias = await prisma.secretaria.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const secretariaWithUsuario_idOnly = await prisma.secretaria.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends SecretariaFindManyArgs>(args?: SelectSubset<T, SecretariaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Secretaria.
     * @param {SecretariaCreateArgs} args - Arguments to create a Secretaria.
     * @example
     * // Create one Secretaria
     * const Secretaria = await prisma.secretaria.create({
     *   data: {
     *     // ... data to create a Secretaria
     *   }
     * })
     * 
     */
    create<T extends SecretariaCreateArgs>(args: SelectSubset<T, SecretariaCreateArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Secretarias.
     * @param {SecretariaCreateManyArgs} args - Arguments to create many Secretarias.
     * @example
     * // Create many Secretarias
     * const secretaria = await prisma.secretaria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecretariaCreateManyArgs>(args?: SelectSubset<T, SecretariaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Secretarias and returns the data saved in the database.
     * @param {SecretariaCreateManyAndReturnArgs} args - Arguments to create many Secretarias.
     * @example
     * // Create many Secretarias
     * const secretaria = await prisma.secretaria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Secretarias and only return the `usuario_id`
     * const secretariaWithUsuario_idOnly = await prisma.secretaria.createManyAndReturn({ 
     *   select: { usuario_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecretariaCreateManyAndReturnArgs>(args?: SelectSubset<T, SecretariaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Secretaria.
     * @param {SecretariaDeleteArgs} args - Arguments to delete one Secretaria.
     * @example
     * // Delete one Secretaria
     * const Secretaria = await prisma.secretaria.delete({
     *   where: {
     *     // ... filter to delete one Secretaria
     *   }
     * })
     * 
     */
    delete<T extends SecretariaDeleteArgs>(args: SelectSubset<T, SecretariaDeleteArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Secretaria.
     * @param {SecretariaUpdateArgs} args - Arguments to update one Secretaria.
     * @example
     * // Update one Secretaria
     * const secretaria = await prisma.secretaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecretariaUpdateArgs>(args: SelectSubset<T, SecretariaUpdateArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Secretarias.
     * @param {SecretariaDeleteManyArgs} args - Arguments to filter Secretarias to delete.
     * @example
     * // Delete a few Secretarias
     * const { count } = await prisma.secretaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecretariaDeleteManyArgs>(args?: SelectSubset<T, SecretariaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Secretarias
     * const secretaria = await prisma.secretaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecretariaUpdateManyArgs>(args: SelectSubset<T, SecretariaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Secretaria.
     * @param {SecretariaUpsertArgs} args - Arguments to update or create a Secretaria.
     * @example
     * // Update or create a Secretaria
     * const secretaria = await prisma.secretaria.upsert({
     *   create: {
     *     // ... data to create a Secretaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Secretaria we want to update
     *   }
     * })
     */
    upsert<T extends SecretariaUpsertArgs>(args: SelectSubset<T, SecretariaUpsertArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Secretarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaCountArgs} args - Arguments to filter Secretarias to count.
     * @example
     * // Count the number of Secretarias
     * const count = await prisma.secretaria.count({
     *   where: {
     *     // ... the filter for the Secretarias we want to count
     *   }
     * })
    **/
    count<T extends SecretariaCountArgs>(
      args?: Subset<T, SecretariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Secretaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecretariaAggregateArgs>(args: Subset<T, SecretariaAggregateArgs>): Prisma.PrismaPromise<GetSecretariaAggregateType<T>>

    /**
     * Group by Secretaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretariaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecretariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecretariaGroupByArgs['orderBy'] }
        : { orderBy?: SecretariaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecretariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Secretaria model
   */
  readonly fields: SecretariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Secretaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecretariaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ubicacion<T extends UbicacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UbicacionDefaultArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Secretaria model
   */ 
  interface SecretariaFieldRefs {
    readonly usuario_id: FieldRef<"Secretaria", 'String'>
    readonly numero_telefono: FieldRef<"Secretaria", 'String'>
    readonly ubicacion_id: FieldRef<"Secretaria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Secretaria findUnique
   */
  export type SecretariaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria findUniqueOrThrow
   */
  export type SecretariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria findFirst
   */
  export type SecretariaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarias.
     */
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }

  /**
   * Secretaria findFirstOrThrow
   */
  export type SecretariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretaria to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarias.
     */
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }

  /**
   * Secretaria findMany
   */
  export type SecretariaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter, which Secretarias to fetch.
     */
    where?: SecretariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarias to fetch.
     */
    orderBy?: SecretariaOrderByWithRelationInput | SecretariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Secretarias.
     */
    cursor?: SecretariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarias.
     */
    skip?: number
    distinct?: SecretariaScalarFieldEnum | SecretariaScalarFieldEnum[]
  }

  /**
   * Secretaria create
   */
  export type SecretariaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * The data needed to create a Secretaria.
     */
    data: XOR<SecretariaCreateInput, SecretariaUncheckedCreateInput>
  }

  /**
   * Secretaria createMany
   */
  export type SecretariaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Secretarias.
     */
    data: SecretariaCreateManyInput | SecretariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Secretaria createManyAndReturn
   */
  export type SecretariaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Secretarias.
     */
    data: SecretariaCreateManyInput | SecretariaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Secretaria update
   */
  export type SecretariaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * The data needed to update a Secretaria.
     */
    data: XOR<SecretariaUpdateInput, SecretariaUncheckedUpdateInput>
    /**
     * Choose, which Secretaria to update.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria updateMany
   */
  export type SecretariaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Secretarias.
     */
    data: XOR<SecretariaUpdateManyMutationInput, SecretariaUncheckedUpdateManyInput>
    /**
     * Filter which Secretarias to update
     */
    where?: SecretariaWhereInput
  }

  /**
   * Secretaria upsert
   */
  export type SecretariaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * The filter to search for the Secretaria to update in case it exists.
     */
    where: SecretariaWhereUniqueInput
    /**
     * In case the Secretaria found by the `where` argument doesn't exist, create a new Secretaria with this data.
     */
    create: XOR<SecretariaCreateInput, SecretariaUncheckedCreateInput>
    /**
     * In case the Secretaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecretariaUpdateInput, SecretariaUncheckedUpdateInput>
  }

  /**
   * Secretaria delete
   */
  export type SecretariaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    /**
     * Filter which Secretaria to delete.
     */
    where: SecretariaWhereUniqueInput
  }

  /**
   * Secretaria deleteMany
   */
  export type SecretariaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretarias to delete
     */
    where?: SecretariaWhereInput
  }

  /**
   * Secretaria without action
   */
  export type SecretariaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
  }


  /**
   * Model Medico
   */

  export type AggregateMedico = {
    _count: MedicoCountAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  export type MedicoMinAggregateOutputType = {
    usuario_id: string | null
    tipo_matricula: $Enums.TipoMatriculaEnum | null
    numero_matricula: string | null
    numero_telefono: string | null
    ubicacion_id: string | null
    especialidad_id: string | null
    descripcion: string | null
  }

  export type MedicoMaxAggregateOutputType = {
    usuario_id: string | null
    tipo_matricula: $Enums.TipoMatriculaEnum | null
    numero_matricula: string | null
    numero_telefono: string | null
    ubicacion_id: string | null
    especialidad_id: string | null
    descripcion: string | null
  }

  export type MedicoCountAggregateOutputType = {
    usuario_id: number
    tipo_matricula: number
    numero_matricula: number
    numero_telefono: number
    ubicacion_id: number
    especialidad_id: number
    descripcion: number
    _all: number
  }


  export type MedicoMinAggregateInputType = {
    usuario_id?: true
    tipo_matricula?: true
    numero_matricula?: true
    numero_telefono?: true
    ubicacion_id?: true
    especialidad_id?: true
    descripcion?: true
  }

  export type MedicoMaxAggregateInputType = {
    usuario_id?: true
    tipo_matricula?: true
    numero_matricula?: true
    numero_telefono?: true
    ubicacion_id?: true
    especialidad_id?: true
    descripcion?: true
  }

  export type MedicoCountAggregateInputType = {
    usuario_id?: true
    tipo_matricula?: true
    numero_matricula?: true
    numero_telefono?: true
    ubicacion_id?: true
    especialidad_id?: true
    descripcion?: true
    _all?: true
  }

  export type MedicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medico to aggregate.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicos
    **/
    _count?: true | MedicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicoMaxAggregateInputType
  }

  export type GetMedicoAggregateType<T extends MedicoAggregateArgs> = {
        [P in keyof T & keyof AggregateMedico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedico[P]>
      : GetScalarType<T[P], AggregateMedico[P]>
  }




  export type MedicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicoWhereInput
    orderBy?: MedicoOrderByWithAggregationInput | MedicoOrderByWithAggregationInput[]
    by: MedicoScalarFieldEnum[] | MedicoScalarFieldEnum
    having?: MedicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicoCountAggregateInputType | true
    _min?: MedicoMinAggregateInputType
    _max?: MedicoMaxAggregateInputType
  }

  export type MedicoGroupByOutputType = {
    usuario_id: string
    tipo_matricula: $Enums.TipoMatriculaEnum
    numero_matricula: string
    numero_telefono: string
    ubicacion_id: string
    especialidad_id: string
    descripcion: string | null
    _count: MedicoCountAggregateOutputType | null
    _min: MedicoMinAggregateOutputType | null
    _max: MedicoMaxAggregateOutputType | null
  }

  type GetMedicoGroupByPayload<T extends MedicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicoGroupByOutputType[P]>
            : GetScalarType<T[P], MedicoGroupByOutputType[P]>
        }
      >
    >


  export type MedicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    tipo_matricula?: boolean
    numero_matricula?: boolean
    numero_telefono?: boolean
    ubicacion_id?: boolean
    especialidad_id?: boolean
    descripcion?: boolean
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico"]>

  export type MedicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    tipo_matricula?: boolean
    numero_matricula?: boolean
    numero_telefono?: boolean
    ubicacion_id?: boolean
    especialidad_id?: boolean
    descripcion?: boolean
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medico"]>

  export type MedicoSelectScalar = {
    usuario_id?: boolean
    tipo_matricula?: boolean
    numero_matricula?: boolean
    numero_telefono?: boolean
    ubicacion_id?: boolean
    especialidad_id?: boolean
    descripcion?: boolean
  }

  export type MedicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MedicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidad?: boolean | EspecialidadDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MedicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medico"
    objects: {
      especialidad: Prisma.$EspecialidadPayload<ExtArgs>
      ubicacion: Prisma.$UbicacionPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: string
      tipo_matricula: $Enums.TipoMatriculaEnum
      numero_matricula: string
      numero_telefono: string
      ubicacion_id: string
      especialidad_id: string
      descripcion: string | null
    }, ExtArgs["result"]["medico"]>
    composites: {}
  }

  type MedicoGetPayload<S extends boolean | null | undefined | MedicoDefaultArgs> = $Result.GetResult<Prisma.$MedicoPayload, S>

  type MedicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicoCountAggregateInputType | true
    }

  export interface MedicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medico'], meta: { name: 'Medico' } }
    /**
     * Find zero or one Medico that matches the filter.
     * @param {MedicoFindUniqueArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicoFindUniqueArgs>(args: SelectSubset<T, MedicoFindUniqueArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Medico that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicoFindUniqueOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicoFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Medico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicoFindFirstArgs>(args?: SelectSubset<T, MedicoFindFirstArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Medico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindFirstOrThrowArgs} args - Arguments to find a Medico
     * @example
     * // Get one Medico
     * const medico = await prisma.medico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicoFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Medicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicos
     * const medicos = await prisma.medico.findMany()
     * 
     * // Get first 10 Medicos
     * const medicos = await prisma.medico.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const medicoWithUsuario_idOnly = await prisma.medico.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends MedicoFindManyArgs>(args?: SelectSubset<T, MedicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Medico.
     * @param {MedicoCreateArgs} args - Arguments to create a Medico.
     * @example
     * // Create one Medico
     * const Medico = await prisma.medico.create({
     *   data: {
     *     // ... data to create a Medico
     *   }
     * })
     * 
     */
    create<T extends MedicoCreateArgs>(args: SelectSubset<T, MedicoCreateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Medicos.
     * @param {MedicoCreateManyArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicoCreateManyArgs>(args?: SelectSubset<T, MedicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicos and returns the data saved in the database.
     * @param {MedicoCreateManyAndReturnArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medico = await prisma.medico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicos and only return the `usuario_id`
     * const medicoWithUsuario_idOnly = await prisma.medico.createManyAndReturn({ 
     *   select: { usuario_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicoCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Medico.
     * @param {MedicoDeleteArgs} args - Arguments to delete one Medico.
     * @example
     * // Delete one Medico
     * const Medico = await prisma.medico.delete({
     *   where: {
     *     // ... filter to delete one Medico
     *   }
     * })
     * 
     */
    delete<T extends MedicoDeleteArgs>(args: SelectSubset<T, MedicoDeleteArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Medico.
     * @param {MedicoUpdateArgs} args - Arguments to update one Medico.
     * @example
     * // Update one Medico
     * const medico = await prisma.medico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicoUpdateArgs>(args: SelectSubset<T, MedicoUpdateArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Medicos.
     * @param {MedicoDeleteManyArgs} args - Arguments to filter Medicos to delete.
     * @example
     * // Delete a few Medicos
     * const { count } = await prisma.medico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicoDeleteManyArgs>(args?: SelectSubset<T, MedicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicos
     * const medico = await prisma.medico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicoUpdateManyArgs>(args: SelectSubset<T, MedicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medico.
     * @param {MedicoUpsertArgs} args - Arguments to update or create a Medico.
     * @example
     * // Update or create a Medico
     * const medico = await prisma.medico.upsert({
     *   create: {
     *     // ... data to create a Medico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medico we want to update
     *   }
     * })
     */
    upsert<T extends MedicoUpsertArgs>(args: SelectSubset<T, MedicoUpsertArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoCountArgs} args - Arguments to filter Medicos to count.
     * @example
     * // Count the number of Medicos
     * const count = await prisma.medico.count({
     *   where: {
     *     // ... the filter for the Medicos we want to count
     *   }
     * })
    **/
    count<T extends MedicoCountArgs>(
      args?: Subset<T, MedicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicoAggregateArgs>(args: Subset<T, MedicoAggregateArgs>): Prisma.PrismaPromise<GetMedicoAggregateType<T>>

    /**
     * Group by Medico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicoGroupByArgs['orderBy'] }
        : { orderBy?: MedicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medico model
   */
  readonly fields: MedicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especialidad<T extends EspecialidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecialidadDefaultArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ubicacion<T extends UbicacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UbicacionDefaultArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medico model
   */ 
  interface MedicoFieldRefs {
    readonly usuario_id: FieldRef<"Medico", 'String'>
    readonly tipo_matricula: FieldRef<"Medico", 'TipoMatriculaEnum'>
    readonly numero_matricula: FieldRef<"Medico", 'String'>
    readonly numero_telefono: FieldRef<"Medico", 'String'>
    readonly ubicacion_id: FieldRef<"Medico", 'String'>
    readonly especialidad_id: FieldRef<"Medico", 'String'>
    readonly descripcion: FieldRef<"Medico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medico findUnique
   */
  export type MedicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findUniqueOrThrow
   */
  export type MedicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico findFirst
   */
  export type MedicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findFirstOrThrow
   */
  export type MedicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medico to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicos.
     */
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico findMany
   */
  export type MedicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter, which Medicos to fetch.
     */
    where?: MedicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicos to fetch.
     */
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicos.
     */
    cursor?: MedicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicos.
     */
    skip?: number
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Medico create
   */
  export type MedicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Medico.
     */
    data: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
  }

  /**
   * Medico createMany
   */
  export type MedicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicos.
     */
    data: MedicoCreateManyInput | MedicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medico createManyAndReturn
   */
  export type MedicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Medicos.
     */
    data: MedicoCreateManyInput | MedicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medico update
   */
  export type MedicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Medico.
     */
    data: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
    /**
     * Choose, which Medico to update.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico updateMany
   */
  export type MedicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicos.
     */
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyInput>
    /**
     * Filter which Medicos to update
     */
    where?: MedicoWhereInput
  }

  /**
   * Medico upsert
   */
  export type MedicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Medico to update in case it exists.
     */
    where: MedicoWhereUniqueInput
    /**
     * In case the Medico found by the `where` argument doesn't exist, create a new Medico with this data.
     */
    create: XOR<MedicoCreateInput, MedicoUncheckedCreateInput>
    /**
     * In case the Medico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicoUpdateInput, MedicoUncheckedUpdateInput>
  }

  /**
   * Medico delete
   */
  export type MedicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    /**
     * Filter which Medico to delete.
     */
    where: MedicoWhereUniqueInput
  }

  /**
   * Medico deleteMany
   */
  export type MedicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicos to delete
     */
    where?: MedicoWhereInput
  }

  /**
   * Medico without action
   */
  export type MedicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
  }


  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteMinAggregateOutputType = {
    usuario_id: string | null
    fecha_nacimiento: Date | null
    lugar_nacimiento: string | null
    contacto_emergencia: string | null
    numero_telefono: string | null
    ubicacion_id: string | null
    obra_social_id: string | null
    ficha_medica_id: string | null
  }

  export type PacienteMaxAggregateOutputType = {
    usuario_id: string | null
    fecha_nacimiento: Date | null
    lugar_nacimiento: string | null
    contacto_emergencia: string | null
    numero_telefono: string | null
    ubicacion_id: string | null
    obra_social_id: string | null
    ficha_medica_id: string | null
  }

  export type PacienteCountAggregateOutputType = {
    usuario_id: number
    fecha_nacimiento: number
    lugar_nacimiento: number
    contacto_emergencia: number
    numero_telefono: number
    ubicacion_id: number
    obra_social_id: number
    ficha_medica_id: number
    _all: number
  }


  export type PacienteMinAggregateInputType = {
    usuario_id?: true
    fecha_nacimiento?: true
    lugar_nacimiento?: true
    contacto_emergencia?: true
    numero_telefono?: true
    ubicacion_id?: true
    obra_social_id?: true
    ficha_medica_id?: true
  }

  export type PacienteMaxAggregateInputType = {
    usuario_id?: true
    fecha_nacimiento?: true
    lugar_nacimiento?: true
    contacto_emergencia?: true
    numero_telefono?: true
    ubicacion_id?: true
    obra_social_id?: true
    ficha_medica_id?: true
  }

  export type PacienteCountAggregateInputType = {
    usuario_id?: true
    fecha_nacimiento?: true
    lugar_nacimiento?: true
    contacto_emergencia?: true
    numero_telefono?: true
    ubicacion_id?: true
    obra_social_id?: true
    ficha_medica_id?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    usuario_id: string
    fecha_nacimiento: Date
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    ubicacion_id: string
    obra_social_id: string
    ficha_medica_id: string
    _count: PacienteCountAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    fecha_nacimiento?: boolean
    lugar_nacimiento?: boolean
    contacto_emergencia?: boolean
    numero_telefono?: boolean
    ubicacion_id?: boolean
    obra_social_id?: boolean
    ficha_medica_id?: boolean
    ficha_medica?: boolean | FichaMedicaDefaultArgs<ExtArgs>
    obra_social?: boolean | ObraSocialDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    fecha_nacimiento?: boolean
    lugar_nacimiento?: boolean
    contacto_emergencia?: boolean
    numero_telefono?: boolean
    ubicacion_id?: boolean
    obra_social_id?: boolean
    ficha_medica_id?: boolean
    ficha_medica?: boolean | FichaMedicaDefaultArgs<ExtArgs>
    obra_social?: boolean | ObraSocialDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    usuario_id?: boolean
    fecha_nacimiento?: boolean
    lugar_nacimiento?: boolean
    contacto_emergencia?: boolean
    numero_telefono?: boolean
    ubicacion_id?: boolean
    obra_social_id?: boolean
    ficha_medica_id?: boolean
  }

  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ficha_medica?: boolean | FichaMedicaDefaultArgs<ExtArgs>
    obra_social?: boolean | ObraSocialDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ficha_medica?: boolean | FichaMedicaDefaultArgs<ExtArgs>
    obra_social?: boolean | ObraSocialDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      ficha_medica: Prisma.$FichaMedicaPayload<ExtArgs>
      obra_social: Prisma.$ObraSocialPayload<ExtArgs>
      ubicacion: Prisma.$UbicacionPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: string
      fecha_nacimiento: Date
      lugar_nacimiento: string
      contacto_emergencia: string
      numero_telefono: string
      ubicacion_id: string
      obra_social_id: string
      ficha_medica_id: string
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const pacienteWithUsuario_idOnly = await prisma.paciente.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `usuario_id`
     * const pacienteWithUsuario_idOnly = await prisma.paciente.createManyAndReturn({ 
     *   select: { usuario_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ficha_medica<T extends FichaMedicaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FichaMedicaDefaultArgs<ExtArgs>>): Prisma__FichaMedicaClient<$Result.GetResult<Prisma.$FichaMedicaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    obra_social<T extends ObraSocialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObraSocialDefaultArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ubicacion<T extends UbicacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UbicacionDefaultArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paciente model
   */ 
  interface PacienteFieldRefs {
    readonly usuario_id: FieldRef<"Paciente", 'String'>
    readonly fecha_nacimiento: FieldRef<"Paciente", 'DateTime'>
    readonly lugar_nacimiento: FieldRef<"Paciente", 'String'>
    readonly contacto_emergencia: FieldRef<"Paciente", 'String'>
    readonly numero_telefono: FieldRef<"Paciente", 'String'>
    readonly ubicacion_id: FieldRef<"Paciente", 'String'>
    readonly obra_social_id: FieldRef<"Paciente", 'String'>
    readonly ficha_medica_id: FieldRef<"Paciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    usuario_id: string | null
  }

  export type AdminMaxAggregateOutputType = {
    usuario_id: string | null
  }

  export type AdminCountAggregateOutputType = {
    usuario_id: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    usuario_id?: true
  }

  export type AdminMaxAggregateInputType = {
    usuario_id?: true
  }

  export type AdminCountAggregateInputType = {
    usuario_id?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    usuario_id: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuario_id?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    usuario_id?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuario_id: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const adminWithUsuario_idOnly = await prisma.admin.findMany({ select: { usuario_id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `usuario_id`
     * const adminWithUsuario_idOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { usuario_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly usuario_id: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    tipo_documento: $Enums.TipoDocumentoEnum | null
    numero_documento: string | null
    nombre: string | null
    apellido: string | null
    correo_electronico: string | null
    contrasena: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    tipo_documento: $Enums.TipoDocumentoEnum | null
    numero_documento: string | null
    nombre: string | null
    apellido: string | null
    correo_electronico: string | null
    contrasena: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    tipo_documento: number
    numero_documento: number
    nombre: number
    apellido: number
    correo_electronico: number
    contrasena: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    tipo_documento?: true
    numero_documento?: true
    nombre?: true
    apellido?: true
    correo_electronico?: true
    contrasena?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    tipo_documento?: true
    numero_documento?: true
    nombre?: true
    apellido?: true
    correo_electronico?: true
    contrasena?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    tipo_documento?: true
    numero_documento?: true
    nombre?: true
    apellido?: true
    correo_electronico?: true
    contrasena?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    nombre?: boolean
    apellido?: boolean
    correo_electronico?: boolean
    contrasena?: boolean
    admin?: boolean | Usuario$adminArgs<ExtArgs>
    medico?: boolean | Usuario$medicoArgs<ExtArgs>
    paciente?: boolean | Usuario$pacienteArgs<ExtArgs>
    secretaria?: boolean | Usuario$secretariaArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    nombre?: boolean
    apellido?: boolean
    correo_electronico?: boolean
    contrasena?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    tipo_documento?: boolean
    numero_documento?: boolean
    nombre?: boolean
    apellido?: boolean
    correo_electronico?: boolean
    contrasena?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Usuario$adminArgs<ExtArgs>
    medico?: boolean | Usuario$medicoArgs<ExtArgs>
    paciente?: boolean | Usuario$pacienteArgs<ExtArgs>
    secretaria?: boolean | Usuario$secretariaArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      medico: Prisma.$MedicoPayload<ExtArgs> | null
      paciente: Prisma.$PacientePayload<ExtArgs> | null
      secretaria: Prisma.$SecretariaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo_documento: $Enums.TipoDocumentoEnum
      numero_documento: string
      nombre: string
      apellido: string
      correo_electronico: string
      contrasena: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends Usuario$adminArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    medico<T extends Usuario$medicoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$medicoArgs<ExtArgs>>): Prisma__MedicoClient<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    paciente<T extends Usuario$pacienteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pacienteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    secretaria<T extends Usuario$secretariaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$secretariaArgs<ExtArgs>>): Prisma__SecretariaClient<$Result.GetResult<Prisma.$SecretariaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly tipo_documento: FieldRef<"Usuario", 'TipoDocumentoEnum'>
    readonly numero_documento: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly correo_electronico: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.admin
   */
  export type Usuario$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Usuario.medico
   */
  export type Usuario$medicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    where?: MedicoWhereInput
  }

  /**
   * Usuario.paciente
   */
  export type Usuario$pacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
  }

  /**
   * Usuario.secretaria
   */
  export type Usuario$secretariaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretaria
     */
    select?: SecretariaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecretariaInclude<ExtArgs> | null
    where?: SecretariaWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model FichaMedica
   */

  export type AggregateFichaMedica = {
    _count: FichaMedicaCountAggregateOutputType | null
    _min: FichaMedicaMinAggregateOutputType | null
    _max: FichaMedicaMaxAggregateOutputType | null
  }

  export type FichaMedicaMinAggregateOutputType = {
    id: string | null
    alergias: string | null
    diagnostico: string | null
    tratamientos: string | null
    medicamentos_recetados: string | null
  }

  export type FichaMedicaMaxAggregateOutputType = {
    id: string | null
    alergias: string | null
    diagnostico: string | null
    tratamientos: string | null
    medicamentos_recetados: string | null
  }

  export type FichaMedicaCountAggregateOutputType = {
    id: number
    alergias: number
    diagnostico: number
    tratamientos: number
    medicamentos_recetados: number
    _all: number
  }


  export type FichaMedicaMinAggregateInputType = {
    id?: true
    alergias?: true
    diagnostico?: true
    tratamientos?: true
    medicamentos_recetados?: true
  }

  export type FichaMedicaMaxAggregateInputType = {
    id?: true
    alergias?: true
    diagnostico?: true
    tratamientos?: true
    medicamentos_recetados?: true
  }

  export type FichaMedicaCountAggregateInputType = {
    id?: true
    alergias?: true
    diagnostico?: true
    tratamientos?: true
    medicamentos_recetados?: true
    _all?: true
  }

  export type FichaMedicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FichaMedica to aggregate.
     */
    where?: FichaMedicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FichaMedicas to fetch.
     */
    orderBy?: FichaMedicaOrderByWithRelationInput | FichaMedicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FichaMedicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FichaMedicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FichaMedicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FichaMedicas
    **/
    _count?: true | FichaMedicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FichaMedicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FichaMedicaMaxAggregateInputType
  }

  export type GetFichaMedicaAggregateType<T extends FichaMedicaAggregateArgs> = {
        [P in keyof T & keyof AggregateFichaMedica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFichaMedica[P]>
      : GetScalarType<T[P], AggregateFichaMedica[P]>
  }




  export type FichaMedicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FichaMedicaWhereInput
    orderBy?: FichaMedicaOrderByWithAggregationInput | FichaMedicaOrderByWithAggregationInput[]
    by: FichaMedicaScalarFieldEnum[] | FichaMedicaScalarFieldEnum
    having?: FichaMedicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FichaMedicaCountAggregateInputType | true
    _min?: FichaMedicaMinAggregateInputType
    _max?: FichaMedicaMaxAggregateInputType
  }

  export type FichaMedicaGroupByOutputType = {
    id: string
    alergias: string
    diagnostico: string
    tratamientos: string
    medicamentos_recetados: string
    _count: FichaMedicaCountAggregateOutputType | null
    _min: FichaMedicaMinAggregateOutputType | null
    _max: FichaMedicaMaxAggregateOutputType | null
  }

  type GetFichaMedicaGroupByPayload<T extends FichaMedicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FichaMedicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FichaMedicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FichaMedicaGroupByOutputType[P]>
            : GetScalarType<T[P], FichaMedicaGroupByOutputType[P]>
        }
      >
    >


  export type FichaMedicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alergias?: boolean
    diagnostico?: boolean
    tratamientos?: boolean
    medicamentos_recetados?: boolean
    paciente?: boolean | FichaMedica$pacienteArgs<ExtArgs>
  }, ExtArgs["result"]["fichaMedica"]>

  export type FichaMedicaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alergias?: boolean
    diagnostico?: boolean
    tratamientos?: boolean
    medicamentos_recetados?: boolean
  }, ExtArgs["result"]["fichaMedica"]>

  export type FichaMedicaSelectScalar = {
    id?: boolean
    alergias?: boolean
    diagnostico?: boolean
    tratamientos?: boolean
    medicamentos_recetados?: boolean
  }

  export type FichaMedicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | FichaMedica$pacienteArgs<ExtArgs>
  }
  export type FichaMedicaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FichaMedicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FichaMedica"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alergias: string
      diagnostico: string
      tratamientos: string
      medicamentos_recetados: string
    }, ExtArgs["result"]["fichaMedica"]>
    composites: {}
  }

  type FichaMedicaGetPayload<S extends boolean | null | undefined | FichaMedicaDefaultArgs> = $Result.GetResult<Prisma.$FichaMedicaPayload, S>

  type FichaMedicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FichaMedicaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FichaMedicaCountAggregateInputType | true
    }

  export interface FichaMedicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FichaMedica'], meta: { name: 'FichaMedica' } }
    /**
     * Find zero or one FichaMedica that matches the filter.
     * @param {FichaMedicaFindUniqueArgs} args - Arguments to find a FichaMedica
     * @example
     * // Get one FichaMedica
     * const fichaMedica = await prisma.fichaMedica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FichaMedicaFindUniqueArgs>(args: SelectSubset<T, FichaMedicaFindUniqueArgs<ExtArgs>>): Prisma__FichaMedicaClient<$Result.GetResult<Prisma.$FichaMedicaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FichaMedica that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FichaMedicaFindUniqueOrThrowArgs} args - Arguments to find a FichaMedica
     * @example
     * // Get one FichaMedica
     * const fichaMedica = await prisma.fichaMedica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FichaMedicaFindUniqueOrThrowArgs>(args: SelectSubset<T, FichaMedicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FichaMedicaClient<$Result.GetResult<Prisma.$FichaMedicaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FichaMedica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaMedicaFindFirstArgs} args - Arguments to find a FichaMedica
     * @example
     * // Get one FichaMedica
     * const fichaMedica = await prisma.fichaMedica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FichaMedicaFindFirstArgs>(args?: SelectSubset<T, FichaMedicaFindFirstArgs<ExtArgs>>): Prisma__FichaMedicaClient<$Result.GetResult<Prisma.$FichaMedicaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FichaMedica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaMedicaFindFirstOrThrowArgs} args - Arguments to find a FichaMedica
     * @example
     * // Get one FichaMedica
     * const fichaMedica = await prisma.fichaMedica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FichaMedicaFindFirstOrThrowArgs>(args?: SelectSubset<T, FichaMedicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FichaMedicaClient<$Result.GetResult<Prisma.$FichaMedicaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FichaMedicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaMedicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FichaMedicas
     * const fichaMedicas = await prisma.fichaMedica.findMany()
     * 
     * // Get first 10 FichaMedicas
     * const fichaMedicas = await prisma.fichaMedica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fichaMedicaWithIdOnly = await prisma.fichaMedica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FichaMedicaFindManyArgs>(args?: SelectSubset<T, FichaMedicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichaMedicaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FichaMedica.
     * @param {FichaMedicaCreateArgs} args - Arguments to create a FichaMedica.
     * @example
     * // Create one FichaMedica
     * const FichaMedica = await prisma.fichaMedica.create({
     *   data: {
     *     // ... data to create a FichaMedica
     *   }
     * })
     * 
     */
    create<T extends FichaMedicaCreateArgs>(args: SelectSubset<T, FichaMedicaCreateArgs<ExtArgs>>): Prisma__FichaMedicaClient<$Result.GetResult<Prisma.$FichaMedicaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FichaMedicas.
     * @param {FichaMedicaCreateManyArgs} args - Arguments to create many FichaMedicas.
     * @example
     * // Create many FichaMedicas
     * const fichaMedica = await prisma.fichaMedica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FichaMedicaCreateManyArgs>(args?: SelectSubset<T, FichaMedicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FichaMedicas and returns the data saved in the database.
     * @param {FichaMedicaCreateManyAndReturnArgs} args - Arguments to create many FichaMedicas.
     * @example
     * // Create many FichaMedicas
     * const fichaMedica = await prisma.fichaMedica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FichaMedicas and only return the `id`
     * const fichaMedicaWithIdOnly = await prisma.fichaMedica.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FichaMedicaCreateManyAndReturnArgs>(args?: SelectSubset<T, FichaMedicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FichaMedicaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FichaMedica.
     * @param {FichaMedicaDeleteArgs} args - Arguments to delete one FichaMedica.
     * @example
     * // Delete one FichaMedica
     * const FichaMedica = await prisma.fichaMedica.delete({
     *   where: {
     *     // ... filter to delete one FichaMedica
     *   }
     * })
     * 
     */
    delete<T extends FichaMedicaDeleteArgs>(args: SelectSubset<T, FichaMedicaDeleteArgs<ExtArgs>>): Prisma__FichaMedicaClient<$Result.GetResult<Prisma.$FichaMedicaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FichaMedica.
     * @param {FichaMedicaUpdateArgs} args - Arguments to update one FichaMedica.
     * @example
     * // Update one FichaMedica
     * const fichaMedica = await prisma.fichaMedica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FichaMedicaUpdateArgs>(args: SelectSubset<T, FichaMedicaUpdateArgs<ExtArgs>>): Prisma__FichaMedicaClient<$Result.GetResult<Prisma.$FichaMedicaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FichaMedicas.
     * @param {FichaMedicaDeleteManyArgs} args - Arguments to filter FichaMedicas to delete.
     * @example
     * // Delete a few FichaMedicas
     * const { count } = await prisma.fichaMedica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FichaMedicaDeleteManyArgs>(args?: SelectSubset<T, FichaMedicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FichaMedicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaMedicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FichaMedicas
     * const fichaMedica = await prisma.fichaMedica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FichaMedicaUpdateManyArgs>(args: SelectSubset<T, FichaMedicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FichaMedica.
     * @param {FichaMedicaUpsertArgs} args - Arguments to update or create a FichaMedica.
     * @example
     * // Update or create a FichaMedica
     * const fichaMedica = await prisma.fichaMedica.upsert({
     *   create: {
     *     // ... data to create a FichaMedica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FichaMedica we want to update
     *   }
     * })
     */
    upsert<T extends FichaMedicaUpsertArgs>(args: SelectSubset<T, FichaMedicaUpsertArgs<ExtArgs>>): Prisma__FichaMedicaClient<$Result.GetResult<Prisma.$FichaMedicaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FichaMedicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaMedicaCountArgs} args - Arguments to filter FichaMedicas to count.
     * @example
     * // Count the number of FichaMedicas
     * const count = await prisma.fichaMedica.count({
     *   where: {
     *     // ... the filter for the FichaMedicas we want to count
     *   }
     * })
    **/
    count<T extends FichaMedicaCountArgs>(
      args?: Subset<T, FichaMedicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FichaMedicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FichaMedica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaMedicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FichaMedicaAggregateArgs>(args: Subset<T, FichaMedicaAggregateArgs>): Prisma.PrismaPromise<GetFichaMedicaAggregateType<T>>

    /**
     * Group by FichaMedica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FichaMedicaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FichaMedicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FichaMedicaGroupByArgs['orderBy'] }
        : { orderBy?: FichaMedicaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FichaMedicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFichaMedicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FichaMedica model
   */
  readonly fields: FichaMedicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FichaMedica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FichaMedicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends FichaMedica$pacienteArgs<ExtArgs> = {}>(args?: Subset<T, FichaMedica$pacienteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FichaMedica model
   */ 
  interface FichaMedicaFieldRefs {
    readonly id: FieldRef<"FichaMedica", 'String'>
    readonly alergias: FieldRef<"FichaMedica", 'String'>
    readonly diagnostico: FieldRef<"FichaMedica", 'String'>
    readonly tratamientos: FieldRef<"FichaMedica", 'String'>
    readonly medicamentos_recetados: FieldRef<"FichaMedica", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FichaMedica findUnique
   */
  export type FichaMedicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaMedica
     */
    select?: FichaMedicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichaMedicaInclude<ExtArgs> | null
    /**
     * Filter, which FichaMedica to fetch.
     */
    where: FichaMedicaWhereUniqueInput
  }

  /**
   * FichaMedica findUniqueOrThrow
   */
  export type FichaMedicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaMedica
     */
    select?: FichaMedicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichaMedicaInclude<ExtArgs> | null
    /**
     * Filter, which FichaMedica to fetch.
     */
    where: FichaMedicaWhereUniqueInput
  }

  /**
   * FichaMedica findFirst
   */
  export type FichaMedicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaMedica
     */
    select?: FichaMedicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichaMedicaInclude<ExtArgs> | null
    /**
     * Filter, which FichaMedica to fetch.
     */
    where?: FichaMedicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FichaMedicas to fetch.
     */
    orderBy?: FichaMedicaOrderByWithRelationInput | FichaMedicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FichaMedicas.
     */
    cursor?: FichaMedicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FichaMedicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FichaMedicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FichaMedicas.
     */
    distinct?: FichaMedicaScalarFieldEnum | FichaMedicaScalarFieldEnum[]
  }

  /**
   * FichaMedica findFirstOrThrow
   */
  export type FichaMedicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaMedica
     */
    select?: FichaMedicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichaMedicaInclude<ExtArgs> | null
    /**
     * Filter, which FichaMedica to fetch.
     */
    where?: FichaMedicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FichaMedicas to fetch.
     */
    orderBy?: FichaMedicaOrderByWithRelationInput | FichaMedicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FichaMedicas.
     */
    cursor?: FichaMedicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FichaMedicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FichaMedicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FichaMedicas.
     */
    distinct?: FichaMedicaScalarFieldEnum | FichaMedicaScalarFieldEnum[]
  }

  /**
   * FichaMedica findMany
   */
  export type FichaMedicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaMedica
     */
    select?: FichaMedicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichaMedicaInclude<ExtArgs> | null
    /**
     * Filter, which FichaMedicas to fetch.
     */
    where?: FichaMedicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FichaMedicas to fetch.
     */
    orderBy?: FichaMedicaOrderByWithRelationInput | FichaMedicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FichaMedicas.
     */
    cursor?: FichaMedicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FichaMedicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FichaMedicas.
     */
    skip?: number
    distinct?: FichaMedicaScalarFieldEnum | FichaMedicaScalarFieldEnum[]
  }

  /**
   * FichaMedica create
   */
  export type FichaMedicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaMedica
     */
    select?: FichaMedicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichaMedicaInclude<ExtArgs> | null
    /**
     * The data needed to create a FichaMedica.
     */
    data: XOR<FichaMedicaCreateInput, FichaMedicaUncheckedCreateInput>
  }

  /**
   * FichaMedica createMany
   */
  export type FichaMedicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FichaMedicas.
     */
    data: FichaMedicaCreateManyInput | FichaMedicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FichaMedica createManyAndReturn
   */
  export type FichaMedicaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaMedica
     */
    select?: FichaMedicaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FichaMedicas.
     */
    data: FichaMedicaCreateManyInput | FichaMedicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FichaMedica update
   */
  export type FichaMedicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaMedica
     */
    select?: FichaMedicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichaMedicaInclude<ExtArgs> | null
    /**
     * The data needed to update a FichaMedica.
     */
    data: XOR<FichaMedicaUpdateInput, FichaMedicaUncheckedUpdateInput>
    /**
     * Choose, which FichaMedica to update.
     */
    where: FichaMedicaWhereUniqueInput
  }

  /**
   * FichaMedica updateMany
   */
  export type FichaMedicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FichaMedicas.
     */
    data: XOR<FichaMedicaUpdateManyMutationInput, FichaMedicaUncheckedUpdateManyInput>
    /**
     * Filter which FichaMedicas to update
     */
    where?: FichaMedicaWhereInput
  }

  /**
   * FichaMedica upsert
   */
  export type FichaMedicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaMedica
     */
    select?: FichaMedicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichaMedicaInclude<ExtArgs> | null
    /**
     * The filter to search for the FichaMedica to update in case it exists.
     */
    where: FichaMedicaWhereUniqueInput
    /**
     * In case the FichaMedica found by the `where` argument doesn't exist, create a new FichaMedica with this data.
     */
    create: XOR<FichaMedicaCreateInput, FichaMedicaUncheckedCreateInput>
    /**
     * In case the FichaMedica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FichaMedicaUpdateInput, FichaMedicaUncheckedUpdateInput>
  }

  /**
   * FichaMedica delete
   */
  export type FichaMedicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaMedica
     */
    select?: FichaMedicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichaMedicaInclude<ExtArgs> | null
    /**
     * Filter which FichaMedica to delete.
     */
    where: FichaMedicaWhereUniqueInput
  }

  /**
   * FichaMedica deleteMany
   */
  export type FichaMedicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FichaMedicas to delete
     */
    where?: FichaMedicaWhereInput
  }

  /**
   * FichaMedica.paciente
   */
  export type FichaMedica$pacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
  }

  /**
   * FichaMedica without action
   */
  export type FichaMedicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FichaMedica
     */
    select?: FichaMedicaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FichaMedicaInclude<ExtArgs> | null
  }


  /**
   * Model Especialidad
   */

  export type AggregateEspecialidad = {
    _count: EspecialidadCountAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  export type EspecialidadMinAggregateOutputType = {
    id: string | null
    nombre: string | null
  }

  export type EspecialidadMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
  }

  export type EspecialidadCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type EspecialidadMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EspecialidadMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EspecialidadCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type EspecialidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidad to aggregate.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especialidads
    **/
    _count?: true | EspecialidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadMaxAggregateInputType
  }

  export type GetEspecialidadAggregateType<T extends EspecialidadAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidad[P]>
      : GetScalarType<T[P], AggregateEspecialidad[P]>
  }




  export type EspecialidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadWhereInput
    orderBy?: EspecialidadOrderByWithAggregationInput | EspecialidadOrderByWithAggregationInput[]
    by: EspecialidadScalarFieldEnum[] | EspecialidadScalarFieldEnum
    having?: EspecialidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadCountAggregateInputType | true
    _min?: EspecialidadMinAggregateInputType
    _max?: EspecialidadMaxAggregateInputType
  }

  export type EspecialidadGroupByOutputType = {
    id: string
    nombre: string
    _count: EspecialidadCountAggregateOutputType | null
    _min: EspecialidadMinAggregateOutputType | null
    _max: EspecialidadMaxAggregateOutputType | null
  }

  type GetEspecialidadGroupByPayload<T extends EspecialidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadGroupByOutputType[P]>
        }
      >
    >


  export type EspecialidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    medico?: boolean | Especialidad$medicoArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialidad"]>

  export type EspecialidadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["especialidad"]>

  export type EspecialidadSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type EspecialidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | Especialidad$medicoArgs<ExtArgs>
    _count?: boolean | EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EspecialidadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EspecialidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialidad"
    objects: {
      medico: Prisma.$MedicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
    }, ExtArgs["result"]["especialidad"]>
    composites: {}
  }

  type EspecialidadGetPayload<S extends boolean | null | undefined | EspecialidadDefaultArgs> = $Result.GetResult<Prisma.$EspecialidadPayload, S>

  type EspecialidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EspecialidadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EspecialidadCountAggregateInputType | true
    }

  export interface EspecialidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especialidad'], meta: { name: 'Especialidad' } }
    /**
     * Find zero or one Especialidad that matches the filter.
     * @param {EspecialidadFindUniqueArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadFindUniqueArgs>(args: SelectSubset<T, EspecialidadFindUniqueArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Especialidad that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EspecialidadFindUniqueOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecialidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Especialidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadFindFirstArgs>(args?: SelectSubset<T, EspecialidadFindFirstArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Especialidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindFirstOrThrowArgs} args - Arguments to find a Especialidad
     * @example
     * // Get one Especialidad
     * const especialidad = await prisma.especialidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecialidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Especialidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidads
     * const especialidads = await prisma.especialidad.findMany()
     * 
     * // Get first 10 Especialidads
     * const especialidads = await prisma.especialidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especialidadWithIdOnly = await prisma.especialidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecialidadFindManyArgs>(args?: SelectSubset<T, EspecialidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Especialidad.
     * @param {EspecialidadCreateArgs} args - Arguments to create a Especialidad.
     * @example
     * // Create one Especialidad
     * const Especialidad = await prisma.especialidad.create({
     *   data: {
     *     // ... data to create a Especialidad
     *   }
     * })
     * 
     */
    create<T extends EspecialidadCreateArgs>(args: SelectSubset<T, EspecialidadCreateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Especialidads.
     * @param {EspecialidadCreateManyArgs} args - Arguments to create many Especialidads.
     * @example
     * // Create many Especialidads
     * const especialidad = await prisma.especialidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecialidadCreateManyArgs>(args?: SelectSubset<T, EspecialidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Especialidads and returns the data saved in the database.
     * @param {EspecialidadCreateManyAndReturnArgs} args - Arguments to create many Especialidads.
     * @example
     * // Create many Especialidads
     * const especialidad = await prisma.especialidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Especialidads and only return the `id`
     * const especialidadWithIdOnly = await prisma.especialidad.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EspecialidadCreateManyAndReturnArgs>(args?: SelectSubset<T, EspecialidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Especialidad.
     * @param {EspecialidadDeleteArgs} args - Arguments to delete one Especialidad.
     * @example
     * // Delete one Especialidad
     * const Especialidad = await prisma.especialidad.delete({
     *   where: {
     *     // ... filter to delete one Especialidad
     *   }
     * })
     * 
     */
    delete<T extends EspecialidadDeleteArgs>(args: SelectSubset<T, EspecialidadDeleteArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Especialidad.
     * @param {EspecialidadUpdateArgs} args - Arguments to update one Especialidad.
     * @example
     * // Update one Especialidad
     * const especialidad = await prisma.especialidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecialidadUpdateArgs>(args: SelectSubset<T, EspecialidadUpdateArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Especialidads.
     * @param {EspecialidadDeleteManyArgs} args - Arguments to filter Especialidads to delete.
     * @example
     * // Delete a few Especialidads
     * const { count } = await prisma.especialidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecialidadDeleteManyArgs>(args?: SelectSubset<T, EspecialidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidads
     * const especialidad = await prisma.especialidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecialidadUpdateManyArgs>(args: SelectSubset<T, EspecialidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Especialidad.
     * @param {EspecialidadUpsertArgs} args - Arguments to update or create a Especialidad.
     * @example
     * // Update or create a Especialidad
     * const especialidad = await prisma.especialidad.upsert({
     *   create: {
     *     // ... data to create a Especialidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidad we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadUpsertArgs>(args: SelectSubset<T, EspecialidadUpsertArgs<ExtArgs>>): Prisma__EspecialidadClient<$Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Especialidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadCountArgs} args - Arguments to filter Especialidads to count.
     * @example
     * // Count the number of Especialidads
     * const count = await prisma.especialidad.count({
     *   where: {
     *     // ... the filter for the Especialidads we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadCountArgs>(
      args?: Subset<T, EspecialidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EspecialidadAggregateArgs>(args: Subset<T, EspecialidadAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadAggregateType<T>>

    /**
     * Group by Especialidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EspecialidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecialidadGroupByArgs['orderBy'] }
        : { orderBy?: EspecialidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EspecialidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especialidad model
   */
  readonly fields: EspecialidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especialidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecialidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medico<T extends Especialidad$medicoArgs<ExtArgs> = {}>(args?: Subset<T, Especialidad$medicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Especialidad model
   */ 
  interface EspecialidadFieldRefs {
    readonly id: FieldRef<"Especialidad", 'String'>
    readonly nombre: FieldRef<"Especialidad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Especialidad findUnique
   */
  export type EspecialidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findUniqueOrThrow
   */
  export type EspecialidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad findFirst
   */
  export type EspecialidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findFirstOrThrow
   */
  export type EspecialidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidad to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidads.
     */
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad findMany
   */
  export type EspecialidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter, which Especialidads to fetch.
     */
    where?: EspecialidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidads to fetch.
     */
    orderBy?: EspecialidadOrderByWithRelationInput | EspecialidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especialidads.
     */
    cursor?: EspecialidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidads.
     */
    skip?: number
    distinct?: EspecialidadScalarFieldEnum | EspecialidadScalarFieldEnum[]
  }

  /**
   * Especialidad create
   */
  export type EspecialidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Especialidad.
     */
    data: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
  }

  /**
   * Especialidad createMany
   */
  export type EspecialidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidads.
     */
    data: EspecialidadCreateManyInput | EspecialidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidad createManyAndReturn
   */
  export type EspecialidadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Especialidads.
     */
    data: EspecialidadCreateManyInput | EspecialidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidad update
   */
  export type EspecialidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Especialidad.
     */
    data: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
    /**
     * Choose, which Especialidad to update.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad updateMany
   */
  export type EspecialidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidads.
     */
    data: XOR<EspecialidadUpdateManyMutationInput, EspecialidadUncheckedUpdateManyInput>
    /**
     * Filter which Especialidads to update
     */
    where?: EspecialidadWhereInput
  }

  /**
   * Especialidad upsert
   */
  export type EspecialidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Especialidad to update in case it exists.
     */
    where: EspecialidadWhereUniqueInput
    /**
     * In case the Especialidad found by the `where` argument doesn't exist, create a new Especialidad with this data.
     */
    create: XOR<EspecialidadCreateInput, EspecialidadUncheckedCreateInput>
    /**
     * In case the Especialidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecialidadUpdateInput, EspecialidadUncheckedUpdateInput>
  }

  /**
   * Especialidad delete
   */
  export type EspecialidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
    /**
     * Filter which Especialidad to delete.
     */
    where: EspecialidadWhereUniqueInput
  }

  /**
   * Especialidad deleteMany
   */
  export type EspecialidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidads to delete
     */
    where?: EspecialidadWhereInput
  }

  /**
   * Especialidad.medico
   */
  export type Especialidad$medicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medico
     */
    select?: MedicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicoInclude<ExtArgs> | null
    where?: MedicoWhereInput
    orderBy?: MedicoOrderByWithRelationInput | MedicoOrderByWithRelationInput[]
    cursor?: MedicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicoScalarFieldEnum | MedicoScalarFieldEnum[]
  }

  /**
   * Especialidad without action
   */
  export type EspecialidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidad
     */
    select?: EspecialidadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadInclude<ExtArgs> | null
  }


  /**
   * Model ObraSocial
   */

  export type AggregateObraSocial = {
    _count: ObraSocialCountAggregateOutputType | null
    _min: ObraSocialMinAggregateOutputType | null
    _max: ObraSocialMaxAggregateOutputType | null
  }

  export type ObraSocialMinAggregateOutputType = {
    id: string | null
    nombre: string | null
  }

  export type ObraSocialMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
  }

  export type ObraSocialCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type ObraSocialMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ObraSocialMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type ObraSocialCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type ObraSocialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObraSocial to aggregate.
     */
    where?: ObraSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocials to fetch.
     */
    orderBy?: ObraSocialOrderByWithRelationInput | ObraSocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObraSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ObraSocials
    **/
    _count?: true | ObraSocialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObraSocialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObraSocialMaxAggregateInputType
  }

  export type GetObraSocialAggregateType<T extends ObraSocialAggregateArgs> = {
        [P in keyof T & keyof AggregateObraSocial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObraSocial[P]>
      : GetScalarType<T[P], AggregateObraSocial[P]>
  }




  export type ObraSocialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraSocialWhereInput
    orderBy?: ObraSocialOrderByWithAggregationInput | ObraSocialOrderByWithAggregationInput[]
    by: ObraSocialScalarFieldEnum[] | ObraSocialScalarFieldEnum
    having?: ObraSocialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObraSocialCountAggregateInputType | true
    _min?: ObraSocialMinAggregateInputType
    _max?: ObraSocialMaxAggregateInputType
  }

  export type ObraSocialGroupByOutputType = {
    id: string
    nombre: string
    _count: ObraSocialCountAggregateOutputType | null
    _min: ObraSocialMinAggregateOutputType | null
    _max: ObraSocialMaxAggregateOutputType | null
  }

  type GetObraSocialGroupByPayload<T extends ObraSocialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObraSocialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObraSocialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObraSocialGroupByOutputType[P]>
            : GetScalarType<T[P], ObraSocialGroupByOutputType[P]>
        }
      >
    >


  export type ObraSocialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    paciente?: boolean | ObraSocial$pacienteArgs<ExtArgs>
    _count?: boolean | ObraSocialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obraSocial"]>

  export type ObraSocialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["obraSocial"]>

  export type ObraSocialSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type ObraSocialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | ObraSocial$pacienteArgs<ExtArgs>
    _count?: boolean | ObraSocialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObraSocialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ObraSocialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ObraSocial"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
    }, ExtArgs["result"]["obraSocial"]>
    composites: {}
  }

  type ObraSocialGetPayload<S extends boolean | null | undefined | ObraSocialDefaultArgs> = $Result.GetResult<Prisma.$ObraSocialPayload, S>

  type ObraSocialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ObraSocialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ObraSocialCountAggregateInputType | true
    }

  export interface ObraSocialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ObraSocial'], meta: { name: 'ObraSocial' } }
    /**
     * Find zero or one ObraSocial that matches the filter.
     * @param {ObraSocialFindUniqueArgs} args - Arguments to find a ObraSocial
     * @example
     * // Get one ObraSocial
     * const obraSocial = await prisma.obraSocial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObraSocialFindUniqueArgs>(args: SelectSubset<T, ObraSocialFindUniqueArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ObraSocial that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ObraSocialFindUniqueOrThrowArgs} args - Arguments to find a ObraSocial
     * @example
     * // Get one ObraSocial
     * const obraSocial = await prisma.obraSocial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObraSocialFindUniqueOrThrowArgs>(args: SelectSubset<T, ObraSocialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ObraSocial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialFindFirstArgs} args - Arguments to find a ObraSocial
     * @example
     * // Get one ObraSocial
     * const obraSocial = await prisma.obraSocial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObraSocialFindFirstArgs>(args?: SelectSubset<T, ObraSocialFindFirstArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ObraSocial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialFindFirstOrThrowArgs} args - Arguments to find a ObraSocial
     * @example
     * // Get one ObraSocial
     * const obraSocial = await prisma.obraSocial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObraSocialFindFirstOrThrowArgs>(args?: SelectSubset<T, ObraSocialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ObraSocials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ObraSocials
     * const obraSocials = await prisma.obraSocial.findMany()
     * 
     * // Get first 10 ObraSocials
     * const obraSocials = await prisma.obraSocial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obraSocialWithIdOnly = await prisma.obraSocial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObraSocialFindManyArgs>(args?: SelectSubset<T, ObraSocialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ObraSocial.
     * @param {ObraSocialCreateArgs} args - Arguments to create a ObraSocial.
     * @example
     * // Create one ObraSocial
     * const ObraSocial = await prisma.obraSocial.create({
     *   data: {
     *     // ... data to create a ObraSocial
     *   }
     * })
     * 
     */
    create<T extends ObraSocialCreateArgs>(args: SelectSubset<T, ObraSocialCreateArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ObraSocials.
     * @param {ObraSocialCreateManyArgs} args - Arguments to create many ObraSocials.
     * @example
     * // Create many ObraSocials
     * const obraSocial = await prisma.obraSocial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObraSocialCreateManyArgs>(args?: SelectSubset<T, ObraSocialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ObraSocials and returns the data saved in the database.
     * @param {ObraSocialCreateManyAndReturnArgs} args - Arguments to create many ObraSocials.
     * @example
     * // Create many ObraSocials
     * const obraSocial = await prisma.obraSocial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ObraSocials and only return the `id`
     * const obraSocialWithIdOnly = await prisma.obraSocial.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObraSocialCreateManyAndReturnArgs>(args?: SelectSubset<T, ObraSocialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ObraSocial.
     * @param {ObraSocialDeleteArgs} args - Arguments to delete one ObraSocial.
     * @example
     * // Delete one ObraSocial
     * const ObraSocial = await prisma.obraSocial.delete({
     *   where: {
     *     // ... filter to delete one ObraSocial
     *   }
     * })
     * 
     */
    delete<T extends ObraSocialDeleteArgs>(args: SelectSubset<T, ObraSocialDeleteArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ObraSocial.
     * @param {ObraSocialUpdateArgs} args - Arguments to update one ObraSocial.
     * @example
     * // Update one ObraSocial
     * const obraSocial = await prisma.obraSocial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObraSocialUpdateArgs>(args: SelectSubset<T, ObraSocialUpdateArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ObraSocials.
     * @param {ObraSocialDeleteManyArgs} args - Arguments to filter ObraSocials to delete.
     * @example
     * // Delete a few ObraSocials
     * const { count } = await prisma.obraSocial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObraSocialDeleteManyArgs>(args?: SelectSubset<T, ObraSocialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObraSocials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ObraSocials
     * const obraSocial = await prisma.obraSocial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObraSocialUpdateManyArgs>(args: SelectSubset<T, ObraSocialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ObraSocial.
     * @param {ObraSocialUpsertArgs} args - Arguments to update or create a ObraSocial.
     * @example
     * // Update or create a ObraSocial
     * const obraSocial = await prisma.obraSocial.upsert({
     *   create: {
     *     // ... data to create a ObraSocial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ObraSocial we want to update
     *   }
     * })
     */
    upsert<T extends ObraSocialUpsertArgs>(args: SelectSubset<T, ObraSocialUpsertArgs<ExtArgs>>): Prisma__ObraSocialClient<$Result.GetResult<Prisma.$ObraSocialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ObraSocials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialCountArgs} args - Arguments to filter ObraSocials to count.
     * @example
     * // Count the number of ObraSocials
     * const count = await prisma.obraSocial.count({
     *   where: {
     *     // ... the filter for the ObraSocials we want to count
     *   }
     * })
    **/
    count<T extends ObraSocialCountArgs>(
      args?: Subset<T, ObraSocialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObraSocialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ObraSocial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObraSocialAggregateArgs>(args: Subset<T, ObraSocialAggregateArgs>): Prisma.PrismaPromise<GetObraSocialAggregateType<T>>

    /**
     * Group by ObraSocial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraSocialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObraSocialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObraSocialGroupByArgs['orderBy'] }
        : { orderBy?: ObraSocialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObraSocialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObraSocialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ObraSocial model
   */
  readonly fields: ObraSocialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ObraSocial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObraSocialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends ObraSocial$pacienteArgs<ExtArgs> = {}>(args?: Subset<T, ObraSocial$pacienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ObraSocial model
   */ 
  interface ObraSocialFieldRefs {
    readonly id: FieldRef<"ObraSocial", 'String'>
    readonly nombre: FieldRef<"ObraSocial", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ObraSocial findUnique
   */
  export type ObraSocialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocial to fetch.
     */
    where: ObraSocialWhereUniqueInput
  }

  /**
   * ObraSocial findUniqueOrThrow
   */
  export type ObraSocialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocial to fetch.
     */
    where: ObraSocialWhereUniqueInput
  }

  /**
   * ObraSocial findFirst
   */
  export type ObraSocialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocial to fetch.
     */
    where?: ObraSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocials to fetch.
     */
    orderBy?: ObraSocialOrderByWithRelationInput | ObraSocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObraSocials.
     */
    cursor?: ObraSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObraSocials.
     */
    distinct?: ObraSocialScalarFieldEnum | ObraSocialScalarFieldEnum[]
  }

  /**
   * ObraSocial findFirstOrThrow
   */
  export type ObraSocialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocial to fetch.
     */
    where?: ObraSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocials to fetch.
     */
    orderBy?: ObraSocialOrderByWithRelationInput | ObraSocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObraSocials.
     */
    cursor?: ObraSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObraSocials.
     */
    distinct?: ObraSocialScalarFieldEnum | ObraSocialScalarFieldEnum[]
  }

  /**
   * ObraSocial findMany
   */
  export type ObraSocialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter, which ObraSocials to fetch.
     */
    where?: ObraSocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObraSocials to fetch.
     */
    orderBy?: ObraSocialOrderByWithRelationInput | ObraSocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ObraSocials.
     */
    cursor?: ObraSocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObraSocials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObraSocials.
     */
    skip?: number
    distinct?: ObraSocialScalarFieldEnum | ObraSocialScalarFieldEnum[]
  }

  /**
   * ObraSocial create
   */
  export type ObraSocialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * The data needed to create a ObraSocial.
     */
    data: XOR<ObraSocialCreateInput, ObraSocialUncheckedCreateInput>
  }

  /**
   * ObraSocial createMany
   */
  export type ObraSocialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ObraSocials.
     */
    data: ObraSocialCreateManyInput | ObraSocialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObraSocial createManyAndReturn
   */
  export type ObraSocialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ObraSocials.
     */
    data: ObraSocialCreateManyInput | ObraSocialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObraSocial update
   */
  export type ObraSocialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * The data needed to update a ObraSocial.
     */
    data: XOR<ObraSocialUpdateInput, ObraSocialUncheckedUpdateInput>
    /**
     * Choose, which ObraSocial to update.
     */
    where: ObraSocialWhereUniqueInput
  }

  /**
   * ObraSocial updateMany
   */
  export type ObraSocialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ObraSocials.
     */
    data: XOR<ObraSocialUpdateManyMutationInput, ObraSocialUncheckedUpdateManyInput>
    /**
     * Filter which ObraSocials to update
     */
    where?: ObraSocialWhereInput
  }

  /**
   * ObraSocial upsert
   */
  export type ObraSocialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * The filter to search for the ObraSocial to update in case it exists.
     */
    where: ObraSocialWhereUniqueInput
    /**
     * In case the ObraSocial found by the `where` argument doesn't exist, create a new ObraSocial with this data.
     */
    create: XOR<ObraSocialCreateInput, ObraSocialUncheckedCreateInput>
    /**
     * In case the ObraSocial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObraSocialUpdateInput, ObraSocialUncheckedUpdateInput>
  }

  /**
   * ObraSocial delete
   */
  export type ObraSocialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
    /**
     * Filter which ObraSocial to delete.
     */
    where: ObraSocialWhereUniqueInput
  }

  /**
   * ObraSocial deleteMany
   */
  export type ObraSocialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObraSocials to delete
     */
    where?: ObraSocialWhereInput
  }

  /**
   * ObraSocial.paciente
   */
  export type ObraSocial$pacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * ObraSocial without action
   */
  export type ObraSocialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraSocial
     */
    select?: ObraSocialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraSocialInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UbicacionScalarFieldEnum: {
    id: 'id',
    calle: 'calle',
    numero: 'numero',
    codigo_postal: 'codigo_postal',
    ciudad: 'ciudad',
    provincia: 'provincia'
  };

  export type UbicacionScalarFieldEnum = (typeof UbicacionScalarFieldEnum)[keyof typeof UbicacionScalarFieldEnum]


  export const SecretariaScalarFieldEnum: {
    usuario_id: 'usuario_id',
    numero_telefono: 'numero_telefono',
    ubicacion_id: 'ubicacion_id'
  };

  export type SecretariaScalarFieldEnum = (typeof SecretariaScalarFieldEnum)[keyof typeof SecretariaScalarFieldEnum]


  export const MedicoScalarFieldEnum: {
    usuario_id: 'usuario_id',
    tipo_matricula: 'tipo_matricula',
    numero_matricula: 'numero_matricula',
    numero_telefono: 'numero_telefono',
    ubicacion_id: 'ubicacion_id',
    especialidad_id: 'especialidad_id',
    descripcion: 'descripcion'
  };

  export type MedicoScalarFieldEnum = (typeof MedicoScalarFieldEnum)[keyof typeof MedicoScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
    usuario_id: 'usuario_id',
    fecha_nacimiento: 'fecha_nacimiento',
    lugar_nacimiento: 'lugar_nacimiento',
    contacto_emergencia: 'contacto_emergencia',
    numero_telefono: 'numero_telefono',
    ubicacion_id: 'ubicacion_id',
    obra_social_id: 'obra_social_id',
    ficha_medica_id: 'ficha_medica_id'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    usuario_id: 'usuario_id'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    tipo_documento: 'tipo_documento',
    numero_documento: 'numero_documento',
    nombre: 'nombre',
    apellido: 'apellido',
    correo_electronico: 'correo_electronico',
    contrasena: 'contrasena'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const FichaMedicaScalarFieldEnum: {
    id: 'id',
    alergias: 'alergias',
    diagnostico: 'diagnostico',
    tratamientos: 'tratamientos',
    medicamentos_recetados: 'medicamentos_recetados'
  };

  export type FichaMedicaScalarFieldEnum = (typeof FichaMedicaScalarFieldEnum)[keyof typeof FichaMedicaScalarFieldEnum]


  export const EspecialidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type EspecialidadScalarFieldEnum = (typeof EspecialidadScalarFieldEnum)[keyof typeof EspecialidadScalarFieldEnum]


  export const ObraSocialScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type ObraSocialScalarFieldEnum = (typeof ObraSocialScalarFieldEnum)[keyof typeof ObraSocialScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TipoMatriculaEnum'
   */
  export type EnumTipoMatriculaEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMatriculaEnum'>
    


  /**
   * Reference to a field of type 'TipoMatriculaEnum[]'
   */
  export type ListEnumTipoMatriculaEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMatriculaEnum[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoDocumentoEnum'
   */
  export type EnumTipoDocumentoEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDocumentoEnum'>
    


  /**
   * Reference to a field of type 'TipoDocumentoEnum[]'
   */
  export type ListEnumTipoDocumentoEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoDocumentoEnum[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UbicacionWhereInput = {
    AND?: UbicacionWhereInput | UbicacionWhereInput[]
    OR?: UbicacionWhereInput[]
    NOT?: UbicacionWhereInput | UbicacionWhereInput[]
    id?: StringFilter<"Ubicacion"> | string
    calle?: StringFilter<"Ubicacion"> | string
    numero?: StringFilter<"Ubicacion"> | string
    codigo_postal?: StringFilter<"Ubicacion"> | string
    ciudad?: StringFilter<"Ubicacion"> | string
    provincia?: StringFilter<"Ubicacion"> | string
    medico?: XOR<MedicoNullableRelationFilter, MedicoWhereInput> | null
    paciente?: XOR<PacienteNullableRelationFilter, PacienteWhereInput> | null
    secretaria?: XOR<SecretariaNullableRelationFilter, SecretariaWhereInput> | null
  }

  export type UbicacionOrderByWithRelationInput = {
    id?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    codigo_postal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    medico?: MedicoOrderByWithRelationInput
    paciente?: PacienteOrderByWithRelationInput
    secretaria?: SecretariaOrderByWithRelationInput
  }

  export type UbicacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UbicacionWhereInput | UbicacionWhereInput[]
    OR?: UbicacionWhereInput[]
    NOT?: UbicacionWhereInput | UbicacionWhereInput[]
    calle?: StringFilter<"Ubicacion"> | string
    numero?: StringFilter<"Ubicacion"> | string
    codigo_postal?: StringFilter<"Ubicacion"> | string
    ciudad?: StringFilter<"Ubicacion"> | string
    provincia?: StringFilter<"Ubicacion"> | string
    medico?: XOR<MedicoNullableRelationFilter, MedicoWhereInput> | null
    paciente?: XOR<PacienteNullableRelationFilter, PacienteWhereInput> | null
    secretaria?: XOR<SecretariaNullableRelationFilter, SecretariaWhereInput> | null
  }, "id">

  export type UbicacionOrderByWithAggregationInput = {
    id?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    codigo_postal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
    _count?: UbicacionCountOrderByAggregateInput
    _max?: UbicacionMaxOrderByAggregateInput
    _min?: UbicacionMinOrderByAggregateInput
  }

  export type UbicacionScalarWhereWithAggregatesInput = {
    AND?: UbicacionScalarWhereWithAggregatesInput | UbicacionScalarWhereWithAggregatesInput[]
    OR?: UbicacionScalarWhereWithAggregatesInput[]
    NOT?: UbicacionScalarWhereWithAggregatesInput | UbicacionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ubicacion"> | string
    calle?: StringWithAggregatesFilter<"Ubicacion"> | string
    numero?: StringWithAggregatesFilter<"Ubicacion"> | string
    codigo_postal?: StringWithAggregatesFilter<"Ubicacion"> | string
    ciudad?: StringWithAggregatesFilter<"Ubicacion"> | string
    provincia?: StringWithAggregatesFilter<"Ubicacion"> | string
  }

  export type SecretariaWhereInput = {
    AND?: SecretariaWhereInput | SecretariaWhereInput[]
    OR?: SecretariaWhereInput[]
    NOT?: SecretariaWhereInput | SecretariaWhereInput[]
    usuario_id?: StringFilter<"Secretaria"> | string
    numero_telefono?: StringFilter<"Secretaria"> | string
    ubicacion_id?: StringFilter<"Secretaria"> | string
    ubicacion?: XOR<UbicacionRelationFilter, UbicacionWhereInput>
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type SecretariaOrderByWithRelationInput = {
    usuario_id?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    ubicacion?: UbicacionOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type SecretariaWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: string
    ubicacion_id?: string
    AND?: SecretariaWhereInput | SecretariaWhereInput[]
    OR?: SecretariaWhereInput[]
    NOT?: SecretariaWhereInput | SecretariaWhereInput[]
    numero_telefono?: StringFilter<"Secretaria"> | string
    ubicacion?: XOR<UbicacionRelationFilter, UbicacionWhereInput>
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "usuario_id" | "ubicacion_id">

  export type SecretariaOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    _count?: SecretariaCountOrderByAggregateInput
    _max?: SecretariaMaxOrderByAggregateInput
    _min?: SecretariaMinOrderByAggregateInput
  }

  export type SecretariaScalarWhereWithAggregatesInput = {
    AND?: SecretariaScalarWhereWithAggregatesInput | SecretariaScalarWhereWithAggregatesInput[]
    OR?: SecretariaScalarWhereWithAggregatesInput[]
    NOT?: SecretariaScalarWhereWithAggregatesInput | SecretariaScalarWhereWithAggregatesInput[]
    usuario_id?: StringWithAggregatesFilter<"Secretaria"> | string
    numero_telefono?: StringWithAggregatesFilter<"Secretaria"> | string
    ubicacion_id?: StringWithAggregatesFilter<"Secretaria"> | string
  }

  export type MedicoWhereInput = {
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    usuario_id?: StringFilter<"Medico"> | string
    tipo_matricula?: EnumTipoMatriculaEnumFilter<"Medico"> | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFilter<"Medico"> | string
    numero_telefono?: StringFilter<"Medico"> | string
    ubicacion_id?: StringFilter<"Medico"> | string
    especialidad_id?: StringFilter<"Medico"> | string
    descripcion?: StringNullableFilter<"Medico"> | string | null
    especialidad?: XOR<EspecialidadRelationFilter, EspecialidadWhereInput>
    ubicacion?: XOR<UbicacionRelationFilter, UbicacionWhereInput>
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type MedicoOrderByWithRelationInput = {
    usuario_id?: SortOrder
    tipo_matricula?: SortOrder
    numero_matricula?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    especialidad_id?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    especialidad?: EspecialidadOrderByWithRelationInput
    ubicacion?: UbicacionOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type MedicoWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: string
    numero_matricula?: string
    ubicacion_id?: string
    AND?: MedicoWhereInput | MedicoWhereInput[]
    OR?: MedicoWhereInput[]
    NOT?: MedicoWhereInput | MedicoWhereInput[]
    tipo_matricula?: EnumTipoMatriculaEnumFilter<"Medico"> | $Enums.TipoMatriculaEnum
    numero_telefono?: StringFilter<"Medico"> | string
    especialidad_id?: StringFilter<"Medico"> | string
    descripcion?: StringNullableFilter<"Medico"> | string | null
    especialidad?: XOR<EspecialidadRelationFilter, EspecialidadWhereInput>
    ubicacion?: XOR<UbicacionRelationFilter, UbicacionWhereInput>
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "usuario_id" | "numero_matricula" | "ubicacion_id">

  export type MedicoOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    tipo_matricula?: SortOrder
    numero_matricula?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    especialidad_id?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: MedicoCountOrderByAggregateInput
    _max?: MedicoMaxOrderByAggregateInput
    _min?: MedicoMinOrderByAggregateInput
  }

  export type MedicoScalarWhereWithAggregatesInput = {
    AND?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    OR?: MedicoScalarWhereWithAggregatesInput[]
    NOT?: MedicoScalarWhereWithAggregatesInput | MedicoScalarWhereWithAggregatesInput[]
    usuario_id?: StringWithAggregatesFilter<"Medico"> | string
    tipo_matricula?: EnumTipoMatriculaEnumWithAggregatesFilter<"Medico"> | $Enums.TipoMatriculaEnum
    numero_matricula?: StringWithAggregatesFilter<"Medico"> | string
    numero_telefono?: StringWithAggregatesFilter<"Medico"> | string
    ubicacion_id?: StringWithAggregatesFilter<"Medico"> | string
    especialidad_id?: StringWithAggregatesFilter<"Medico"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Medico"> | string | null
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    usuario_id?: StringFilter<"Paciente"> | string
    fecha_nacimiento?: DateTimeFilter<"Paciente"> | Date | string
    lugar_nacimiento?: StringFilter<"Paciente"> | string
    contacto_emergencia?: StringFilter<"Paciente"> | string
    numero_telefono?: StringFilter<"Paciente"> | string
    ubicacion_id?: StringFilter<"Paciente"> | string
    obra_social_id?: StringFilter<"Paciente"> | string
    ficha_medica_id?: StringFilter<"Paciente"> | string
    ficha_medica?: XOR<FichaMedicaRelationFilter, FichaMedicaWhereInput>
    obra_social?: XOR<ObraSocialRelationFilter, ObraSocialWhereInput>
    ubicacion?: XOR<UbicacionRelationFilter, UbicacionWhereInput>
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type PacienteOrderByWithRelationInput = {
    usuario_id?: SortOrder
    fecha_nacimiento?: SortOrder
    lugar_nacimiento?: SortOrder
    contacto_emergencia?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    obra_social_id?: SortOrder
    ficha_medica_id?: SortOrder
    ficha_medica?: FichaMedicaOrderByWithRelationInput
    obra_social?: ObraSocialOrderByWithRelationInput
    ubicacion?: UbicacionOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: string
    ubicacion_id?: string
    ficha_medica_id?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    fecha_nacimiento?: DateTimeFilter<"Paciente"> | Date | string
    lugar_nacimiento?: StringFilter<"Paciente"> | string
    contacto_emergencia?: StringFilter<"Paciente"> | string
    numero_telefono?: StringFilter<"Paciente"> | string
    obra_social_id?: StringFilter<"Paciente"> | string
    ficha_medica?: XOR<FichaMedicaRelationFilter, FichaMedicaWhereInput>
    obra_social?: XOR<ObraSocialRelationFilter, ObraSocialWhereInput>
    ubicacion?: XOR<UbicacionRelationFilter, UbicacionWhereInput>
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "usuario_id" | "ubicacion_id" | "ficha_medica_id">

  export type PacienteOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    fecha_nacimiento?: SortOrder
    lugar_nacimiento?: SortOrder
    contacto_emergencia?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    obra_social_id?: SortOrder
    ficha_medica_id?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    usuario_id?: StringWithAggregatesFilter<"Paciente"> | string
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    lugar_nacimiento?: StringWithAggregatesFilter<"Paciente"> | string
    contacto_emergencia?: StringWithAggregatesFilter<"Paciente"> | string
    numero_telefono?: StringWithAggregatesFilter<"Paciente"> | string
    ubicacion_id?: StringWithAggregatesFilter<"Paciente"> | string
    obra_social_id?: StringWithAggregatesFilter<"Paciente"> | string
    ficha_medica_id?: StringWithAggregatesFilter<"Paciente"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    usuario_id?: StringFilter<"Admin"> | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    usuario_id?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    usuario_id?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "usuario_id">

  export type AdminOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    usuario_id?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    tipo_documento?: EnumTipoDocumentoEnumFilter<"Usuario"> | $Enums.TipoDocumentoEnum
    numero_documento?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    correo_electronico?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    medico?: XOR<MedicoNullableRelationFilter, MedicoWhereInput> | null
    paciente?: XOR<PacienteNullableRelationFilter, PacienteWhereInput> | null
    secretaria?: XOR<SecretariaNullableRelationFilter, SecretariaWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo_electronico?: SortOrder
    contrasena?: SortOrder
    admin?: AdminOrderByWithRelationInput
    medico?: MedicoOrderByWithRelationInput
    paciente?: PacienteOrderByWithRelationInput
    secretaria?: SecretariaOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numero_documento?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    tipo_documento?: EnumTipoDocumentoEnumFilter<"Usuario"> | $Enums.TipoDocumentoEnum
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    correo_electronico?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    medico?: XOR<MedicoNullableRelationFilter, MedicoWhereInput> | null
    paciente?: XOR<PacienteNullableRelationFilter, PacienteWhereInput> | null
    secretaria?: XOR<SecretariaNullableRelationFilter, SecretariaWhereInput> | null
  }, "id" | "numero_documento">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo_electronico?: SortOrder
    contrasena?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    tipo_documento?: EnumTipoDocumentoEnumWithAggregatesFilter<"Usuario"> | $Enums.TipoDocumentoEnum
    numero_documento?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    correo_electronico?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type FichaMedicaWhereInput = {
    AND?: FichaMedicaWhereInput | FichaMedicaWhereInput[]
    OR?: FichaMedicaWhereInput[]
    NOT?: FichaMedicaWhereInput | FichaMedicaWhereInput[]
    id?: StringFilter<"FichaMedica"> | string
    alergias?: StringFilter<"FichaMedica"> | string
    diagnostico?: StringFilter<"FichaMedica"> | string
    tratamientos?: StringFilter<"FichaMedica"> | string
    medicamentos_recetados?: StringFilter<"FichaMedica"> | string
    paciente?: XOR<PacienteNullableRelationFilter, PacienteWhereInput> | null
  }

  export type FichaMedicaOrderByWithRelationInput = {
    id?: SortOrder
    alergias?: SortOrder
    diagnostico?: SortOrder
    tratamientos?: SortOrder
    medicamentos_recetados?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
  }

  export type FichaMedicaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FichaMedicaWhereInput | FichaMedicaWhereInput[]
    OR?: FichaMedicaWhereInput[]
    NOT?: FichaMedicaWhereInput | FichaMedicaWhereInput[]
    alergias?: StringFilter<"FichaMedica"> | string
    diagnostico?: StringFilter<"FichaMedica"> | string
    tratamientos?: StringFilter<"FichaMedica"> | string
    medicamentos_recetados?: StringFilter<"FichaMedica"> | string
    paciente?: XOR<PacienteNullableRelationFilter, PacienteWhereInput> | null
  }, "id">

  export type FichaMedicaOrderByWithAggregationInput = {
    id?: SortOrder
    alergias?: SortOrder
    diagnostico?: SortOrder
    tratamientos?: SortOrder
    medicamentos_recetados?: SortOrder
    _count?: FichaMedicaCountOrderByAggregateInput
    _max?: FichaMedicaMaxOrderByAggregateInput
    _min?: FichaMedicaMinOrderByAggregateInput
  }

  export type FichaMedicaScalarWhereWithAggregatesInput = {
    AND?: FichaMedicaScalarWhereWithAggregatesInput | FichaMedicaScalarWhereWithAggregatesInput[]
    OR?: FichaMedicaScalarWhereWithAggregatesInput[]
    NOT?: FichaMedicaScalarWhereWithAggregatesInput | FichaMedicaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FichaMedica"> | string
    alergias?: StringWithAggregatesFilter<"FichaMedica"> | string
    diagnostico?: StringWithAggregatesFilter<"FichaMedica"> | string
    tratamientos?: StringWithAggregatesFilter<"FichaMedica"> | string
    medicamentos_recetados?: StringWithAggregatesFilter<"FichaMedica"> | string
  }

  export type EspecialidadWhereInput = {
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    id?: StringFilter<"Especialidad"> | string
    nombre?: StringFilter<"Especialidad"> | string
    medico?: MedicoListRelationFilter
  }

  export type EspecialidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    medico?: MedicoOrderByRelationAggregateInput
  }

  export type EspecialidadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: EspecialidadWhereInput | EspecialidadWhereInput[]
    OR?: EspecialidadWhereInput[]
    NOT?: EspecialidadWhereInput | EspecialidadWhereInput[]
    medico?: MedicoListRelationFilter
  }, "id" | "nombre">

  export type EspecialidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: EspecialidadCountOrderByAggregateInput
    _max?: EspecialidadMaxOrderByAggregateInput
    _min?: EspecialidadMinOrderByAggregateInput
  }

  export type EspecialidadScalarWhereWithAggregatesInput = {
    AND?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    OR?: EspecialidadScalarWhereWithAggregatesInput[]
    NOT?: EspecialidadScalarWhereWithAggregatesInput | EspecialidadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Especialidad"> | string
    nombre?: StringWithAggregatesFilter<"Especialidad"> | string
  }

  export type ObraSocialWhereInput = {
    AND?: ObraSocialWhereInput | ObraSocialWhereInput[]
    OR?: ObraSocialWhereInput[]
    NOT?: ObraSocialWhereInput | ObraSocialWhereInput[]
    id?: StringFilter<"ObraSocial"> | string
    nombre?: StringFilter<"ObraSocial"> | string
    paciente?: PacienteListRelationFilter
  }

  export type ObraSocialOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    paciente?: PacienteOrderByRelationAggregateInput
  }

  export type ObraSocialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: ObraSocialWhereInput | ObraSocialWhereInput[]
    OR?: ObraSocialWhereInput[]
    NOT?: ObraSocialWhereInput | ObraSocialWhereInput[]
    paciente?: PacienteListRelationFilter
  }, "id" | "nombre">

  export type ObraSocialOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: ObraSocialCountOrderByAggregateInput
    _max?: ObraSocialMaxOrderByAggregateInput
    _min?: ObraSocialMinOrderByAggregateInput
  }

  export type ObraSocialScalarWhereWithAggregatesInput = {
    AND?: ObraSocialScalarWhereWithAggregatesInput | ObraSocialScalarWhereWithAggregatesInput[]
    OR?: ObraSocialScalarWhereWithAggregatesInput[]
    NOT?: ObraSocialScalarWhereWithAggregatesInput | ObraSocialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ObraSocial"> | string
    nombre?: StringWithAggregatesFilter<"ObraSocial"> | string
  }

  export type UbicacionCreateInput = {
    id?: string
    calle: string
    numero: string
    codigo_postal: string
    ciudad: string
    provincia: string
    medico?: MedicoCreateNestedOneWithoutUbicacionInput
    paciente?: PacienteCreateNestedOneWithoutUbicacionInput
    secretaria?: SecretariaCreateNestedOneWithoutUbicacionInput
  }

  export type UbicacionUncheckedCreateInput = {
    id?: string
    calle: string
    numero: string
    codigo_postal: string
    ciudad: string
    provincia: string
    medico?: MedicoUncheckedCreateNestedOneWithoutUbicacionInput
    paciente?: PacienteUncheckedCreateNestedOneWithoutUbicacionInput
    secretaria?: SecretariaUncheckedCreateNestedOneWithoutUbicacionInput
  }

  export type UbicacionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneWithoutUbicacionNestedInput
    paciente?: PacienteUpdateOneWithoutUbicacionNestedInput
    secretaria?: SecretariaUpdateOneWithoutUbicacionNestedInput
  }

  export type UbicacionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateOneWithoutUbicacionNestedInput
    paciente?: PacienteUncheckedUpdateOneWithoutUbicacionNestedInput
    secretaria?: SecretariaUncheckedUpdateOneWithoutUbicacionNestedInput
  }

  export type UbicacionCreateManyInput = {
    id?: string
    calle: string
    numero: string
    codigo_postal: string
    ciudad: string
    provincia: string
  }

  export type UbicacionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
  }

  export type UbicacionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
  }

  export type SecretariaCreateInput = {
    numero_telefono: string
    ubicacion: UbicacionCreateNestedOneWithoutSecretariaInput
    usuario: UsuarioCreateNestedOneWithoutSecretariaInput
  }

  export type SecretariaUncheckedCreateInput = {
    usuario_id: string
    numero_telefono: string
    ubicacion_id: string
  }

  export type SecretariaUpdateInput = {
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion?: UbicacionUpdateOneRequiredWithoutSecretariaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutSecretariaNestedInput
  }

  export type SecretariaUncheckedUpdateInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
  }

  export type SecretariaCreateManyInput = {
    usuario_id: string
    numero_telefono: string
    ubicacion_id: string
  }

  export type SecretariaUpdateManyMutationInput = {
    numero_telefono?: StringFieldUpdateOperationsInput | string
  }

  export type SecretariaUncheckedUpdateManyInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
  }

  export type MedicoCreateInput = {
    tipo_matricula: $Enums.TipoMatriculaEnum
    numero_matricula: string
    numero_telefono: string
    descripcion?: string | null
    especialidad: EspecialidadCreateNestedOneWithoutMedicoInput
    ubicacion: UbicacionCreateNestedOneWithoutMedicoInput
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
  }

  export type MedicoUncheckedCreateInput = {
    usuario_id: string
    tipo_matricula: $Enums.TipoMatriculaEnum
    numero_matricula: string
    numero_telefono: string
    ubicacion_id: string
    especialidad_id: string
    descripcion?: string | null
  }

  export type MedicoUpdateInput = {
    tipo_matricula?: EnumTipoMatriculaEnumFieldUpdateOperationsInput | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicoNestedInput
    ubicacion?: UbicacionUpdateOneRequiredWithoutMedicoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    tipo_matricula?: EnumTipoMatriculaEnumFieldUpdateOperationsInput | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
    especialidad_id?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicoCreateManyInput = {
    usuario_id: string
    tipo_matricula: $Enums.TipoMatriculaEnum
    numero_matricula: string
    numero_telefono: string
    ubicacion_id: string
    especialidad_id: string
    descripcion?: string | null
  }

  export type MedicoUpdateManyMutationInput = {
    tipo_matricula?: EnumTipoMatriculaEnumFieldUpdateOperationsInput | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicoUncheckedUpdateManyInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    tipo_matricula?: EnumTipoMatriculaEnumFieldUpdateOperationsInput | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
    especialidad_id?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacienteCreateInput = {
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    ficha_medica: FichaMedicaCreateNestedOneWithoutPacienteInput
    obra_social: ObraSocialCreateNestedOneWithoutPacienteInput
    ubicacion: UbicacionCreateNestedOneWithoutPacienteInput
    usuario: UsuarioCreateNestedOneWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    usuario_id: string
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    ubicacion_id: string
    obra_social_id: string
    ficha_medica_id: string
  }

  export type PacienteUpdateInput = {
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ficha_medica?: FichaMedicaUpdateOneRequiredWithoutPacienteNestedInput
    obra_social?: ObraSocialUpdateOneRequiredWithoutPacienteNestedInput
    ubicacion?: UbicacionUpdateOneRequiredWithoutPacienteNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
    obra_social_id?: StringFieldUpdateOperationsInput | string
    ficha_medica_id?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteCreateManyInput = {
    usuario_id: string
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    ubicacion_id: string
    obra_social_id: string
    ficha_medica_id: string
  }

  export type PacienteUpdateManyMutationInput = {
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
    obra_social_id?: StringFieldUpdateOperationsInput | string
    ficha_medica_id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    usuario_id: string
  }

  export type AdminUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    usuario_id: string
  }

  export type AdminUpdateManyMutationInput = {

  }

  export type AdminUncheckedUpdateManyInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    id?: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
    admin?: AdminCreateNestedOneWithoutUsuarioInput
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteCreateNestedOneWithoutUsuarioInput
    secretaria?: SecretariaCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
    admin?: AdminUncheckedCreateNestedOneWithoutUsuarioInput
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteUncheckedCreateNestedOneWithoutUsuarioInput
    secretaria?: SecretariaUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneWithoutUsuarioNestedInput
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUpdateOneWithoutUsuarioNestedInput
    secretaria?: SecretariaUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    admin?: AdminUncheckedUpdateOneWithoutUsuarioNestedInput
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUncheckedUpdateOneWithoutUsuarioNestedInput
    secretaria?: SecretariaUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type FichaMedicaCreateInput = {
    id?: string
    alergias: string
    diagnostico: string
    tratamientos: string
    medicamentos_recetados: string
    paciente?: PacienteCreateNestedOneWithoutFicha_medicaInput
  }

  export type FichaMedicaUncheckedCreateInput = {
    id?: string
    alergias: string
    diagnostico: string
    tratamientos: string
    medicamentos_recetados: string
    paciente?: PacienteUncheckedCreateNestedOneWithoutFicha_medicaInput
  }

  export type FichaMedicaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamientos?: StringFieldUpdateOperationsInput | string
    medicamentos_recetados?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneWithoutFicha_medicaNestedInput
  }

  export type FichaMedicaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamientos?: StringFieldUpdateOperationsInput | string
    medicamentos_recetados?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUncheckedUpdateOneWithoutFicha_medicaNestedInput
  }

  export type FichaMedicaCreateManyInput = {
    id?: string
    alergias: string
    diagnostico: string
    tratamientos: string
    medicamentos_recetados: string
  }

  export type FichaMedicaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamientos?: StringFieldUpdateOperationsInput | string
    medicamentos_recetados?: StringFieldUpdateOperationsInput | string
  }

  export type FichaMedicaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamientos?: StringFieldUpdateOperationsInput | string
    medicamentos_recetados?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadCreateInput = {
    id?: string
    nombre: string
    medico?: MedicoCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUncheckedCreateInput = {
    id?: string
    nombre: string
    medico?: MedicoUncheckedCreateNestedManyWithoutEspecialidadInput
  }

  export type EspecialidadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateManyWithoutEspecialidadNestedInput
  }

  export type EspecialidadCreateManyInput = {
    id?: string
    nombre: string
  }

  export type EspecialidadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ObraSocialCreateInput = {
    id?: string
    nombre: string
    paciente?: PacienteCreateNestedManyWithoutObra_socialInput
  }

  export type ObraSocialUncheckedCreateInput = {
    id?: string
    nombre: string
    paciente?: PacienteUncheckedCreateNestedManyWithoutObra_socialInput
  }

  export type ObraSocialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateManyWithoutObra_socialNestedInput
  }

  export type ObraSocialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUncheckedUpdateManyWithoutObra_socialNestedInput
  }

  export type ObraSocialCreateManyInput = {
    id?: string
    nombre: string
  }

  export type ObraSocialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ObraSocialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MedicoNullableRelationFilter = {
    is?: MedicoWhereInput | null
    isNot?: MedicoWhereInput | null
  }

  export type PacienteNullableRelationFilter = {
    is?: PacienteWhereInput | null
    isNot?: PacienteWhereInput | null
  }

  export type SecretariaNullableRelationFilter = {
    is?: SecretariaWhereInput | null
    isNot?: SecretariaWhereInput | null
  }

  export type UbicacionCountOrderByAggregateInput = {
    id?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    codigo_postal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
  }

  export type UbicacionMaxOrderByAggregateInput = {
    id?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    codigo_postal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
  }

  export type UbicacionMinOrderByAggregateInput = {
    id?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    codigo_postal?: SortOrder
    ciudad?: SortOrder
    provincia?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UbicacionRelationFilter = {
    is?: UbicacionWhereInput
    isNot?: UbicacionWhereInput
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SecretariaCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
  }

  export type SecretariaMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
  }

  export type SecretariaMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
  }

  export type EnumTipoMatriculaEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMatriculaEnum | EnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMatriculaEnum[] | ListEnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMatriculaEnum[] | ListEnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMatriculaEnumFilter<$PrismaModel> | $Enums.TipoMatriculaEnum
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EspecialidadRelationFilter = {
    is?: EspecialidadWhereInput
    isNot?: EspecialidadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MedicoCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    tipo_matricula?: SortOrder
    numero_matricula?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    especialidad_id?: SortOrder
    descripcion?: SortOrder
  }

  export type MedicoMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    tipo_matricula?: SortOrder
    numero_matricula?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    especialidad_id?: SortOrder
    descripcion?: SortOrder
  }

  export type MedicoMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    tipo_matricula?: SortOrder
    numero_matricula?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    especialidad_id?: SortOrder
    descripcion?: SortOrder
  }

  export type EnumTipoMatriculaEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMatriculaEnum | EnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMatriculaEnum[] | ListEnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMatriculaEnum[] | ListEnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMatriculaEnumWithAggregatesFilter<$PrismaModel> | $Enums.TipoMatriculaEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMatriculaEnumFilter<$PrismaModel>
    _max?: NestedEnumTipoMatriculaEnumFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FichaMedicaRelationFilter = {
    is?: FichaMedicaWhereInput
    isNot?: FichaMedicaWhereInput
  }

  export type ObraSocialRelationFilter = {
    is?: ObraSocialWhereInput
    isNot?: ObraSocialWhereInput
  }

  export type PacienteCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    fecha_nacimiento?: SortOrder
    lugar_nacimiento?: SortOrder
    contacto_emergencia?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    obra_social_id?: SortOrder
    ficha_medica_id?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    fecha_nacimiento?: SortOrder
    lugar_nacimiento?: SortOrder
    contacto_emergencia?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    obra_social_id?: SortOrder
    ficha_medica_id?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    fecha_nacimiento?: SortOrder
    lugar_nacimiento?: SortOrder
    contacto_emergencia?: SortOrder
    numero_telefono?: SortOrder
    ubicacion_id?: SortOrder
    obra_social_id?: SortOrder
    ficha_medica_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AdminCountOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    usuario_id?: SortOrder
  }

  export type EnumTipoDocumentoEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumentoEnum | EnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumentoEnum[] | ListEnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumentoEnum[] | ListEnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoEnumFilter<$PrismaModel> | $Enums.TipoDocumentoEnum
  }

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo_electronico?: SortOrder
    contrasena?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo_electronico?: SortOrder
    contrasena?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    tipo_documento?: SortOrder
    numero_documento?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    correo_electronico?: SortOrder
    contrasena?: SortOrder
  }

  export type EnumTipoDocumentoEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumentoEnum | EnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumentoEnum[] | ListEnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumentoEnum[] | ListEnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoEnumWithAggregatesFilter<$PrismaModel> | $Enums.TipoDocumentoEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDocumentoEnumFilter<$PrismaModel>
    _max?: NestedEnumTipoDocumentoEnumFilter<$PrismaModel>
  }

  export type FichaMedicaCountOrderByAggregateInput = {
    id?: SortOrder
    alergias?: SortOrder
    diagnostico?: SortOrder
    tratamientos?: SortOrder
    medicamentos_recetados?: SortOrder
  }

  export type FichaMedicaMaxOrderByAggregateInput = {
    id?: SortOrder
    alergias?: SortOrder
    diagnostico?: SortOrder
    tratamientos?: SortOrder
    medicamentos_recetados?: SortOrder
  }

  export type FichaMedicaMinOrderByAggregateInput = {
    id?: SortOrder
    alergias?: SortOrder
    diagnostico?: SortOrder
    tratamientos?: SortOrder
    medicamentos_recetados?: SortOrder
  }

  export type MedicoListRelationFilter = {
    every?: MedicoWhereInput
    some?: MedicoWhereInput
    none?: MedicoWhereInput
  }

  export type MedicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecialidadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EspecialidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type EspecialidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PacienteListRelationFilter = {
    every?: PacienteWhereInput
    some?: PacienteWhereInput
    none?: PacienteWhereInput
  }

  export type PacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObraSocialCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ObraSocialMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type ObraSocialMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type MedicoCreateNestedOneWithoutUbicacionInput = {
    create?: XOR<MedicoCreateWithoutUbicacionInput, MedicoUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUbicacionInput
    connect?: MedicoWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutUbicacionInput = {
    create?: XOR<PacienteCreateWithoutUbicacionInput, PacienteUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUbicacionInput
    connect?: PacienteWhereUniqueInput
  }

  export type SecretariaCreateNestedOneWithoutUbicacionInput = {
    create?: XOR<SecretariaCreateWithoutUbicacionInput, SecretariaUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutUbicacionInput
    connect?: SecretariaWhereUniqueInput
  }

  export type MedicoUncheckedCreateNestedOneWithoutUbicacionInput = {
    create?: XOR<MedicoCreateWithoutUbicacionInput, MedicoUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUbicacionInput
    connect?: MedicoWhereUniqueInput
  }

  export type PacienteUncheckedCreateNestedOneWithoutUbicacionInput = {
    create?: XOR<PacienteCreateWithoutUbicacionInput, PacienteUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUbicacionInput
    connect?: PacienteWhereUniqueInput
  }

  export type SecretariaUncheckedCreateNestedOneWithoutUbicacionInput = {
    create?: XOR<SecretariaCreateWithoutUbicacionInput, SecretariaUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutUbicacionInput
    connect?: SecretariaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MedicoUpdateOneWithoutUbicacionNestedInput = {
    create?: XOR<MedicoCreateWithoutUbicacionInput, MedicoUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUbicacionInput
    upsert?: MedicoUpsertWithoutUbicacionInput
    disconnect?: MedicoWhereInput | boolean
    delete?: MedicoWhereInput | boolean
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutUbicacionInput, MedicoUpdateWithoutUbicacionInput>, MedicoUncheckedUpdateWithoutUbicacionInput>
  }

  export type PacienteUpdateOneWithoutUbicacionNestedInput = {
    create?: XOR<PacienteCreateWithoutUbicacionInput, PacienteUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUbicacionInput
    upsert?: PacienteUpsertWithoutUbicacionInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutUbicacionInput, PacienteUpdateWithoutUbicacionInput>, PacienteUncheckedUpdateWithoutUbicacionInput>
  }

  export type SecretariaUpdateOneWithoutUbicacionNestedInput = {
    create?: XOR<SecretariaCreateWithoutUbicacionInput, SecretariaUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutUbicacionInput
    upsert?: SecretariaUpsertWithoutUbicacionInput
    disconnect?: SecretariaWhereInput | boolean
    delete?: SecretariaWhereInput | boolean
    connect?: SecretariaWhereUniqueInput
    update?: XOR<XOR<SecretariaUpdateToOneWithWhereWithoutUbicacionInput, SecretariaUpdateWithoutUbicacionInput>, SecretariaUncheckedUpdateWithoutUbicacionInput>
  }

  export type MedicoUncheckedUpdateOneWithoutUbicacionNestedInput = {
    create?: XOR<MedicoCreateWithoutUbicacionInput, MedicoUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUbicacionInput
    upsert?: MedicoUpsertWithoutUbicacionInput
    disconnect?: MedicoWhereInput | boolean
    delete?: MedicoWhereInput | boolean
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutUbicacionInput, MedicoUpdateWithoutUbicacionInput>, MedicoUncheckedUpdateWithoutUbicacionInput>
  }

  export type PacienteUncheckedUpdateOneWithoutUbicacionNestedInput = {
    create?: XOR<PacienteCreateWithoutUbicacionInput, PacienteUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUbicacionInput
    upsert?: PacienteUpsertWithoutUbicacionInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutUbicacionInput, PacienteUpdateWithoutUbicacionInput>, PacienteUncheckedUpdateWithoutUbicacionInput>
  }

  export type SecretariaUncheckedUpdateOneWithoutUbicacionNestedInput = {
    create?: XOR<SecretariaCreateWithoutUbicacionInput, SecretariaUncheckedCreateWithoutUbicacionInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutUbicacionInput
    upsert?: SecretariaUpsertWithoutUbicacionInput
    disconnect?: SecretariaWhereInput | boolean
    delete?: SecretariaWhereInput | boolean
    connect?: SecretariaWhereUniqueInput
    update?: XOR<XOR<SecretariaUpdateToOneWithWhereWithoutUbicacionInput, SecretariaUpdateWithoutUbicacionInput>, SecretariaUncheckedUpdateWithoutUbicacionInput>
  }

  export type UbicacionCreateNestedOneWithoutSecretariaInput = {
    create?: XOR<UbicacionCreateWithoutSecretariaInput, UbicacionUncheckedCreateWithoutSecretariaInput>
    connectOrCreate?: UbicacionCreateOrConnectWithoutSecretariaInput
    connect?: UbicacionWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutSecretariaInput = {
    create?: XOR<UsuarioCreateWithoutSecretariaInput, UsuarioUncheckedCreateWithoutSecretariaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSecretariaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UbicacionUpdateOneRequiredWithoutSecretariaNestedInput = {
    create?: XOR<UbicacionCreateWithoutSecretariaInput, UbicacionUncheckedCreateWithoutSecretariaInput>
    connectOrCreate?: UbicacionCreateOrConnectWithoutSecretariaInput
    upsert?: UbicacionUpsertWithoutSecretariaInput
    connect?: UbicacionWhereUniqueInput
    update?: XOR<XOR<UbicacionUpdateToOneWithWhereWithoutSecretariaInput, UbicacionUpdateWithoutSecretariaInput>, UbicacionUncheckedUpdateWithoutSecretariaInput>
  }

  export type UsuarioUpdateOneRequiredWithoutSecretariaNestedInput = {
    create?: XOR<UsuarioCreateWithoutSecretariaInput, UsuarioUncheckedCreateWithoutSecretariaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSecretariaInput
    upsert?: UsuarioUpsertWithoutSecretariaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSecretariaInput, UsuarioUpdateWithoutSecretariaInput>, UsuarioUncheckedUpdateWithoutSecretariaInput>
  }

  export type EspecialidadCreateNestedOneWithoutMedicoInput = {
    create?: XOR<EspecialidadCreateWithoutMedicoInput, EspecialidadUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutMedicoInput
    connect?: EspecialidadWhereUniqueInput
  }

  export type UbicacionCreateNestedOneWithoutMedicoInput = {
    create?: XOR<UbicacionCreateWithoutMedicoInput, UbicacionUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: UbicacionCreateOrConnectWithoutMedicoInput
    connect?: UbicacionWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMedicoInput = {
    create?: XOR<UsuarioCreateWithoutMedicoInput, UsuarioUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMedicoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumTipoMatriculaEnumFieldUpdateOperationsInput = {
    set?: $Enums.TipoMatriculaEnum
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EspecialidadUpdateOneRequiredWithoutMedicoNestedInput = {
    create?: XOR<EspecialidadCreateWithoutMedicoInput, EspecialidadUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: EspecialidadCreateOrConnectWithoutMedicoInput
    upsert?: EspecialidadUpsertWithoutMedicoInput
    connect?: EspecialidadWhereUniqueInput
    update?: XOR<XOR<EspecialidadUpdateToOneWithWhereWithoutMedicoInput, EspecialidadUpdateWithoutMedicoInput>, EspecialidadUncheckedUpdateWithoutMedicoInput>
  }

  export type UbicacionUpdateOneRequiredWithoutMedicoNestedInput = {
    create?: XOR<UbicacionCreateWithoutMedicoInput, UbicacionUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: UbicacionCreateOrConnectWithoutMedicoInput
    upsert?: UbicacionUpsertWithoutMedicoInput
    connect?: UbicacionWhereUniqueInput
    update?: XOR<XOR<UbicacionUpdateToOneWithWhereWithoutMedicoInput, UbicacionUpdateWithoutMedicoInput>, UbicacionUncheckedUpdateWithoutMedicoInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMedicoNestedInput = {
    create?: XOR<UsuarioCreateWithoutMedicoInput, UsuarioUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMedicoInput
    upsert?: UsuarioUpsertWithoutMedicoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMedicoInput, UsuarioUpdateWithoutMedicoInput>, UsuarioUncheckedUpdateWithoutMedicoInput>
  }

  export type FichaMedicaCreateNestedOneWithoutPacienteInput = {
    create?: XOR<FichaMedicaCreateWithoutPacienteInput, FichaMedicaUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: FichaMedicaCreateOrConnectWithoutPacienteInput
    connect?: FichaMedicaWhereUniqueInput
  }

  export type ObraSocialCreateNestedOneWithoutPacienteInput = {
    create?: XOR<ObraSocialCreateWithoutPacienteInput, ObraSocialUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: ObraSocialCreateOrConnectWithoutPacienteInput
    connect?: ObraSocialWhereUniqueInput
  }

  export type UbicacionCreateNestedOneWithoutPacienteInput = {
    create?: XOR<UbicacionCreateWithoutPacienteInput, UbicacionUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: UbicacionCreateOrConnectWithoutPacienteInput
    connect?: UbicacionWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutPacienteInput = {
    create?: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacienteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FichaMedicaUpdateOneRequiredWithoutPacienteNestedInput = {
    create?: XOR<FichaMedicaCreateWithoutPacienteInput, FichaMedicaUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: FichaMedicaCreateOrConnectWithoutPacienteInput
    upsert?: FichaMedicaUpsertWithoutPacienteInput
    connect?: FichaMedicaWhereUniqueInput
    update?: XOR<XOR<FichaMedicaUpdateToOneWithWhereWithoutPacienteInput, FichaMedicaUpdateWithoutPacienteInput>, FichaMedicaUncheckedUpdateWithoutPacienteInput>
  }

  export type ObraSocialUpdateOneRequiredWithoutPacienteNestedInput = {
    create?: XOR<ObraSocialCreateWithoutPacienteInput, ObraSocialUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: ObraSocialCreateOrConnectWithoutPacienteInput
    upsert?: ObraSocialUpsertWithoutPacienteInput
    connect?: ObraSocialWhereUniqueInput
    update?: XOR<XOR<ObraSocialUpdateToOneWithWhereWithoutPacienteInput, ObraSocialUpdateWithoutPacienteInput>, ObraSocialUncheckedUpdateWithoutPacienteInput>
  }

  export type UbicacionUpdateOneRequiredWithoutPacienteNestedInput = {
    create?: XOR<UbicacionCreateWithoutPacienteInput, UbicacionUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: UbicacionCreateOrConnectWithoutPacienteInput
    upsert?: UbicacionUpsertWithoutPacienteInput
    connect?: UbicacionWhereUniqueInput
    update?: XOR<XOR<UbicacionUpdateToOneWithWhereWithoutPacienteInput, UbicacionUpdateWithoutPacienteInput>, UbicacionUncheckedUpdateWithoutPacienteInput>
  }

  export type UsuarioUpdateOneRequiredWithoutPacienteNestedInput = {
    create?: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPacienteInput
    upsert?: UsuarioUpsertWithoutPacienteInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPacienteInput, UsuarioUpdateWithoutPacienteInput>, UsuarioUncheckedUpdateWithoutPacienteInput>
  }

  export type UsuarioCreateNestedOneWithoutAdminInput = {
    create?: XOR<UsuarioCreateWithoutAdminInput, UsuarioUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAdminInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UsuarioCreateWithoutAdminInput, UsuarioUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAdminInput
    upsert?: UsuarioUpsertWithoutAdminInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAdminInput, UsuarioUpdateWithoutAdminInput>, UsuarioUncheckedUpdateWithoutAdminInput>
  }

  export type AdminCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AdminCreateWithoutUsuarioInput, AdminUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUsuarioInput
    connect?: AdminWhereUniqueInput
  }

  export type MedicoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUsuarioInput
    connect?: MedicoWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUsuarioInput
    connect?: PacienteWhereUniqueInput
  }

  export type SecretariaCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<SecretariaCreateWithoutUsuarioInput, SecretariaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutUsuarioInput
    connect?: SecretariaWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AdminCreateWithoutUsuarioInput, AdminUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUsuarioInput
    connect?: AdminWhereUniqueInput
  }

  export type MedicoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUsuarioInput
    connect?: MedicoWhereUniqueInput
  }

  export type PacienteUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUsuarioInput
    connect?: PacienteWhereUniqueInput
  }

  export type SecretariaUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<SecretariaCreateWithoutUsuarioInput, SecretariaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutUsuarioInput
    connect?: SecretariaWhereUniqueInput
  }

  export type EnumTipoDocumentoEnumFieldUpdateOperationsInput = {
    set?: $Enums.TipoDocumentoEnum
  }

  export type AdminUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AdminCreateWithoutUsuarioInput, AdminUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUsuarioInput
    upsert?: AdminUpsertWithoutUsuarioInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUsuarioInput, AdminUpdateWithoutUsuarioInput>, AdminUncheckedUpdateWithoutUsuarioInput>
  }

  export type MedicoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUsuarioInput
    upsert?: MedicoUpsertWithoutUsuarioInput
    disconnect?: MedicoWhereInput | boolean
    delete?: MedicoWhereInput | boolean
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutUsuarioInput, MedicoUpdateWithoutUsuarioInput>, MedicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PacienteUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUsuarioInput
    upsert?: PacienteUpsertWithoutUsuarioInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutUsuarioInput, PacienteUpdateWithoutUsuarioInput>, PacienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type SecretariaUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<SecretariaCreateWithoutUsuarioInput, SecretariaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutUsuarioInput
    upsert?: SecretariaUpsertWithoutUsuarioInput
    disconnect?: SecretariaWhereInput | boolean
    delete?: SecretariaWhereInput | boolean
    connect?: SecretariaWhereUniqueInput
    update?: XOR<XOR<SecretariaUpdateToOneWithWhereWithoutUsuarioInput, SecretariaUpdateWithoutUsuarioInput>, SecretariaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AdminUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AdminCreateWithoutUsuarioInput, AdminUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUsuarioInput
    upsert?: AdminUpsertWithoutUsuarioInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUsuarioInput, AdminUpdateWithoutUsuarioInput>, AdminUncheckedUpdateWithoutUsuarioInput>
  }

  export type MedicoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MedicoCreateOrConnectWithoutUsuarioInput
    upsert?: MedicoUpsertWithoutUsuarioInput
    disconnect?: MedicoWhereInput | boolean
    delete?: MedicoWhereInput | boolean
    connect?: MedicoWhereUniqueInput
    update?: XOR<XOR<MedicoUpdateToOneWithWhereWithoutUsuarioInput, MedicoUpdateWithoutUsuarioInput>, MedicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PacienteUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutUsuarioInput
    upsert?: PacienteUpsertWithoutUsuarioInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutUsuarioInput, PacienteUpdateWithoutUsuarioInput>, PacienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type SecretariaUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<SecretariaCreateWithoutUsuarioInput, SecretariaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: SecretariaCreateOrConnectWithoutUsuarioInput
    upsert?: SecretariaUpsertWithoutUsuarioInput
    disconnect?: SecretariaWhereInput | boolean
    delete?: SecretariaWhereInput | boolean
    connect?: SecretariaWhereUniqueInput
    update?: XOR<XOR<SecretariaUpdateToOneWithWhereWithoutUsuarioInput, SecretariaUpdateWithoutUsuarioInput>, SecretariaUncheckedUpdateWithoutUsuarioInput>
  }

  export type PacienteCreateNestedOneWithoutFicha_medicaInput = {
    create?: XOR<PacienteCreateWithoutFicha_medicaInput, PacienteUncheckedCreateWithoutFicha_medicaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutFicha_medicaInput
    connect?: PacienteWhereUniqueInput
  }

  export type PacienteUncheckedCreateNestedOneWithoutFicha_medicaInput = {
    create?: XOR<PacienteCreateWithoutFicha_medicaInput, PacienteUncheckedCreateWithoutFicha_medicaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutFicha_medicaInput
    connect?: PacienteWhereUniqueInput
  }

  export type PacienteUpdateOneWithoutFicha_medicaNestedInput = {
    create?: XOR<PacienteCreateWithoutFicha_medicaInput, PacienteUncheckedCreateWithoutFicha_medicaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutFicha_medicaInput
    upsert?: PacienteUpsertWithoutFicha_medicaInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutFicha_medicaInput, PacienteUpdateWithoutFicha_medicaInput>, PacienteUncheckedUpdateWithoutFicha_medicaInput>
  }

  export type PacienteUncheckedUpdateOneWithoutFicha_medicaNestedInput = {
    create?: XOR<PacienteCreateWithoutFicha_medicaInput, PacienteUncheckedCreateWithoutFicha_medicaInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutFicha_medicaInput
    upsert?: PacienteUpsertWithoutFicha_medicaInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutFicha_medicaInput, PacienteUpdateWithoutFicha_medicaInput>, PacienteUncheckedUpdateWithoutFicha_medicaInput>
  }

  export type MedicoCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
  }

  export type MedicoUncheckedCreateNestedManyWithoutEspecialidadInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
  }

  export type MedicoUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    upsert?: MedicoUpsertWithWhereUniqueWithoutEspecialidadInput | MedicoUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    set?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    disconnect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    delete?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    update?: MedicoUpdateWithWhereUniqueWithoutEspecialidadInput | MedicoUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: MedicoUpdateManyWithWhereWithoutEspecialidadInput | MedicoUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
  }

  export type MedicoUncheckedUpdateManyWithoutEspecialidadNestedInput = {
    create?: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput> | MedicoCreateWithoutEspecialidadInput[] | MedicoUncheckedCreateWithoutEspecialidadInput[]
    connectOrCreate?: MedicoCreateOrConnectWithoutEspecialidadInput | MedicoCreateOrConnectWithoutEspecialidadInput[]
    upsert?: MedicoUpsertWithWhereUniqueWithoutEspecialidadInput | MedicoUpsertWithWhereUniqueWithoutEspecialidadInput[]
    createMany?: MedicoCreateManyEspecialidadInputEnvelope
    set?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    disconnect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    delete?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    connect?: MedicoWhereUniqueInput | MedicoWhereUniqueInput[]
    update?: MedicoUpdateWithWhereUniqueWithoutEspecialidadInput | MedicoUpdateWithWhereUniqueWithoutEspecialidadInput[]
    updateMany?: MedicoUpdateManyWithWhereWithoutEspecialidadInput | MedicoUpdateManyWithWhereWithoutEspecialidadInput[]
    deleteMany?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
  }

  export type PacienteCreateNestedManyWithoutObra_socialInput = {
    create?: XOR<PacienteCreateWithoutObra_socialInput, PacienteUncheckedCreateWithoutObra_socialInput> | PacienteCreateWithoutObra_socialInput[] | PacienteUncheckedCreateWithoutObra_socialInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutObra_socialInput | PacienteCreateOrConnectWithoutObra_socialInput[]
    createMany?: PacienteCreateManyObra_socialInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutObra_socialInput = {
    create?: XOR<PacienteCreateWithoutObra_socialInput, PacienteUncheckedCreateWithoutObra_socialInput> | PacienteCreateWithoutObra_socialInput[] | PacienteUncheckedCreateWithoutObra_socialInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutObra_socialInput | PacienteCreateOrConnectWithoutObra_socialInput[]
    createMany?: PacienteCreateManyObra_socialInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type PacienteUpdateManyWithoutObra_socialNestedInput = {
    create?: XOR<PacienteCreateWithoutObra_socialInput, PacienteUncheckedCreateWithoutObra_socialInput> | PacienteCreateWithoutObra_socialInput[] | PacienteUncheckedCreateWithoutObra_socialInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutObra_socialInput | PacienteCreateOrConnectWithoutObra_socialInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutObra_socialInput | PacienteUpsertWithWhereUniqueWithoutObra_socialInput[]
    createMany?: PacienteCreateManyObra_socialInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutObra_socialInput | PacienteUpdateWithWhereUniqueWithoutObra_socialInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutObra_socialInput | PacienteUpdateManyWithWhereWithoutObra_socialInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutObra_socialNestedInput = {
    create?: XOR<PacienteCreateWithoutObra_socialInput, PacienteUncheckedCreateWithoutObra_socialInput> | PacienteCreateWithoutObra_socialInput[] | PacienteUncheckedCreateWithoutObra_socialInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutObra_socialInput | PacienteCreateOrConnectWithoutObra_socialInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutObra_socialInput | PacienteUpsertWithWhereUniqueWithoutObra_socialInput[]
    createMany?: PacienteCreateManyObra_socialInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutObra_socialInput | PacienteUpdateWithWhereUniqueWithoutObra_socialInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutObra_socialInput | PacienteUpdateManyWithWhereWithoutObra_socialInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumTipoMatriculaEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMatriculaEnum | EnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMatriculaEnum[] | ListEnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMatriculaEnum[] | ListEnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMatriculaEnumFilter<$PrismaModel> | $Enums.TipoMatriculaEnum
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTipoMatriculaEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMatriculaEnum | EnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMatriculaEnum[] | ListEnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMatriculaEnum[] | ListEnumTipoMatriculaEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMatriculaEnumWithAggregatesFilter<$PrismaModel> | $Enums.TipoMatriculaEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMatriculaEnumFilter<$PrismaModel>
    _max?: NestedEnumTipoMatriculaEnumFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTipoDocumentoEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumentoEnum | EnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumentoEnum[] | ListEnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumentoEnum[] | ListEnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoEnumFilter<$PrismaModel> | $Enums.TipoDocumentoEnum
  }

  export type NestedEnumTipoDocumentoEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoDocumentoEnum | EnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TipoDocumentoEnum[] | ListEnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoDocumentoEnum[] | ListEnumTipoDocumentoEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoDocumentoEnumWithAggregatesFilter<$PrismaModel> | $Enums.TipoDocumentoEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoDocumentoEnumFilter<$PrismaModel>
    _max?: NestedEnumTipoDocumentoEnumFilter<$PrismaModel>
  }

  export type MedicoCreateWithoutUbicacionInput = {
    tipo_matricula: $Enums.TipoMatriculaEnum
    numero_matricula: string
    numero_telefono: string
    descripcion?: string | null
    especialidad: EspecialidadCreateNestedOneWithoutMedicoInput
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutUbicacionInput = {
    usuario_id: string
    tipo_matricula: $Enums.TipoMatriculaEnum
    numero_matricula: string
    numero_telefono: string
    especialidad_id: string
    descripcion?: string | null
  }

  export type MedicoCreateOrConnectWithoutUbicacionInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutUbicacionInput, MedicoUncheckedCreateWithoutUbicacionInput>
  }

  export type PacienteCreateWithoutUbicacionInput = {
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    ficha_medica: FichaMedicaCreateNestedOneWithoutPacienteInput
    obra_social: ObraSocialCreateNestedOneWithoutPacienteInput
    usuario: UsuarioCreateNestedOneWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutUbicacionInput = {
    usuario_id: string
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    obra_social_id: string
    ficha_medica_id: string
  }

  export type PacienteCreateOrConnectWithoutUbicacionInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutUbicacionInput, PacienteUncheckedCreateWithoutUbicacionInput>
  }

  export type SecretariaCreateWithoutUbicacionInput = {
    numero_telefono: string
    usuario: UsuarioCreateNestedOneWithoutSecretariaInput
  }

  export type SecretariaUncheckedCreateWithoutUbicacionInput = {
    usuario_id: string
    numero_telefono: string
  }

  export type SecretariaCreateOrConnectWithoutUbicacionInput = {
    where: SecretariaWhereUniqueInput
    create: XOR<SecretariaCreateWithoutUbicacionInput, SecretariaUncheckedCreateWithoutUbicacionInput>
  }

  export type MedicoUpsertWithoutUbicacionInput = {
    update: XOR<MedicoUpdateWithoutUbicacionInput, MedicoUncheckedUpdateWithoutUbicacionInput>
    create: XOR<MedicoCreateWithoutUbicacionInput, MedicoUncheckedCreateWithoutUbicacionInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutUbicacionInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutUbicacionInput, MedicoUncheckedUpdateWithoutUbicacionInput>
  }

  export type MedicoUpdateWithoutUbicacionInput = {
    tipo_matricula?: EnumTipoMatriculaEnumFieldUpdateOperationsInput | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutUbicacionInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    tipo_matricula?: EnumTipoMatriculaEnumFieldUpdateOperationsInput | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    especialidad_id?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacienteUpsertWithoutUbicacionInput = {
    update: XOR<PacienteUpdateWithoutUbicacionInput, PacienteUncheckedUpdateWithoutUbicacionInput>
    create: XOR<PacienteCreateWithoutUbicacionInput, PacienteUncheckedCreateWithoutUbicacionInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutUbicacionInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutUbicacionInput, PacienteUncheckedUpdateWithoutUbicacionInput>
  }

  export type PacienteUpdateWithoutUbicacionInput = {
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ficha_medica?: FichaMedicaUpdateOneRequiredWithoutPacienteNestedInput
    obra_social?: ObraSocialUpdateOneRequiredWithoutPacienteNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutUbicacionInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    obra_social_id?: StringFieldUpdateOperationsInput | string
    ficha_medica_id?: StringFieldUpdateOperationsInput | string
  }

  export type SecretariaUpsertWithoutUbicacionInput = {
    update: XOR<SecretariaUpdateWithoutUbicacionInput, SecretariaUncheckedUpdateWithoutUbicacionInput>
    create: XOR<SecretariaCreateWithoutUbicacionInput, SecretariaUncheckedCreateWithoutUbicacionInput>
    where?: SecretariaWhereInput
  }

  export type SecretariaUpdateToOneWithWhereWithoutUbicacionInput = {
    where?: SecretariaWhereInput
    data: XOR<SecretariaUpdateWithoutUbicacionInput, SecretariaUncheckedUpdateWithoutUbicacionInput>
  }

  export type SecretariaUpdateWithoutUbicacionInput = {
    numero_telefono?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutSecretariaNestedInput
  }

  export type SecretariaUncheckedUpdateWithoutUbicacionInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
  }

  export type UbicacionCreateWithoutSecretariaInput = {
    id?: string
    calle: string
    numero: string
    codigo_postal: string
    ciudad: string
    provincia: string
    medico?: MedicoCreateNestedOneWithoutUbicacionInput
    paciente?: PacienteCreateNestedOneWithoutUbicacionInput
  }

  export type UbicacionUncheckedCreateWithoutSecretariaInput = {
    id?: string
    calle: string
    numero: string
    codigo_postal: string
    ciudad: string
    provincia: string
    medico?: MedicoUncheckedCreateNestedOneWithoutUbicacionInput
    paciente?: PacienteUncheckedCreateNestedOneWithoutUbicacionInput
  }

  export type UbicacionCreateOrConnectWithoutSecretariaInput = {
    where: UbicacionWhereUniqueInput
    create: XOR<UbicacionCreateWithoutSecretariaInput, UbicacionUncheckedCreateWithoutSecretariaInput>
  }

  export type UsuarioCreateWithoutSecretariaInput = {
    id?: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
    admin?: AdminCreateNestedOneWithoutUsuarioInput
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutSecretariaInput = {
    id?: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
    admin?: AdminUncheckedCreateNestedOneWithoutUsuarioInput
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutSecretariaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSecretariaInput, UsuarioUncheckedCreateWithoutSecretariaInput>
  }

  export type UbicacionUpsertWithoutSecretariaInput = {
    update: XOR<UbicacionUpdateWithoutSecretariaInput, UbicacionUncheckedUpdateWithoutSecretariaInput>
    create: XOR<UbicacionCreateWithoutSecretariaInput, UbicacionUncheckedCreateWithoutSecretariaInput>
    where?: UbicacionWhereInput
  }

  export type UbicacionUpdateToOneWithWhereWithoutSecretariaInput = {
    where?: UbicacionWhereInput
    data: XOR<UbicacionUpdateWithoutSecretariaInput, UbicacionUncheckedUpdateWithoutSecretariaInput>
  }

  export type UbicacionUpdateWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneWithoutUbicacionNestedInput
    paciente?: PacienteUpdateOneWithoutUbicacionNestedInput
  }

  export type UbicacionUncheckedUpdateWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateOneWithoutUbicacionNestedInput
    paciente?: PacienteUncheckedUpdateOneWithoutUbicacionNestedInput
  }

  export type UsuarioUpsertWithoutSecretariaInput = {
    update: XOR<UsuarioUpdateWithoutSecretariaInput, UsuarioUncheckedUpdateWithoutSecretariaInput>
    create: XOR<UsuarioCreateWithoutSecretariaInput, UsuarioUncheckedCreateWithoutSecretariaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSecretariaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSecretariaInput, UsuarioUncheckedUpdateWithoutSecretariaInput>
  }

  export type UsuarioUpdateWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneWithoutUsuarioNestedInput
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSecretariaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    admin?: AdminUncheckedUpdateOneWithoutUsuarioNestedInput
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type EspecialidadCreateWithoutMedicoInput = {
    id?: string
    nombre: string
  }

  export type EspecialidadUncheckedCreateWithoutMedicoInput = {
    id?: string
    nombre: string
  }

  export type EspecialidadCreateOrConnectWithoutMedicoInput = {
    where: EspecialidadWhereUniqueInput
    create: XOR<EspecialidadCreateWithoutMedicoInput, EspecialidadUncheckedCreateWithoutMedicoInput>
  }

  export type UbicacionCreateWithoutMedicoInput = {
    id?: string
    calle: string
    numero: string
    codigo_postal: string
    ciudad: string
    provincia: string
    paciente?: PacienteCreateNestedOneWithoutUbicacionInput
    secretaria?: SecretariaCreateNestedOneWithoutUbicacionInput
  }

  export type UbicacionUncheckedCreateWithoutMedicoInput = {
    id?: string
    calle: string
    numero: string
    codigo_postal: string
    ciudad: string
    provincia: string
    paciente?: PacienteUncheckedCreateNestedOneWithoutUbicacionInput
    secretaria?: SecretariaUncheckedCreateNestedOneWithoutUbicacionInput
  }

  export type UbicacionCreateOrConnectWithoutMedicoInput = {
    where: UbicacionWhereUniqueInput
    create: XOR<UbicacionCreateWithoutMedicoInput, UbicacionUncheckedCreateWithoutMedicoInput>
  }

  export type UsuarioCreateWithoutMedicoInput = {
    id?: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
    admin?: AdminCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteCreateNestedOneWithoutUsuarioInput
    secretaria?: SecretariaCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMedicoInput = {
    id?: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
    admin?: AdminUncheckedCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteUncheckedCreateNestedOneWithoutUsuarioInput
    secretaria?: SecretariaUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutMedicoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMedicoInput, UsuarioUncheckedCreateWithoutMedicoInput>
  }

  export type EspecialidadUpsertWithoutMedicoInput = {
    update: XOR<EspecialidadUpdateWithoutMedicoInput, EspecialidadUncheckedUpdateWithoutMedicoInput>
    create: XOR<EspecialidadCreateWithoutMedicoInput, EspecialidadUncheckedCreateWithoutMedicoInput>
    where?: EspecialidadWhereInput
  }

  export type EspecialidadUpdateToOneWithWhereWithoutMedicoInput = {
    where?: EspecialidadWhereInput
    data: XOR<EspecialidadUpdateWithoutMedicoInput, EspecialidadUncheckedUpdateWithoutMedicoInput>
  }

  export type EspecialidadUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type EspecialidadUncheckedUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UbicacionUpsertWithoutMedicoInput = {
    update: XOR<UbicacionUpdateWithoutMedicoInput, UbicacionUncheckedUpdateWithoutMedicoInput>
    create: XOR<UbicacionCreateWithoutMedicoInput, UbicacionUncheckedCreateWithoutMedicoInput>
    where?: UbicacionWhereInput
  }

  export type UbicacionUpdateToOneWithWhereWithoutMedicoInput = {
    where?: UbicacionWhereInput
    data: XOR<UbicacionUpdateWithoutMedicoInput, UbicacionUncheckedUpdateWithoutMedicoInput>
  }

  export type UbicacionUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneWithoutUbicacionNestedInput
    secretaria?: SecretariaUpdateOneWithoutUbicacionNestedInput
  }

  export type UbicacionUncheckedUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUncheckedUpdateOneWithoutUbicacionNestedInput
    secretaria?: SecretariaUncheckedUpdateOneWithoutUbicacionNestedInput
  }

  export type UsuarioUpsertWithoutMedicoInput = {
    update: XOR<UsuarioUpdateWithoutMedicoInput, UsuarioUncheckedUpdateWithoutMedicoInput>
    create: XOR<UsuarioCreateWithoutMedicoInput, UsuarioUncheckedCreateWithoutMedicoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMedicoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMedicoInput, UsuarioUncheckedUpdateWithoutMedicoInput>
  }

  export type UsuarioUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUpdateOneWithoutUsuarioNestedInput
    secretaria?: SecretariaUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    admin?: AdminUncheckedUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUncheckedUpdateOneWithoutUsuarioNestedInput
    secretaria?: SecretariaUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type FichaMedicaCreateWithoutPacienteInput = {
    id?: string
    alergias: string
    diagnostico: string
    tratamientos: string
    medicamentos_recetados: string
  }

  export type FichaMedicaUncheckedCreateWithoutPacienteInput = {
    id?: string
    alergias: string
    diagnostico: string
    tratamientos: string
    medicamentos_recetados: string
  }

  export type FichaMedicaCreateOrConnectWithoutPacienteInput = {
    where: FichaMedicaWhereUniqueInput
    create: XOR<FichaMedicaCreateWithoutPacienteInput, FichaMedicaUncheckedCreateWithoutPacienteInput>
  }

  export type ObraSocialCreateWithoutPacienteInput = {
    id?: string
    nombre: string
  }

  export type ObraSocialUncheckedCreateWithoutPacienteInput = {
    id?: string
    nombre: string
  }

  export type ObraSocialCreateOrConnectWithoutPacienteInput = {
    where: ObraSocialWhereUniqueInput
    create: XOR<ObraSocialCreateWithoutPacienteInput, ObraSocialUncheckedCreateWithoutPacienteInput>
  }

  export type UbicacionCreateWithoutPacienteInput = {
    id?: string
    calle: string
    numero: string
    codigo_postal: string
    ciudad: string
    provincia: string
    medico?: MedicoCreateNestedOneWithoutUbicacionInput
    secretaria?: SecretariaCreateNestedOneWithoutUbicacionInput
  }

  export type UbicacionUncheckedCreateWithoutPacienteInput = {
    id?: string
    calle: string
    numero: string
    codigo_postal: string
    ciudad: string
    provincia: string
    medico?: MedicoUncheckedCreateNestedOneWithoutUbicacionInput
    secretaria?: SecretariaUncheckedCreateNestedOneWithoutUbicacionInput
  }

  export type UbicacionCreateOrConnectWithoutPacienteInput = {
    where: UbicacionWhereUniqueInput
    create: XOR<UbicacionCreateWithoutPacienteInput, UbicacionUncheckedCreateWithoutPacienteInput>
  }

  export type UsuarioCreateWithoutPacienteInput = {
    id?: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
    admin?: AdminCreateNestedOneWithoutUsuarioInput
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    secretaria?: SecretariaCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPacienteInput = {
    id?: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
    admin?: AdminUncheckedCreateNestedOneWithoutUsuarioInput
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    secretaria?: SecretariaUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPacienteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput>
  }

  export type FichaMedicaUpsertWithoutPacienteInput = {
    update: XOR<FichaMedicaUpdateWithoutPacienteInput, FichaMedicaUncheckedUpdateWithoutPacienteInput>
    create: XOR<FichaMedicaCreateWithoutPacienteInput, FichaMedicaUncheckedCreateWithoutPacienteInput>
    where?: FichaMedicaWhereInput
  }

  export type FichaMedicaUpdateToOneWithWhereWithoutPacienteInput = {
    where?: FichaMedicaWhereInput
    data: XOR<FichaMedicaUpdateWithoutPacienteInput, FichaMedicaUncheckedUpdateWithoutPacienteInput>
  }

  export type FichaMedicaUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamientos?: StringFieldUpdateOperationsInput | string
    medicamentos_recetados?: StringFieldUpdateOperationsInput | string
  }

  export type FichaMedicaUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    alergias?: StringFieldUpdateOperationsInput | string
    diagnostico?: StringFieldUpdateOperationsInput | string
    tratamientos?: StringFieldUpdateOperationsInput | string
    medicamentos_recetados?: StringFieldUpdateOperationsInput | string
  }

  export type ObraSocialUpsertWithoutPacienteInput = {
    update: XOR<ObraSocialUpdateWithoutPacienteInput, ObraSocialUncheckedUpdateWithoutPacienteInput>
    create: XOR<ObraSocialCreateWithoutPacienteInput, ObraSocialUncheckedCreateWithoutPacienteInput>
    where?: ObraSocialWhereInput
  }

  export type ObraSocialUpdateToOneWithWhereWithoutPacienteInput = {
    where?: ObraSocialWhereInput
    data: XOR<ObraSocialUpdateWithoutPacienteInput, ObraSocialUncheckedUpdateWithoutPacienteInput>
  }

  export type ObraSocialUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ObraSocialUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UbicacionUpsertWithoutPacienteInput = {
    update: XOR<UbicacionUpdateWithoutPacienteInput, UbicacionUncheckedUpdateWithoutPacienteInput>
    create: XOR<UbicacionCreateWithoutPacienteInput, UbicacionUncheckedCreateWithoutPacienteInput>
    where?: UbicacionWhereInput
  }

  export type UbicacionUpdateToOneWithWhereWithoutPacienteInput = {
    where?: UbicacionWhereInput
    data: XOR<UbicacionUpdateWithoutPacienteInput, UbicacionUncheckedUpdateWithoutPacienteInput>
  }

  export type UbicacionUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneWithoutUbicacionNestedInput
    secretaria?: SecretariaUpdateOneWithoutUbicacionNestedInput
  }

  export type UbicacionUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    codigo_postal?: StringFieldUpdateOperationsInput | string
    ciudad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateOneWithoutUbicacionNestedInput
    secretaria?: SecretariaUncheckedUpdateOneWithoutUbicacionNestedInput
  }

  export type UsuarioUpsertWithoutPacienteInput = {
    update: XOR<UsuarioUpdateWithoutPacienteInput, UsuarioUncheckedUpdateWithoutPacienteInput>
    create: XOR<UsuarioCreateWithoutPacienteInput, UsuarioUncheckedCreateWithoutPacienteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPacienteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPacienteInput, UsuarioUncheckedUpdateWithoutPacienteInput>
  }

  export type UsuarioUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneWithoutUsuarioNestedInput
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    secretaria?: SecretariaUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    admin?: AdminUncheckedUpdateOneWithoutUsuarioNestedInput
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    secretaria?: SecretariaUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutAdminInput = {
    id?: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
    medico?: MedicoCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteCreateNestedOneWithoutUsuarioInput
    secretaria?: SecretariaCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAdminInput = {
    id?: string
    tipo_documento: $Enums.TipoDocumentoEnum
    numero_documento: string
    nombre: string
    apellido: string
    correo_electronico: string
    contrasena: string
    medico?: MedicoUncheckedCreateNestedOneWithoutUsuarioInput
    paciente?: PacienteUncheckedCreateNestedOneWithoutUsuarioInput
    secretaria?: SecretariaUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAdminInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAdminInput, UsuarioUncheckedCreateWithoutAdminInput>
  }

  export type UsuarioUpsertWithoutAdminInput = {
    update: XOR<UsuarioUpdateWithoutAdminInput, UsuarioUncheckedUpdateWithoutAdminInput>
    create: XOR<UsuarioCreateWithoutAdminInput, UsuarioUncheckedCreateWithoutAdminInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAdminInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAdminInput, UsuarioUncheckedUpdateWithoutAdminInput>
  }

  export type UsuarioUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUpdateOneWithoutUsuarioNestedInput
    secretaria?: SecretariaUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_documento?: EnumTipoDocumentoEnumFieldUpdateOperationsInput | $Enums.TipoDocumentoEnum
    numero_documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    correo_electronico?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    medico?: MedicoUncheckedUpdateOneWithoutUsuarioNestedInput
    paciente?: PacienteUncheckedUpdateOneWithoutUsuarioNestedInput
    secretaria?: SecretariaUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type AdminCreateWithoutUsuarioInput = {

  }

  export type AdminUncheckedCreateWithoutUsuarioInput = {

  }

  export type AdminCreateOrConnectWithoutUsuarioInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUsuarioInput, AdminUncheckedCreateWithoutUsuarioInput>
  }

  export type MedicoCreateWithoutUsuarioInput = {
    tipo_matricula: $Enums.TipoMatriculaEnum
    numero_matricula: string
    numero_telefono: string
    descripcion?: string | null
    especialidad: EspecialidadCreateNestedOneWithoutMedicoInput
    ubicacion: UbicacionCreateNestedOneWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutUsuarioInput = {
    tipo_matricula: $Enums.TipoMatriculaEnum
    numero_matricula: string
    numero_telefono: string
    ubicacion_id: string
    especialidad_id: string
    descripcion?: string | null
  }

  export type MedicoCreateOrConnectWithoutUsuarioInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
  }

  export type PacienteCreateWithoutUsuarioInput = {
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    ficha_medica: FichaMedicaCreateNestedOneWithoutPacienteInput
    obra_social: ObraSocialCreateNestedOneWithoutPacienteInput
    ubicacion: UbicacionCreateNestedOneWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutUsuarioInput = {
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    ubicacion_id: string
    obra_social_id: string
    ficha_medica_id: string
  }

  export type PacienteCreateOrConnectWithoutUsuarioInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
  }

  export type SecretariaCreateWithoutUsuarioInput = {
    numero_telefono: string
    ubicacion: UbicacionCreateNestedOneWithoutSecretariaInput
  }

  export type SecretariaUncheckedCreateWithoutUsuarioInput = {
    numero_telefono: string
    ubicacion_id: string
  }

  export type SecretariaCreateOrConnectWithoutUsuarioInput = {
    where: SecretariaWhereUniqueInput
    create: XOR<SecretariaCreateWithoutUsuarioInput, SecretariaUncheckedCreateWithoutUsuarioInput>
  }

  export type AdminUpsertWithoutUsuarioInput = {
    update: XOR<AdminUpdateWithoutUsuarioInput, AdminUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AdminCreateWithoutUsuarioInput, AdminUncheckedCreateWithoutUsuarioInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUsuarioInput, AdminUncheckedUpdateWithoutUsuarioInput>
  }

  export type AdminUpdateWithoutUsuarioInput = {

  }

  export type AdminUncheckedUpdateWithoutUsuarioInput = {

  }

  export type MedicoUpsertWithoutUsuarioInput = {
    update: XOR<MedicoUpdateWithoutUsuarioInput, MedicoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MedicoCreateWithoutUsuarioInput, MedicoUncheckedCreateWithoutUsuarioInput>
    where?: MedicoWhereInput
  }

  export type MedicoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: MedicoWhereInput
    data: XOR<MedicoUpdateWithoutUsuarioInput, MedicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type MedicoUpdateWithoutUsuarioInput = {
    tipo_matricula?: EnumTipoMatriculaEnumFieldUpdateOperationsInput | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: EspecialidadUpdateOneRequiredWithoutMedicoNestedInput
    ubicacion?: UbicacionUpdateOneRequiredWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutUsuarioInput = {
    tipo_matricula?: EnumTipoMatriculaEnumFieldUpdateOperationsInput | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
    especialidad_id?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacienteUpsertWithoutUsuarioInput = {
    update: XOR<PacienteUpdateWithoutUsuarioInput, PacienteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PacienteCreateWithoutUsuarioInput, PacienteUncheckedCreateWithoutUsuarioInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutUsuarioInput, PacienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type PacienteUpdateWithoutUsuarioInput = {
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ficha_medica?: FichaMedicaUpdateOneRequiredWithoutPacienteNestedInput
    obra_social?: ObraSocialUpdateOneRequiredWithoutPacienteNestedInput
    ubicacion?: UbicacionUpdateOneRequiredWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutUsuarioInput = {
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
    obra_social_id?: StringFieldUpdateOperationsInput | string
    ficha_medica_id?: StringFieldUpdateOperationsInput | string
  }

  export type SecretariaUpsertWithoutUsuarioInput = {
    update: XOR<SecretariaUpdateWithoutUsuarioInput, SecretariaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SecretariaCreateWithoutUsuarioInput, SecretariaUncheckedCreateWithoutUsuarioInput>
    where?: SecretariaWhereInput
  }

  export type SecretariaUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: SecretariaWhereInput
    data: XOR<SecretariaUpdateWithoutUsuarioInput, SecretariaUncheckedUpdateWithoutUsuarioInput>
  }

  export type SecretariaUpdateWithoutUsuarioInput = {
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion?: UbicacionUpdateOneRequiredWithoutSecretariaNestedInput
  }

  export type SecretariaUncheckedUpdateWithoutUsuarioInput = {
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteCreateWithoutFicha_medicaInput = {
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    obra_social: ObraSocialCreateNestedOneWithoutPacienteInput
    ubicacion: UbicacionCreateNestedOneWithoutPacienteInput
    usuario: UsuarioCreateNestedOneWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutFicha_medicaInput = {
    usuario_id: string
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    ubicacion_id: string
    obra_social_id: string
  }

  export type PacienteCreateOrConnectWithoutFicha_medicaInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutFicha_medicaInput, PacienteUncheckedCreateWithoutFicha_medicaInput>
  }

  export type PacienteUpsertWithoutFicha_medicaInput = {
    update: XOR<PacienteUpdateWithoutFicha_medicaInput, PacienteUncheckedUpdateWithoutFicha_medicaInput>
    create: XOR<PacienteCreateWithoutFicha_medicaInput, PacienteUncheckedCreateWithoutFicha_medicaInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutFicha_medicaInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutFicha_medicaInput, PacienteUncheckedUpdateWithoutFicha_medicaInput>
  }

  export type PacienteUpdateWithoutFicha_medicaInput = {
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    obra_social?: ObraSocialUpdateOneRequiredWithoutPacienteNestedInput
    ubicacion?: UbicacionUpdateOneRequiredWithoutPacienteNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutFicha_medicaInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
    obra_social_id?: StringFieldUpdateOperationsInput | string
  }

  export type MedicoCreateWithoutEspecialidadInput = {
    tipo_matricula: $Enums.TipoMatriculaEnum
    numero_matricula: string
    numero_telefono: string
    descripcion?: string | null
    ubicacion: UbicacionCreateNestedOneWithoutMedicoInput
    usuario: UsuarioCreateNestedOneWithoutMedicoInput
  }

  export type MedicoUncheckedCreateWithoutEspecialidadInput = {
    usuario_id: string
    tipo_matricula: $Enums.TipoMatriculaEnum
    numero_matricula: string
    numero_telefono: string
    ubicacion_id: string
    descripcion?: string | null
  }

  export type MedicoCreateOrConnectWithoutEspecialidadInput = {
    where: MedicoWhereUniqueInput
    create: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput>
  }

  export type MedicoCreateManyEspecialidadInputEnvelope = {
    data: MedicoCreateManyEspecialidadInput | MedicoCreateManyEspecialidadInput[]
    skipDuplicates?: boolean
  }

  export type MedicoUpsertWithWhereUniqueWithoutEspecialidadInput = {
    where: MedicoWhereUniqueInput
    update: XOR<MedicoUpdateWithoutEspecialidadInput, MedicoUncheckedUpdateWithoutEspecialidadInput>
    create: XOR<MedicoCreateWithoutEspecialidadInput, MedicoUncheckedCreateWithoutEspecialidadInput>
  }

  export type MedicoUpdateWithWhereUniqueWithoutEspecialidadInput = {
    where: MedicoWhereUniqueInput
    data: XOR<MedicoUpdateWithoutEspecialidadInput, MedicoUncheckedUpdateWithoutEspecialidadInput>
  }

  export type MedicoUpdateManyWithWhereWithoutEspecialidadInput = {
    where: MedicoScalarWhereInput
    data: XOR<MedicoUpdateManyMutationInput, MedicoUncheckedUpdateManyWithoutEspecialidadInput>
  }

  export type MedicoScalarWhereInput = {
    AND?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
    OR?: MedicoScalarWhereInput[]
    NOT?: MedicoScalarWhereInput | MedicoScalarWhereInput[]
    usuario_id?: StringFilter<"Medico"> | string
    tipo_matricula?: EnumTipoMatriculaEnumFilter<"Medico"> | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFilter<"Medico"> | string
    numero_telefono?: StringFilter<"Medico"> | string
    ubicacion_id?: StringFilter<"Medico"> | string
    especialidad_id?: StringFilter<"Medico"> | string
    descripcion?: StringNullableFilter<"Medico"> | string | null
  }

  export type PacienteCreateWithoutObra_socialInput = {
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    ficha_medica: FichaMedicaCreateNestedOneWithoutPacienteInput
    ubicacion: UbicacionCreateNestedOneWithoutPacienteInput
    usuario: UsuarioCreateNestedOneWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutObra_socialInput = {
    usuario_id: string
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    ubicacion_id: string
    ficha_medica_id: string
  }

  export type PacienteCreateOrConnectWithoutObra_socialInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutObra_socialInput, PacienteUncheckedCreateWithoutObra_socialInput>
  }

  export type PacienteCreateManyObra_socialInputEnvelope = {
    data: PacienteCreateManyObra_socialInput | PacienteCreateManyObra_socialInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithWhereUniqueWithoutObra_socialInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutObra_socialInput, PacienteUncheckedUpdateWithoutObra_socialInput>
    create: XOR<PacienteCreateWithoutObra_socialInput, PacienteUncheckedCreateWithoutObra_socialInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutObra_socialInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutObra_socialInput, PacienteUncheckedUpdateWithoutObra_socialInput>
  }

  export type PacienteUpdateManyWithWhereWithoutObra_socialInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutObra_socialInput>
  }

  export type PacienteScalarWhereInput = {
    AND?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    OR?: PacienteScalarWhereInput[]
    NOT?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    usuario_id?: StringFilter<"Paciente"> | string
    fecha_nacimiento?: DateTimeFilter<"Paciente"> | Date | string
    lugar_nacimiento?: StringFilter<"Paciente"> | string
    contacto_emergencia?: StringFilter<"Paciente"> | string
    numero_telefono?: StringFilter<"Paciente"> | string
    ubicacion_id?: StringFilter<"Paciente"> | string
    obra_social_id?: StringFilter<"Paciente"> | string
    ficha_medica_id?: StringFilter<"Paciente"> | string
  }

  export type MedicoCreateManyEspecialidadInput = {
    usuario_id: string
    tipo_matricula: $Enums.TipoMatriculaEnum
    numero_matricula: string
    numero_telefono: string
    ubicacion_id: string
    descripcion?: string | null
  }

  export type MedicoUpdateWithoutEspecialidadInput = {
    tipo_matricula?: EnumTipoMatriculaEnumFieldUpdateOperationsInput | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ubicacion?: UbicacionUpdateOneRequiredWithoutMedicoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutMedicoNestedInput
  }

  export type MedicoUncheckedUpdateWithoutEspecialidadInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    tipo_matricula?: EnumTipoMatriculaEnumFieldUpdateOperationsInput | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicoUncheckedUpdateManyWithoutEspecialidadInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    tipo_matricula?: EnumTipoMatriculaEnumFieldUpdateOperationsInput | $Enums.TipoMatriculaEnum
    numero_matricula?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacienteCreateManyObra_socialInput = {
    usuario_id: string
    fecha_nacimiento: Date | string
    lugar_nacimiento: string
    contacto_emergencia: string
    numero_telefono: string
    ubicacion_id: string
    ficha_medica_id: string
  }

  export type PacienteUpdateWithoutObra_socialInput = {
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ficha_medica?: FichaMedicaUpdateOneRequiredWithoutPacienteNestedInput
    ubicacion?: UbicacionUpdateOneRequiredWithoutPacienteNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutObra_socialInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
    ficha_medica_id?: StringFieldUpdateOperationsInput | string
  }

  export type PacienteUncheckedUpdateManyWithoutObra_socialInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    lugar_nacimiento?: StringFieldUpdateOperationsInput | string
    contacto_emergencia?: StringFieldUpdateOperationsInput | string
    numero_telefono?: StringFieldUpdateOperationsInput | string
    ubicacion_id?: StringFieldUpdateOperationsInput | string
    ficha_medica_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EspecialidadCountOutputTypeDefaultArgs instead
     */
    export type EspecialidadCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EspecialidadCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ObraSocialCountOutputTypeDefaultArgs instead
     */
    export type ObraSocialCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ObraSocialCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UbicacionDefaultArgs instead
     */
    export type UbicacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UbicacionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SecretariaDefaultArgs instead
     */
    export type SecretariaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SecretariaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicoDefaultArgs instead
     */
    export type MedicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PacienteDefaultArgs instead
     */
    export type PacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PacienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FichaMedicaDefaultArgs instead
     */
    export type FichaMedicaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FichaMedicaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EspecialidadDefaultArgs instead
     */
    export type EspecialidadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EspecialidadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ObraSocialDefaultArgs instead
     */
    export type ObraSocialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ObraSocialDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}