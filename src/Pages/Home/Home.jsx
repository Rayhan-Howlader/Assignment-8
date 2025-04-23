import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';
import MedicalService from '../MedicalService/MedicalService';
const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
           
            
            <Doctors data={data}></Doctors>
            <MedicalService></MedicalService>
        </div>
    );
};

export default Home;