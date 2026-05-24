import { RiCaravanLine } from "react-icons/ri";
import { HiOutlineArrowTurnDownLeft } from "react-icons/hi2";
import { MdOutlinePayments } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiChat1 } from "react-icons/ci";
const Footer = () =>{
    return (
        <section className="bg-gray-100 my-4">
            <div className="container">
                    <div className="flex upper-footer my-5 w-[1200px] items-center justify-between mx-atuo">
                        <div className="one text-center">
                            <RiCaravanLine size={40} className="hover:text-primary footer-icons"/>
                            <h2 className="text-xl font-[600]">Free Shipping</h2>
                            <p>For all Orders Over $100</p>
                        </div>
                        <div className="one">
                            <HiOutlineArrowTurnDownLeft size={40} className="hover:text-primary  footer-icons"/>
                            <h2 className="text-xl font-[600]">30 Days Returns</h2>
                            <p>For an Exchange Product</p>
                        </div>
                        <div className="one">
                            <MdOutlinePayments size={40} className="hover:text-primary  footer-icons"/>
                            <h2 className="text-xl font-[600]">Secure Payment</h2>
                            <p>Payment Cards Accepted</p>

                        </div>
                        <div className="one">
                            <FaGift size={40} className="hover:text-primary  footer-icons"/>
                            <h2 className="text-xl font-[600]">Special Gifts</h2>
                            <p>Our First Product Order</p>

                        </div>
                        <div className="one">
                            <TfiHeadphoneAlt size={40} className="hover:text-primary  footer-icons"/>
                            <h2 className="text-xl font-[600]">Support 24/7</h2>
                            <p>Contact us Anytime</p>

                        </div>
                </div>
                <hr className="text-gray-300"/>
                <div className="lower-footer my-4">
                    <div className="flex justify-between">
                        <div className="contact flex flex-col gap-2 w-[25%]">
                            <h1 className="text-3xl font-[500]">Contact Us</h1>
                            <p>Digital Online Store - Mega Super Store </p>
                            <p>mdahossen.dev@example.com</p>
                            <p>+880 1234 567890</p>
                            <p ><span ><CiChat1 size={50} className="text-primary"/> Online Chat Get Expert Help</span></p>
                        </div>
                        <hr className=""/>
                        <div className="products w-[15%]">
                                <h1 className="text-2xl mb-3">Prodcuts</h1>
                            <ul className="text-[18px] flex flex-col gap-1">
                                <li>Price drop</li>
                                <li>New Products</li>
                                <li>Best sales</li>
                                <li>Contact us</li>
                                <li>Sitemap</li>
                                <li>Stores</li>
                            </ul>
                        </div>
                        <div className="company w-[15%]">
                            <h1 className="text-2xl mb-3">Our Company</h1>
                            <ul className="text-[18px] flex flex-col gap-1">
                                <li>Delivery</li>
                                <li>Legal notice</li>
                                <li>Terms and conditions of use</li>
                                <li>About us</li>
                                <li>Secure Payment</li>
                                <li>Login</li>
                            </ul>
                        </div>
                        <div className="email w-[40%]">
                            <h3 className="text-[20px]">Subcribe to newsletter</h3>
                            <form action="">

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;