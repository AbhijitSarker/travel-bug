import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegBookmark } from 'react-icons/fa';

const DestinationCard = ({ destination }) => {
    const { id, image, name, country, activities, highlights, type } = destination;

    return (
        <div className="card rounded-md w-80 lg:w-96 mx-auto glass bg-slate-50 shadow-2xl">
            <figure className='shadow-lg'><img className='h-60 w-full transition duration-500 ease-in-out hover:scale-125' src={image} alt="" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title text-3xl">{name}</h2>
                    <FaRegBookmark />
                </div>
                <div className='flex border-b'>
                    <p className='text-slate-500 text-left'>{country}</p>
                    <p className='text-right text-slate-500'>{type}</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h4 className='text-xl text-left font-semibold my-3'>Highlights</h4>
                        {highlights.map(p => <p className='text-left text-slate-500'>{p}</p>)}
                    </div>
                    <div>
                        <h4 className='text-xl text-right font-semibold my-3'>Activities</h4>
                        {
                            activities.map(a => <p className='text-right text-slate-500'>{a.name}</p>)
                        }
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/destination/${id}`}>
                        <button className=' text-black font-medium bg-orange-400 hover:bg-orange-500 rounded-lg py-2 px-4 transition duration-250 ease-out hover:ease-in hover:text-white'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;
