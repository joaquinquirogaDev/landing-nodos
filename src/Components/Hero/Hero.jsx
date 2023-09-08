import style from './Hero.module.css'
//images
import hero from '../../assets/hero.png'
import logo from '../../assets/logoSanAgustin.png'
import bienvenida from '../../assets/BIENVENIDA.png'
//componentes
import { NivelesLectivo } from '../NivelesLectivo/NivelesLectivo'
import { CardInscripciones } from '../CardInscripciones/CardInscripciones'
import { Testimonios } from '../Testimonios/Testimonios'
import { Deporte } from '../Deporte/Deporte'

export const Hero = () => {
    return (
        <>
            <div className={style.heroContainer}>
                <img className={style.imgHero} src={hero} alt="" />


                <div className={style.heroCard}>
                    {/* <div className={style.heroInfo}>
                        <img src={logo} alt="Colegio San Agustín" />

                        <div className={style.heroRight}>
                            <p className={style.textBue}>COLEGIO</p>

                            <h2 className={style.textBueTitulo}>San Agustín</h2>

                            <p className={style.textRed}>EDUCACIÓN INICIAL Y PRIMARIA</p>
                        </div>
                    </div> */}
                    <img className={style.heroCardImg} src={bienvenida} alt="Colegio San Agustin" />
                </div>
            </div>
            <div className={style.heroDown}>
                <div className={style.heroDownLeft}>
                    <img src={logo} alt="Colegio San Agustín" />
                    <div className={style.heroDownInfoRight}>
                        <h1>Nuestra Identidad</h1>
                        <p >Enraizados en los pilares de Saber, Verdad y Amor, nuestra identidad educativa abraza la misión de guiar y nutrir a cada estudiante. Con un enfoque en la educación integral, aspiramos a formar individuos que trasciendan las aulas, convirtiéndose en seres libres, solidarios y críticos. </p>
                        <br />
                        <p >Nuestro compromiso va más allá del aprendizaje académico; buscamos fomentar la coexistencia armoniosa y el respeto mutuo en una comunidad enriquecida por la diversidad. A través de esta visión, moldeamos mentes y corazones, cultivando ciudadanos que contribuyen al bienestar de todos y a la construcción de un mundo más inclusivo y compasivo.</p>
                    </div>
                </div>
                <h1 className={style.title}>Forjando Comunidad: Nuestra Misión de Integridad Educativa</h1>
                <p>Nuestra Institución de Educación Pública de Gestión Privada Laica, tiene como misión educar a los niños integralmente, siempre considerando
                    a la familia como la primera educadora. </p>
                <br />
                <p>Trabajamos incansablemente para desarrollar en nuestros estudiantes las dimensiones académica, ética, social, emocional, física, reflexiva y artística. A través de esta educación integral, promovemos en ellos valores y principios democráticos con un sentido altruista.
                    Fomentamos la responsabilidad, la solidaridad y el compromiso con su entorno.
                    Somos  personas que hacen posible esta misión y cómo se refleja en nuestra vibrante comunidad educativa. Juntos, avanzamos hacia un futuro de aprendizaje y crecimiento compartido.</p>

            </div>
            <NivelesLectivo />
            <CardInscripciones />
            <Testimonios />
            <Deporte />
        </>
    )
}