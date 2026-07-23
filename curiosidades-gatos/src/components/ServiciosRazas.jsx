import React from 'react';

export default function ServiciosRazas() {
  return (
    <section id="servicios" className="bg-[#fcfbf7] py-20 px-10 border-t-4 border-white">
      <div className="max-w-5xl mx-auto">
        
        {/* TABLA DE SERVICIOS */}
        <h2 className="text-3xl font-black text-center text-[#3b1c60] mb-8">
          <span className="text-[#51bfa5]">⋐</span> Productos <span className="text-[#51bfa5]">⋑</span>
        </h2>
        <div className="bg-white rounded-[2rem] shadow-sm border-[3px] border-[#c2efd8] overflow-hidden mb-16">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#c2efd8] text-[#115e59]">
                <th className="p-4 font-black border-b-[3px] border-white">Servicio</th>
                <th className="p-4 font-black border-b-[3px] border-white">Descripción</th>
                <th className="p-4 font-black border-b-[3px] border-white text-center">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#f0fdf4]">
                <td className="p-4 font-bold text-[#115e59] border-b border-gray-100">Alimento Premium</td>
                <td className="p-4 text-gray-600 border-b border-gray-100">Croquetas especiales para el cuidado del pelaje.</td>
                <td className="p-4 text-center font-bold text-[#115e59] border-b border-gray-100">$450</td>
              </tr>
              <tr className="hover:bg-[#f0fdf4]">
                <td className="p-4 font-bold text-[#115e59]">Consulta Veterinaria</td>
                <td className="p-4 text-gray-600">Revisión general y esquema de vacunación.</td>
                <td className="p-4 text-center font-bold text-[#115e59]">$300</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* RAZAS */}
        <h2 className="text-3xl font-black text-center text-[#3b1c60] mb-8">
          <span className="text-[#f472b6]">⋐</span> Razas de Gatos <span className="text-[#f472b6]">⋑</span>
        </h2>
        
        <div className="space-y-6 mb-16">
          {/* 1. Siamés */}
          <div className="bg-[#fefefc] p-6 rounded-[2rem] shadow-sm flex flex-col md:flex-row items-center gap-6 border-[3px] border-[#f6f2e8]">
            <img src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=200&q=80" alt="Siamés" className="w-40 h-40 object-cover rounded-3xl" />
            <div className="w-full">
              <h4 className="text-2xl font-black text-[#3b1c60] mb-2">Siamés <span className="text-[#f472b6]">♡</span></h4>
              <ul className="text-gray-700 font-bold space-y-1 text-sm list-inside">
                <li><span className="text-[#3b1c60] mr-2">•</span> <strong>Origen:</strong> Tailandia</li>
                <li><span className="text-[#3b1c60] mr-2">•</span> <strong>Características:</strong> Muy vocales, inteligentes y cariñosos.</li>
              </ul>
            </div>
          </div>

          {/* 2. Persa */}
          <div className="bg-[#fefefc] p-6 rounded-[2rem] shadow-sm flex flex-col md:flex-row items-center gap-6 border-[3px] border-[#f6f2e8]">
            <img src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=200&q=80" alt="Persa" className="w-40 h-40 object-cover rounded-3xl" />
            <div className="w-full relative">
              <h4 className="text-2xl font-black text-[#3b1c60] mb-2">Persa</h4>
              <ul className="text-gray-700 font-bold space-y-1 text-sm list-inside">
                <li><span className="text-[#3b1c60] mr-2">•</span> <strong>Origen:</strong> Persia (Irán)</li>
                <li><span className="text-[#3b1c60] mr-2">•</span> <strong>Características:</strong> Pelaje largo, cara chata, tranquilos y dóciles.</li>
              </ul>
              <span className="text-[#51bfa5] absolute bottom-0 right-2 text-2xl">🐾</span>
            </div>
          </div>

          {/* 3. Maine Coon */}
          <div className="bg-[#fefefc] p-6 rounded-[2rem] shadow-sm flex flex-col md:flex-row items-center gap-6 border-[3px] border-[#f6f2e8]">
            <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=200&q=80" alt="Maine Coon" className="w-40 h-40 object-cover rounded-3xl" />
            <div className="w-full relative">
              <h4 className="text-2xl font-black text-[#3b1c60] mb-2">Maine Coon <span className="text-[#fce47c]">✨</span></h4>
              <ul className="text-gray-700 font-bold space-y-1 text-sm list-inside">
                <li><span className="text-[#3b1c60] mr-2">•</span> <strong>Origen:</strong> Estados Unidos</li>
                <li><span className="text-[#3b1c60] mr-2">•</span> <strong>Características:</strong> Son gatos gigantes, muy amigables y les gusta el agua.</li>
              </ul>
            </div>
          </div>

          {/* 4. Bengala */}
          <div className="bg-[#fefefc] p-6 rounded-[2rem] shadow-sm flex flex-col md:flex-row items-center gap-6 border-[3px] border-[#f6f2e8]">
            <img src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=200&q=80" alt="Bengala" className="w-40 h-40 object-cover rounded-3xl" />
            <div className="w-full relative">
              <h4 className="text-2xl font-black text-[#3b1c60] mb-2">Bengala</h4>
              <ul className="text-gray-700 font-bold space-y-1 text-sm list-inside">
                <li><span className="text-[#3b1c60] mr-2">•</span> <strong>Origen:</strong> Estados Unidos</li>
                <li><span className="text-[#3b1c60] mr-2">•</span> <strong>Características:</strong> Parecen leopardos en miniatura, son enérgicos y curiosos.</li>
              </ul>
              <span className="text-[#b388eb] absolute bottom-0 right-2 text-2xl">🐾</span>
            </div>
          </div>

          {/* 5. British Shorthair */}
          <div className="bg-[#fefefc] p-6 rounded-[2rem] shadow-sm flex flex-col md:flex-row items-center gap-6 border-[3px] border-[#f6f2e8]">
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=200&q=80" alt="British Shorthair" className="w-40 h-40 object-cover rounded-3xl" />
            <div className="w-full relative">
              <h4 className="text-2xl font-black text-[#3b1c60] mb-2">British Shorthair <span className="text-[#f472b6]">♡</span></h4>
              <ul className="text-gray-700 font-bold space-y-1 text-sm list-inside">
                <li><span className="text-[#3b1c60] mr-2">•</span> <strong>Origen:</strong> Reino Unido</li>
                <li><span className="text-[#3b1c60] mr-2">•</span> <strong>Características:</strong> Pelaje denso como un osito de peluche, independientes pero leales.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* TESTIMONIOS */}
        <h2 className="text-3xl font-black text-center text-[#3b1c60] mb-8">
          <span className="text-[#fce47c]">⋐</span> Casos de Éxito <span className="text-[#fce47c]">⋑</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
           <div className="bg-[#fef4b5] p-6 rounded-[2rem] shadow-sm border-[3px] border-[#fce47c]">
             <p className="italic text-[#854d0e] mb-4 font-bold">"Gracias a esta página encontré las mejores croquetas para mi gato Benito. ¡Excelente atención!"</p>
             <p className="font-black text-[#854d0e]">- Laura Martínez</p>
           </div>
           <div className="bg-[#fef4b5] p-6 rounded-[2rem] shadow-sm border-[3px] border-[#fce47c]">
             <p className="italic text-[#854d0e] mb-4 font-bold">"Adoptamos a nuestra michi a través de sus aliados estratégicos. Estamos muy felices."</p>
             <p className="font-black text-[#854d0e]">- Familia Gómez</p>
           </div>
        </div>

        {/* ALIADOS ESTRATÉGICOS */}
        <div id="aliados" className="pt-24 -mt-16 mb-12">
          <h2 className="text-3xl font-black text-center text-[#3b1c60] mb-8">🤝 Aliados Estratégicos</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.royalcanin.com/mx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white px-6 py-3 rounded-full font-black text-[#3b1c60] border-[3px] border-gray-100 shadow-sm hover:scale-105 hover:border-[#f472b6] transition-all cursor-pointer inline-block"
            >
              🐾 Royal Canin
            </a>

            <a 
              href="https://www.google.com/maps/search/veterinaria" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white px-6 py-3 rounded-full font-black text-[#3b1c60] border-[3px] border-gray-100 shadow-sm hover:scale-105 hover:border-[#f472b6] transition-all cursor-pointer inline-block"
            >
              🏥 Clínica VetCats
            </a>

            <a 
              href="https://www.petfinder.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white px-6 py-3 rounded-full font-black text-[#3b1c60] border-[3px] border-gray-100 shadow-sm hover:scale-105 hover:border-[#f472b6] transition-all cursor-pointer inline-block"
            >
              🏡 Refugio Gatuno AC
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}