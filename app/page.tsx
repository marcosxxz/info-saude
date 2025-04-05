'use client';

import { useState } from 'react';
import RedirectCard from '../components/RedirectCard';
import { FiSearch } from 'react-icons/fi';
import WelcomePopup from '../components/WelcomePopup';

const cardsData = [
  {
    title: "Wiki.Saúde - ES",
    description: "Acesse a plataforma Wiki da Saúde.",
    imageUrl: "/Wiki.png",
    linkUrl: "https://app.wiki.saude.es.gov.br/",
    linkText: "Acessar Wiki",
    category: "Institucional"
  },
  {
    title: "Vacina e Confia - ES",
    description: "Consulte informações sobre sua vacinação.",
    imageUrl: "/vacina-confia-logo.svg",
    linkUrl: "https://vacinaeconfia.saude.es.gov.br/cidadaos/",
    linkText: "Acessar Vacina e Confia",
    category: "Vacinação"
  },
  {
    title: "CIEGES - ES",
    description: "Acesse o Centro de Inteligência Estratégica para a Gestão do SUS no Espírito Santo",
    imageUrl: "/cieges-logo.png",
    linkUrl: "https://cieges.saude.es.gov.br/",
    linkText: "Ir para o CIEGES",
    category: "Institucional"
  },
  {
    title: "Painel da Dengue - ES",
    description: "Acompanhe os casos de dengue no Espírito Santo.",
    imageUrl: "/dengue-icon-rb.png",
    linkUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDdlY2E2MWMtZTY2My00ZmM2LWI4YTctOTljYTI3NWM4NmZiIiwidCI6IjhiMjA4ZmViLTIyMTYtNDQ1Zi1iZmQxLTk1MjU4ZDlkMjExMSJ9",
    linkText: "Acompanhar Casos",
    category: "Painéis"
  },
  {
    title: "Painel COVID-19 - ES",
    description: "Acompanhe os casos de COVID-19 no Espírito Santo.",
    imageUrl: "/covid-icon.png",
    linkUrl: "https://coronavirus.es.gov.br/painel-covid-19-es",
    linkText: "Acompanhar Casos",
    category: "Painéis"
  },
  {
    title: "Conecta Cidadão - ES",
    description: "Acesse o portal Conecta Cidadão do Espírito Santo.",
    imageUrl: "/conecta-logo.png",
    linkUrl: "https://conectacidadao.es.gov.br/",
    linkText: "Acessar Portal",
    category: "Institucional"
  },
  {
    title: "Portal Mandados Judiciais - ES",
    description: "Acesse o portal de Mandados Judiciais do Espírito Santo.",
    imageUrl: "/gavel.png",
    linkUrl: "https://conteudo.saude.es.gov.br/smartportalmandadojudicial/",
    linkText: "Visitar Portal",
    category: "Institucional"
  },
  {
    title: "Integra Capixaba - ES",
    description: "Acesse o portal Integra Capixaba do Espírito Santo.",
    imageUrl: "/integra.jpg",
    linkUrl: " https://integra.saude.es.gov.br/",
    linkText: "Acessar Portal",
    category: "Institucional"   
  },
 
{
  title: "GLPI - Abertura de Chamados",
  description: "Solicite suporte técnico ou registre chamados internos da SESA.",
  imageUrl: "/glpi-icon.png",
  linkUrl: "https://glpi.saude.es.gov.br/front/central.php",
  linkText: "Abrir Chamado"
}
];

const categories = ['Todos', 'Vacinação', 'Painéis', 'Institucional'];
const suggestions = ['vacina', 'covid', 'wiki', 'dengue', 'cidadão'];

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredCards = cardsData.filter(card =>
    (selectedCategory === 'Todos' || card.category === selectedCategory) &&
    (card.title.toLowerCase().includes(search.toLowerCase()) ||
     card.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 bg-indigo-50"  >
      <h1 className="text-3xl font-bold text-black mb-6">Painel Info-Saúde ES</h1>

      <div className="relative w-full max-w-xl mb-5">
        <input
          type="text"
          placeholder="Pesquise aqui..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-[300px] md:w-[400px] px-4 py-2 rounded-lg text-sm focus:ring-pink-500 text-black justify-between ml-21"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-400" />
      </div>

      <div className="mb-6 flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? 'bg-pink-600 text-black'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        {suggestions.map((word) => (
          <button
            key={word}
            onClick={() => setSearch(word)}
            className="text-sm text-pink-600 hover:underline hover:text-pink-800"
          >
            #{word}
          </button>
        ))}
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card, index) => (
          <RedirectCard
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            linkUrl={card.linkUrl}
            linkText={card.linkText}
          />
        ))}
        {filteredCards.length === 0 && (
          <p className="text-black -500 text-center col-span-full">Nenhuma plataforma encontrada.</p>
        )}
      </div>
    </main>
  );
}

