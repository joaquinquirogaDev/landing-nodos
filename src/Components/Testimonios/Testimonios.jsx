import React, {useEffect, useRef} from 'react'
//styles 
import style from './Testimonios.module.css'
//images
import nodos from '../../assets/DigitaNodos.png'
import { testimonios } from '../../Data/data'
import { TestimoniosCard } from '../TestimoniosCard/TestimoniosCard'

//hooks
import { useModal } from '../../hooks/useModal'
//componente
import { Modal } from '../Modal/Modal'
import { Button } from '../Button/Button'
import { TarjetaNodos } from '../TarjetaNodos/TarjetaNodos'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react'
export const Testimonios = () => {

    const [IsopenModal,HandleClose,HandleOpen] =useModal(false)
    const [showData,setShowData] =useState()

    const handleOpenModal = (nombre,descripcion,img,testimonio) => {
        HandleOpen()
        setShowData(nombre,descripcion,img,testimonio)
    }
    return (
        <section className={style.TestimoniosBox}>
            <TarjetaNodos />


            <div className={style.testimoniosDown}>
                <h1 className={style.testimoniosDownTitle}>Testimonios de Padres y Estudiantes</h1>
                <br />
                <p className={style.testimoniosDownParrafo}>Escucha de primera mano las experiencias y opiniones de nuestros padres y estudiantes sobre su trayectoria en el Colegio San Agustín. Sus palabras son un reflejo de la calidad educativa, el ambiente acogedor y el impacto positivo que nuestra comunidad ha tenido en sus vidas.</p>
                <div className={style.testimoniosDownCard}>

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
                                    <TestimoniosCard  
                                        {...item} 
                                        handleClick={handleOpenModal}                                  
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                        {IsopenModal && (
                            <Modal titulo='Testimonios' HandleClose={HandleClose} IsopenModal={IsopenModal}>
                                <div className={style.modalBox}>
                                    <h1>{showData?.nombre}</h1>
                                    <div className={style.containerBox}>
                                        <div className={style.info}>
                                        {showData?.testimonio.split('\n').map((parrafo, index) => (
                                            <p key={index}>{parrafo}</p>
                                        ))}
                                        </div>
                                        <div className={style.imgModal}>
                                            <img src={showData?.img} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        )}
                </div>
            </div>
        </section>
    )
}
