import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '', general: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateInput = () => {
        let valid = true;
        let tempErrors = { email: '', password: '' };

        if (!formData.email) {
            valid = false;
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            valid = false;
            tempErrors.email = 'Email is not valid';
        }

        if (!formData.password) {
            valid = false;
            tempErrors.password = 'Password is required';
        }

        setErrors(tempErrors);
        return valid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateInput()) {
            try {
                const response = await axios.post('http://localhost:5000/api/v1/users/login', formData);
                console.log('Login successful:', response.data);
                setIsDialogOpen(false);
                // Handle successful login here (e.g., set user data in state, redirect to dashboard)
            } catch (error) {
                console.error('Error during login:', error);
                if (error.response) {
                    setErrors({ general: error.response.data.message || 'Error during login' });
                } else if (error.request) {
                    setErrors({ general: 'No response received from server' });
                } else {
                    setErrors({ general: 'Error setting up request' });
                }
            }
        }
    };

    return (
        <div className="relative">
            <button onClick={() => setIsDialogOpen(true)} className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">Open Login Dialog</button>

            {isDialogOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                        <div className="fixed inset-0 transition-opacity" onClick={() => setIsDialogOpen(false)}>
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-6">
                            <h2 className="text-xl font-bold mb-4">Login</h2>

                            {errors.general && <span className="block text-red-500 text-sm mb-4">{errors.general}</span>}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-1" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-1" htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                    {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                                </div>

                                <div className="flex justify-end">
                                    <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>
                                    <button type="button" className="ml-2 py-2 px-4 bg-gray-300 text-black rounded hover:bg-gray-400" onClick={() => setIsDialogOpen(false)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
