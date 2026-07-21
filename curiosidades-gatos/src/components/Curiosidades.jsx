import React from 'react';

export default function Curiosidades() {
  const curiosidades = [
    { emoji: "💤", desc: "Duermen hasta 16 horas al día." },
    { emoji: "🐽", desc: "Su nariz tiene huellas únicas." },
    { emoji: "🐈‍⬛", desc: "Ven muy bien en la oscuridad." },
    { emoji: "🔊", desc: "Emiten más de 100 vocalizaciones." },
    { emoji: "🏃‍♂️", desc: "Corren a una velocidad de 48 km/h." },
    { emoji: "🏰", desc: "Eran sagrados en el antiguo Egipto." },
    { emoji: "👂", desc: "Giran sus orejas 180 grados." },
    { emoji: "🐾", desc: "Las hembras suelen ser diestras." },
    { emoji: "🧼", desc: "Se acicalan un tercio del día." },
    { emoji: "🚀", desc: "Saltan 6 veces su propia altura." },
    { emoji: "💓", desc: "Su corazón late muy rápido." },
    { emoji: "🧱", desc: "Tienen clavículas flotantes." }
  ];

  return (
    <section id="curiosidades" className="bg-[#eaddf6] pb-20 px-10 mt-[-5px]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-black text-[#3b1c60] mb-10 flex items-center gap-2 justify-center">
          ✨ Curiosidades populares 🐾
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {curiosidades.map((item, index) => {
            const estilos = [
              { bg: "bg-[#c2efd8]", border: "border-[#a0dec0]", text: "text-[#115e59]" },
              { bg: "bg-[#fcddec]", border: "border-[#f4b8d4]", text: "text-[#9d174d]" },
              { bg: "bg-[#fef4b5]", border: "border-[#fce47c]", text: "text-[#854d0e]" }
            ];
            const color = estilos[index % 3];
            return (
              <div key={index} className={`${color.bg} p-6 rounded-3xl text-center border-[3px] ${color.border} shadow-sm transform hover:-translate-y-2 transition-transform relative`}>
                <span className="text-4xl block mb-2 opacity-80">{item.emoji}</span>
                <p className={`font-extrabold ${color.text} text-xs md:text-sm`}>{item.desc}</p>
              </div>
            );
          })}
        </div>

        <h3 className="text-2xl font-black text-[#3b1c60] mb-6 flex items-center gap-2">
          ✨ Video recomendado
        </h3>
        <div className="bg-[#d2c0ec] p-6 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-full md:w-1/2 bg-black rounded-3xl overflow-hidden aspect-video border-4 border-white shadow-lg">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/ByH9LuSILxU" 
              title="Video de Gatitos" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-[#3b1c60] font-bold text-lg mb-6">Mira esta increíble compilación de gatitos divertidos traída directamente desde YouTube.</p>
            <button className="bg-[#8665b9] text-white px-8 py-3 rounded-full font-black shadow-md flex items-center gap-2 hover:bg-[#6b4c9a]">
              ¡Dale Play al video! <span>▶</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}