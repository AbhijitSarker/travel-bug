import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 relative bottom-0 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold">Travel Bug</h3>
                    <p className="text-gray-400">Explore the world with us</p>
                </div>
                <ul className="flex space-x-6">
                    <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Destinations</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Blogs</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
