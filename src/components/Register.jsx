import React, { useContext } from 'react';
import { AuthContext } from '../proviers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        // const confirmPassword = event.target.confirmPassword.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (

        <div className="bg-white p-6 container mx-auto mt-10 w-1/2 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Registration</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-4">
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
                {/* <div className="mb-4">
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
                </div> */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Register
                </button>
            </form>
        </div>

    );
};

export default Register;