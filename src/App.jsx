//styles
import './App.css'
//componentes
import { Contacto, Footer, Hero, Navbar, Novedades, Sections } from './Components'
import {SectionDetalle} from './Components/Sections/CardSection/SectionDetalle.jsx'

//react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
 
  return <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/news' element={<Novedades />} />
      <Route path='/nivel' element={<Sections />} />
      <Route path='/nivel/:id' element={<SectionDetalle />} />
      <Route path='/contact' element={<Contacto />} />
    </Routes>
    <Footer />
  </Router>
}

export default App


