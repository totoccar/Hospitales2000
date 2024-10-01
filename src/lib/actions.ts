'use server';

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from '@/lib/db'; //Should we use the prisma from db.ts?
import { hash } from "bcryptjs";
//TODO: Zip all common fields into one UserState, use it along with particular cases.
//TODO: Change file name to create-user.ts.

//-----------------------------------------------CREATE PATIENT FORM-----------------------------------------------
export type PatientState = {
    errors?: {
        typeId?: string[];
        numberId?: string[];
        patientName?: string[];
        patientLastName?: string[];
        birthDate?: string[];
        birthPlace?: string[];
        emergencyContact?: string[];
        phoneNumber?: string[];
        city?: string[];
        streetName?: string[];
        streetNumber?: string[];
        postalCode?: string[];
        cityState?: string[];
        email?: string[];
        socialWork?: string[];
    };
    message?: string | null;
};

const PatientFormSchema = z.object({
    id: z.string(),
    typeId: z.enum(['CEDULA_IDENTIDAD', 'DOCUMENTO_NACIONAL_IDENTIDAD', 
        'LIBRETA_CIVICA', 'LIBRETA_ENROLAMIENTO', 'PASAPORTE'], {
            invalid_type_error: 'Por favor seleccione un tipo de documento.',
        }
    ),
    numberId: z.string({
        invalid_type_error: 'Por favor ingrese el número de documento.',
    }),
    patientName: z.string({
        invalid_type_error: 'Por favor ingrese el nombre.',
    }),
    patientLastName: z.string({
        invalid_type_error: 'Por favor ingrese el apellido.',
    }),
    birthDate: z.string({
        invalid_type_error: 'Por favor ingrese la ciudad de nacimiento.',
    }),
    birthPlace: z.string({
        invalid_type_error: 'Por favor ingrese la ciudad de nacimiento.',
    }),
    emergencyContact: z.string({
        invalid_type_error: 'Por favor, ingrese un número de contacto de emergencia.',
    }),
    phoneNumber: z.string({
        invalid_type_error: 'Por favor ingrese el número de teléfono.',
    }),
    city: z.string({
        invalid_type_error: 'Por favor ingrese la ciudad.',
    }),
    streetName: z.string({
        invalid_type_error: 'Por favor ingrese el nombre de la dirección.'
    }),
    streetNumber: z.string({
        invalid_type_error: 'Por favor ingrese el número de la dirección.',
    }),
    postalCode: z.string({
        invalid_type_error: 'Por favor el código postal.',
    }),
    cityState: z.string({
        invalid_type_error: 'Por favor ingrese la provincia.',
    }),
    email: z.string().email({
        message: 'Por favor ingrese un mail válido.',
    }),
    socialWork: z.string({
        invalid_type_error: 'Por favor seleccione una obra social.',
    }),
});

const CreatePatient = PatientFormSchema.omit({id: true});

export async function createPatient(prevState: PatientState, formData: FormData) {
    const validatedFields = CreatePatient.safeParse({
        typeId: formData.get('tipo_documento'),
        numberId: formData.get('numero_documento'),
        patientName: formData.get('nombre'),
        patientLastName: formData.get('apellido'),
        birthDate: formData.get('fecha_nacimiento'),
        birthPlace: formData.get('lugar_nacimiento'),
        emergencyContact: formData.get('contacto_emergencia'),
        phoneNumber: formData.get('numero_telefono'),
        city: formData.get('ciudad'),
        streetName: formData.get('calle'),
        streetNumber: formData.get('numero'),
        postalCode: formData.get('codigo_postal'),
        cityState: formData.get('provincia'),
        email: formData.get('correo_electronico'),
        socialWork: formData.get('tipo_obra_social'),
    });

    console.log(formData);

    if (!validatedFields.success) {
        console.log("error on validatedFields.");
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Campos incompletos. Error al crear un paciente nuevo.',
        };
    }

    console.log('validatedFields: ', validatedFields);

    const { typeId, numberId, patientName, patientLastName, birthDate, birthPlace, emergencyContact,
        phoneNumber, city, streetName, streetNumber, postalCode, cityState, email, socialWork
    } = validatedFields.data;

    const hashedPassword = await hash(numberId, 10);

    const [year, month, day] = birthDate.split('-').map(Number);
    const parsedDate = new Date(day, month, year);

    try {
        const newUser = await prisma.usuario.create({
            data: {
                tipo_documento: typeId,
                numero_documento: numberId,
                nombre: patientName,
                apellido: patientLastName,
                correo_electronico: email,
                contrasena: hashedPassword, //At first, default password is numberId.
                paciente: {
                    create: {
                        fecha_nacimiento: parsedDate,
                        lugar_nacimiento: birthPlace,
                        contacto_emergencia: emergencyContact,
                        numero_telefono: phoneNumber,
                        ficha_medica: {
                            create: {
                                alergias: " ",
                                diagnostico: " ",
                                tratamientos: " ",
                                medicamentos_recetados: " "
                            }
                        },
                        obra_social: {
                            connect: {
                                id: socialWork
                            }
                        },
                        ubicacion: {
                            create: {
                                calle: streetName,
                                numero: streetNumber,
                                codigo_postal: postalCode,
                                ciudad: city,
                                provincia: cityState,
                            }
                        },
                    }
                },
            }
        });
        console.log(newUser);
    }catch (error) {
        console.log("error on create.");
        console.log(error);
        return {
            message: 'Fallo en la base de datos: No se creó el paciente.',
        };
    }

    revalidatePath('/search/patient'); //Updates the patient search.
    redirect('/search/patient'); //Redirects you to patient search.
}

