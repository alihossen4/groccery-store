"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import fruits from "../../public/slider-icon/fruits.jpeg"
import meat from "../../public/slider-icon/meat.jpeg"
import pepsi from "../../public/slider-icon/pepsi.png"
import breads from "../../public/slider-icon/breads.jpg"
import biscuits from "../../public/slider-icon/biscuits.jpeg"
import dairy from "../../public/slider-icon/dairy.jpeg"
import healthbeauty from "../../public/slider-icon/health-beauty.jpg"
import babycare from "../../public/slider-icon/baby-care.jpeg"
import houseitems from "../../public/slider-icon/householdi-items.jpeg"
import petcare from "../../public/slider-icon/pet-care.png"
import groccerystaples from "../../public/slider-icon/groccery-staples.jpeg"

import Image from 'next/image';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
const CategorySlider = () => {
  return (
    <div className='py-4'>
        <div className="container">
            <h2 className='text-[32px] font-[600] mb-3'>Shop by Category</h2>
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
                loop={true}
                speed={3000}
                autoplay={{ delay: 0, pauseOnMouseEnter: true}}
                modules={[Autoplay]}
                className='mySwiper cursor-pointer'
            >
                {/* <div className='text-[18px] font-[500] text-primary mb-4 marquee marquee-content' >
        Welcome to our store! Fresh products every day!
        </div> */}
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2 h-[100px] w-[100px] hover:scale-145 transition-transform duration-300'/>
                    </div>
                    <h1 className="my-3  rounded text-primary font-[600]">Fruits & Vegetables</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={meat} alt='category' width={100} height={100} className='bg-[#fff] mx-auto mt-2 h-[100px] w-[100px] hover:scale-145 transition-transform duration-300'/>
                    </div>
                    <h1 className="my-3 rounded text-primary font-[600]">Meat & Seafood</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={dairy} alt='category' width={100} height={100} className='mx-auto mt-2 h-[100px] w-[100px] hover:scale-145 transition-transform duration-300'/>
                    </div>
                    <h1 className="my-3 rounded text-primary font-[600]">Dairy Products</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={breads} alt='category' width={100} height={100} className='mx-auto mt-2 h-[100px] w-[100px] hover:scale-145 transition-transform duration-300 '/>
                    </div>
                    <h1 className="my-3  rounded text-primary font-[600]">Breads & Bakery</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={pepsi} alt='category' width={100} height={100} className='mx-auto mt-2 hover:scale-145 transition-transform duration-300'/>
                    </div>
                    <h1 className="my-3  rounded text-primary font-[600]">Beverages</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={fruits} alt='category' width={100} height={100} className='mx-auto mt-2 hover:scale-145 transition-transform duration-300'/>
                    </div>
                    <h1 className="my-3  rounded text-primary font-[600]">Fruits & Vegetables</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={biscuits} alt='category' width={100} height={100} className='mx-auto mt-2 hover:scale-145 transition-transform duration-300'/>
                    </div>
                    <h1 className="my-3  rounded text-primary font-[600]">Biscuits & Snacks</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={groccerystaples} alt='category' width={100} height={100} className='mx-auto mt-2 hover:scale-145 transition-transform duration-300'/>
                    </div>
                    <h1 className="my-3  rounded text-primary font-[600]">Grocery & Staples</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={healthbeauty} alt='category' width={100} height={100} className='mx-auto mt-2 hover:scale-145 transition-transform duration-300 h-[100px] w-[100px]'/>
                    </div>
                    <h1 className="my-3  rounded text-primary font-[600]">Health & Beauty</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={houseitems} alt='category' width={100} height={100} className='mx-auto mt-2 hover:scale-145 transition-transform duration-300 h-[100px] w-[100px]'/>
                    </div>
                    <h1 className="my-3  rounded text-primary font-[600]">Household Items</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={babycare} alt='category' width={100} height={100} className='mx-auto mt-2 hover:scale-145 transition-transform duration-300'/>
                    </div>
                    <h1 className="my-3  rounded text-primary font-[600]">Baby Care</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="category-item bg-gray-100 p-4 rounded-lg text-center">
                        <Image src={petcare} alt='category' width={100} height={100} className='mx-auto mt-2 hover:scale-145 transition-transform duration-300'/>
                    </div>
                    <h1 className="my-3  rounded text-primary font-[600]">Pet Care</h1>
                </SwiperSlide>
            </Swiper>   
        </div>
    </div>
  )
}

export default CategorySlider