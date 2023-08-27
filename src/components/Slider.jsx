import React from 'react';

const Slider = ({ destination }) => {
    const { id, image, name } = destination;
    console.log(destination)
    const next = parseInt(id) + 1;
    const previous = parseInt(id) - 1;
    return (
        <div id={id} className="carousel-item relative w-full">
            <img src={image} className=" w-full" />


            <div className='absolute top-72 -left-5 -right-5'>
                <h1 className='transition  bg-color  rounded-lg ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 -mt-40 py-5 px-5 md:px-16  text-orange-400 text-4xl md:text-7xl font-extrabold shadow-2xl translate-x-2 transition'>{name}</h1>

                <div className='flex justify-between mt-40' >
                    <a href={`#${previous}`} className="btn btn-circle m-10">❮</a>

                    <a href={`#${next}`} className="btn btn-circle m-10">❯</a>
                </div>
            </div>




            {/* <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${previous}`} className="btn btn-circle">❮</a>
                <div>
                    <h1 className='transition  bg-color  rounded-lg ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 -mt-40 py-5 px-5 md:px-16  text-orange-400 text-4xl md:text-7xl font-extrabold shadow-2xl translate-x-2 transition'>{name}</h1>
                </div>
                <a href={`#${next}`} className="btn btn-circle">❯</a>
            </div> */}
        </div>
    )
};

export default Slider;