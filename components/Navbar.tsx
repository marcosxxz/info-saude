'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <><nav className="bg-cyan-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">
                    Info-Saúde ES
                </Link>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? 'Fechar' : 'Menu'}
                    </button>
                </div>
                <ul className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <li>
                        <Link href="/" className="text-white decoration-pink-600 hover:overline">
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobre" className="text-white hover:overline decoration-pink-600">
                            
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato" className="text-white hover:overline decoration-pink-600">
                            <img src="govespiritosanto.svg" alt="Brasão do ES"  />
                        </Link>
                    </li>
                    

                    
                </ul>
            </div>
        </nav><div className="w-full h-1 bg-pink-600 origin-left animate-grow" />
        </>   
    );
};

export default Navbar;
