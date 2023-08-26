import React from 'react';
import backgroundImage from '../assets/images/hero.png';
import './Home.css'
const Home = () => {
    return (
        <div className='text-black text-center'>
            {/* <img style={{ zIndex: -1 }} className='absolute top-0  bg-cover bg-fixed w-full h-full' src={backgroundImage} alt="" /> */}
            {/* <h1 className='text-center text-8xl mt-20 text-black font-extrabold'>
                Travel Bug
            </h1>
            <p>Escape to Euphoria</p> */}
            <div style={{ zIndex: -1 }} className="carousel z-0 w-full h-full absolute top-0 left-0">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1622442786859-2525b051fea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" className="w-full" />
                    <div className="bg-color absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div>
                            <h1 className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 -mt-64 p-5  text-orange-400 text-7xl font-extrabold shadow-2xl translate-x-2 transition'>TRAVEL BUG</h1>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1622442787923-ab3aeb0b96b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div>
                            <h1 className='-mt-64 text-white text-7xl font-extrabold shadow-2xl '>TRAVEL BUG</h1>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1619457418945-f980df3ebbaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div>
                            <h1 className='-mt-64 text-white text-7xl font-extrabold shadow-2xl '>TRAVEL BUG</h1>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1546274231-e151946af141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2017&q=80" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div>
                            <h1 className='-mt-64 text-white text-7xl font-extrabold shadow-2xl '>TRAVEL BUG</h1>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
