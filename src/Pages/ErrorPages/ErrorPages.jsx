import React from 'react';
import { NavLink, useLocation } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';

const ErrorPages = () => {

    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const dynamicPart =pathSegments.join('/');
    return (
        <div>
        <Navbar></Navbar>
        <div className='bg-base-300 p-20'>
            <div className='bg-white flex flex-col justify-center items-center p-12 rounded-2xl'>
                <h1 className='text-2xl font-bold mb-2'>No Doctor Found!!</h1>
                <p className='mb-2 text-gray-500'>No Doctor found with this registration No.</p>
                <p className='mb-6 text-gray-500'>&#8853; BD-{dynamicPart}</p>
                <NavLink to='/'><button className='bg-blue-600 text-white font-semibold px-3 py-1 rounded cursor-pointer hover:bg-blue-400'>View All Doctors</button></NavLink>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default ErrorPages;