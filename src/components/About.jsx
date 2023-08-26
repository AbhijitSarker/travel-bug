import React from 'react';

const About = () => {

    return (
        <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-12 lg:px-24 xl:px-32">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Welcome to Travel Bug! We are a team of passionate travel enthusiasts dedicated to providing you with
                    unforgettable journeys and experiences. Our mission is to inspire and empower you to explore the world's
                    most breathtaking destinations and create cherished memories.
                </p>
                <p className="text-gray-700 text-lg mb-6">
                    Whether you seek thrilling adventures, tranquil getaways, or cultural immersions, our curated travel packages
                    cater to diverse interests and preferences. With attention to detail and personalized service, we ensure your
                    travel dreams become reality.
                </p>
                <p className="text-gray-700 text-lg mb-8">
                    Embark on a journey of discovery through our website, where you'll find a diverse array of experiences,
                    from breathtaking landscapes to hidden gems. Join us in exploring the world and making every moment count!
                </p>
                <div className="flex justify-center items-center">
                    <img
                        src="https://images.unsplash.com/photo-1455305049585-41b8d277d68a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        alt="Our Team"
                        className="rounded-full h-40 w-40 object-cover shadow-lg"
                    />
                    <div className="ml-6">
                        <h2 className="text-xl font-semibold mb-2">Meet Our Team</h2>
                        <p className="text-gray-700">
                            Our experienced and friendly team is committed to making your travel dreams come true. From destination
                            experts to itinerary planners, we're here to guide you every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;