'use client';
import React, { useState } from 'react';
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { authenticate } from '../../lib/actions';

export default function LoginForm() {
  // Usamos useState para manejar el estado del mensaje de error
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    setIsPending(true);  // Indicamos que la solicitud está en curso

    try {
      const error = await authenticate(undefined, formData);
      if (error) setErrorMessage(error);
      else setErrorMessage(null);
    } catch (error) {
      setErrorMessage('Algo salió mal.');
    } finally {
      setIsPending(false);  // Finaliza el estado pendiente
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="rounded-lg w-96 bg-gray-200 px-6 pb-4 pt-8">
          <h1 className="text-center mb-3 font-bold text-3xl text-[#025951]">
            Bienvenido.
          </h1>
          <h1 className="text-center mb-3 text-xl">
            Para continuar, por favor inicia sesión.
          </h1>
          <div className="w-full">
            {/* Campo de documento */}
            <div>
              <label
                className="mb-3 mt-5 block text-m font-medium text-gray-900"
                htmlFor="dni"
              >
                Documento
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-m outline-2 placeholder:text-gray-500"
                  id="numero_documento"
                  type="text"
                  name="numero_documento"
                  placeholder="Ingresa tu número de documento"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            {/* Campo de contraseña */}
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block font-medium text-m text-gray-900"
                htmlFor="password"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border text-m border-gray-200 py-[9px] pl-10 outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  required
                  minLength={3}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            {/* Desplegable */}
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block font-medium text-m text-gray-900"
                htmlFor="opciones"
              >
                Selecciona una opción
              </label>
              <div className="relative">
                <select
                  className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-m outline-2"
                  id="opciones"
                  name="opciones"
                  required
                >
                  <option value="Cedula_de_identidad">Cedula_de_identidad</option>
                  <option value="DNI">DNI</option>
                  <option value="Libreta_civica">Libreta_civica</option>
                  <option value="Libreta_de_enrolamiento">Libreta_de_enrolamiento</option>
                  <option value="Pasaporte">Pasaporte</option>
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
            <a href="#" className="text-sm text-gray-500 hover:underline">
              ¿Olvidaste tu contraseña?
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
}

function LoginButton({ isPending }: { isPending: boolean }) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className={`bg-[#025951] hover:bg-[#04D99D] text-white font-bold mt-4 w-full ${
        isPending ? 'cursor-not-allowed opacity-50' : ''
      }`}
      aria-label="clic aqui para loguearse"
    >
      {isPending ? 'Cargando...' : 'Log in'}{' '}
      <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </button>
  );
}
