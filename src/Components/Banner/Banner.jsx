import React from 'react';

const Banner = () => {
    return (
        <div className='pl-12 pr-12 bg-base-300 pb-12'>
            <div className='border-2 border-white rounded-3xl lg:px-28 lg:py-12 bg-gray-50'>
            <h1 className='text-xl lg:text-5xl font-extrabold text-center mb-4'>Dependable Care, Backed by Trusted <br />Professionals.</h1>
            <h1 className='text-sm text-[#0F0F0F] text-center mb-4'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </h1>
            <div className='flex justify-center items-center mb-4'>
                <input className='bg-white border border-gray-300 py-2 px-2 w-xl rounded-4xl' type="search" name="" id="" placeholder='Search any doctor...' />
                <button className="bg-[#176AE5] text-white text-sm lg:text-xl rounded-2xl lg:rounded-4xl px-1 md:px-4 lg:px-6 md:py-2 lg:py-2 cursor-pointer hover:bg-blue-400 ml-4">Search Now</button>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 md:ml-18 lg:ml-36 md:mr-18 lg:mr-36'>
                <img src="/banner-img-1.png" alt="" />
                <img className='rounded-2xl lg:h-88 md:mb-4 md:w-[100%]' src="https://i.postimg.cc/nrBR7Drc/successful-doctor-his-staff-portrait-happy-mature-standing-corridor-team-hospital-smiling-crossed-ar.webp" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;