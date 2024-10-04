'use client';
import React, { useState } from 'react';
import {
    LockClosedIcon,
    ExclamationCircleIcon,
    KeyIcon,
} from '@heroicons/react/24/outline';
import { authenticatePassword, changePasswordAPI } from '@/src/lib/passwordActions';




export default function ChangePasswordForm() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const user_id = "4b2bb465-775b-4ee3-be15-3c335f9d3c2d";
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        setIsPending(true);

        const passwordMatch = await authenticatePassword(
            user_id,
            formData.get('contrasena_actual') as string)

        if (!passwordMatch) {
            setErrorMessage('La contraseña actual es incorrecta');
            setIsPending(false);
        } else {

            setErrorMessage(null);
            setIsPending(false);
            if (formData.get('nueva_contrasena') !== formData.get('confirm_contrasena')) {
                setErrorMessage('Las contraseñas no coinciden');
            } else {
                changePasswordAPI(formData.get('nueva_contrasena') as string, user_id);
                setSuccessMessage("La contraseña se ha cambiado correctamente.");
                setIsDisabled(true);
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
                    {
                        errorMessage && (
                            <div className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                                <span className="block sm:inline text-sm">{errorMessage}</span>
                            </div>
                        )
                    }

                    {
                        successMessage && (
                            <div className="flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                <KeyIcon className="h-8 w-8 text-green-500 mr-4" />
                                <span className="block sm:inline text-sm">{successMessage}</span>
                            </div>
                        )
                    }
                    <div className="w-full">
                        <div>
                            <label
                                className="mb-3 mt-5 block text-m font-medium text-gray-900"
                                htmlFor="dni"
                            >
                                Contraseña Actual
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-m outline-2 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
                                    id="contrasena_actual"
                                    type="password"
                                    name="contrasena_actual"
                                    placeholder="Ingrese su contraseña actual"
                                    required
                                    disabled={isDisabled}
                                />
                                <LockClosedIcon
                                    className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="mb-3 mt-5 block font-medium text-m text-gray-900"
                                htmlFor="password"
                            >
                                Nueva Contraseña
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border text-m border-gray-200 py-[9px] pl-10 outline-2 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
                                    id="confirm_contrasena"
                                    type="password"
                                    name="nueva_contrasena"
                                    placeholder="Ingrese su nueva contraseña"
                                    required
                                    minLength={3}
                                    disabled={isDisabled}
                                />
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900  " />
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
                                    className="peer block w-full rounded-md border text-m border-gray-200 py-[9px] pl-10 outline-2 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
                                    id="contrasena"
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
