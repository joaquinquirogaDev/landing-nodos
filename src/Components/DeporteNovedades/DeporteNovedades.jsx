import style from './DeporteNovedades.module.css'
//images
import fondoDeporte from '../../assets/fondo/fondoDeporte.jpg'
import { deporte } from '../../Data/data'
import useWindowSize from '../../hooks/useWindowSize';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export const DeporteNovedades = () => {
    const { width } = useWindowSize();

  return (
    <section className={style.boxDeportNovedades}>
        <div className={style.containerDeporteNovedades}>
            <div style={{backgroundImage:`url(${fondoDeporte})`}} className={style.img}></div>

            <div className={style.infoDeporte}>
                <div className={style.textDeporte}>
                    <h1>Deportes San Agustín </h1>
                        <p>Nuestra propuesta educativa va más allá de las aulas y se extiende al campo deportivo. A través de nuestro programa de formación deportiva integral, ofrecemos a los estudiantes la oportunidad de desarrollar habilidades deportivas, aprender valores esenciales y cultivar su pasión por el juego en instalaciones especializadas externas al colegio.</p>
                        <p>Contamos con entrenadores altamente calificados que no solo enseñan técnicas deportivas, sino que también inculcan valores fundamentales como el trabajo en equipo, la disciplina y el respeto.</p>
                </div>
                {
                    width > 1100 ?   <div className={style.DeporteNovedadesCard}>
                    {
                        deporte.map((item,index)=> (
                            <div key={index} className={style.cardItemNovedades}>
                                <img src={item.img} alt={item.titulo} />
                                <div className={style.cardItemInfo}>
                                    <h1>{item.titulo}</h1>
                                    <p>Categorias:</p>
                                    <span>{item.categorias}</span>
                                    <p>Dias:{item.dias}</p>
                                </div>
                                <button className={style.ButtonNovedades}>Inscribirte aquí</button>
                            </div>
                        ))

                        
                    }
                </div>
                    :  <Swiper
                    className={style.carrusel}
                    spaceBetween={40}
                    slidesPerView={2}
                    centeredSlides={false}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Navigation, Pagination]}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                         },
                        '@0.75': {
                             slidesPerView: 2,
                             spaceBetween: 20,
                        },
                         '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                         '@1.50': {
                             slidesPerView: 4,
                             spaceBetween: 50,
                        },
                    }}
                >
                    {
                        deporte.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div key={index} className={style.cardItemNovedades}>
                                <img src={item.img} alt={item.titulo} />
                                <div className={style.cardItemInfo}>
                                    <h1>{item.titulo}</h1>
                                    <p>Categorias:</p>
                                    <span>{item.categorias}</span>
                                    <p>Dias:{item.dias}</p>
                                </div>
                                <button className={style.ButtonNovedades}>Inscribirte aquí</button>
                            </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                }
               
                
                <button className={style.ButtonDiciplinas}>TODAS LAS DICIPLINAS de 18:15hs a 19:45hs</button>


            </div>
        </div>
    </section>
  )
}