//-----------------------------------------------CREATE DOCTOR FORM-----------------------------------------------
export type DoctorState = {
    errors?: {
        typeId?: string[];
        numberId?: string[];
        regType?: string[];
        regNumber?: string[];
        doctorName?: string[];
        doctorLastName?: string[];
        phoneNumber?: string[];
        city?: string[];
        streetName?: string[];
        streetNumber?: string[];
        postalCode?: string[];
        cityState?: string[];
        email?: string[];
        specialty?: string[];
    };
    message?: string | null;
};

const DoctorFormSchema = z.object({
    id: z.string(),
    typeId: z.enum(['CEDULA_IDENTIDAD', 'DOCUMENTO_NACIONAL_IDENTIDAD', 
        'LIBRETA_CIVICA', 'LIBRETA_ENROLAMIENTO', 'PASAPORTE'], {
            invalid_type_error: 'Por favor seleccione un tipo de documento.',
        }
    ),
    numberId: z.string({
        invalid_type_error: 'Por favor ingrese el número de documento.',
    }),
    regType: z.enum(['nacional', 'provincial'], {
        invalid_type_error: 'Por favor seleccione una fecha de nacimiento.',
    }),
    regNumber: z.string({
        invalid_type_error: 'Por favor ingrese la ciudad de nacimiento.',
    }),
    doctorName: z.string({
        invalid_type_error: 'Por favor ingrese el nombre.',
    }),
    doctorLastName: z.string({
        invalid_type_error: 'Por favor ingrese el apellido.',
    }),
    phoneNumber: z.string({
        invalid_type_error: 'Por favor ingrese el número de teléfono.',
    }),
    city: z.string({
        invalid_type_error: 'Por favor ingrese la ciudad.',
    }),
    streetName: z.string({
        invalid_type_error: 'Por favor ingrese el nombre de la dirección.'
    }),
    streetNumber: z.string({
        invalid_type_error: 'Por favor ingrese el número de la dirección.',
    }),
    postalCode: z.string({
        invalid_type_error: 'Por favor ingrese el código postal.',
    }),
    cityState: z.string({
        invalid_type_error: 'Por favor ingrese la provincia.',
    }),
    email: z.string().email({
        message: 'Por favor ingrese un mail válido.',
    }),
    specialty: z.string({
        invalid_type_error: 'Por favor seleccione una especialidad.',
    }),
    description: z.string(),
});

const CreateDoctor = DoctorFormSchema.omit({id: true});

export async function createDoctor(prevState: DoctorState, formData: FormData) {
    const validatedFields = CreateDoctor.safeParse({
        typeId: formData.get('tipo_documento'),
        numberId: formData.get('numero_documento'),
        regType: formData.get('tipo_matricula'),
        regNumber: formData.get('numero_matricula'),
        doctorName: formData.get('nombre'),
        doctorLastName: formData.get('apellido'),
        phoneNumber: formData.get('numero_telefono'),
        city: formData.get('ciudad'),
        streetName: formData.get('calle'),
        streetNumber: formData.get('numero'),
        postalCode: formData.get('codigo_postal'),
        cityState: formData.get('provincia'),
        email: formData.get('correo_electronico'),
        specialty: formData.get('especialidad'),
        description: formData.get('descripcion'),
    });

    console.log(formData);

    if (!validatedFields.success) {
        console.log("error on validatedFields.");
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Campos incompletos. Error al crear un doctor nuevo.',
        };
    }

    console.log('validatedFields: ', validatedFields);

    const { typeId, numberId, regType, regNumber, doctorName, doctorLastName,
        phoneNumber, city, streetName, streetNumber, postalCode, cityState, email, specialty, description
    } = validatedFields.data; 

    try {
        const newUser = await prisma.usuario.create({
            data: {
                tipo_documento: typeId,
                numero_documento: numberId,
                nombre: doctorName,
                apellido: doctorLastName,
                correo_electronico: email,
                contrasena: numberId, //At first, default password is numberId.
                medico: {
                    create: {
                        tipo_matricula: regType,
                        numero_matricula: regNumber,
                        numero_telefono: phoneNumber,
                        especialidad: {
                            connect: {
                                id: specialty,
                            }
                        },
                        ubicacion: {
                            create: {
                                calle: streetName,
                                numero: streetNumber,
                                codigo_postal: postalCode,
                                ciudad: city,
                                provincia: cityState,
                            }
                        },
                    }
                },
            }
        });
        console.log(newUser);
    }catch (error) {
        console.log("error on creation.");
        return {
            message: 'Fallo en la base de datos: No se creó el doctor.',
        };
    }
    
    revalidatePath('/search/doctor'); //Updates the doctor search.
    redirect('/search/doctor'); //Redirects you to doctor search.
}

