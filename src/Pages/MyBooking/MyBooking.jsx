import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredDoctor, removeFromDB } from '../../Utility/addToDB';
import { toast } from 'react-toastify';
import AppointmentChart from '../AppointmentChart/AppointmentChart';

const MyBooking = () => {

    const [bookedList, setBookedList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedDoctorData = getStoredDoctor();
        const ConvertedStoredDoctors = storedDoctorData.map(id => parseInt(id))
        const myBookedList = data.filter(booked=>ConvertedStoredDoctors.includes(booked.Id));
        setBookedList(myBookedList)
    },[])


    const handleCancel = (id) => {
        removeFromDB(id);
        setBookedList(prev => prev.filter(doctor => doctor.Id !== id));
        toast.error(`Appointment with Dr. ${name} canceled ❌`);
    }
    return (
        <div>

                <AppointmentChart bookedList={bookedList}></AppointmentChart>
                <div className="bg-base-300 min-h-screen p-8">
                    <h2 className="text-3xl font-bold text-center mb-4">My Today Appointments</h2>
                    <p className="text-center text-sm text-gray-500 mb-10">
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                    </p>

                    {bookedList.length === 0 ? (
                    <p className="text-center text-gray-500">No appointments booked today.</p>
                    ) : (
                    <div className="space-y-4 max-w-4xl mx-auto">
                        {bookedList.map((doctor) => (
                        <div key={doctor.Id} className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex justify-between items-start border-b border-dashed pb-4 mb-4">
                            <div>
                                <h3 className="text-lg font-bold">Dr. {doctor.name}</h3>
                                <p className="text-sm text-gray-600">
                                {doctor.education} - {doctor.speciality}
                                </p>
                            </div>
                            <div className="text-right text-sm font-medium text-gray-800">
                                Appointment Fee : {doctor.consultation_fee} Taka + Vat
                            </div>
                            </div>

                            <button onClick={() => handleCancel(doctor.Id)}
                            className="w-full border border-red-500 text-red-500 font-semibold py-2 rounded-full hover:bg-red-50 transition cursor-pointer"
                            >
                            Cancel Appointment
                            </button>
                        </div>
                        ))}
                    </div>
                    )}
                </div>
        </div>
    );
};

export default MyBooking;