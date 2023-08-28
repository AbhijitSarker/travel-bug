import React from 'react';
import { Link } from 'react-router-dom';

const Slider = ({ destination }) => {
    const { id, image, name, country, activities, highlights } = destination;
    console.log(destination)
    const next = parseInt(id) + 1;
    const previous = parseInt(id) - 1;
    return (
        <div id={id} className="carousel-item relative w-full">
            <img src={image} className="object-cover md:w-full " />


            <div className='absolute top-72 -left-2 -right-5'>
                <h1 className=' bg-color -mt-40 py-5 px-5 md:px-16  text-white text-4xl md:text-7xl font-extrabold shadow-2xl translate-x-2 '>{name}</h1>

                <p className='text-white bg-color translate-x-2 text-center'>Amazing {destination.type} Tour for {destination.recommendedDuration}  </p>


                <div className='-left-2  -right-5 flex justify-between items-center mt-40' >
                    <a href={`#${previous}`} className="btn btn-ghost text-white m-2">❮</a>
                    <a href={`#${next}`} className="btn btn-ghost text-white m-5">❯</a>
                </div>
            </div>

            <div className='bg-color absolute   bottom-0 left-0 right-0 text-white text-xl'>
                <div className=' items-center container mx-auto flex justify-between'>
                    <div className=' text-left pl-2 grid md:flex  md:gap-10 items-'>
                        {activities.map(h => <p>{h.name}</p>)}
                    </div>
                    <div className=''>
                        <p className='hidden md:inline mr-4 text-2xl mb-2 font-semi-bold text-white'>Adventure Awaits. Are You Ready?</p>
                        <Link><button className='float-right  font-medium bg-orange-400 hover:bg-orange-500 rounded-lg py-1 px-4 transition  duration-250 ease-out hover:ease-in text-black py-1 my-1 hover:text-white'>Visit-❯</button></Link>


                    </div>
                </div>
            </div>


        </div>
    )
};

export default Slider;