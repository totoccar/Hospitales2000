'use client';
import React, { useState } from 'react';
import {
    LockClosedIcon,
    ExclamationCircleIcon,
    KeyIcon,
} from '@heroicons/react/24/outline';
import { authenticatePassword, changePasswordAPI } from '../../api/actions';




export default function ChangePasswordForm() {
    // Usamos useState para manejar el estado del mensaje de error
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);


    /* Constantes para hardcodear la BDD, lo ideal es buscar por ID*/
    const nombre_user = "Antonio Carlos";
    const documento_user = "87654321"

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        setIsPending(true);

        const passwordMatch = await authenticatePassword(
            nombre_user,
            formData.get('contrasena_actual') as string)

        if (!passwordMatch) {
            setErrorMessage('La contraseña actual es incorrecta');
            setIsPending(false);
        } else {

            setIsPending(false);


            /*Chequeo solo front*/
            if (formData.get('nueva_contrasena') !== formData.get('confirm_contrasena')) {
                setErrorMessage('Las contraseñas no coinciden');
            } else {
                changePasswordAPI(formData.get('nueva_contrasena') as string, documento_user);
                setErrorMessage("god");
            }
        }





    };

    return (
        <div className="min-h-screen flex  items-center justify-center">
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="rounded-lg w-96 border border-gray-400 bg-gray-200 px-6 pb-4 pt-8">
                    <h1 className="text-center mb-3 font-bold text-3xl text-[#025951]">
                        Cambiar Contraseña
                    </h1>

                    <div className='flex justify-center mx-auto border border-red-500 rounded-md p-2'>


                        {errorMessage && (
                            <>
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                <p className="ml-2 flex items-center text-sm text-red-500">{errorMessage}</p>
                            </>
                        )}
                    </div>

                    <div className="w-full">
                        {/* Campo de contraseña actual */}
                        <div>
                            <label
                                className="mb-3 mt-5 block text-m font-medium text-gray-900"
                                htmlFor="dni"
                            >
                                Contraseña Actual
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-m outline-2 placeholder:text-gray-500"
                                    id="contrasena_actual"
                                    type="password"
                                    name="contrasena_actual"
                                    placeholder="Ingrese su contraseña actual"
                                    required
                                />
                                <LockClosedIcon
                                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        {/* Campo de nueva contraseña */}
                        <div className="mt-4">
                            <label
                                className="mb-3 mt-5 block font-medium text-m text-gray-900"
                                htmlFor="password"
                            >
                                Nueva Contraseña
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border text-m border-gray-200 py-[9px] pl-10 outline-2 placeholder:text-gray-500"
                                    id="confirm_contrasena"
                                    type="password"
                                    name="nueva_contrasena"
                                    placeholder="Ingrese su nueva contraseña"
                                    required
                                    minLength={3}
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="mb-3 mt-5 block font-medium text-m text-gray-900"
                                htmlFor="password"
                            >
                                Confirmar Contraseña
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border text-m border-gray-200 py-[9px] pl-10 outline-2 placeholder:text-gray-500"
                                    id="contrasena"
                                    type="password"
                                    name="confirm_contrasena"
                                    placeholder="Confirme su nueva contraseña"
                                    required
                                    minLength={3}
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>

                    </div>
                    {/* Botón de cambio de contraseña centrado */}
                    <div className="flex justify-center mt-6">
                        <LoginButton isPending={isPending} />
                    </div>
                    {/* Enlace de 'Olvidaste tu contraseña?' */}
                    <div className="text-center mt-4">
                        <a href="/" className="text-sm text-gray-500 hover:underline">
                            Volver al Inicio
                        </a>
                    </div>
                    <div
                        className="flex h-4 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true"
                    ></div>

                </div>
            </form>
        </div>
    );
};

function LoginButton({ isPending }: { isPending: boolean }) {
    return (
        <button
            type="submit"
            disabled={isPending}
            className={`rounded-md p-2 bg-[#025951] hover:bg-[#04D99D] text-white font-bold mt-4 w-full ${isPending ? 'cursor-not-allowed opacity-50' : ''
                }`}
            aria-label="Cambiar Contraseña"
        >
            {isPending ? 'Cargando...' : 'Cambiar Contraseña'}
        </button>
    );
}

