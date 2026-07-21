import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-10 py-5 bg-[#f8f5ff] sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img src="https://cdn-icons-png.flaticon.com/512/1864/1864514.png" alt="Logo" className="w-12 h-12" />
        <span className="text-xl font-extrabold text-[#3b1c60] leading-tight tracking-tight">
          Curiosidades <br/> de los Gatitos
        </span>
      </div>
      <ul className="flex flex-wrap justify-center gap-6 text-xs font-bold text-[#4c2577] uppercase mt-4 md:mt-0 tracking-widest">
        <li><a href="#inicio" className="hover:text-[#f472b6] border-b-[3px] border-[#3b1c60] pb-1">INICIO</a></li>
        <li><a href="#nosotros" className="hover:text-[#f472b6]">NOSOTROS</a></li>
        <li><a href="#servicios" className="hover:text-[#f472b6]">SERVICIOS Y PRODUCTOS</a></li>
        <li><a href="#galeria" className="hover:text-[#f472b6]">GALERÍA</a></li>
        <li><a href="#contacto" className="hover:text-[#f472b6]">CONTACTO</a></li>
      </ul>
    </nav>
  );
}