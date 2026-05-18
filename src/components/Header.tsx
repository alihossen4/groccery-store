import Image from 'next/image'
import React from 'react'
import logo from "../../public/logo.png"
import Link from 'next/link'
import Search from './Search'
import {FaRegHeart} from "react-icons/fa"
import {IoBagOutline} from "react-icons/io5"
import { IoCartOutline } from "react-icons/io5";
import Navbar from './Navbar'
const Header = () => {
  return (
    <>
    <div className="header">
        <header>
            <div className="container flex items-center justify-between py-0">
                <div className="logo">
                    <Link href={"/"}>
                        <Image src={logo} alt='logo' width={200} height={40}/>
                    </Link>
                </div>
                <Search />
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Link href={"/login"} className='text-white px-4 py-1.5 rounded-md bg-primary hover:bg-green-300 hover:text-black'>Login</Link>
                        <Link href={"/signup"} className='text-white ml-4 px-4 py-1.5 rounded-md bg-blue-500 hover:bg-blue-300 hover:text-black'>Sign Up</Link>
                        </div>
                    <div className="flex items-center ml-3">
                        <Link href={"/favorite"} className="relative mr-3 group cart-group">
                            <span className='bg-[#DC2626] flex absolute -top-2 -right-2 w-5 h-5 items-center justify-center text-white text-xs rounded-full text-md'>3</span>
                            <FaRegHeart size={35} className='cursor-pointer group-hover:text-primary'/>
                        </Link>
                        <Link href={"/cart-items"} className="relative group cart-group">
                            <span className='bg-[#DC2626] flex absolute -top-1.5 -right-2 w-5 h-5 items-center justify-center text-white text-xs rounded-full text-md'>5</span>
                            <IoCartOutline size={37} className='cursor-pointer group-hover:text-primary'/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        <hr className='text-gray-300'/>
        <Navbar/>
    </div>
    </>
  )
}

export default Header