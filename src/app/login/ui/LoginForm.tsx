'use client';
import React, { useState } from 'react';
import {
  ExclamationCircleIcon,
  KeyIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { login } from '@/login';
import { LoginData, TipoDocumentoEnum } from '@/src/lib/definitions';

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements as typeof event.currentTarget.elements & {
      numero_documento: HTMLInputElement;
      contrasena: HTMLInputElement;
      tipo_documento: HTMLSelectElement;
    };

    const loginData: LoginData = {
      numero_documento: formElements.numero_documento.value,
      contrasena: formElements.contrasena.value,
      tipo_documento: formElements.tipo_documento.value as TipoDocumentoEnum,
    };

    setIsPending(true);

    try {
      const error = await login(loginData);
      if (error) setErrorMessage(error);
      else setErrorMessage(null);
    } catch (error) {
      setErrorMessage('Las credenciales son inválidas');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-2 lg:p-2">
      <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-md">
        <div className="rounded-lg bg-gray-200 border border-gray-300 px-6 pb-4 pt-8 shadow-md">
          <h1 className="text-center mb-3 font-bold text-2xl sm:text-3xl text-[#025951]">
            Bienvenido.
          </h1>
          <h2 className="text-center mb-3 text-lg sm:text-xl">
            Para continuar, por favor inicia sesión.
          </h2>
          <div className="w-full">
            {/* Campo de documento */}
            <div>
              <label
                className="mb-3 mt-5 block text-sm sm:text-base font-medium text-gray-900"
                htmlFor="dni"
              >
                Documento
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-primario py-2 pl-10 text-sm sm:text-base outline-2 placeholder:text-gray-500"
                  id="numero_documento"
                  type="text"
                  name="numero_documento"
                  placeholder="Ingresa tu número de documento"
                  required
                />
                <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            {/* Campo de contraseña */}
            <div className="mt-4">
              <label
                className="mb-3 block font-medium text-sm sm:text-base text-gray-900"
                htmlFor="password"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border text-sm sm:text-base border-primario py-2 pl-10 outline-2 placeholder:text-gray-500"
                  id="contrasena"
                  type="password"
                  name="contrasena"
                  placeholder="Ingresa tu contraseña"
                  required
                  minLength={3}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            {/* Desplegable */}
            <div className="mt-4">
              <label
                className="mb-3 block font-medium text-sm sm:text-base text-gray-900"
                htmlFor="tipo_documento"
              >
                Selecciona el tipo de documento
              </label>
              <div className="relative">
                <select
                  className="block w-full rounded-md border border-primario py-2 text-sm text-center sm:text-base outline-2"
                  id="tipo_documento"
                  name="tipo_documento"
                  required
                >
                  <option value="DOCUMENTO_NACIONAL_IDENTIDAD">DNI</option>
                  <option value="CEDULA_IDENTIDAD">Cédula de identidad</option>
                  <option value="LIBRETA_CIVICA">Libreta Cívica</option>
                  <option value="LIBRETA_ENROLAMIENTO">Libreta de Enrolamiento</option>
                  <option value="PASAPORTE">Pasaporte</option>
                </select>
              </div>
            </div>
          </div>
          {/* Botón de login centrado */}
          <div className="flex justify-center mt-6">
            <LoginButton isPending={isPending} />
          </div>
          {/* Enlace de 'Olvidaste tu contraseña?' */}
          <div className="text-center mt-4">
            <a href="/password/recover" className="text-sm text-primario hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          {/* Mensaje de error */}
          {errorMessage && (
            <div className="flex items-center space-x-2 mt-4 text-red-500">
              <ExclamationCircleIcon className="h-5 w-5" />
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

function LoginButton({ isPending }: { isPending: boolean }) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className={`relative flex items-center justify-center bg-[#025951] hover:bg-[#28b78ee7] text-white font-bold text-lg mt-4 w-full py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 ${isPending ? 'cursor-not-allowed opacity-50' : ''
        }`}
      aria-label="clic aqui para loguearse"
    >
      {isPending ? (
        <span className="loader flex items-center justify-center">
          Cargando...
        </span>
      ) : (
        <>
          Log in
          <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
        </>
      )}
    </button>
  );
}
