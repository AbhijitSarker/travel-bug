import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/images/hero.png';
import './Home.css'
import Hero from './Hero';
import Destinations from './Destinations';
const Home = () => {

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('https://travel-bug-server-abhijitsarker.vercel.app/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])

    return (
        <div className='text-black text-center'>


            <Hero></Hero>


            <div className='absolute top-full w-full mx-auto'>
                <Destinations></Destinations>
            </div>
        </div>
    );
};

export default Home;
