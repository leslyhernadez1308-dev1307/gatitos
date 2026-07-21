import Inicio from './Inicio';
import SobreNosotros from './SobreNosotros';
import Curiosidades from './Curiosidades';
import ServiciosRazas from './ServiciosRazas';
import Galeria from './Galeria';
import FormularioContacto from './FormularioContacto';

function ContenidoPrincipal() {
  return (
    <main>
      <Inicio />
      <SobreNosotros />
      <Curiosidades />
      <ServiciosRazas />
      <Galeria />
      <FormularioContacto />
    </main>
  );
}

export default ContenidoPrincipal;
