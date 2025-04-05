'use client';

import { useState, useEffect } from 'react';

export default function WelcomePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
      <div
        className="bg-white rounded-xl shadow-xl max-w-md p-6 text-center transform transition-all duration-500 animate-fade-slide"
      >
        <h2 className="text-2xl font-bold text-black mb-4">🎉 Bem-vindo ao Painel Info-Saúde ES!</h2>
        <p className="text-lg text-sky-700">
          Aqui você encontrará informações sobre saúde pública, vacinação e muito mais.
          <br />
          Navegue pelas opções abaixo para acessar as plataformas disponíveis.
        </p>

        {/* Botão para fechar (opcional) */}
        <button
          onClick={() => setShow(false)}
          className="mt-6 px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
