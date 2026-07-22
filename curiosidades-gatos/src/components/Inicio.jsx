import React, { useState } from 'react';

export default function Inicio() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <>
      {/* BARRA DE NAVEGACIÓN RESPONSIVA */}
      <nav className="bg-[#3b1c60] text-white p-4 shadow-lg relative z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          
          {/* LOGO */}
          <a href="#inicio" onClick={cerrarMenu} className="text-2xl font-black text-[#f472b6] hover:opacity-90">
            CatFacts 🐱
          </a>

          {/* MENÚ EN LAPTOP / ESCRITORIO (Visible en pantallas medianas y grandes) */}
          <div className="hidden md:flex gap-6 font-bold text-sm items-center">
            <a href="#inicio" className="hover:text-[#f472b6] transition-colors">Inicio</a>
            <a href="#curiosidades" className="hover:text-[#f472b6] transition-colors">Curiosidades</a>
            <a href="#razas" className="hover:text-[#f472b6] transition-colors">Razas</a>
            <a href="#cuidados" className="hover:text-[#f472b6] transition-colors">Cuidados</a>
            <a href="#contacto" className="bg-[#f472b6] px-4 py-2 rounded-full hover:bg-[#db2777] transition-all">
              Contacto
            </a>
          </div>

          {/* BOTÓN DE TRES PUNTOS / HAMBURGUESA (Visible solo en Celulares) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-[#522980] focus:outline-none transition-colors"
            aria-label="Menú"
          >
            {/* Ícono de 3 Puntos */}
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
        </div>

        {/* MENÚ DESPLEGABLE EN MÓVIL */}
        {menuAbierto && (
          <div className="md:hidden absolute right-4 top-16 bg-white text-gray-800 rounded-2xl shadow-2xl p-4 w-56 border border-purple-100 flex flex-col gap-2 z-50">
            <a href="#inicio" onClick={cerrarMenu} className="hover:bg-purple-50 p-2.5 rounded-xl font-bold transition-colors">
              🏠 Inicio
            </a>
            <a href="#curiosidades" onClick={cerrarMenu} className="hover:bg-purple-50 p-2.5 rounded-xl font-bold transition-colors">
              ✨ Curiosidades
            </a>
            <a href="#razas" onClick={cerrarMenu} className="hover:bg-purple-50 p-2.5 rounded-xl font-bold transition-colors">
              🐾 Razas
            </a>
            <a href="#cuidados" onClick={cerrarMenu} className="hover:bg-purple-50 p-2.5 rounded-xl font-bold transition-colors">
              🩺 Cuidados
            </a>
            <hr className="border-gray-100 my-1" />
            <a href="#contacto" onClick={cerrarMenu} className="bg-[#f472b6] text-white text-center p-2.5 rounded-xl font-bold hover:bg-[#db2777] transition-colors">
              📞 Contacto
            </a>
          </div>
        )}
      </nav>

      {/* HEADER / SECCIÓN PRINCIPAL */}
      <header id="inicio" className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 pt-10 pb-0 max-w-6xl mx-auto text-center md:text-left">
        <div className="md:w-1/2 space-y-6 z-10 flex flex-col items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl font-black text-[#3b1c60] leading-tight">
            ¡Descubre el mundo <br/> de los <span className="text-[#f472b6]">gatitos!</span>
          </h1>
          <p className="text-gray-700 font-bold text-base max-w-sm">
            Curiosidades, razas, cuidados y más información sobre nuestros amigos felinos.
          </p>
          <a href="#curiosidades" className="inline-block bg-[#f472b6] text-white font-black py-3 px-8 rounded-full shadow-md hover:bg-[#db2777] transition-all">
            Descubrir más 🐾
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0 z-10">
           <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80" 
            alt="Gatito tierno" 
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-[2.5rem] shadow-xl" 
           />
           <span className="absolute top-6 left-6 sm:top-10 sm:left-10 text-3xl text-[#f472b6]">♡</span>
           <span className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 text-3xl text-[#c084fc]">✨</span>
        </div>
      </header>

      {/* OLA SEPARADORA SUPERIOR ANIMADA */}
      <div className="w-full mt-[-50px] sm:mt-[-80px] relative z-0">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="ola-animada w-full">
          <path fill="#eaddf6" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,176C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </>
  );
}