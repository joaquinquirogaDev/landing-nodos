//images y styles
import style from './HeroNovedades.module.css'
import img1 from '../../assets/carruselNovedades/1.png'
import img2 from '../../assets/carruselNovedades/2.png'
import img3 from '../../assets/carruselNovedades/3.png'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const HeroNovedades = () => {
  return (
     <div className={style.heroContainerNovedades}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                loop={true}
                
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                  <div style={{backgroundImage:`url(${img1})`}} className={style.img}></div>
                  </SwiperSlide>
                <SwiperSlide>
                  <div style={{backgroundImage:`url(${img2})`}} className={style.img}></div>
                  </SwiperSlide>
                <SwiperSlide>
                  <div style={{backgroundImage:`url(${img3})`}} className={style.img}></div>
                  </SwiperSlide>
                
            </Swiper>
    </div>
  )
}
