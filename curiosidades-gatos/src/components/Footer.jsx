import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#50377a] py-12 text-white relative w-full">
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around items-center md:items-start gap-12 px-6">
        
        {/* COLUMNA 1: SÍGUENOS */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-6">Síguenos</h3>
          
          {/* Iconos Sociales */}
          <div className="flex gap-4 mb-6">
            <a href="#" className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <span className="font-bold text-lg">f</span>
            </a>
            <a href="#" className="bg-[#c2a3d6] w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              📷
            </a>
            <a href="#" className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              ▶
            </a>
          </div>

          {/* Gatito original con corazones */}
          <div className="flex items-center gap-2 text-pink-400 font-bold mb-4">
             ♡ <span className="text-3xl text-white">😻</span> ♡
          </div>

          {/* NUEVO CONTENIDO: Tarjeta felina para llenar el espacio */}
          <div className="flex flex-col items-center bg-white/10 px-5 py-3 rounded-2xl border border-white/20 shadow-sm backdrop-blur-sm mt-2">
            <p className="text-sm font-medium text-center text-purple-100 mb-2">
              ¡Miau-chas gracias por tu visita!
            </p>
            {/* Gatito estilo pixel art que hace hover (gira un poco al pasar el mouse) */}
            <img
              src="https://img.icons8.com/dusk/64/cat.png"
              alt="Gatito Pixel"
              className="w-12 h-12 object-contain hover:rotate-12 transition-transform cursor-pointer"
            />
          </div>
        </div>

        {/* COLUMNA 2: INFORMACIÓN */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-6">Información</h3>
          
          <div className="flex flex-col gap-3">
            <a href="#inicio" className="text-white hover:text-[#f472b6] transition-colors flex items-center gap-2 font-medium tracking-wide">
              <span>🐾</span> INICIO
            </a>
            <a href="#nosotros" className="text-white hover:text-[#f472b6] transition-colors flex items-center gap-2 font-medium tracking-wide">
              <span>🐾</span> NOSOTROS
            </a>
            <a href="#servicios" className="text-white hover:text-[#f472b6] transition-colors flex items-center gap-2 font-medium tracking-wide">
              <span>🐾</span> SERVICIOS Y PRODUCTOS
            </a>
            <a href="#aliados" className="text-white hover:text-[#f472b6] transition-colors flex items-center gap-2 font-medium tracking-wide">
              <span>🐾</span> ALIADOS
            </a>
            <a href="#galeria" className="text-white hover:text-[#f472b6] transition-colors flex items-center gap-2 font-medium tracking-wide">
              <span>🐾</span> GALERÍA
            </a>
            <a href="#contacto" className="text-white hover:text-[#f472b6] transition-colors flex items-center gap-2 font-medium tracking-wide">
              <span>🐾</span> CONTACTO
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-5xl mx-auto mt-10 border-t border-purple-400/30 pt-4 text-center text-sm text-purple-200">
        © 2026 Curiosidades de los Gatitos.
      </div>
    </footer>
  );
}