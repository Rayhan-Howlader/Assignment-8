import React from 'react';
import { Link } from 'react-router';

const Contact = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-base-300 pt-24'>
                <img className='w-96' src="https://i.postimg.cc/HkXBJHqT/error-404-how-to-fix-it-fi-7058deb95f.png" alt="" />
                <h1 className='mt-4 text-2xl font-bold text-red-600 mb-2'>404 - Page Not Found</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link to='/'><button className='mt-4 bg-blue-600 px-2 py-1 rounded text-white hover:bg-blue-400 mb-24'>Go Back Home</button></Link>
            </div>
        </div>
    );
};

export default Contact;