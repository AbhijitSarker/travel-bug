import React, { useContext, useState } from 'react';
import logo from '../assets/images/logoo.png';
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMapPin, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../proviers/AuthProvider';


const Header = () => {

    const [open, setOpen] = useState(false);

    const { user, logout } = useContext(AuthContext);


    const handleLogOut = () => {
        logout();
    }
    return (

        <nav className='navbar-items z-10 md:sticky top-3 bg-white rounded-md p-2 flex justify-between items-center shadow-lg container mx-auto mt-3'>

            <img className='h-12 z-40' src={logo} alt="" />

            <div onClick={() => setOpen(!open)} className="md:hidden z-40">
                <span>
                    {open === true
                        ? <FontAwesomeIcon className='h-8 float-right ' icon={faXmark} />
                        : <FontAwesomeIcon className='h-8 float-right ' icon={faBars} />
                    }
                </span>
            </div>

            <div className={`bg-white text-black opacity-80  grid absolute px-10 pt-20 md:pt-0 md:px-0 pb-5 md:pb-0 mt-3 md:mt-0 rounded-md gap-3 md:gap-0 md:static md:ml-auto  text-center  md:flex font-bold items-center whitespace-nowrap duration-700 ease-in-out  ${open === true ? 'top-0 left-0 right-0' : '-top-full left-0 right-0'}`}>

                <Link className='hover:bg-orange-400 px-2 py-2 transition duration-250 ease-out hover:ease-in rounded-md hover:text-white' to='/'><FontAwesomeIcon icon={faHome} /> Home</Link>
                <Link className='hover:bg-orange-400 px-2 py-2 transition duration-250 ease-out hover:ease-in rounded-md hover:text-white' to='/destinations'> <FontAwesomeIcon icon={faMapPin} /> Destinations</Link>
                <Link className='hover:bg-orange-400 px-2 py-2 transition duration-250 ease-out hover:ease-in rounded-md hover:text-white' >Blogs</Link>
                <Link className='hover:bg-orange-400 px-2 py-2 transition duration-250 ease-out hover:ease-in rounded-md hover:text-white' >About</Link>
                <Link className='hover:bg-orange-400 px-2 py-2 transition duration-250 ease-out hover:ease-in rounded-md hover:text-white' >Contact</Link>

                {
                    user && <p>{user.email}</p>
                }

                <button onClick={handleLogOut} className='border-2 border-orange-300 font-medium hover:bg-orange-400 rounded-lg py-2 px-4 transition duration-250 ease-out hover:ease-in hover:text-white'>LogOut</button>

                <Link to='/login'>
                    <button className='border-2 border-orange-300 font-medium hover:bg-orange-400 rounded-lg py-2 px-4 transition duration-250 ease-out hover:ease-in hover:text-white'>Login</button>
                </Link>
                <Link to='/register'>
                    <button className='border-2 border-orange-300 font-medium hover:bg-orange-400 rounded-lg py-2 px-4 transition duration-250 ease-out hover:ease-in hover:text-white'>SignUp</button>

                </Link>
            </div>

        </nav>


    );
};

export default Header;