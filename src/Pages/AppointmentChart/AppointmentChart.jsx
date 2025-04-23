import React, { useEffect, useState } from 'react';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,Cell,LabelList,CartesianGrid} from 'recharts';
import { getStoredDoctor } from '../../Utility/addToDB';
import { Link, useLoaderData } from 'react-router';

const colors = ['#0284C7', '#FACC15', '#0EA5E9', '#10B981', '#FACC15', '#FB923C'];

// Function to generate the SVG path for a triangle-shaped bar
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
          ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
          ${x + width}, ${y + height}
          Z`;
};

// Custom shape component for the triangle bar
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const AppointmentChart = ({ bookedList }) => {
  const [chartData, setChartData] = useState([]);
  const doctors = useLoaderData();

  const updateChartData = () => {
    const storedIds = getStoredDoctor().map((id) => parseInt(id));

    const bookedDoctors = doctors.filter((doctor) =>
      storedIds.includes(doctor.Id)
    );

    const countedData = bookedDoctors.map((doctor) => {
      return {
        name: doctor.name,
        appointments: doctor.consultation_fee,
        consultation_fee: doctor.consultation_fee,
      };
    });
    

    setChartData(countedData);
  };

  useEffect(() => {
    updateChartData();
    const handleStorageChange = () => updateChartData();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [bookedList]);

  const maxAppointments = Math.max(...chartData.map((item) => item.appointments), 0);
  const yAxisDomain = [0, maxAppointments + 100];

  return (
    <div className="bg-base-300 pt-8 pb-8 pl-1 md:pl-2 pr-1 md:pr-2">
      <div className="bg-white p-6 rounded-xl shadow-sm lg:ml-40 lg:mr-40">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />
              <YAxis domain={yAxisDomain} tickCount={9} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="appointments" shape={<TriangleBar />} label={{ position: 'top' }}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
                <LabelList
                  dataKey="consultation_fee"
                  position="top"
                  formatter={(value) => (value > 100 ? value : null)}
                  style={{ fill: '#0284C7', fontWeight: 600 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
              You Have not Booked any Appointment yet
            </h2>
            <p className="text-center text-gray-500 py-8">
              Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
            </p>
            <Link to={'/'}>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-500 cursor-pointer">
                Book an Appointment
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentChart;


