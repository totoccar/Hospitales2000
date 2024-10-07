'use client';
import React, { useState } from 'react';
import {
    LockClosedIcon,
    ExclamationCircleIcon,
    KeyIcon,
} from '@heroicons/react/24/outline';
import { authenticatePassword, changePasswordAPI } from '@/src/lib/passwordActions';
import { getDni } from '@/src/app/lib/actions';
import { getsessionIdByDocument } from '../../api/changePassword';




export default function ChangePasswordForm() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const [password, setPassword] = useState('');


    const validatePassword = (pwd: string) => {
        const minLength = /.{12,}/;  // Mínimo 12 caracteres
        const uppercase = /[A-Z]/;   // Al menos una letra mayúscula
        const lowercase = /[a-z]/;   // Al menos una letra minúscula
        const number = /[0-9]/;      // Al menos un número
        const specialChar = /[^A-Za-z0-9]/; // Al menos un carácter especial

        if (!minLength.test(pwd)) {
            return 'La contraseña debe tener al menos 12 caracteres.';
        } else if (!uppercase.test(pwd)) {
            return 'La contraseña debe tener al menos una letra mayúscula.';
        } else if (!lowercase.test(pwd)) {
            return 'La contraseña debe tener al menos una letra minúscula.';
        } else if (!number.test(pwd)) {
            return 'La contraseña debe tener al menos un número.';
        } else if (!specialChar.test(pwd)) {
            return 'La contraseña debe tener al menos un carácter especial.';
        }

        return '';
    };

    // Manejar el cambio en el input
    const handlePasswordChange = (e) => {
        const pwd = e.target.value;
        setPassword(pwd);
        const errorMsg = validatePassword(pwd);
        setErrorMessage(errorMsg);
    };



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const user_dni = await getDni();
        const user_id = await getsessionIdByDocument(user_dni);


        setIsPending(true);

        const passwordMatch = await authenticatePassword(
            user_id,
            formData.get('contrasena_actual') as string)

        if (!passwordMatch) {
            setErrorMessage('La contraseña actual es incorrecta');
            setIsPending(false);
        } else {


            if (formData.get('nueva_contrasena') !== formData.get('confirm_contrasena')) {
                setErrorMessage('Las contraseñas no coinciden');
                setIsPending(false);
            } else {
                try {
                    await changePasswordAPI(formData.get('nueva_contrasena') as string, user_id);
                    setSuccessMessage("La contraseña se ha cambiado correctamente.");
                    setIsDisabled(true);
                    setErrorMessage(null);
                    setIsPending(false);
                } catch (error: any) {
                    console.error("Error:", error);
                    if (error.message === 'VALIDATION_ERROR') {
                        setErrorMessage('La contraseña debe contener al menos 12 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial.');
                    } else if (error.message === 'INTERNAL_SERVER_ERROR') {
                        setErrorMessage('Ocurrió un error inesperado. Por favor, inténtelo de nuevo.');
                    } else {
                        setErrorMessage('Ocurrió un error inesperado. Por favor, inténtelo de nuevo.');
                    }
                    setIsPending(false);
                }
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-lg">
                <div className="rounded-lg border border-gray-400 bg-gray-200 px-6 pb-4 pt-8">
                    <h1 className="text-center mb-3 font-bold text-2xl sm:text-3xl text-[#025951]">
                        Cambiar Contraseña
                    </h1>
                    {errorMessage && (
                        <div
                            className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                            role="alert"
                        >
                            <ExclamationCircleIcon className="h-[18px] w-[18px] text-red-500 mr-4 flex-shrink-0" />
                            <span className="text-sm ml-4">{errorMessage}</span>
                        </div>
                    )}
                    {successMessage && (
                        <div
                            className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                            role="alert"
                        >
                            <KeyIcon className="h-[18px] w-[18px] text-green-500 mr-4 flex-shrink-0" />
                            <span className=" text-sm flex-1">{successMessage}</span>
                        </div>
                    )}
                    <div className="w-full">
                        <div>
                            <label
                                className="mb-3 mt-5 block text-sm font-medium text-gray-900"
                                htmlFor="contrasena_actual"
                            >
                                Contraseña Actual
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
                                    id="contrasena_actual"
                                    type="password"
                                    name="contrasena_actual"
                                    placeholder="Ingrese su contraseña actual"
                                    required
                                    disabled={isDisabled}
                                />
                                <LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="mb-3 mt-5 block text-sm font-medium text-gray-900"
                                htmlFor="nueva_contrasena"
                            >
                                Nueva Contraseña
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border text-sm border-gray-200 py-[9px] pl-10 outline-2 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
                                    id="nueva_contrasena"
                                    type="password"
                                    name="nueva_contrasena"
                                    placeholder="Ingrese su nueva contraseña"
                                    onChange={handlePasswordChange}
                                    required
                                    minLength={3}
                                    disabled={isDisabled}
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="mb-3 mt-5 block text-sm font-medium text-gray-900"
                                htmlFor="confirm_contrasena"
                            >
                                Confirmar Contraseña
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border text-sm border-gray-200 py-[9px] pl-10 outline-2 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
                                    id="confirm_contrasena"
                                    type="password"
                                    name="confirm_contrasena"
                                    placeholder="Confirme su nueva contraseña"
                                    required
                                    minLength={3}
                                    disabled={isDisabled}
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <LoginButton isDisabled={isDisabled} isPending={isPending} />
                    </div>
                    <div className="text-center mt-4">
                        <a href="/" className="text-sm text-gray-500 hover:underline">
                            Volver al Inicio
                        </a>
                    </div>
                </div>
            </form>
        </div>

    );
};



function LoginButton({ isPending, isDisabled }: { isPending: boolean, isDisabled: boolean }) {
    return (
        <button
            type="submit"
            disabled={isPending || isDisabled}
            className={`rounded-md p-2 bg-[#025951] hover:bg-[#04D99D] text-white font-bold mt-4 w-full ${isPending || isDisabled ? 'cursor-not-allowed opacity-50' : ''
                }`}
            aria-label="Cambiar Contraseña"
        >
            {isPending ? 'Cargando...' : isDisabled ? 'Contraseña Cambiada' : 'Cambiar Contraseña'}
        </button>
    );
}
