import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({ username: '', email: '', password: '', confirmPassword: '', general: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateInput = () => {
        let valid = true;
        let tempErrors = { username: '', email: '', password: '', confirmPassword: '' };

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

        if (formData.password !== formData.confirmPassword) {
            valid = false;
            tempErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(tempErrors);
        return valid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateInput()) {
            try {
                const response = await axios.post('http://localhost:5000/api/v1/users/register', formData);
                console.log('Registration successful:', response.data);
                // Handle successful registration here (e.g., show a success message, redirect to login)
            } catch (error) {
                console.error('Error during registration:', error);
                if (error.response) {
                    setErrors({ general: error.response.data.message || 'Error during registration' });
                } else if (error.request) {
                    setErrors({ general: 'No response received from server' });
                } else {
                    setErrors({ general: 'Error setting up request' });
                }
            }
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Register</h2>

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

                <div className="mb-4">
                    <label className="block mb-1" htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
