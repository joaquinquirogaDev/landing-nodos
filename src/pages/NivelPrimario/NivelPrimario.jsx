//componentes
import { CartelNiveles, Galeria, HeroContacto, NivelesInfo, NivelesInfoDown, TarjetaIngles, TarjetaProyectoESI } from '../../Components'

//images
import heroPrimario from '../../assets/heroPrimario.png'
import nivelInfoPrimario from '../../assets/nivelInfoPrimario.png'
import nivelInfoPrimario2 from '../../assets/nivelInfoPrimario2.png'
//galeria nivel primario
import img1 from '../../assets/galeriaPrimario/img1.png'
import img2 from '../../assets/galeriaPrimario/img2.png'
import img3 from '../../assets/galeriaPrimario/img3.png'
import img4 from '../../assets/galeriaPrimario/img4.png'
import img5 from '../../assets/galeriaPrimario/img5.png'
import img6 from '../../assets/galeriaPrimario/img6.png'
import { CardNivelesInscripcion } from '../../Components/CardNivelesInscripcion/CardNivelesInscripcion'


export const NivelPrimario = () => {
  return (
    <>
        <HeroContacto img={heroPrimario}/>
        <CartelNiveles 
              bgColor='#A90504' 
              subtitulo='Nueva Etapa' 
              titulo='Nivel Primario' 
              subtitulo2='De 1º a 6º - Turno mañana y tarde'
              parrafo='Descubre el emocionante viaje educativo en el Nivel Primario del Colegio San Agustín, donde el aprendizaje se combina con la formación integral y la construcción de valores sólidos. Nuestro compromiso es brindar a los estudiantes las herramientas y el apoyo necesarios para enfrentar los desafíos del futuro con confianza y responsabilidad.'
         />
          <NivelesInfo 
            photo={nivelInfoPrimario}
            titulo='Grados de Primero a Sexto'
            parrafo='Explora los distintos grados que conforman nuestro Nivel Primario, cada uno diseñado para nutrir el desarrollo académico y personal de los estudiantes en diferentes etapas.'
            titulo2='Enfoque en Valores'
            parrafo2='Fomentamos la formación de valores sólidos en nuestros estudiantes. La ética, la solidaridad y la responsabilidad son enseñanzas fundamentales que guían su crecimiento integral.'
            titulo3='Materias Especiales'
            parrafo3='Conoce las materias que enriquecen el currículo del Nivel Primario, incluyendo Inglés, Educación Física, Música, Tecnología, Artes Visuales, Teatro, Computación, Filosofía y el Proyecto E.S.I.'
        />
        <NivelesInfoDown
          photo={nivelInfoPrimario2}
          titulo='Desarrollo Integral'
          parrafo='A través de actividades educativas y experiencias enriquecedoras, fomentamos un crecimiento integral que abarca lo académico, lo emocional y lo social en el Nivel Primario.'
          titulo2='Enfoque en Habilidades'
          parrafo2='Nuestra metodología educativa promueve el desarrollo de habilidades críticas como el pensamiento lógico, la comunicación efectiva y la resolución de problemas, preparando a los estudiantes para un futuro exitoso.'
          titulo3='Vínculo con las Familias'
          parrafo3='Creemos en la colaboración con las familias para garantizar un aprendizaje significativo. Mantenemos una comunicación abierta para asegurar que los estudiantes reciban el apoyo necesario tanto en la escuela como en casa.'
          titulo4='Construyendo Cimientos para el Futuro'
          parrafo4='En el Nivel Primario, sentamos las bases para el éxito futuro de nuestros estudiantes. Únete a nosotros mientras trabajamos juntos para nutrir su crecimiento académico y personal, y prepararlos para afrontar con confianza el camino que tienen por delante.'
        />
         <Galeria
          bgColor='#A90504'
          titulo='Nivel Primario'
          parrafo='Turno mañana de 09:00hs. a 12:00hs.'
          parrafo1='Turno tarde de 14:300hs a 17:00hs.'
          subtitulo='Propuesta pedagógica'
          list={['Ingles - 3hs semanales','Educación física - 2hs semanales' ,'Música','Tecnologia','Artes Visuales','Teatro','Filosofía','Computación']}
          imagenes={[img1,img2,img3,img4,img5,img6]}
        />
        <div style={{padding:'40px 50px'}}>
          <TarjetaProyectoESI
            parrafo='Es un espacio de enseñanza, aprendizaje que posibilita y promueve saberes y habilidades para la toma de decisiones responsables y criticas, en relación al cuidado del propio cuerpo y de los demás, a las relaciones interpersonales, ect .
            La construcción de estas nociones colabora en la expresión de sentimientos, emociones y deseos que hacen a la vincularía. 
            Es por ello que este espacio es propicio para el  cuidado en la alimentación, higiene, intimidad y salud pensando de manera integral .'
          />
          <TarjetaIngles
          titulo='Nivel Primario - Preparándote para el Mundo Global'
          parrafo='En el Nivel Primario del Colegio San Agustín, entendemos la importancia de preparar a nuestros estudiantes para un mundo cada vez más globalizado. Nuestro programa de inglés no solo se centra en el dominio del idioma, sino también en la comprensión cultural y la comunicación efectiva. Los estudiantes adquieren habilidades en lectura, escritura, expresión oral y comprensión auditiva, mientras exploran la diversidad del mundo de habla inglesa. Estamos comprometidos a brindarles las herramientas necesarias para destacar en un mundo conectado globalmente.'
          
        />
        </div>
        <CardNivelesInscripcion
          nivel='Nivel Primario'
          parrafo='De primero a sexto grado en los turnos mañana y tarde'
        />
    </>
  )
}
