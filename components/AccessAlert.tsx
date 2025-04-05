'use client';

import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

export default function AccessAlert() {
  const [visible, setVisible] = useState(true);

  // Oculta automaticamente após 12 segundos
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 12000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 w-[90%] max-w-xs sm:max-w-sm md:max-w-md z-50 bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-lg shadow-md animate-fade-in flex items-start gap-3">
      <span className="text-sm font-medium">
        Caro usuário, certos acessos têm que ser feitos com <strong>Acesso Cidadão</strong>!
      </span>
      <button onClick={() => setVisible(false)} className="text-yellow-800 hover:text-red-600">
        <IoClose size={18} />
      </button>
    </div>
  );
}
