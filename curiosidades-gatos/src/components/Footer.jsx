import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#56427d] text-white pt-20 pb-6 px-10 relative mt-20">
      <div className="absolute top-[-50px] left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 320" className="w-[110%] h-[100px] block ola-animada" preserveAspectRatio="none">
          <path fill="#56427d" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,117.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm relative z-10 border-b border-[#6c5598] pb-10">
        <div>
          <h4 className="font-black mb-4 text-white text-lg">Navegación</h4>
          <ul className="space-y-3 font-bold opacity-90 text-sm">
            <li>🐾 Inicio</li>
            <li>🐾 Sobre nosotros</li>
            <li>🐾 Servicios y Razas</li>
            <li>🐾 Galería</li>
            <li>🐾 Contacto</li>
          </ul>
        </div>
        <div className="text-center flex flex-col items-center">
          <h4 className="font-black mb-4 text-white text-lg">Síguenos</h4>
          <div className="flex gap-4 justify-center mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#1877f2] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:scale-110 transition-transform">f</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-[#fbc2eb] to-[#a18cd1] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl text-[#3b1c60] hover:scale-110 transition-transform">📸</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-[#ff0000] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:scale-110 transition-transform">▶</a>
          </div>
          <div className="text-6xl mt-4 relative">
            🐱
            <span className="text-xl absolute -left-4 bottom-2 text-[#f472b6]">♡</span>
            <span className="text-xl absolute -right-4 bottom-2 text-[#f472b6]">♡</span>
          </div>
        </div>
        <div className="text-left md:text-right">
          <h4 className="font-black mb-4 text-white text-lg">Información</h4>
          <ul className="flex flex-wrap justify-center gap-6 text-xs font-bold text-[#4c2577] uppercase mt-4 md:mt-0 tracking-widest">
            <li><a href="#inicio" className="hover:text-[#f472b6] border-b-[3px] border-[#3b1c60] pb-1">INICIO</a></li>
            <li><a href="#nosotros" className="hover:text-[#f472b6]">NOSOTROS</a></li>
            <li><a href="#servicios" className="hover:text-[#f472b6]">SERVICIOS Y PRODUCTOS</a></li>
            <li><a href="#aliados" className="hover:text-[#f472b6]">ALIADOS</a></li>
            <li><a href="#galeria" className="hover:text-[#f472b6]">GALERÍA</a></li>
            <li><a href="#contacto" className="hover:text-[#f472b6]">CONTACTO</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}