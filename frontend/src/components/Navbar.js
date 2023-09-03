// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white text-gray-800 shadow-md w-full sticky top-0 z-10">
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold text-gray-900">
                        <Link to="/" className="text-gray-700 hover:text-gray-900">Brand Name</Link></div>
                    <div className="hidden md:flex space-x-4">
                        <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
                        <Link to="/content-library" className="text-gray-700 hover:text-gray-900">Content Library</Link>
                        <Link to="/consultations" className="text-gray-700 hover:text-gray-900">Consultations</Link>
                        {/* ... add other routes as necessary ... */}
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {/* Hamburger icon with adjusted color */}
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden space-y-2 mt-2">
                        <Link to="/" className="block text-gray-700 hover:text-gray-900">Dashboard</Link>
                        <Link to="/content-library" className="block text-gray-700 hover:text-gray-900">Content Library</Link>
                        <Link to="/consultations" className="block text-gray-700 hover:text-gray-900">Consultations</Link>
                        {/* ... add other routes for mobile view as necessary ... */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
