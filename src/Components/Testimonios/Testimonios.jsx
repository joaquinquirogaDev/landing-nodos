//styles 
import { Button } from '../Button/Button'
import style from './Testimonios.module.css'
//images
import nodos from '../../assets/DigitaNodos.png'

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
        </section>
    )
}
