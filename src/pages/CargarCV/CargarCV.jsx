
import { CartelHero, FormCV2, HeroContacto } from '../../Components'
//images

import heroCargarCV from '../../assets/heroCargarCV.png'

export const CargarCV = () => {
  return (
    
    <>
    <HeroContacto  img={heroCargarCV}/>
    <CartelHero
        titulo='Únete a Nuestro Equipo de Docentes: Formando el Futuro Juntos ' 
        parrafo='En el Colegio San Agustín, creemos que la educación es una pasión y una vocación que puede moldear vidas. Si compartes nuestra pasión por la enseñanza y estás comprometido con el desarrollo integral de los estudiantes, te invitamos a ser parte de nuestro equipo de docentes. Juntos, podemos forjar un futuro brillante para nuestros estudiantes y marcar una diferencia duradera en sus vidas.'
        backColor='#212539'
    />
    <FormCV2 />
    </>
  )
}
