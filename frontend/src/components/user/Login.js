import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({ identifier: '', password: '' });
    const [errors, setErrors] = useState({ identifier: '', password: '', general: '' });

    const navigate = useNavigate(); // Hook to handle navigation

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateInput = () => {
        let valid = true;
        let tempErrors = { identifier: '', password: '' };

        if (!formData.identifier) {
            valid = false;
            tempErrors.identifier = 'Username or Email is required';
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

                // Save token to session storage
                console.log(response)
                if (response.data?.user?.accessToken) {
                    sessionStorage.setItem('authToken', response.data.user.accessToken);
                    navigate('/dashboard'); // Navigate to dashboard
                } else {
                    // Handle case where response does not contain a token
                    setErrors({ general: 'No token received' });
                }
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
                    <label className="block mb-1" htmlFor="identifier">Username or Email</label>
                    <input
                        type="text"
                        id="identifier"
                        name="identifier"
                        value={formData.identifier}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.identifier && <span className="text-red-500 text-sm">{errors.identifier}</span>}
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
