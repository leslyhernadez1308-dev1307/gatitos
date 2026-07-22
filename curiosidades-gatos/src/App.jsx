import './App.css';
import Navbar from './components/Navbar';
import ContenidoPrincipal from './components/ContenidoPrincipal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5ff] text-[#3b1c60] fuente-nunito relative">
    

      <Navbar />
      <ContenidoPrincipal />
      <Footer />
    </div>
  );
}

export default App;