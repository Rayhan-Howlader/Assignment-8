import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addToStoredDB, getStoredDoctor } from '../../Utility/addToDB';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const doctorId = parseInt(id);
    const data =useLoaderData();
    const singleDoctor = data.find(doctor => doctor.Id === doctorId );
    const {name,education,speciality,registration_number,image_url,working_at,availability,consultation_fee} = singleDoctor;


    const handleMarkAsBooked = (id, name) => {
        const storedIds = getStoredDoctor().map((d) => parseInt(d));
        
        if (storedIds.includes(id)) {
            toast.warning(`${name} is already booked!`);
            return;
        }
    
        addToStoredDB(id, name);
        window.dispatchEvent(new Event("storage"));
        navigate('/myBooking');
    };
    
    return (
        <div className='bg-base-300 pb-16 pt-10'>
            <div className='text-center bg-white rounded-2xl p-20 ml-5 lg:ml-40 mr-5 lg:mr-40'>
                <h1 className='text-2xl font-bold pb-2'>Doctor’s Profile Details</h1>
                <p className='text-sm text-gray-600'>Health is not just about what you're eating. It's also about what are you thinking,saying and doing. <br /> A peaceful mind leads to a healthy body</p>
            </div>

            <div>
            <div className="card card-side bg-base-100 shadow-sm p-10 mt-10 lg:ml-40 lg:mr-40 flex flex-col md:flex-row lg:flex-row">
                <figure>
                    <img className='lg:pl-10 pt-6 pb-6 w-96 h-80'
                    src={image_url}
                    alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className='text-2xl font-bold'>{name}</h2>
                    <h2>{education}</h2>
                    <h2>{speciality}</h2>
                    <h2>Working at</h2>
                    <h2>{working_at}</h2>
                    <h2 className='border-t border-b border-dotted p-2'>&#8853; Reg No : {registration_number}</h2>

                    <div className="flex flex-wrap gap-2">Availability:
                    {availability.map((day, index) => (
                        <span
                        key={index}
                        className="bg-yellow-100 text-yellow-700 text-sm font-medium px-3 rounded-full border border-yellow-300"
                        >
                        {day}
                        </span>
                    ))}
                    </div>

                    <h2>Consultation Fee: <span className='text-blue-700 ml-2 mr-2 font-semibold'> Taka: {consultation_fee}</span> (incl. vat) <span className='text-blue-700'>Per consultation</span></h2>

                </div>
                </div>
            </div>

            <div className='bg-white lg:ml-40 lg:mr-40 mt-4 rounded-xl px-2'>
                <h1 className='text-center text-xl font-bold pt-4'>Book an Appointment</h1>
                <div className='flex justify-between items-center border-t border-b border-dotted p-1 mt-2'>
                    <h1>Availability</h1>
                    <button className='bg-green-100 border border-green-200 rounded-2xl text-sm px-4 text-[#09982F] mr-2 mt-2.5'>Doctor Available Today</button>
                </div>

                <button className="bg-yellow-100 text-yellow-700 text-sm font-medium px-3 rounded-full border border-yellow-300 mt-4">🕑 Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</button>
                    <br />
                <button onClick={()=>handleMarkAsBooked(singleDoctor.Id, singleDoctor.name )} className='bg-blue-700 text-white rounded-2xl py-1 w-full cursor-pointer mt-6 mb-6'>
                    Book Appointment Now
                </button>
            </div>
        </div>
    );
};

export default DoctorDetails;