import React from 'react';

const VacinaConfiaCard: React.FC = () => {
  return (
    <a
      href="https://vacinaeconfia.saude.es.gov.br/cidadaos/"
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <div className="p-5">
        <img
          src="/vacina-confia-logo.svg"
          alt="Logo Vacina e Confia - ES"
          className="w-29 h-16 mb-4 mx-auto"
        />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Acesse o Vacina e Confia - ES
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          Clique aqui para acessar a plataforma Vacina e Confia do Espírito Santo e acompanhar suas informações de vacinação.
        </p>
        <span className="text-blue-500 hover:underline">
          Ir para Vacina e Confia →
        </span>
      </div>
    </a>
  );
};

export default VacinaConfiaCard;
