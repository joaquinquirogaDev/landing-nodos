//styles
import './App.css'
//componentes
import {Footer, Hero, Navbar, Sections } from './Components'
import {SectionDetalle} from './Components/Sections/CardSection/SectionDetalle.jsx'

//react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//pages
import { Contacto, NivelInicial, NivelPrimario, Novedades,CargarCV } from './pages';
function App() {
 
  return <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/news' element={<Novedades />} />
      <Route path='/nivel' element={<Sections />} />
      <Route path='/nivel/:id' element={<SectionDetalle />} />
      <Route path='/contact' element={<Contacto />} />
      <Route path='/cargarCV' element={<CargarCV />} />
      <Route path='/nivelPrimario' element={<NivelPrimario />} />
      <Route path='/nivelInicial' element={<NivelInicial />} />
    </Routes>
    <Footer />
  </Router>
}

export default App


