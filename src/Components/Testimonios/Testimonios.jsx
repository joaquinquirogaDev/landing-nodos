//styles 
import { Button } from '../Button/Button'
import style from './Testimonios.module.css'
//images
import nodos from '../../assets/DigitaNodos.png'
import { testimonios } from '../../Data/data'
import { TestimoniosCard } from '../TestimoniosCard/TestimoniosCard'

export const Testimonios = () => {
    return (
        <section className={style.TestimoniosBox}>
            <div className={style.TestimonioUp}>
                <div className={style.TestimoniosLeft}>
                    <h1 className={style.TestimoniosLeftTtile}>Digitalizando la Educación: Tu Conexión con el Futuro Escolar</h1>
                    <p className={style.parrafo}>En el Colegio San Agustín, estamos comprometidos en brindar una experiencia educativa completa y moderna.</p>
                    <p className={style.parrafo}>
                        Es por eso que hemos implementado la plataforma digital “NODOS”  diseñada para agilizar y mejorar nuestras comunicaciones con los padres, estudiantes y la comunidad educativa en general.</p>
                    <Button widthButton='100%' >CONOCE MÁS</Button>

                </div>
                <div className={style.imgNodos}>
                    <img src={nodos} alt="Nodos" />
                </div>
            </div>


            <div className={style.testimoniosDown}>
                <h1 className={style.testimoniosDownTitle}>Testimonios de Padres y Estudiantes</h1>
                <br />
                <p className={style.testimoniosDownParrafo}>Escucha de primera mano las experiencias y opiniones de nuestros padres y estudiantes sobre su trayectoria en el Colegio San Agustín. Sus palabras son un reflejo de la calidad educativa, el ambiente acogedor y el impacto positivo que nuestra comunidad ha tenido en sus vidas.</p>
                <div className={style.testimoniosDownCard}>
                    {
                        testimonios.map((item,index) => (
                            <TestimoniosCard key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
