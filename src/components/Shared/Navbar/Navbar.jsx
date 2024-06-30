import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menus = <>
        <li>
            <NavLink to={"/"} className="navLinkMenus mx-1">Home</NavLink>
        </li>

        <li>
            <NavLink to={"/about"} className="navLinkMenus mx-1">About</NavLink>
        </li>

        <li>
            <NavLink to={"/services"} className="navLinkMenus mx-1">Services</NavLink>
        </li>

        <li>
            <NavLink to={"/blog"} className="navLinkMenus mx-1">Blog</NavLink>
        </li>

        <li>
            <NavLink to={"/contact"} className="navLinkMenus mx-1">Contact</NavLink>
        </li>
    </>

    return (

        <div>

            <div className={`navbar w-full bg-base-100 md:px-14  
        ${isNavbarFixed ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {
                                menus
                            }

                        </ul>
                    </div>

                    <Link to={"/"}>
                        <img className="w-14 md:w-24" src={logo} alt="Logo" />
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menus
                        }
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end mr-6 md:mr-0">

                    <button className="btn-circle text-2xl">
                        <IoSearchSharp />
                    </button>

                    <button className="btn-circle text-2xl">
                        <HiOutlineShoppingBag />
                    </button>

                    <button className="text-[#FF3811] text-base md:text-lg font-medium border border-[#FF3811] rounded-lg px-2 py-1 md:px-4 md:py-2 ms-1">
                        Appointment
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;