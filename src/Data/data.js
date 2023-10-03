// const number = 2
import nivelPrimario from "../assets/NivelPrimario.png";
import nivelIncial from "../assets/NivelInicial.png";
import imgModalnivelIncial from "../assets/imgModalInicial.png";
import imgModalnivelPrimario from "../assets/imgModalPrimario.png";
//images avatar
import avatar from "../assets/avatar.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
//imagenes deporte
import pelota from "../assets/deporte/pelota.png";
import basquet from "../assets/deporte/basquet.png";
import voley from "../assets/deporte/voley.png";
const seccionesFooter = 3;
const nivel = [
  {
    id: 1,
    titulo: "Nivel Primario - Ciclo Lectivo",
    img: nivelPrimario,
    imgModal: imgModalnivelPrimario,
    subtituloModal: "Nivel Primario: Forjando las Mentes del Futuro",
    descripcionModal:
      "En el Colegio San Agustín, el Nivel Primario es una etapa fundamental en el viaje educativo de nuestros estudiantes. Nuestro compromiso es brindar una educación integral que prepare a los niños para un mundo en constante cambio. Nos basamos en los valores de verdad, saber y amor, inspirados en la filosofía de San Agustín, para guiar a nuestros alumnos en su camino hacia el crecimiento académico y personal.",
    salas: [
      {
        tituloSala: "Educación Física",
        descripcionSala:
          "Enseñamos a nuestros estudiantes a apreciar y cuidar su cuerpo, promoviendo la autonomía, la autoestima y habilidades motoras que fomentan una vida saludable y la confianza en sí mismos y en los demás.",
      },

      {
        tituloSala: "Ingles",
        descripcionSala:
        'Nuestra enseñanza del inglés se centra en brindar a los estudiantes las habilidades necesarias para participar en prácticas sociales de lenguaje orales y escritas con hablantes nativos y no nativos del inglés, preparándolos para un mundo globalizado.'
      },
      {
        tituloSala: "Música",
        descripcionSala:
        'A través de la música, nuestros alumnos conectan con su patrimonio cultural y desarrollan habilidades artísticas y creatividad. La música también enriquece su comprensión de otras áreas del conocimiento.'
      },
      {
        tituloSala:'Tecnología',
        descripcionSala:
        "Fomentamos la exploración y la resolución creativa de problemas a través del diseño y la construcción de elementos. Nuestra educación tecnológica promueve la colaboración y el entendimiento de procesos tecnológicos."
      },
      {
        tituloSala:'Artes Visuales',
        descripcionSala:
        "Esta materia les permite explorar aspectos formales y conceptuales de la historia del arte, desarrollar capacidades perceptivas y expresivas, y fomentar una conciencia social crítica a través de la expresión artística."
      },
      {
        tituloSala:'Filosofía',
        descripcionSala:
        "Nuestra enseñanza de la filosofía busca estimular el pensamiento crítico, el debate y la reflexión. Creemos en aceptar diversas opiniones y vincular conocimientos para abordar los problemas de la actualidad."
      },
      {
        tituloSala:'Computación',
        descripcionSala:
        "Aquí, los alumnos desarrollan habilidades intelectuales para trabajar con símbolos, ideas, imágenes, conceptos y abstracciones. Promovemos la producción y circulación de información en el contexto de las TIC."
      },
      {
        tituloSala:'Teatro',
        descripcionSala:
        "La práctica teatral promueve la convivencia y el trabajo en equipo, impulsando la comunicación y la expresión. Es una disciplina interdisciplinaria que permite trabajar en diversas áreas del conocimiento."
      },
    ],
  },
  {
    id: 2,
    titulo: "Nivel Inicial - Ciclo Lectivo",
    img: nivelIncial,
    imgModal: imgModalnivelIncial,
    subtituloModal: "Nivel Inicial: Formando los Cimientos del Futuro",
    descripcionModal:
      "En el Nivel Inicial del Colegio San Agustín, nuestra misión es impulsar una formación integral en niños de 3 a 5 años. A través de experiencias sistemáticas y significativas, fomentamos la adquisición de conocimientos, habilidades, actitudes y valores, inspirados en los principios de verdad, saber y amor de San Agustín.",
    salas: [
      {
        tituloSala: "Sala de 3 (tres)",
        descripcionSala:
          "En esta etapa, fomentamos la exploración y el aprendizaje a través de actividades lúdico-pedagógicas.\n\n Los niños se sumergen en diferentes lenguajes, interactuando y compartiendo experiencias en artes visuales, música, educación física, inglés y expresión corporal.",
      },

      {
        tituloSala: "Sala de 4 (cuatro)",
        descripcionSala:
        'Aquí, nos enfocamos en fomentar la independencia y la alfabetización inicial.\n\n Los estudiantes participan en proyectos enriquecedores y experiencias educativas que incluyen arte, música, educación física, inglés, expresión corporal e informática.\n\n La carga horaria se extiende para brindarles más tiempo de aprendizaje.'
      },
      {
        tituloSala: "Sala de 5 (cinco)",
        descripcionSala:
        'Nuestra meta en esta etapa es preparar a los alumnos para el próximo paso: la transición a 1° grado. Fomentamos la adquisición de habilidades esenciales y valores necesarios para el desarrollo integral de cada niño. Esto incluye el conocimiento y control de sus cuerpos, la comunicación efectiva y la exploración del entorno natural, familiar y social. La alfabetización inicial se aborda de manera lúdica y progresiva, valorando el esfuerzo y la disposición por encima de los resultados finales.'
      },
    ],
  },
];
const testimonios = [
  {
    nombre: "Alan",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur.Nuninquam tellus integer enim non at tellus sit fermentum.Nunc in quam tellus integer enim non at tellus sit fermentum.",
    img: avatar,
    testimonio:
      "Como padre, me siento gratamente sorprendido por la dedicación del Colegio San Agustín hacia la modernización educativa.\n\n La introducción de la plataforma digital ha transformado por completo nuestra experiencia. Ahora puedo estar al tanto del progreso académico de mi hijo, acceder a anuncios importantes y estar informado sobre los próximos eventos escolares, todo desde la comodidad de mi dispositivo móvil.\n\n Esta innovación ha fortalecido la comunicación entre la escuela y los padres, creando un ambiente de colaboración y compromiso que realmente marca la diferencia. Estoy agradecido por esta transición hacia una educación más conectada y eficiente, que demuestra el compromiso del colegio con la excelencia y la adaptación a las necesidades actuales de las familias.",
  },
  {
    nombre: "Sofia",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur.Nuninquam tellus integer enim non at tellus sit fermentum.Nunc in quam tellus integer enim non at tellus sit fermentum.",
    img: avatar1,
    testimonio:
      "Como padre, me siento gratamente sorprendido por la dedicación del Colegio San Agustín hacia la modernización educativa.\n\n La introducción de la plataforma digital ha transformado por completo nuestra experiencia. Ahora puedo estar al tanto del progreso académico de mi hijo, acceder a anuncios importantes y estar informado sobre los próximos eventos escolares, todo desde la comodidad de mi dispositivo móvil.\n\n Esta innovación ha fortalecido la comunicación entre la escuela y los padres, creando un ambiente de colaboración y compromiso que realmente marca la diferencia. Estoy agradecido por esta transición hacia una educación más conectada y eficiente, que demuestra el compromiso del colegio con la excelencia y la adaptación a las necesidades actuales de las familias.",
  },
  {
    nombre: "Federico",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur.Nuninquam tellus integer enim non at tellus sit fermentum.Nunc in quam tellus integer enim non at tellus sit fermentum.",
    img: avatar2,
    testimonio:
      "Como padre, me siento gratamente sorprendido por la dedicación del Colegio San Agustín hacia la modernización educativa.\n\n La introducción de la plataforma digital ha transformado por completo nuestra experiencia. Ahora puedo estar al tanto del progreso académico de mi hijo, acceder a anuncios importantes y estar informado sobre los próximos eventos escolares, todo desde la comodidad de mi dispositivo móvil.\n\n Esta innovación ha fortalecido la comunicación entre la escuela y los padres, creando un ambiente de colaboración y compromiso que realmente marca la diferencia. Estoy agradecido por esta transición hacia una educación más conectada y eficiente, que demuestra el compromiso del colegio con la excelencia y la adaptación a las necesidades actuales de las familias.",
  },
  {
    nombre: "Rodrigo",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur.Nuninquam tellus integer enim non at tellus sit fermentum.Nunc in quam tellus integer enim non at tellus sit fermentum.",
    img: avatar3,
    testimonio:
      "Como padre, me siento gratamente sorprendido por la dedicación del Colegio San Agustín hacia la modernización educativa.\n\n La introducción de la plataforma digital ha transformado por completo nuestra experiencia. Ahora puedo estar al tanto del progreso académico de mi hijo, acceder a anuncios importantes y estar informado sobre los próximos eventos escolares, todo desde la comodidad de mi dispositivo móvil.\n\n Esta innovación ha fortalecido la comunicación entre la escuela y los padres, creando un ambiente de colaboración y compromiso que realmente marca la diferencia. Estoy agradecido por esta transición hacia una educación más conectada y eficiente, que demuestra el compromiso del colegio con la excelencia y la adaptación a las necesidades actuales de las familias.",
  },
  {
    nombre: "Rodrigo",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur.Nuninquam tellus integer enim non at tellus sit fermentum.Nunc in quam tellus integer enim non at tellus sit fermentum.",
    img: avatar3,
    testimonio:
      "Como padre, me siento gratamente sorprendido por la dedicación del Colegio San Agustín hacia la modernización educativa.\n\n La introducción de la plataforma digital ha transformado por completo nuestra experiencia. Ahora puedo estar al tanto del progreso académico de mi hijo, acceder a anuncios importantes y estar informado sobre los próximos eventos escolares, todo desde la comodidad de mi dispositivo móvil.\n\n Esta innovación ha fortalecido la comunicación entre la escuela y los padres, creando un ambiente de colaboración y compromiso que realmente marca la diferencia. Estoy agradecido por esta transición hacia una educación más conectada y eficiente, que demuestra el compromiso del colegio con la excelencia y la adaptación a las necesidades actuales de las familias.",
  },
  {
    nombre: "Rodrigo",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur.Nuninquam tellus integer enim non at tellus sit fermentum.Nunc in quam tellus integer enim non at tellus sit fermentum.",
    img: avatar3,
    testimonio:
      "Como padre, me siento gratamente sorprendido por la dedicación del Colegio San Agustín hacia la modernización educativa.\n\n La introducción de la plataforma digital ha transformado por completo nuestra experiencia. Ahora puedo estar al tanto del progreso académico de mi hijo, acceder a anuncios importantes y estar informado sobre los próximos eventos escolares, todo desde la comodidad de mi dispositivo móvil.\n\n Esta innovación ha fortalecido la comunicación entre la escuela y los padres, creando un ambiente de colaboración y compromiso que realmente marca la diferencia. Estoy agradecido por esta transición hacia una educación más conectada y eficiente, que demuestra el compromiso del colegio con la excelencia y la adaptación a las necesidades actuales de las familias.",
  },
  {
    nombre: "Rodrigo",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur.Nuninquam tellus integer enim non at tellus sit fermentum.Nunc in quam tellus integer enim non at tellus sit fermentum.",
    img: avatar3,
    testimonio:
      "Como padre, me siento gratamente sorprendido por la dedicación del Colegio San Agustín hacia la modernización educativa.\n\n La introducción de la plataforma digital ha transformado por completo nuestra experiencia. Ahora puedo estar al tanto del progreso académico de mi hijo, acceder a anuncios importantes y estar informado sobre los próximos eventos escolares, todo desde la comodidad de mi dispositivo móvil.\n\n Esta innovación ha fortalecido la comunicación entre la escuela y los padres, creando un ambiente de colaboración y compromiso que realmente marca la diferencia. Estoy agradecido por esta transición hacia una educación más conectada y eficiente, que demuestra el compromiso del colegio con la excelencia y la adaptación a las necesidades actuales de las familias.",
  },
];
const deporte = [
  {
    titulo: "Futbol mixto",
    img: pelota,
    categorias: "2014 / 2015 / 2016 2012 /2013",
    dias: "Lunes y Viernes",
  },
  {
    titulo: "Futbol mixto",
    img: pelota,
    categorias: "2014 / 2015 / 2016",
    dias: "Lunes y Viernes",
  },
  {
    titulo: "Básquet mixto",
    img: basquet,
    categorias: "2009 a 2016",
    dias: "Martes y Jueves",
  },
  {
    titulo: "Vóley mixto",
    img: voley,
    categorias: "2009 a 2016",
    dias: "Lunes y Miércoles",
  },
];
const dropsRedes = [
  {
    nombre: "Instagram",
  },
  {
    nombre: "Facebook",
  },
];
const Secciones = {
  Telefonos: [
    {
      Telefonos: 2645713956,
    },
    {
      TelefonoFijo: 4235013,
    },
    {
      Fax: 2644235013,
    },
  ],
  Mail: [
    {
      email: "Secretaria@colegiosanagustinsj.com.ar",
    },
    /* {
      Contacto2: "ejemplo2",
    },
    {
      Contacto3: "ejemplo3",
    }, */
  ],
  Visitanos: [
    {
      lugar: "Av libertador 3880 oeste",
    },
    {
      Lugar2: "Lugar2",
    },
    {
      Lugar3: "Lugar3",
    },
  ],
};

export { nivel, dropsRedes, seccionesFooter, Secciones, testimonios, deporte };
