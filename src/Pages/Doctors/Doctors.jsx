import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';


const Doctors = ({data}) => {
    const [visibleDoctors, setVisibleDoctors] = useState(6);

    const loadMoreDoctors = () =>{
        setVisibleDoctors(visibleDoctors + 6);
    };


    return (
        <div>
            <div className='bg-base-300 pb-10 lg:pr-40'>
                        <h1 className='text-4xl font-extrabold text-center mb-4 pt-12'>Our Best Doctors</h1>
                        <h2 className='text-sm text-[#0F0F0F] text-center mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</h2>
                        <Suspense fallback={<span>Loading....</span>}>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {
                                    // data.map((singleDoctor) => <Doctor key={singleDoctor.Id} singleDoctor={singleDoctor}></Doctor>)
                                    data.slice(0, visibleDoctors).map((singleDoctor) => (
                                        <Doctor key={singleDoctor.Id} singleDoctor={singleDoctor} />
                                    ))
                                }
                            </div>
                        </Suspense>
                        
                        {visibleDoctors < data.length && (
                    <div className="flex justify-center mt-6 lg:ml-32">
                        <button 
                            className="bg-[#176AE5] text-white rounded-4xl px-6 py-2 cursor-pointer hover:bg-blue-400"
                            onClick={loadMoreDoctors}
                        >
                            View All Doctors
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Doctors;