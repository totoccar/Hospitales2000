'use client';
import React, { useState } from 'react';
import {
    AtSymbolIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { authenticateEmail } from '../../api/actions';

export default function ChangePasswordForm() {
    // Usamos useState para manejar el estado del mensaje de error
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const formData = new FormData(event.currentTarget);
        setIsPending(true);

        const user_email = formData.get('email') as string;

        try {
            const emailMatch = await authenticateEmail(user_email);

            if (!emailMatch) {
                setErrorMessage('Credenciales incorrectas');
            } else {
                setErrorMessage("god se encontro el usuario");
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
                            <div className="relative mt-4 ">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-m outline-2 placeholder:text-gray-500"
                                    id="correo"
                                    type="email"
                                    name="email"
                                    placeholder="Correo Electronico"
                                    required
                                />
                                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>

                    </div>
                    {/* Botón de cambio de contraseña centrado */}
                    <div className="flex justify-center mx-auto">
                        <LoginButton isPending={isPending} />
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
                    {errorMessage && (
                        <>
                            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )}
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
            aria-label="Buscar"
        >
            {isPending ? 'Cargando...' : 'Buscar'}
        </button>
    );
}

