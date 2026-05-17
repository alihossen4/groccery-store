"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import slider1 from "../../public/slider1.jpg"
import slider2 from "../../public/slider2.jpg"
import slider3 from "../../public/slider3.jpg"
import 'swiper/css';
import { Navigation } from 'swiper/modules';


const HomeSlider = () => {
  return (
    <div className="home-slider"> 
      <div className="container">
        <Swiper
        navigation={true}
        modules={[Navigation]}
    >
      <SwiperSlide>
        <div className="slider-img">  
          <Image src={slider1} alt='slider' width={800} height={300} className=' object-cover rounded-lg'/> 
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-img">
          <Image src={slider2} alt='slider' width={800} height={300} className=' object-cover rounded-lg'/> 
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-img">
          <Image src={slider3} alt='slider' width={800} height={300} className=' object-cover rounded-lg'/>
        </div>
      </SwiperSlide>
    </Swiper>
      </div>
    </div>
  );
};
export default HomeSlider;