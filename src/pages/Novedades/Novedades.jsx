//componentes

import { CartelHero, DeporteNovedades, HeroNovedades, TarjetaNodos, TarjetaProyectoESI } from "../../Components"

//images
export const Novedades = () => {
    return <>
        <HeroNovedades />
        <CartelHero  titulo='Nuestras Novedades' parrafo='Mantente al día con las últimas novedades y acontecimientos del Colegio San Agustín. En esta sección, te invitamos a explorar una variedad de noticias, eventos y logros que reflejan la vitalidad y el dinamismo de nuestra comunidad educativa.' backColor='#494987'/>
        <div style={{width: '100%', padding:'40px 50px'}} >
            <TarjetaProyectoESI parrafo='Es un espacio de enseñanza, aprendizaje que posibilita y promueve saberes y habilidades para la toma de decisiones responsables y criticas, en relación al cuidado del propio cuerpo y de los demás, a las relaciones interpersonales, ect .
            La construcción de estas nociones colabora en la expresión de sentimientos, emociones y deseos que hacen a la vincularía. 
            Es por ello que este espacio es propicio para el  cuidado en la alimentación, higiene, intimidad y salud pensando de manera integral .' />
            <div style={{marginTop:'50px'}}>
            <TarjetaNodos />
            </div>
        </div>
        <DeporteNovedades />
    </>
}