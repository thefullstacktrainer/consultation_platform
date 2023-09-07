import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [errors, setErrors] = useState({ username: '', email: '', password: '', general: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateInput = () => {
        let valid = true;
        let tempErrors = { username: '', email: '', password: '' };

        if (!formData.username) {
            valid = false;
            tempErrors.username = 'Username is required';
        }

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
        <div className="login-container p-6">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            {errors.general && <span className="block text-red-500 text-sm mb-4">{errors.general}</span>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
                </div>
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
                </div>
            </form>
        </div>
    );
}

export default Login;
