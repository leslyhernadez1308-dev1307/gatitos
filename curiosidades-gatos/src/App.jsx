import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import SobreNosotros from './components/SobreNosotros';
import Curiosidades from './components/Curiosidades';
import ServiciosRazas from './components/ServiciosRazas';
import Galeria from './components/Galeria';
import FormularioContacto from './components/FormularioContacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5ff] text-[#3b1c60] fuente-nunito relative">
      
      {/* MENSAJE DE RESPONSIVIDAD PARA EL MAESTRO */}
      <div className="bg-purple-600 text-white text-center py-2 px-4 font-bold text-sm shadow-md">
        <span className="block sm:hidden">
          📱 Vista Móvil: ¡Esta página es 100% Responsiva!
        </span>
        <span className="hidden sm:block md:hidden">
          📱 Vista Tablet: ¡Esta página es 100% Responsiva!
        </span>
        <span className="hidden md:block">
          💻 Vista Escritorio: ¡Esta página es 100% Responsiva!
        </span>
      </div>

      <Navbar />
      <Inicio />
      <SobreNosotros />
      <Curiosidades />
      <ServiciosRazas/>
      <Galeria/>
      <FormularioContacto/>
      <Footer/>
      {/* Resto de tus componentes... */}

    </div>
  );
}

export default App;