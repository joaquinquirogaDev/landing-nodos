import './App.css'
import { useState } from 'react';
//componentes
import { Contacto, Footer, Hero, Navbar, Novedades, Sections } from './Components'

import { SectionDetalle } from './Components/Sections/CardSection/SectionDetalle';
function App() {
  const initialState = {
    nombre: 'Home',
    item: {}
  }
  const [activeComponent, setActiveComponent] = useState(initialState);
  const componentes = {
    Home: Hero,
    Niveles: Sections,
    Novedades: Novedades,
    Contacto: Contacto,
    Detalle: SectionDetalle
  };

  const CurrentComponent = componentes[activeComponent?.nombre]
  return <>
    <Navbar setActiveComponent={setActiveComponent} />
    <div>
      <CurrentComponent
        setActiveComponent={setActiveComponent}
        activeComponent={activeComponent}
      />
    </div>
    <Footer />
  </>
}

export default App

