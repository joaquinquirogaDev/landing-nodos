import './App.css'
import React, { useState } from 'react';
import { Footer, Hero, Navbar, Sections } from './Components'
import { Novedades } from './Components/Novedades';
import { Contacto } from './Components/Contacto';
function App() {
  const [activeComponent, setActiveComponent] = useState('Home');

  const componentes = {
    Home: Hero,
    Niveles: Sections,
    Novedades: Novedades,
    Contacto: Contacto
  };

  const CurrentComponent = componentes[activeComponent]


  return (
    <>
      <Navbar setActiveComponent={setActiveComponent} />
      <div>
        <CurrentComponent />
      </div>
      <Footer />
    </>
  )
}

export default App

