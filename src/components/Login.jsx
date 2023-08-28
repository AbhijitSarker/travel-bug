import React, { useContext } from 'react';
import { AuthContext } from '../proviers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        login(email, password)
            .then(result => {
                event.target.reset();
                navigate('/')
            })
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                navigate('/')
            })
    }

    return (
        <div>
            <div className=" container mx-auto w-80 mt-10 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleLogin}>
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
                    <button
                        type="submit"
                        className="border-2 w-full bg-orange-300 border-orange-300 font-medium hover:bg-orange-400 rounded-lg py-2 px-4 transition duration-250 ease-out hover:ease-in text-black hover:text-white"
                    >
                        Login
                    </button>
                    <p className='mt-5 text-black'>Don't Have an Account? <Link className='text-orange-500' to='/register'>Register</Link></p>
                </form>
                <button
                    onClick={handleGoogleLogin}
                    className="border-2 w-full bg-orange-300 border-orange-300 font-medium hover:bg-orange-400 rounded-lg py-2 px-4 transition duration-250 ease-out hover:ease-in text-black hover:text-white"
                >
                    Login With Google
                </button>

            </div>
        </div>
    );
};

export default Login;