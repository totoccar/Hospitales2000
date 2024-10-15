'use server';

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import prisma from "./db";

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

const ModifyPatient = PatientFormSchema.omit({id: true});

export async function modifyPatient(prevState: PatientState, formData: FormData) {
    const validatedFields = ModifyPatient.safeParse({
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

    console.log('validatedFields: ', validatedFields);

    if (!validatedFields.success) {
        console.log("error on validatedFields.");
        console.error(validatedFields.error);
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

    const [year, month, day] = (birthDate.split('T')[0]).split('-').map(Number);
    const parsedDate = new Date(year, month - 1, day);

    try {

        const updatedPatient = await prisma.usuario.update({
            where: { numero_documento: numberId },
            data: {
                tipo_documento: typeId,
                nombre: patientName,
                apellido: patientLastName,
                correo_electronico: email,
                contrasena: hashedPassword,
                paciente: {
                    update: {
                        fecha_nacimiento: parsedDate,
                        lugar_nacimiento: birthPlace,
                        contacto_emergencia: emergencyContact,
                        numero_telefono: phoneNumber,
                        obra_social: {
                            connect: {
                                id: socialWork
                            }
                        },
                        ubicacion: {
                            update: {
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
        
        console.log(updatedPatient);
    } catch (error) {
        console.log("error on create.");
        console.log(error);
        return {
            message: 'Fallo en la base de datos: No se creó el paciente.',
        };
    }

    revalidatePath('/search/patient'); 
    redirect('/search/patient'); 
}

//-----------------------------------------------CREATE DOCTOR FORM-----------------------------------------------
export type DoctorState = {
    errors?: {
        //typeId?: string[];
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
    /*typeId: z.enum(['CEDULA_IDENTIDAD', 'DOCUMENTO_NACIONAL_IDENTIDAD', 
        'LIBRETA_CIVICA', 'LIBRETA_ENROLAMIENTO', 'PASAPORTE'], {
            invalid_type_error: 'Por favor seleccione un tipo de documento.',
        }
    ),*/
    numberId: z.string({
        invalid_type_error: 'Por favor ingrese el número de documento.',
    }),
    regType: z.enum(['nacional', 'provincial'], {
        invalid_type_error: 'Por favor ingrese matricula.',
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
    description: z.string().optional(),  // Campo opcional
});

const ModifyDoctor = DoctorFormSchema.omit({id: true});

export async function modifyDoctor(prevState: DoctorState, formData: FormData) {
    const validatedFields = ModifyDoctor.safeParse({
       // typeId: formData.get('tipo_documento'),
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

    console.log('validatedFields: ', validatedFields);

    if (!validatedFields.success) {
        console.log("error on validatedFields.");
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Campos incompletos. Error al crear un doctor nuevo.',
        };
    }

    console.log('validatedFields: ', validatedFields);

    const {  numberId, regType, regNumber, doctorName, doctorLastName,
        phoneNumber, city, streetName, streetNumber, postalCode, cityState, email, specialty   } = validatedFields.data; 

    const hashedPassword = await hash(numberId, 10);

    try {
        const updatedDoctor = await prisma.usuario.update({
            where: { numero_documento: numberId },
            data: {
                //tipo_documento: typeId,
                nombre: doctorName,
                apellido: doctorLastName,
                correo_electronico: email,
                contrasena: hashedPassword,
                medico: {
                    update: {
                        tipo_matricula: regType,
                        numero_matricula: regNumber,
                        numero_telefono: phoneNumber,
                        especialidad: {
                            connect: {
                                id: specialty,
                            }
                        },
                        ubicacion: {
                            update: {
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

        console.log(updatedDoctor);
    }catch (error) {
        console.log("error on creation.");
        return {
            message: 'Fallo en la base de datos: No se creó el doctor.',
        };
    }
    
    revalidatePath('/search/doctor'); 
    redirect('/search/doctor'); 
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

const ModifySecretary = SecretaryFormSchema.omit({id: true});

export async function modifySecretary(prevState: SecretaryState, formData: FormData) {
    const validatedFields = ModifySecretary.safeParse({
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

    console.log('validatedFields: ', validatedFields);

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

    const hashedPassword = await hash(numberId, 10);

    try {
        const updatedSecretary = await prisma.usuario.update({
            where: { numero_documento: numberId },
            data: {
                tipo_documento: typeId,
                nombre: secretaryName,
                apellido: secretaryLastName,
                correo_electronico: email,
                contrasena: hashedPassword,
                secretaria: {
                    update: {
                        numero_telefono: phoneNumber,
                        ubicacion: {
                            update: {
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
        
        console.log(updatedSecretary);
    } catch (error) {
        console.log("error on updating.");
        return {
            message: 'Fallo en la base de datos: No se actualizó la secretaria.',
        };
    }

    revalidatePath('/search/secretary');
    redirect('/search/secretary'); 
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