//-----------------------------------------------CREATE SECRETARY FORM-----------------------------------------------
export type SecretaryState = {
    errors?: {
        typeId?: string[];
        numberId?: string[];
        secretaryName?: string[];
        secretaryLastName?: string[];
        phoneNumber?: string[];
        city?: string[];
        streetName?: string[];
        streetNumber?: string[];
        postalCode?: string[];
        cityState?: string[];
        email?: string[];
    };
    message?: string | null;
};

const SecretaryFormSchema = z.object({
    id: z.string(),
    typeId: z.enum(['CEDULA_IDENTIDAD', 'DOCUMENTO_NACIONAL_IDENTIDAD', 
        'LIBRETA_CIVICA', 'LIBRETA_ENROLAMIENTO', 'PASAPORTE'], {
            invalid_type_error: 'Por favor seleccione un tipo de documento.',
        }
    ),
    numberId: z.string({
        invalid_type_error: 'Por favor ingrese el número de documento.',
    }),
    secretaryName: z.string({
        invalid_type_error: 'Por favor ingrese el nombre.',
    }),
    secretaryLastName: z.string({
        invalid_type_error: 'Por favor ingrese el apellido.',
    }),
    phoneNumber: z.string({
        invalid_type_error: 'Por favor ingrese el número de teléfono.',
    }),
    city: z.string({
        invalid_type_error: 'Por favor ingrese la ciudad.',
    }),
    streetName: z.string({
        invalid_type_error: 'Por favor ingrese el nombre de la dirección.'
    }),
    streetNumber: z.string({
        invalid_type_error: 'Por favor ingrese el número de la dirección.',
    }),
    postalCode: z.string({
        invalid_type_error: 'Por favor ingrese el código postal.',
    }),
    cityState: z.string({
        invalid_type_error: 'Por favor ingrese la provincia.',
    }),
    email: z.string().email({
        message: 'Por favor ingrese un mail válido.',
    }),
});

const CreateSecretary = SecretaryFormSchema.omit({id: true});

export async function createSecretary(prevState: SecretaryState, formData: FormData) {
    const validatedFields = CreateSecretary.safeParse({
        typeId: formData.get('tipo_documento'),
        numberId: formData.get('numero_documento'),
        secretaryName: formData.get('nombre'),
        secretaryLastName: formData.get('apellido'),
        phoneNumber: formData.get('numero_telefono'),
        city: formData.get('ciudad'),
        streetName: formData.get('calle'),
        streetNumber: formData.get('numero'),
        postalCode: formData.get('codigo_postal'),
        cityState: formData.get('provincia'),
        email: formData.get('correo_electronico'),
    });

    console.log(formData);

    if (!validatedFields.success) {
        console.log("error on validatedFields.");
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Campos incompletos. Error al crear una secretaria nueva.',
        };
    }

    console.log('validatedFields: ', validatedFields);

    const { typeId, numberId, secretaryName, secretaryLastName,
        phoneNumber, city, streetName, streetNumber, postalCode, cityState, email
    } = validatedFields.data; 

    try {
        const newUser = await prisma.usuario.create({
            data: {
                tipo_documento: typeId,
                numero_documento: numberId,
                nombre: secretaryName,
                apellido: secretaryLastName,
                correo_electronico: email,
                contrasena: numberId, //At first, default password is numberId.
                secretaria: {
                    create: {
                        numero_telefono: phoneNumber,
                        ubicacion: {
                            create: {
                                calle: streetName,
                                numero: streetNumber,
                                codigo_postal: postalCode,
                                ciudad: city,
                                provincia: cityState,
                            }
                        },
                    }
                }
            }
        });
        console.log(newUser);
    }catch (error) {
        console.log("error on creation.");
        return {
            message: 'Fallo en la base de datos: No se creó la secretaria.',
        };
    }

    revalidatePath('/search/secretary'); //Updates the secretary search.
    redirect('/search/secretary'); //Redirects you to secretary search.
}

export async function fetchSocialWorks() {
    try {
      const socialWorks = await prisma.obraSocial.findMany();
      return socialWorks;
    } catch (error) {
      console.error("Error al obtener obras sociales: ", error);
      throw new Error("No se pudieron obtener las obras sociales.");
    } finally {
      await prisma.$disconnect();
    }
}

export async function fetchSpecialties() {
    try {
        const specialties = await prisma.especialidad.findMany();
        return specialties;
    }catch (error) {
        console.error("Error al obtener especialidades: ", error);
        throw new Error("No se pudieron obtener las especialidades.");
    } finally {
        await prisma.$disconnect();
    }
}