import { toast } from 'react-toastify';

const getStoredDoctor = () => {

    const storedDoctorSTR = localStorage.getItem("bookedAppointmentNow");

    if (storedDoctorSTR) {
        const storedDoctorData = JSON.parse(storedDoctorSTR);
        return storedDoctorData;
    }
    else {
        return [];
    }

}


const addToStoredDB = (id,name) => {

    const storedDoctorData = getStoredDoctor();

    if (storedDoctorData.includes(id)) {
        toast.error(`Appointment already booked with Dr. ${name} ❌`);
    }
    else{
        storedDoctorData.push(id);
        const data =JSON.stringify(storedDoctorData);
        localStorage.setItem("bookedAppointmentNow",data);
        toast.success(`Appointment booked with Dr. ${name} ✅`);
    }

}



const removeFromDB = (id) => {
    const existing = getStoredDoctor();
    const updated = existing.filter(storedId => parseInt(storedId) !== parseInt(id));
    localStorage.setItem("bookedAppointmentNow", JSON.stringify(updated));
  };


export {addToStoredDB,getStoredDoctor,removeFromDB};