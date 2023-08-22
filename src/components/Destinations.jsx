import React from 'react';
import image from '../assets/images/hero.png'
import image2 from '../assets/images/Sajek.png'

const Destinations = () => {
    return (
        <div className="w-64 carousel rounded-box">
            <div className="carousel-item w-full">
                <img src={image} className="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div className="carousel-item w-full">
                <img src={image2} className="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div className="carousel-item w-full">
                <img src={image} className="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div className="carousel-item w-full">
                <img src={image2} className="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div className="carousel-item w-full">
                <img src={image} className="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div className="carousel-item w-full">
                <img src={image2} className="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div className="carousel-item w-full">
                <img src={image} className="w-full" alt="Tailwind CSS Carousel component" />
            </div>
        </div>
    );
};

export default Destinations;