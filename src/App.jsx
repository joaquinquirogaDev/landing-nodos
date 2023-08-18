import './App.css'
import Sections from './Components/Sections/Sections'

function App() {

  return (
    <>
        <Sections/>
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
