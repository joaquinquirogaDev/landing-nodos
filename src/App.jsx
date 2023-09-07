import './App.css'
//hookks
import React, { useState } from 'react';
//componentes
import { Contacto, Footer, Hero, Navbar, Novedades, Sections } from './Components'

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
      {/*  <Footer /> */}
    </>
  )
}

export default App

