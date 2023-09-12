// const number = 2
import nivelPrimario from '../assets/NivelPrimario.png'
import nivelIncial from '../assets/NivelInicial.png'
//images avatar
import avatar from '../assets/avatar.png'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
const seccionesFooter = 3
const nivel = [
    {
        titulo: 'Nivel Primario',
        img: nivelPrimario,
        subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo tempore labor. Sequi, praesentium eaque voluptatibus repudiandae officiis tempora unde dolorem atque, iure facilis,harum vero eius libero quis a'
    },
    {
        titulo: 'Nivel Inicial',
        img: nivelIncial,
        subtitulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo tempore labor. Sequi, praesentium eaque voluptatibus repudiandae officiis tempora unde dolorem atque, iure facilis,harum vero eius libero quis a'
    },

]
const testimonios = [
    {
        nombre: 'Alan',
        descripcion: 'Lorem ipsum dolor sit amet consectetur.Nuninquam tellus integer enim non at tellus sit fermentum.Nunc in quam tellus integer enim non at tellus sit fermentum.',
        img: avatar
    },
    {
        nombre: 'Sofia',
        descripcion: 'Lorem ipsum dolor sit amet consectetur.Nuninquam tellus integer enim non at tellus sit fermentum.Nunc in quam tellus integer enim non at tellus sit fermentum.',
        img: avatar1
    },
    {
        nombre: 'Federico',
        descripcion: 'Lorem ipsum dolor sit amet consectetur.Nuninquam tellus integer enim non at tellus sit fermentum.Nunc in quam tellus integer enim non at tellus sit fermentum.',
        img: avatar2
    },
    {
        nombre: 'Rodrigo',
        descripcion: 'Lorem ipsum dolor sit amet consectetur.Nuninquam tellus integer enim non at tellus sit fermentum.Nunc in quam tellus integer enim non at tellus sit fermentum.',
        img: avatar3
    },
  
]
const dropsRedes = [
    {
        nombre: 'Instagram'
    },
    {
        nombre: 'Facebook'
    }
]
const Secciones = {
    NumerosTelefonos: [
        {
            Telefonos: 23213
        },
        {
            TelefonoFijo: 2321312
        },
        {
            Fax: 12312
        }
    ],
    Mail: [
        {
            Contacto1: 'ejemplo1'
        },
        {
            Contacto2: 'ejemplo2'
        },
        {
            Contacto3: 'ejemplo3'
        }
    ],
    Visitanos: [
        {
            lugar1: 'Lugar1'
        },
        {
            Lugar2: 'Lugar2'
        },
        {
            Lugar3: 'Lugar3'
        }
    ]
}


export { nivel, dropsRedes, seccionesFooter, Secciones, testimonios }

