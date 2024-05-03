import React, { useState } from 'react';
import { Link } from 'react-scroll';
import LogoSvg from '../images/logo.jpg';
import InstagramIcon from '../images/instagram.svg';
import FacebookIcon from '../images/facebook.svg';
import LinkedInIcon from '../images/linkedin.svg';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="flex flex-row justify-between items-center h-auto sm:h-auto  bg-[#2AA7FF] text-white px-8 sm:px-16 ">
            {/* Logo Section */}
            <div className="flex items-start w-full sm:w-auto mt-5">
                <img src={LogoSvg} alt="Logo" className="h-10 sm:h-16" />
            </div>

            {/* Toggle Button for Small Screens */}
            <div className="sm:hidden text-black">
                <button onClick={toggleMenu}>
                  {showMenu ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
            </div>

            {/* Full Screen Menu for Small Screens */}
            {showMenu && (
                <div className="sm:hidden absolute inset-0 bg-white flex flex-col justify-center items-center text-black ">
                    <button onClick={toggleMenu} className="absolute top-0 right-0 m-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" className=' text-black' />
                        </svg>
                    </button>
                    <div >
                    <ul className="flex flex-col gap-4 text-lg font-semibold pt-2  ">
                        <li>
                            <Link
                                to="Hero"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                activeClass="font-bold text-blue-900"
                                style={{ textDecoration: 'none' }}
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Products"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                activeClass="font-bold"
                                style={{ textDecoration: 'none' }}
                                onClick={toggleMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                activeClass="font-bold"
                                style={{ textDecoration: 'none' }}
                                onClick={toggleMenu}
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="aboutus"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                activeClass="font-bold"
                                style={{ textDecoration: 'none' }}
                                onClick={toggleMenu}
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            )}

            {/* Menu Items for Large Screens */}
            <ul className="hidden sm:flex flex-row gap-8 sm:gap-10 text-lg font-semibold pt-2 items-start w-full mt-5">
                <li>
                    <Link
                        to="Hero"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        activeClass="font-bold text-blue-900"
                        style={{ textDecoration: 'none' }}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="Products"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        activeClass="font-bold"
                        style={{ textDecoration: 'none' }}
                    >
                        Products
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        activeClass="font-bold"
                        style={{ textDecoration: 'none' }}
                    >
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link
                        to="aboutus"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        activeClass="font-bold"
                        style={{ textDecoration: 'none' }}
                    >
                        About Us
                    </Link>
                </li>
            </ul>

            {/* Social Media Icons */}
            <div className="hidden sm:flex items-center gap-4 mt-5">
                <a href="/">
                    <img src={InstagramIcon} alt="Instagram" className="h-10 w-10 text-white hover:text-green-500" />
                </a>
                <a href="/">
                    <img src={FacebookIcon} alt="Facebook" className="h-10 w-10 text-white hover:text-green-500" />
                </a>
                <a href="/">
                    <img src={LinkedInIcon} alt="LinkedIn" className="h-10 w-10 text-white hover:text-green-500" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
