import React from 'react';
import { Link } from 'react-router-dom';

const Slider = ({ destination }) => {
    const { id, image, name, country, activities } = destination;
    console.log(destination)
    const next = parseInt(id) + 1;
    const previous = parseInt(id) - 1;
    return (
        <div id={id} className="carousel-item relative w-full">
            <img src={image} className=" w-full" />


            <div className='absolute top-72 -left-2 -right-5'>
                <h1 className='transition bg-color  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 -mt-40 py-5 px-5 md:px-16  text-white text-4xl md:text-7xl font-extrabold shadow-2xl translate-x-2 transition'>{name}</h1>


                <div className='-left-2  -right-5 flex justify-between items-center mt-40' >
                    <a href={`#${previous}`} className="btn btn-ghost text-white m-2">❮</a>
                    <a href={`#${next}`} className="btn btn-ghost text-white m-5">❯</a>
                </div>
            </div>

            <div className='bg-color absolute   bottom-0 left-0 right-0 text-white text-xl'>
                <div className=' items-center container mx-auto flex justify-between'>
                    <div className=' text-left pl-2 grid md:flex  md:gap-10 items-'>
                        {activities.map(a => <p>{a.name}</p>)}
                    </div>
                    <Link><button className='  font-medium bg-orange-400 hover:bg-orange-500 rounded-lg py-1 px-4 transition  duration-250 ease-out hover:ease-in hover:text-white'>Visit</button></Link>
                </div>
            </div>


        </div>
    )
};

export default Slider;