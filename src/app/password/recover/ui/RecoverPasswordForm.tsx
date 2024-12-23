'use client';
import React, { useState } from 'react';
import {
    IdentificationIcon,
    ExclamationCircleIcon,
    LinkIcon
} from '@heroicons/react/24/outline';
import { authenticateDocument, getUserEmail } from '../../api/PasswordActions';
import { TipoDocumentoEnum } from '@/src/lib/definitions';
import { getUserIdByDocument } from '../../api/changePassword';

function maskEmail(email: string) {
    const emailParts = email.split('@');
    const firstLetter = emailParts[0][0];
    const maskedLocalPart = firstLetter + '*'.repeat(emailParts[0].length - 1);
    return maskedLocalPart + '@' + emailParts[1];
}

export default function ChangePasswordForm() {
    // Manejo de estados
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const [selectedDocument, setSelectedDocument] = useState("tipo");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        setIsPending(true);

        const user_document = formData.get('user_document') as string;
        const user_tipo_documento = formData.get('user_tipo_documento') as TipoDocumentoEnum;
        const user_id = await getUserIdByDocument(user_document, user_tipo_documento);

        try {
            const documentoMatch = await authenticateDocument(user_document, user_tipo_documento);

            if (!documentoMatch) {
                setErrorMessage('No se encontró usuario con ese documento');
                setIsPending(false);
            } else {
                const user_email = await getUserEmail(user_document, user_tipo_documento);
                const link = `${window.location.origin}/password/recover/new/${user_id}`;
                if (user_email) {
                    const response = await fetch("api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: user_email, message: link }),
                    });

                    if (response.ok) {
                        const maskedEmail = maskEmail(user_email);
                        setSuccessMessage("Se envió el link de cambio de contraseña a: " + maskedEmail);
                        setErrorMessage(null);
                        setIsDisabled(true);
                    } else {
                        setErrorMessage('Ocurrió un error al enviar el correo');
                    }
                } else {
                    setErrorMessage('Ocurrió un error al obtener el correo');
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-3xl">
                <div className="rounded-lg border w-160 border-gray-400 bg-gray-200 px-6 pb-4 pt-8 shadow-md">
                    <h1 className="text-center mb-3 font-bold text-2xl sm:text-3xl text-[#025951]">
                        Recupera tu Cuenta
                    </h1>
                    <p className="text-center mb-4 text-sm sm:text-base">
                        Ingresa tu documento para que te enviemos el link de cambio de contraseña a tu correo electrónico.
                    </p>

                    {/* Mensajes de error y éxito */}
                    {errorMessage && (
                        <div className="flex mt-2 items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            <ExclamationCircleIcon className="h-5 w-5 text-red-500 mr-2" />
                            <span className="block sm:inline text-sm">{errorMessage}</span>
                        </div>
                    )}
                    {successMessage && (
                        <div className="flex mt-2 items-center bg-green-100 border border-green-400 text-green-700 px-3 py-3 rounded relative">
                            <LinkIcon className="h-5 w-5 text-green-500 mr-2" />
                            <span className="block sm:inline text-sm">{successMessage}</span>
                        </div>
                    )}

                    {/* Selección de tipo de documento e ingreso del número */}
                    <div className="flex flex-col w-full sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
                        <select
                            className="border text-center justify-center  border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="user_tipo_documento"
                            value={selectedDocument}
                            onChange={(e) => setSelectedDocument(e.target.value)}
                            required
                            disabled={isDisabled}
                        >
                            {Object.keys(TipoDocumentoEnum).map((key) => (
                                <option key={key} value={TipoDocumentoEnum[key as keyof typeof TipoDocumentoEnum]}>
                                    {TipoDocumentoEnum[key as keyof typeof TipoDocumentoEnum]}
                                </option>
                            ))}
                        </select>

                        <div className="relative flex-grow">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm sm:text-base outline-2 placeholder:text-gray-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200"
                                id="user_document"
                                type="number"
                                name="user_document"
                                placeholder="Documento"
                                required
                                disabled={isDisabled}
                            />
                            <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>

                    {/* Botón de envío */}
                    <div className="flex justify-center mt-6">
                        <LoginButton isPending={isPending} isDisabled={isDisabled} />
                    </div>

                    {/* Enlace para volver al inicio */}
                    <div className="text-center mt-4">
                        <a href="/" className="text-sm text-gray-500 hover:underline">
                            Volver al Inicio
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
}

function LoginButton({ isPending, isDisabled }: { isPending: boolean, isDisabled: boolean }) {
    return (
        <button
            type="submit"
            disabled={isPending || isDisabled}
            className={`relative flex items-center justify-center bg-[#025951] hover:bg-[#04D99D] text-white font-bold text-lg w-full py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] ${isPending || isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
        >
            {isPending ? 'Buscando...' : isDisabled ? 'Mail Enviado' : 'Recuperar Cuenta'}
        </button>
    );
}
