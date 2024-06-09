import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import logo from './allphotos/logo.png'
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaArrowUp } from 'react-icons/fa'
import { RiShoppingCartLine } from "react-icons/ri"
import Search from './Search'
import Login from './Login';
import About from './About';
import Home from './Home';
import Customerservice from './Customerservice';
import Faq from './Faq';
import Shop from './Shop';
import Contact from './Contact';
import Profile from './Profile';
import Signup from './Signup';
import Cart from './Cart';

export default function Navbar() {

    const [showbtn, setShowbtn] = useState(false);
    const [cartnumber, setCartnumber] = useState(0)
    const navStyle = 'content-center hover:text-red-500'
    const btnStyle = 'bg-gray-900 px-4 py-2 rounded-md hover:bg-red-500'

    useEffect(() => {
        const showScrollTop = () => {
            window.pageYOffset > 300 ? setShowbtn(true) : setShowbtn(false)
        }
        window.addEventListener('scroll', showScrollTop)
        return () => {
            window.removeEventListener('scroll', showScrollTop)
        }
    }, [])

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const observe = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    });

    return (
        <div className="bg-black text-gray-900 mx-8">
            <header className="py-4 px-8 flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold mr-4">
                        ARR<span className="text-red-500">O</span>RRA
                    </h1>
                    <img src={logo} alt="Logo" className="w-8 h-8" />
                </div>
                <nav className="">
                    <div className='flex justify-around items-center gap-8 flex-wrap space-x-4'>
                        <a href="/" className={navStyle}>HOME</a>
                        <a href="shop" className={navStyle}>SHOP</a>
                        <a href="about" className={navStyle}>ABOUT US</a>
                        <a href="contact" className={navStyle}>CONTACT US</a>
                        <a href="profile" className={navStyle}>MY PROFILE</a>
                        <a href="cart" className={navStyle}>
                            {/* <div className='relative flexitems-center flex-col '>
                <span className='absolute ml-4 my-7 z-30 text-xs'>
                  <span className=''>
                    {cartnumber}
                  </span>
                </span>
                <RiShoppingCartLine className='mt-9' />
              </div> */}
                            CART
                        </a>
                        <a href="login">
                            <button className={btnStyle}>
                                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a2 2 0 11-4 0 2 2 0 014 0z"
                  clipRule="evenodd"
                />
              </svg> */}
                                LOGIN/SIGN UP
                            </button>
                        </a>
                    </div>
                </nav>
            </header>
            <div>
                {showbtn && (
                    <div className={`scrollToTop`}>
                        <button className='fixed bottom-5 right-7 z-50 p-4 cursor-pointer' onClick={handleScrollTop}>
                            <FaArrowUp className='absolute left-0 top-50 text-2xl text-gray-800 cursor-pointer' />
                        </button>
                    </div>
                )}
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/customerservice' element={<Customerservice />} />
                <Route path='/faq' element={<Faq />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <footer className="bg-[#171717ee]">
                <div className='flex flex-row justify-around gap-16 w-screen mt-10'>
                    <div className='flex flex-col'>
                        <label htmlFor="info-links" className=''>
                            <h2 className='font-bold'>INFORMATION</h2>
                            <div className='flex flex-col mt-2'>
                                <a href="customerservice" id='info-links mt-1.5'>Custom Service</a>
                                <a href="faq" id='info-links mt-1.5'>FAQ's</a>
                            </div>
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="info-links" className=''>
                            <h2 className='font-bold'>QUICK LINKS</h2>
                            <div className='flex flex-col mt-2'>
                                <a href="about" id='info-links mt-1.5'>About Us</a>
                                <a href="contact" id='info-links mt-1.5'>Contact Us</a>
                                <a href="#" id='info-links mt-1.5'>Order tracking</a>
                            </div>
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="info-links" className=''>
                            <h2 className='font-bold'>IMPORTANT LINKS</h2>
                            <div className='flex flex-col mt-2'>
                                <a href="#" id='info-links mt-1.5'>Refund Policy</a>
                                <a href="#" id='info-links mt-1.5'>Privacy Policy</a>
                                <a href="#" id='info-links mt-1.5'>Terms of Service</a>
                                <a href="#" id='info-links mt-1.5'>Shipping Policy</a>
                            </div>
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="info-links" className=''>
                            <h2 className='font-bold'>FOLLOW US ON</h2>
                            <div className='flex flex-row mt-2 gap-4'>
                                <a href="#" id='info-links'><FaFacebook /></a>
                                <a href="#" id='info-links'><FaInstagram /></a>
                                <a href="#" id='info-links'><FaTwitter /></a>
                                <a href="#" id='info-links'><FaYoutube /></a>
                            </div>
                        </label>
                    </div>
                </div>
                <p className="text-center text-sm">
                    &copy; 2024 ARRORRA. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};
