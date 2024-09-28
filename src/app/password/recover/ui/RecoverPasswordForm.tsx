'use client';
import React, { useState } from 'react';
import {
    AtSymbolIcon,
    ExclamationCircleIcon,
    LinkIcon
} from '@heroicons/react/24/outline';
import { authenticateEmail } from '../../api/actions';

export default function ChangePasswordForm() {
    // Usamos useState para manejar el estado del mensaje de error
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const formData = new FormData(event.currentTarget);
        setIsPending(true);

        const user_email = formData.get('email') as string;

        try {
            const emailMatch = await authenticateEmail(user_email);

            if (!emailMatch) {
                setErrorMessage('No se encontro el correo electronico');
                setIsPending(false);
            } else {
                setSuccessMessage("Se envio el link de cambio de contraseña");
                setErrorMessage(null);
                setIsDisabled(true);
            }

        } catch (error) { console.log(error); } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="rounded-lg w-full border border-gray-400 bg-gray-200 px-6 pb-4 pt-8">
                    <h1 className="text-center mb-3 font-bold text-3xl text-[#025951]">
                        Recupera tu Cuenta
                    </h1>




                    <div className="w-full">
                        {/* Campo de contraseña actual */}
                        <div>
                            <label
                                className="mx-auto block text-m font-medium text-gray-900"
                                htmlFor="dni"
                            >
                                Ingresa tu correo electrónico para que te enviemos el link de cambio de contraseña.
                            </label>

                            {
                                errorMessage && (
                                    <div className="flex mt-2 items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                        <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                                        <span className="block sm:inline text-sm">{errorMessage}</span>
                                    </div>
                                )
                            }

                            {
                                successMessage && (
                                    <div className="flex mt-2 items-center bg-green-100 border border-green-400 text-green-700 px-3 py-3 rounded relative" role="alert">
                                        <LinkIcon className="h-5 w-5 text-green-500 mr-2" />
                                        <span className="block sm:inline text-sm">{successMessage}</span>
                                    </div>
                                )
                            }


                            <div className="relative mt-4 ">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-m outline-2 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
                                    id="correo"
                                    type="email"
                                    name="email"
                                    placeholder="Correo Electronico"
                                    required
                                    disabled={isDisabled}
                                />
                                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>

                    </div>
                    {/* Botón de cambio de contraseña centrado */}
                    <div className="flex justify-center mx-auto">
                        <LoginButton isDisabled={isDisabled} isPending={isPending} />
                    </div>
                    {/* Enlace de 'Olvidaste tu contraseña?' */}
                    <div className="text-center mt-4">
                        <a href="/" className="text-sm text-gray-500 hover:underline">
                            Volver al Inicio
                        </a>
                    </div>
                    <div
                        className="flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true"
                    ></div>
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
            aria-label="Buscar"
        >
            {isPending ? 'Buscando...' : isDisabled ? 'Mail Enviado' : 'Recuperar Cuenta'}
        </button>
    );
}

