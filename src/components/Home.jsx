import React from 'react';
import backgroundImage from '../assets/images/hero.png';
const Home = () => {
    return (
        <div className=''>
            <img style={{ zIndex: -1 }} className='absolute top-0  bg-cover bg-fixed w-full h-full' src={backgroundImage} alt="" />
            <div className="flex flex-col h-screen">
                <header className=" py-4">
                    <div className="flex items-center justify-between max-w-4xl mx-auto px-4">
                        <a href="/" className="text-white text-lg font-semibold">
                            Travel Guru
                        </a>
                    </div>
                </header>

                <div className="flex-grow overflow-y-auto px-4 py-8">
                    {/* Scrollable content */}
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-semibold mb-4">Welcome to Our Site</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante ut mi
                            volutpat bibendum quis vel nibh.

                        </p>

                    </div>
                </div>

                <footer className="bg-blue-500 py-4">
                    <div className="max-w-4xl mx-auto px-4 text-white text-center">
                        © 2023 Travel Guru. All rights reserved.
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;
