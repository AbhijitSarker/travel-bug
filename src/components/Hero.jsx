import React, { useEffect, useState } from 'react';
import Slider from './Slider';

const Hero = () => {

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('https://travel-bug-server-abhijitsarker.vercel.app/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])


    return (


        <div>
            <div style={{ zIndex: -1 }} className="carousel z-0 w-full h-full absolute top-0 left-0">

                {
                    destinations.map(destination => <Slider
                        key={destination.id}
                        destination={destination}
                    ></Slider>)
                }

            </div>
        </div>
    );
};

export default Hero;