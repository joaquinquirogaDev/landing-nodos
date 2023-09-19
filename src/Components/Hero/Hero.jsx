import style from './Hero.module.css'
//images
import hero from '../../assets/carrusel/hero.png'
import img2 from '../../assets/carrusel/2.png'
import img3 from '../../assets/carrusel/3.png'
import img4 from '../../assets/carrusel/4.png'
import logo from '../../assets/logoSanAgustin.png'
import bienvenida from '../../assets/BIENVENIDA.png'
//componentes
import { NivelesLectivo } from '../NivelesLectivo/NivelesLectivo'
import { CardInscripciones } from '../CardInscripciones/CardInscripciones'
import { Testimonios } from '../Testimonios/Testimonios'
import { Deporte } from '../Deporte/Deporte'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Hero = () => {
    return (
        <>
            <div className={style.heroContainer}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={1}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        loop={true}
                        
                        
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div style={{backgroundImage:`url(${hero})`}} className={style.img}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{backgroundImage:`url(${img2})`}} className={style.img}></div>
                           </SwiperSlide>
                        <SwiperSlide>
                            <div style={{backgroundImage:`url(${img3})`}} className={style.img}></div>
                            </SwiperSlide>
                        <SwiperSlide>
                        <div style={{backgroundImage:`url(${img4})`}} className={style.img}></div>
                           </SwiperSlide>
                        
                    </Swiper>

                <div className={style.heroCard}>
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
