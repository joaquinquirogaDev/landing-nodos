import './App.css'
import Sections from './Components/Sections/Sections'
import Footer from './Components/Footer/Footer'
import Form from './Components/Form/Form'
function App() {

  return (
    <>
        {/* <Sections/> */}
        <Form/>
    </>
  )
}

export default App

//useRef 

// import React, { useRef } from 'react';
// import Header from './Header';

// function LandingPage() {
//   const componenteEspecificoRef = useRef(null);

//   const scrollToComponent = () => {
//     if (componenteEspecificoRef.current) {
//       componenteEspecificoRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div>
//       <Header scrollToComponent={scrollToComponent} />

//       {/* Otros componentes y contenido */}

//       <div ref={componenteEspecificoRef} id="componente-especifico">
//         {/* Contenido del componente específico */}
//       </div>
//     </div>
//   );
// }

// export default LandingPage;
