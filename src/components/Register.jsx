import React, { useContext, useState } from 'react';
import { AuthContext } from '../proviers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const handleRegister = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        setError('');
        if (password !== confirmPassword) {
            setError('Password did not match')
            return;
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                event.target.reset();
                navigate('/')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (

        <div className="bg-white p-6 container mx-auto mt-10 w-1/2 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Registration</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-4 ">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="firstName">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full border rounded-md py-2 px-3"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full border rounded-md py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full border rounded-md py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="w-full border rounded-md py-2 px-3"
                        required
                    />
                </div>
                <p className='text-red-700 mb-3'> {error}</p>

                <button
                    type="submit"
                    className="border-2 w-full bg-orange-300 border-orange-300 font-medium hover:bg-orange-400 rounded-lg py-2 px-4 transition duration-250 ease-out hover:ease-in text-black hover:text-white"
                >
                    Register
                </button>
                <p className='mt-5  text-black'>Already Have an Account? <Link className='text-orange-500' to='/login'>Login</Link></p>
            </form>
        </div>

    );
};

export default Register;