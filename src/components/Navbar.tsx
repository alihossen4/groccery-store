import Link from 'next/link'
import React from 'react'
import { FaAngleDown } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='py-3'>
        <div className="container flex items-center justify-between gap-5">
            <Link href={"/"} className='text-[17px] text-gray-600 font-[600] hover:text-primary'>Home</Link>
            <Link href={"/fruits-vegetables"} className='text-[17px] text-gray-600 font-[600] hover:text-primary'>Fruits & Vegetables</Link>
            <Link href={"/meats-seafood"} className='text-[17px] text-gray-600 font-[600] hover:text-primary'>Meats & Seafood</Link>
            <Link href={"/breakfast-dairy"} className='text-[17px] text-gray-600 font-[600] hover:text-primary'>Breakfast & Dairy</Link>
            <Link href={"/breads-bakery"} className='text-[17px] text-gray-600 font-[600] hover:text-primary'>Breads & Bakery</Link>
            <Link href={"/beverages"} className='text-[17px] text-gray-600 font-[600] hover:text-primary'>Beverages  </Link>
            <Link href={"/frozen-foods"} className='text-[17px] text-gray-600 font-[600] hover:text-primary'>Frozen Foods</Link>
            <Link href={"/biscuits-snacks"} className='text-[17px] text-gray-600 font-[600] hover:text-primary'>Biscuits & Snacks</Link>
            <Link href={"/groccery-staples"} className='text-[17px] text-gray-600 font-[600] hover:text-primary'>Groccery & Staples</Link>
            <div className="relative group">
              <span className='relative text-[17px] flex text-gray-600 gap-1 font-[600] hover:text-primary'>More <FaAngleDown size={20}/>

              </span>
              <div className="absolute z-50 top-full left-0 w-[200px] bg-white shadow-md rounded-md py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                <Link href={"/health-beauty"} className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>Health & Beauty</Link>
                <Link href={"/household-items"} className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>Household Items</Link>
                <Link href={"/baby-care"} className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>Baby Care</Link>
                <Link href={"/pet-care"} className='block px-4 py-2 text-gray-600 hover:bg-gray-100'>Pet Care</Link>
              </div>
              
            </div>

        </div>
    </nav>
  )
}

export default Navbar