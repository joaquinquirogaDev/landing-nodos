import './App.css'
import { Contacto, Footer, Hero, Navbar, Novedades, Sections } from './Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {SectionDetalle} from './Components/Sections/CardSection/SectionDetalle.jsx'
function App() {
  // const initialState = {
  //   nombre: 'Home',
  //   item: {}
  // }
  // const [activeComponent, setActiveComponent] = useState(initialState);
  // const componentes = {
  //   Home: Hero,
  //   Niveles: Sections,
  //   Novedades: Novedades,
  //   Contacto: Contacto,
  //   Detalle: SectionDetalle
  // };

  // const CurrentComponent = componentes[activeComponent?.nombre]
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


{/* <CurrentComponent
  setActiveComponent={setActiveComponent}
  activeComponent={activeComponent}
/> */}