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
  NumerosTelefonos: [
    {
      Telefonos: 23213,
    },
    {
      TelefonoFijo: 2321312,
    },
    {
      Fax: 12312,
    },
  ],
  Mail: [
    {
      Contacto1: "ejemplo1",
    },
    {
      Contacto2: "ejemplo2",
    },
    {
      Contacto3: "ejemplo3",
    },
  ],
  Visitanos: [
    {
      lugar1: "Lugar1",
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
