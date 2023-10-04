//styles
import './App.css'
import logoWhatsapp from './assets/whatsapp.png'
//componentes
import {Footer, Hero, Navbar, Sections } from './Components'
import SectionDetalle from './Components/Sections/CardSection/SectionDetalle';

//react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//pages
import { Contacto, NivelInicial, NivelPrimario, Novedades,CargarCV } from './pages';
function App() {
 
  return <Router>
    <div className="containerWsp">
     <a href="https://wa.me/5492645713956" target='_blank'><img src={logoWhatsapp} alt="" /></a> 

    </div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/news' element={<Novedades />} />
      <Route path='/contact' element={<Contacto />} />
      <Route path='/cargarCV' element={<CargarCV />} />
      <Route path='/nivelPrimario' element={<NivelPrimario />} />
      <Route path='/nivelInicial' element={<NivelInicial />} />
    </Routes>
    <Footer />
  </Router>
}

export default App


