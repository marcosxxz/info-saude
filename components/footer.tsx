'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#103F52] text-white py-6 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Info-Saúde ES • Todos os direitos reservados.</p>
          <p className="text-gray-400">Desenvolvido com base no InfoSaúde-DF, adaptado para o SESA-ES.</p>
        </div>

        <div className="flex space-x-4">
          <Link href="/sobre" className="hover:underline text-gray-300 hover:text-white font-bold">Sobre</Link>
          <Link href="https://saude.es.gov.br/fale-conosco" className="hover:underline text-gray-300 font-bold hover:text-white">Contato</Link>
          <a
            href="https://saude.es.gov.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-300 font-bold hover:text-white"
          >
            SESA-ES
          </a>
        </div>
      </div>
    </footer>
  );
}
