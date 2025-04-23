import React from 'react';
import { Link } from 'react-router';

const Doctor = ({singleDoctor}) => {

    const {name,education,speciality,experience,registration_number,image_url,Id} = singleDoctor;
    
    return (
        <div className='ml-2 md:ml-6 lg:ml-40 mr-2 md:mr-6'>
            <div className="card bg-base-100 shadow-sm pb-5">
                <figure className="px-10 pt-10">
                    <img
                    src={image_url}
                    alt="Shoes"
                    className="w-80 h-50 object-cover rounded-xl" />
                </figure>

                <div className='mx-auto'>
                    <button className='bg-green-100 border border-green-200 rounded-2xl text-sm px-4 text-[#09982F] mr-2 mt-2.5'>Available</button>

                    <button className='bg-blue-100 border border-blue-200 rounded-2xl text-sm px-4 text-[#176AE5]'>{experience} experience</button>

                    <h2 className="card-title mt-2 mb-2">{name}</h2>
                    <span>{education} </span>
                    <span>-{speciality}</span>
                    <div className='border-t border-t-gray-400    border-dashed mt-2 mb-2 flex items-center gap-2'>
                        <span className='text-2xl'>&#174;</span>
                        <span>Reg No: {registration_number} </span>
                    </div>


                    <Link to={`/doctorDetails/${Id}`}>
                    <button className='w-[100%] border border-blue-700 rounded-4xl text-blue-700 font-bold p-1 cursor-pointer hover:bg-blue-700 hover:text-white'>
                        View Details
                    </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Doctor;
