import { useState } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('password');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            console.log('Login successful:', response);
            localStorage.setItem('authToken', response.data);

            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };


    return(
        <>
            <section className="h-screen">
                <div className="h-full">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center">

                    <div className="mb-12 md:mb-0 w-10/12 lg:w-3/12 xl:w-3/12 shadow p-4 rounded-md shadow-gray-300">
                        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p className="mx-4 mb-0 text-center font-semibold">
                                Login
                                </p>
                            </div>

                            <div className="flex">
                                <input type="email" label="Email address" size="lg" 
                                className="mb-6 border p-2 rounded-md flex-grow"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                required></input>
                            </div>

                            <div className="flex">
                                <input type="password" label="Password" className="mb-6 border p-2 rounded-md flex-grow" size="lg" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required></input>
                            </div>

                            <div className="text-center flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="bg-indigo-500 text-white px-4 py-2 rounded-md flex-grow">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login