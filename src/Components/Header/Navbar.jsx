import React from 'react';
import { Link, Links, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-300 lg:pl-40 lg:pr-40">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink 
                                to='/' className={({isActive})=>
                                isActive ? 'underline font-semibold' 
                                        : 'text-gray-700'
                                }
                                ><li><a>Home</a></li></NavLink>
                        <NavLink 
                                to='/myBooking' className={({isActive})=>
                                isActive ? 'underline font-semibold' 
                                        : 'text-gray-700'
                                }
                                ><li><a>My-Bookings</a></li></NavLink>
                        <NavLink 
                                to='/blogs' className={({isActive})=>
                                isActive ? 'underline font-semibold' 
                                        : 'text-gray-700'
                                }
                                ><li><a>Blogs</a></li></NavLink>
                        <NavLink 
                                to='/contact' className={({isActive})=>
                                isActive ? 'underline font-semibold' 
                                        : 'text-gray-700'
                                }
                                ><li><a>Contact Us</a></li></NavLink>
                </ul>
                </div>
                <img className='w-8' src="/logo.png" alt="" />
                <a className="text-2xl font-bold ml-2">Phudu</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                        <NavLink 
                                to='/' className={({isActive})=>
                                isActive ? 'underline font-semibold' 
                                        : 'text-gray-700'
                                }
                                ><li><a>Home</a></li></NavLink>
                        <NavLink 
                                to='/myBooking' className={({isActive})=>
                                isActive ? 'underline font-semibold' 
                                        : 'text-gray-700'
                                }
                                ><li><a>My-Bookings</a></li></NavLink>
                        <NavLink 
                                to='/blogs' className={({isActive})=>
                                isActive ? 'underline font-semibold' 
                                        : 'text-gray-700'
                                }
                                ><li><a>Blogs</a></li></NavLink>
                        <NavLink 
                                to='/contact' className={({isActive})=>
                                isActive ? 'underline font-semibold' 
                                        : 'text-gray-700'
                                }
                                ><li><a>Contact Us</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="bg-[#176AE5] text-white rounded-4xl px-6 py-2 cursor-pointer hover:bg-blue-400">Emergency</a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;