import React from 'react';
import CountUp from 'react-countup';

const MedicalService = () => {
    return (
        <div className='bg-base-300 pl-2 pr-2 md:pr-10 md:pl-20 lg:pl-40  pb-10'>
                <div className='text-center pb-6 lg:mr-48'>
                    <h1 className='text-4xl font-bold pb-4 pt-4'>We Provide Best Medical Services</h1>
                    <p className='text-sm text-gray-600'>
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. 
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    <div className='bg-white lg:w-60 p-8 rounded-xl'>
                        <img className='h-10 mb-2' src="/success-doctor.png" alt="" />
                        <h1 className='text-5xl font-extrabold mb-2'>
                            <CountUp end={199} duration={3}></CountUp>+
                        </h1>
                        <h3 className='font-semibold text-gray-600'>Total Doctors</h3>
                    </div>
                    <div className='bg-white lg:w-60 p-8 rounded-xl'>
                        <img className='h-10 mb-2' src="/success-review.png" alt="" />
                        <h1 className='text-5xl font-extrabold mb-2'>
                        <CountUp end={467} duration={3}></CountUp>+
                        </h1>
                        <h3 className='font-semibold text-gray-600'>Total Reviews</h3>
                    </div>
                    <div className='bg-white lg:w-60 p-8 rounded-xl'>
                        <img className='h-10 mb-2' src="/success-patients.png" alt="" />
                        <h1 className='text-5xl font-extrabold mb-2'>
                        <CountUp end={1900} duration={3}></CountUp>+
                            </h1>
                        <h3 className='font-semibold text-gray-600'>Patients</h3>
                    </div>
                    <div className='bg-white lg:w-60 p-8 rounded-xl'>
                        <img className='h-10 mb-2' src="/success-staffs.png" alt="" />
                        <h1 className='text-5xl font-extrabold mb-2'>
                        <CountUp end={300} duration={3}></CountUp>+
                            </h1>
                        <h3 className='font-semibold text-gray-600'>Total Stuffs</h3>
                    </div>
                </div>
        </div>
    );
};

export default MedicalService;
