import React from 'react';

export default function Inicio() {
  return (
    <>
      <header id="inicio" className="flex flex-col md:flex-row items-center justify-between px-10 pt-10 pb-0 max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-6 z-10">
          <h1 className="text-5xl font-black text-[#3b1c60] leading-tight">
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
            className="w-80 h-80 object-cover rounded-[2.5rem] shadow-xl" 
           />
           <span className="absolute top-10 left-10 text-3xl text-[#f472b6]">♡</span>
           <span className="absolute bottom-10 right-10 text-3xl text-[#c084fc]">✨</span>
        </div>
      </header>

      {/* OLA SEPARADORA SUPERIOR ANIMADA */}
      <div className="w-full mt-[-80px] relative z-0">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="ola-animada">
          <path fill="#eaddf6" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,176C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </>
  );
}