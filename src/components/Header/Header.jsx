import React from 'react';
import user from '../../assets/person1.jpg'

const Header = () => {
    return (
        <div className='flex justify-between items-center  border-b border-gray-300 py-8 mb-8'>
            <h1 className=' text-3xl md:text-4xl font-bold'>Javascript <span className='text-violet-600 text-4xl'>Universe</span></h1>
            <img className='w-14 rounded-full' src={user} alt="" />
        </div>
    );
};

export default Header;