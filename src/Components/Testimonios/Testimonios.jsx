import React, {useEffect, useRef} from 'react'
//styles 
import { Button } from '../Button/Button'
import style from './Testimonios.module.css'
//images
import nodos from '../../assets/DigitaNodos.png'
import { testimonios } from '../../Data/data'
import { TestimoniosCard } from '../TestimoniosCard/TestimoniosCard'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation,EffectCoverflow,Scrollbar } from 'swiper/modules';
import { TarjetaNodos } from '../TarjetaNodos/TarjetaNodos'
export const Testimonios = () => {

  
    return (
        <section className={style.TestimoniosBox}>
            <TarjetaNodos />


            <div className={style.testimoniosDown}>
                <h1 className={style.testimoniosDownTitle}>Testimonios de Padres y Estudiantes</h1>
                <br />
                <p className={style.testimoniosDownParrafo}>Escucha de primera mano las experiencias y opiniones de nuestros padres y estudiantes sobre su trayectoria en el Colegio San Agustín. Sus palabras son un reflejo de la calidad educativa, el ambiente acogedor y el impacto positivo que nuestra comunidad ha tenido en sus vidas.</p>
                <div className={style.testimoniosDownCard}>

                    {/*  {
                        testimonios.map((item,index) => (
                            <TestimoniosCard key={index} {...item} />
                        ))
                    } */}
                    <Swiper
                        className={style.carrusel}
                        spaceBetween={40}
                        slidesPerView={4}
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
                            testimonios.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <TestimoniosCard  {...item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
