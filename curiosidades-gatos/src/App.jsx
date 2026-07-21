import './App.css';
import Navbar from './components/Navbar';
import ContenidoPrincipal from './components/ContenidoPrincipal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5ff] text-[#3b1c60] fuente-nunito relative">
      <div className="bg-purple-600 text-white text-center py-2 px-4 font-bold text-sm shadow-md">
        <span className="block sm:hidden">📱 Vista Móvil: ¡Esta página es 100% Responsiva!</span>
        <span className="hidden sm:block md:hidden">📱 Vista Tablet: ¡Esta página es 100% Responsiva!</span>
        <span className="hidden md:block">💻 Vista Escritorio: ¡Esta página es 100% Responsiva!</span>
      </div>

      <Navbar />
      <ContenidoPrincipal />
      <Footer />
    </div>
  );
}

export default App;