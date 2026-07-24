import React, { useState } from 'react';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="bg-[#f8f5ff] text-[#3b1c60] py-4 shadow-sm relative z-50 w-full">
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO CARGADO DESDE URL EXTERNA */}
        <a href="#inicio" onClick={cerrarMenu} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          {/* Aquí está el logo de gatito usando un enlace de Icons8 */}
          <img 
            src="https://img.icons8.com/color/96/cat.png" 
            alt="Logo Gatitos" 
            className="w-12 h-12 object-contain" 
          />
          <div className="text-lg font-bold leading-tight text-[#3b1c60] text-left">
            Curiosidades<br/>de los Gatitos
          </div>
        </a>

        {/* ENLACES DE ESCRITORIO */}
        <div className="hidden lg:flex gap-8 text-sm font-semibold tracking-wide items-center">
          <a href="#inicio" className="border-b-2 border-[#3b1c60] pb-1 text-[#3b1c60] hover:text-[#f472b6] transition-colors">INICIO</a>
          <a href="#nosotros" className="pb-1 hover:text-[#f472b6] transition-colors">NOSOTROS</a>
          <a href="#servicios" className="pb-1 hover:text-[#f472b6] transition-colors">SERVICIOS Y PRODUCTOS</a>
          <a href="#galeria" className="pb-1 hover:text-[#f472b6] transition-colors">GALERÍA</a>
          <a href="#contacto" className="pb-1 hover:text-[#f472b6] transition-colors">CONTACTO</a>
        </div>

        {/* BOTÓN DE TRES PUNTOS */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors focus:outline-none ml-auto"
          aria-label="Menú de opciones"
        >
          <svg className="w-8 h-8 fill-current text-[#3b1c60]" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {menuAbierto && (
        <div className="lg:hidden absolute right-4 top-20 bg-white text-[#3b1c60] rounded-2xl shadow-xl p-4 w-64 border border-purple-100 flex flex-col gap-2 z-50">
          <a href="#inicio" onClick={cerrarMenu} className="hover:bg-purple-50 p-2.5 rounded-xl font-bold border-l-4 border-[#3b1c60] transition-colors">
            INICIO
          </a>
          <a href="#nosotros" onClick={cerrarMenu} className="hover:bg-purple-50 p-2.5 rounded-xl font-semibold transition-colors">
            NOSOTROS
          </a>
          <a href="#servicios" onClick={cerrarMenu} className="hover:bg-purple-50 p-2.5 rounded-xl font-semibold transition-colors">
            SERVICIOS Y PRODUCTOS
          </a>
          <a href="#galeria" onClick={cerrarMenu} className="hover:bg-purple-50 p-2.5 rounded-xl font-semibold transition-colors">
            GALERÍA
          </a>
          <a href="#contacto" onClick={cerrarMenu} className="hover:bg-purple-50 p-2.5 rounded-xl font-semibold transition-colors">
            CONTACTO
          </a>
        </div>
      )}
    </nav>
  );
}