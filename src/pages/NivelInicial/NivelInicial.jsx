//componentes
import { CartelNiveles, Galeria, HeroContacto, NivelesInfo, NivelesInfoDown, TarjetaIngles, TarjetaProyectoESI } from '../../Components'
//images
import heroInicial from '../../assets/heroInicial.png'
import nivelInicial1 from '../../assets/nivelInfoInicial.png'
import nivelInicial2 from '../../assets/nivelInfoInicial2.png'
//galeria nivelInicial
import img1 from '../../assets/galeriaInicial/img1.png'
import img2 from '../../assets/galeriaInicial/img2.png'
import img3 from '../../assets/galeriaInicial/img3.png'
import img4 from '../../assets/galeriaInicial/img4.png'
import img5 from '../../assets/galeriaInicial/img5.png'
import img6 from '../../assets/galeriaInicial/img6.png'
//galeria nivelInicial sala de 4 y 5
import img1Inicial from '../../assets/galeriaSalade4Y5/img1.png'
import img2Inicial from '../../assets/galeriaSalade4Y5/img2.png'
import img3Inicial from '../../assets/galeriaSalade4Y5/img3.png'
import img4Inicial from '../../assets/galeriaSalade4Y5/img4.png'
import img5Inicial from '../../assets/galeriaSalade4Y5/img5.png'
import img6Inicial from '../../assets/galeriaSalade4Y5/img6.png'
import { CardNivelesInscripcion } from '../../Components/CardNivelesInscripcion/CardNivelesInscripcion'

export const NivelInicial = () => {
  return (
    <>
        <HeroContacto img={heroInicial}/>
        <CartelNiveles 
          bgColor='#212539' 
          subtitulo='Inicia el Aprendizaje' 
          titulo='Nivel Inicial' 
          subtitulo2='Sala de 3, 4 y 5 años - Turno mañana y tarde'
          parrafo='Te invitamos a adentrarte en el Nivel Inicial del Colegio San Agustín, un espacio educativo donde se fusionan el aprendizaje, el juego y la creatividad de manera armoniosa. Con un enfoque pedagógico sólido y orientado al desarrollo integral, brindamos a los niños un comienzo educativo excepcional.'
        />
        <NivelesInfo 
          photo={nivelInicial1}
          titulo='Aprendizaje'
          parrafo='En el Nivel Inicial, el aprendizaje cobra vida a través de experiencias enriquecedoras. Nuestros educadores expertos guían a los estudiantes en la exploración del mundo que los rodea, promoviendo la curiosidad y el descubrimiento como pilares fundamentales.'
          titulo2='Juego'
          parrafo2=' Reconocemos la importancia del juego en el desarrollo infantil. Fomentamos un ambiente donde el juego es más que entretenimiento; es una herramienta esencial para la adquisición de habilidades cognitivas, sociales y emocionales que sientan las bases de un aprendizaje sólido.'
        />
        <NivelesInfoDown 
          photo={nivelInicial2}
          titulo='Creatividad'
          parrafo='La creatividad es cultivada desde temprano en el Nivel Inicial. A través de expresión artística, música y teatro, los niños descubren su capacidad para comunicar ideas de formas únicas y expresivas.'
          titulo2='Propuesta pedagógica'
          parrafo2='Nuestra propuesta pedagógica abarca un amplio espectro de experiencias educativas. Materias especiales como Música, Educación Física, Inglés, Artes Visuales, Expresión Corporal, Computación, Yoga y el Proyecto E.S.I. (Educación Sexual Integral) enriquecen el proceso de aprendizaje.'
          titulo3='Crecimiento integral'
          parrafo3='En el Nivel Inicial, nos dedicamos a fomentar valores, habilidades y principios democráticos. Cada niño es alentado a desarrollarse de manera integral, apoyando su crecimiento académico, emocional y social en un entorno seguro y enriquecedor.'
        />
        <Galeria 
          bgColor='#212539'
          titulo='Sala de 3'
          parrafo='Turno mañana de 09:00hs. a 12:00hs.'
          parrafo1='Turno tarde de 14:30hs a 17:30hs.'
          subtitulo='Materias especiales'
          list={['Música','  Educación física' ,'Inglés','Artes visuales','Expresión corporal ']}
          imagenes={[img1,img2,img3,img4,img5,img6]}
        />
        <Galeria 
          bgColor='#212539'
          titulo='Sala de 4 y 5'
          parrafo='Turno mañana de 08:45hs. a 12:10hs.'
          parrafo1='Turno tarde de 14:15hs a 17:40hs.'
          subtitulo='Materias especiales'
          list={['Música','  Educación física' ,'Inglés','Artes visuales','Expresión corporal ']}
          imagenes={[img1Inicial,img2Inicial,img3Inicial,img4Inicial,img5Inicial,img6Inicial]}
        />
        <div style={{padding:'40px 50px'}}>

        <TarjetaProyectoESI  
          parrafo='Educación sexual integral, que se trabaja en nivel inicial abarcando en el conocimiento del cuerpo y sus cuidados. en la alimentación, higiene, intimidad y salud pensando de manera integral.'
        />
        <TarjetaIngles 
          titulo='Nivel Inicial - Inglés en un Mundo de Juegos'
          parrafo='En el Nivel Inicial del Colegio San Agustín, creemos que aprender inglés debe ser una experiencia lúdica y emocionante. Nuestro programa de inglés sumerge a los más pequeños en un mundo de juegos, canciones y actividades interactivas que fomentan el amor por el idioma desde una edad temprana. Nuestros estudiantes desarrollan habilidades lingüísticas mientras se divierten y construyen una base sólida para su futuro académico.'

        />

        </div>
        <CardNivelesInscripcion 
          nivel='Nivel Inicial'
          parrafo='Salas de 3,4,5 turnos mañana y tarde'
        />
    </>
  )
}
