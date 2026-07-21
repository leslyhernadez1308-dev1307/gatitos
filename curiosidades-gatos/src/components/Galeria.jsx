import React, { useState, useEffect } from 'react';

export default function Galeria() {
  const imagenes = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1529778459826-3f0e0c8b6680?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?auto=format&fit=crop&w=400&q=80"
  ];

  const [fotoActual, setFotoActual] = useState(0);
  const [imagenPantallaCompleta, setImagenPantallaCompleta] = useState(null); 

  const fotoSiguiente = () => setFotoActual((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  const fotoAnterior = () => setFotoActual((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));

  useEffect(() => {
    const temporizadorFotos = setInterval(fotoSiguiente, 3500);
    return () => clearInterval(temporizadorFotos);
  }, [fotoActual]);

  return (
    <>
      <section id="galeria" className="bg-white py-20 px-10 border-t-4 border-[#f6f2e8]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#3b1c60] mb-10">
            <span className="text-[#f472b6]">♡</span> Galería de Gatitos <span className="text-[#f472b6]">♡</span>
          </h2>
          <div className="relative bg-[#fefefc] p-6 rounded-[3rem] shadow-sm border-[3px] border-[#f6f2e8]">
            <div 
              className="w-full h-80 md:h-[400px] overflow-hidden rounded-3xl relative cursor-pointer group"
              onClick={() => setImagenPantallaCompleta(imagenes[fotoActual])}
            >
              <img src={imagenes[fotoActual]} alt={`Gato ${fotoActual + 1}`} className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105" />
            </div>
            <button onClick={(e) => { e.stopPropagation(); fotoAnterior(); }} className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 text-[#3b1c60] w-12 h-12 rounded-full shadow-lg font-bold text-xl hover:bg-[#f472b6] hover:text-white transition-colors">◀</button>
            <button onClick={(e) => { e.stopPropagation(); fotoSiguiente(); }} className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 text-[#3b1c60] w-12 h-12 rounded-full shadow-lg font-bold text-xl hover:bg-[#f472b6] hover:text-white transition-colors">▶</button>
            <button className="bg-[#b388eb] hover:bg-[#9760df] text-white font-black py-3 px-8 rounded-full shadow-md flex items-center gap-2 mx-auto mt-8">Ver más fotos <span>📷</span></button>
          </div>
        </div>
      </section>

      {imagenPantallaCompleta && (
        <div className="fixed inset-0 bg-[#3b1c60]/95 z-[100] flex justify-center items-center p-4 backdrop-blur-sm" onClick={() => setImagenPantallaCompleta(null)}>
          <button className="absolute top-6 right-8 text-[#f472b6] text-6xl font-black" onClick={() => setImagenPantallaCompleta(null)}>×</button>
          <img src={imagenPantallaCompleta} alt="Gato grande" className="max-w-full max-h-[90vh] object-contain rounded-[2rem] border-[6px] border-white shadow-2xl" />
        </div>
      )}
    </>
  );
}