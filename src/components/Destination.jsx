import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Destination = () => {
    // const { id } = useParams();
    const destination = useLoaderData()
    console.log(destination);


    const {
        image,
        name,
        description,
        highlights,
        activities,
        bestTimeToVisit,
        averageTemperature,
        languages,
        localCuisine,
        currency

    } = destination;
    return (

        <div className="container mx-auto mt-8 px-4  text-black">
            <div className="grid grid-cols-1 row-span-1 md:grid-cols-2 gap-8">
                <div className='max-w-4xl'>
                    <img src={image} alt={name} className="w-full h-auto rounded-md mb-6 object-cover" />
                    <h2 className="text-3xl font-semibold mb-2">{name}</h2>
                    <p className="text-gray-600 mb-6">{description}</p>

                </div>
                <div className=''>
                    <h3 className="text-xl font-semibold mb-2">Highlights</h3>
                    <ul className="list-disc pl-6 mb-6">
                        {highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Activities</h3>
                    <ul className="list-disc pl-6 mb-6">
                        {activities.map((activity, index) => (
                            <li key={index}>
                                {activity.name} - {activity.duration}, Price: ${activity.price}
                            </li>
                        ))}
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
                    <p>{bestTimeToVisit}</p>
                    <h3 className="text-xl font-semibold mb-2">Average Temperature</h3>
                    <p>High: {averageTemperature.high}°C, Low: {averageTemperature.low}°C</p>
                    <h3 className="text-xl font-semibold mb-2">Currency</h3>
                    <p>{currency}</p>
                    <h3 className="text-xl font-semibold mb-2">Languages Spoken</h3>
                    <ul className="list-disc pl-6 mb-6">
                        {languages.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">Local Cuisine</h3>
                    <ul className="list-disc pl-6 mb-6">
                        {localCuisine.map((cuisine, index) => (
                            <li key={index}>{cuisine}</li>
                        ))}
                    </ul>
                    {/* Add more details as needed */}
                </div>
            </div>
        </div>




    );
};

export default Destination;