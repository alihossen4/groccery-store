"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import slider1 from "../../public/slider1.jpg"
import slider2 from "../../public/slider2.jpg"
import slider3 from "../../public/slider3.jpg"
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import { Divider } from '@mui/material';


const HomeSlider = () => {
  return (
    <div className="home-slider py-5 my-5"> 
      <div className="container">
        <Swiper
        navigation={true}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        modules={[Navigation, Autoplay]}
        className='mySwiper'
    >
        
      <SwiperSlide>
          <div className="item">
            <Image src={slider1} alt='slider' width={1200} height={300} className=' w-full h-[650px] !important rounded-lg'/> 

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
              <Image src={slider2} alt='slider' width={1200} height={300} className='w-full h-[650px] !important rounded-lg'/> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
              <Image src={slider3} alt='slider' width={1200} height={300} className='w-full h-[650px] !important rounded-lg'/>
          </div>
      </SwiperSlide>
      
      </Swiper>
      </div>
    </div>
  );
};
export default HomeSlider;