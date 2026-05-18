import React from 'react'
import HomeSlider from './HomeSlider'
import CategorySlider from './CategorySlider'
import PopularProducts from './PopularProducts'
const Home = () => {
  return (
    <>
      <div className="slider-wrapper bg-[#f1f1f1]">
        <HomeSlider />
        <CategorySlider />
        <PopularProducts />
      </div>
    </>
  )
}

export default Home