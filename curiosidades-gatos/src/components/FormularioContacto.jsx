import React, { useState } from 'react';

const DESTINO_EMAIL = 'tucorreo@ejemplo.com';

export default function FormularioContacto() {
  const [estado, setEstado] = useState({ tipo: 'idle', mensaje: '' });

  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    const formulario = evento.currentTarget;
    const datos = {
      nombre: formulario.nombre.value,
      correo: formulario.correo.value,
      mensaje: formulario.mensaje.value,
      _subject: 'Nuevo mensaje desde la página de gatitos',
      _captcha: 'false',
    };

    setEstado({ tipo: 'cargando', mensaje: 'Enviando tu mensaje...' });

    try {
      const respuesta = await fetch(`https://formsubmit.co/ajax/${DESTINO_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error('No se pudo enviar el mensaje.');
      }

      setEstado({
        tipo: 'exito',
        mensaje: '¡Mensaje enviado con éxito! 🐾 Te responderemos pronto.',
      });
      formulario.reset();
    } catch (error) {
      setEstado({
        tipo: 'error',
        mensaje: 'Hubo un problema al enviar tu mensaje. Verifica el correo de destino.',
      });
    }
  };

  return (
    <section id="contacto" className="bg-[#f8f5ff] py-20 px-10 border-t-4 border-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-black text-[#3b1c60] mb-6">Contáctanos 🐾</h3>
            <form onSubmit={manejarEnvio} className="space-y-4">
              <div className="border-[3px] border-white rounded-[1.5rem] bg-white overflow-hidden shadow-sm">
                <label htmlFor="nombre" className="sr-only">Nombre completo</label>
                <input type="text" id="nombre" name="nombre" placeholder="👤 Nombre completo" required className="w-full p-4 font-bold text-sm text-gray-700 focus:outline-none" />
              </div>
              <div className="border-[3px] border-white rounded-[1.5rem] bg-white overflow-hidden shadow-sm">
                <label htmlFor="correo" className="sr-only">Correo electrónico</label>
                <input type="email" id="correo" name="correo" placeholder="✉️ Correo electrónico" required className="w-full p-4 font-bold text-sm text-gray-700 focus:outline-none" />
              </div>
              <div className="border-[3px] border-white rounded-[1.5rem] bg-white overflow-hidden shadow-sm">
                <label htmlFor="mensaje" className="sr-only">Mensaje</label>
                <textarea id="mensaje" name="mensaje" placeholder="💬 Mensaje" rows="3" required className="w-full p-4 font-bold text-sm text-gray-700 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="bg-[#f472b6] text-white font-black py-3 px-8 rounded-full shadow-md hover:bg-[#db2777]">Enviar mensaje 🐾</button>

              {estado.tipo !== 'idle' && (
                <p className={`font-bold text-sm ${estado.tipo === 'error' ? 'text-red-600' : 'text-green-700'}`}>
                  {estado.mensaje}
                </p>
              )}
            </form>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-black text-[#3b1c60] mb-6 text-center">Nuestra ubicación</h3>
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border-[3px] border-white">
              
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 border-2 border-gray-100 relative">
                 <iframe 
                   src="https://www.google.com/maps?q=Veterinaria,+Jilotepec,+Estado+de+México&output=embed" 
                   className="w-full h-full" 
                   loading="lazy"
                 ></iframe>
              </div>
              
              <p className="text-sm text-gray-700 font-bold text-center">
                Dirección: Zona de Clínicas Veterinarias<br/>
                Jilotepec de Molina Enríquez, Méx.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}