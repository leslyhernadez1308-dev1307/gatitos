import React from 'react';

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="bg-[#fcfbf7] py-20 px-10 border-t-4 border-white relative overflow-hidden">
      <span className="absolute top-10 right-20 text-4xl opacity-40">🐾</span>
      <span className="absolute bottom-10 left-20 text-4xl opacity-40">🐾</span>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="border-[6px] border-dashed border-[#b388eb] rounded-full p-2">
            <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=400&q=80" alt="Sobre nosotros" className="w-64 h-64 object-cover rounded-full shadow-lg" />
          </div>
          <div className="absolute bottom-[-10px] right-10 text-6xl">🧶</div>
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-black text-[#3b1c60] mb-6">⋐ Sobre Nosotros 🐾</h2>
          <p className="mb-6 text-gray-700 font-bold text-sm">Somos una página creada por amantes de los gatos, con el objetivo de compartir información interesante y útil sobre ellos.</p>
          <ol className="list-decimal list-inside text-gray-700 font-bold text-sm mb-6 opacity-0 h-0 w-0 absolute"><li>Requisito</li></ol>
          <div className="space-y-6">
            <div>
              <span className="bg-[#b388eb] text-white font-black px-6 py-1 rounded-full text-sm inline-block mb-2">Misión</span>
              <p className="text-sm text-gray-700 font-bold border-l-4 border-[#b388eb] pl-3">Brindar información confiable y de calidad sobre el cuidado, curiosidades y bienestar de los gatitos.</p>
            </div>
            <div>
              <span className="bg-[#f472b6] text-white font-black px-6 py-1 rounded-full text-sm inline-block mb-2">Visión</span>
              <p className="text-sm text-gray-700 font-bold border-l-4 border-[#f472b6] pl-3">Ser la página de referencia en español sobre gatos, promoviendo su respeto y protección.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}