'use client'
import React from 'react';
import { useFormStatus } from 'react-dom';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form>
        <div className="rounded-lg w-96 bg-gray-50 px-6 pb-4 pt-8">
          <h1 className="text-center mb-3 font-bold text-4xl text-[#025951]">Bienvenido</h1>
          <h1 className="text-center mb-3 text-2xl">
            Para continuar, por favor inicia sesión.
          </h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-m font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-m outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Ingresa tu direccion de correo electronico"
                  required
                />
              </div>
            </div>
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
              </div>
            </div>
          </div>
          {/* Botón de login centrado */}
          <div className="flex justify-center mt-6">
            <LoginButton />
          </div>
          {/* Enlace de 'Olvidaste tu contraseña?' */}
          <div className="text-center mt-4">
            <a
              href="#"
              className="text-sm text-gray-500 hover:underline"
            >
              ¿Olvidaste tu contraseña?
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
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-[#025951] hover:bg-[#04D99D] text-white font-bold py-2 px-4 rounded"
      disabled={pending}
    >
      Log in
    </button>
  );
}
