import React from 'react';
import backgroundImage from '../assets/images/hero.png';
const Home = () => {
    return (
        <div className=''>
            <img style={{ zIndex: -1 }} className='absolute top-0  bg-cover bg-fixed w-full h-full' src={backgroundImage} alt="" />

        </div>
    );
};

export default Home;
