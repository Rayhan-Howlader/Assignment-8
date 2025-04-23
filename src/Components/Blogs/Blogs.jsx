import React from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
    const data =useLoaderData();
    console.log(data);
    return (
        <div className='bg-base-300 pb-10'>
            <div className='text-center'>
            <h1 className='text-3xl font-bold pt-16'>Blogs</h1>
            <p className='text-sm text-gray-500 mt-6 mb-10'>Let's Explore some basic concept that will make you a good Developer</p>
            </div>

            {data.map((item)=>(
                <div key={item.id}
                className='bg-white ml-4 lg:ml-40 mr-4 lg:mr-40 rounded-2xl p-4 mb-6'>
                <h3 className='font-bold p-2'>{item.question}</h3>
                <p className='text-blue-600 border-t border-dashed pt-2'>Answer :</p>
                <p className='border-b border-blue-600 border-dashed pb-2 text-gray-500'>{item.answer}</p>
                <p className='pt-2 pb-4 text-gray-500'>&#128197; Added at : {item.add_date}</p>
            </div>
            ))}
            
        </div>
    );
};

export default Blogs;