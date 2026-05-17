"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import fruits from "../../public/slider-icon/fruits.jpeg"
import meat from "../../public/slider-icon/meat.jpeg"


import Image from 'next/image';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
const CategorySlider = () => {
  return (
    <div className='py-4'>
        <div className="container">
            <h2 className='text-[32px] font-[600] mb-6'>Shop by Category</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={10}
                breakpoints={{
                    640: {
                        slidesPerView: 3,   
                    },
                    768: {
                        slidesPerView: 5,
                    },
                    1024: { 
                        slidesPerView: 8,
                    },
                }}
                autoplay={{ delay: 2000, disableOnInteraction: true , reverseDirection: false, pauseOnMouseEnter: true}}
                modules={[Autoplay]}
                className='mySwiper cursor-pointer'
            >
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2 h-[100px] w-[100px] hover:scale-145 transition-transform duration-300'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={meat} alt='category' width={100} height={100} className='bg-[#fff] mx-auto mt-2 h-[100px] w-[100px] hover:scale-145 transition-transform duration-300'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2 h-[100px] w-[100px] hover:scale-145 transition-transform duration-300'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2 h-[100px] w-[100px] hover:scale-145 transition-transform duration-300   '/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2'/>
                    </div>
                </SwiperSlide>
            </Swiper>   
        </div>
    </div>
  )
}

export default CategorySlider