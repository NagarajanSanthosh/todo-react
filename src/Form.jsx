import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Form = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            email: email, password: password,
        }

        console.log(JSON.stringify(data));
        navigate('/')
        // try {
        //     const response = await fetch('http://localhost:5555/api/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data),

        //     })
        //     if (response.ok) {
        //         navigate('/')
        //     } else {
        //         console.error('Failed to login');

        //     }
        // } catch (error) {
        //     console.error('Failed to login');

        // }

    }

    return (
        <div>
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to={'/'} className="flex items-center mb-6 text-2xl font-semibold text-gray-200">
                        Todo X
                    </Link>

                    <div className="w-full bg-gray-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-tindogPink md:text-2xl flex items-center justify-center">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-tindogPink
    ">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-tindogPink
         sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="name@xyz.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-tindogPink
    ">Password</label>
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
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                required
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-tindogPink
            ">Remember me</label>
                                        </div>
                                    </div>
                                    <p className='text-sm font-medium text-gray-500'>
                                        Don’t have an account yet?
                                    </p>

                                    <Link to={'/signup'} className="text-sm font-medium text-tindogPink
     hover:underline"
                                    > Sign up</Link>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-tindogPink
      focus:ring-4 focus:outline-none focus:ring-tindogPink
     font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Submit
                                </button>

                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Form