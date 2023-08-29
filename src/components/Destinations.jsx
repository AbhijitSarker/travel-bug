import React, { useEffect, useState } from 'react';
import DestinationCard from './DestinationCard';


const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('https://travel-bug-server-abhijitsarker.vercel.app/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])

    return (
        < >
            <h1 className='text-3xl text-black font-extrabold mt-5 text-center'>Beautiful Destinations</h1>
            <div className='grid mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-black container mx-auto mt-10'>
                {
                    destinations.map(destination => <DestinationCard key={destination.id} destination={destination} ></DestinationCard>)
                }
            </div>
        </>
    );
};

export default Destinations;