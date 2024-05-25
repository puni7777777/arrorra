import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import logo from './allphotos/logo.png'
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { RiShoppingCartLine } from "react-icons/ri";
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
    const [cartnumber, setCartnumber] = useState(0);

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
        <>
            <div className='min-h-20 flex justify-between sticky top-0 dark:bg-black text-white z-20 flex-wrap'>
                <div className='ml-20 content-center'>
                    <a href="/" ><img src={logo} alt="nopic" className='min-w-14 max-w-16' /></a>
                </div>
                <div className='mr-20 flex justify-around items-center gap-8 flex-wrap'>
                    <a href="/" className='content-center hover:text-red-700'>Home</a>
                    <a href="shop" className='content-center hover:text-red-700'>Shop</a>
                    <a href="about" className='content-center hover:text-red-700'>About us</a>
                    <a href="contact" className='content-center hover:text-red-700'>Contact Us</a>
                    <a href="profile" className='content-center hover:text-red-700'>My profile</a>
                    <a href="login" className='content-center hover:text-red-700'>Login/Signup</a>
                    <a href="cart" className='relative flexitems-center flex-col h-full'>
                        <span className='absolute ml-4 my-7 z-30 text-xs'>
                            <span className=''>
                                {cartnumber}
                            </span>
                        </span>
                        <RiShoppingCartLine className='mt-9' />
                    </a>
                </div>
            </div>
            {/* scroll to top button */}
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
            <footer>
                <div className='flex flex-row justify-around gap-16 w-screen mt-32'>
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
            </footer>
        </>
    )
}
