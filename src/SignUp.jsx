import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (event) => {
        event.preventDefault();
        let data = {
            name: name,
            email: email,
            password: password
        };
        data = JSON.stringify(data);
        // console.log(JSON.stringify(data));
        // navigate('/login')
        try {
            const response = await axios.post('http://localhost:5555/api/signup', data, {
                headers: {
                    'Content-Type': 'application/json',
                }

            })
            console.log(response.data);
            navigate('/login')

        } catch (error) {
            console.error('Error occurred', error);
        }

    };

    return (
        <div>
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to={'/'} className='flex items-center mb-6 text-2xl font-semibold text-gray-200'>Todo X</Link>
                    <div className="w-full bg-gray-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-tindogPink md:text-2xl items-center justify-center flex">
                                Create your account!
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-tindogPink">User Name</label>
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder="User Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="bg-white border border-gray-300 text-tindogPink sm:text-sm rounded-lg focus:ring-tindogPink focus:border-tindogPink block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-tindogPink">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-tindogPink sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="name@xyz.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-tindogPink">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="ml-3 text-sm">
                                            <p className='text-sm font-medium text-gray-500'>
                                                Already have an account? <Link to="/login" className="text-tindogPink">Login</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-tindogPink focus:ring-4 focus:outline-none focus:ring-tindogPink font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
