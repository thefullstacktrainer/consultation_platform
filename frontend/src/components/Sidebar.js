import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    // This is just a placeholder. In a real app, you'd determine this based on user roles, etc.
    const isConsultantOrContentCreator = false;

    return (
        <div className="p-4 bg-white">
            <div className="fixed bg-gray-800 overflow-y-auto w-64 h-[calc(100vh-32px)] mt-1 mb-1 rounded-lg text-white p-6">
                <nav className="space-y-4">
                    <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/">Home</Link>
                    <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/dashboard">Dashboard</Link>
                    <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/my-profile">My Profile</Link>
                    <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/my-content">My Content</Link>
                    <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/my-consultations">My Consultations</Link>
                    <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/messages">Messages</Link>
                    <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/notifications">Notifications</Link>
                    <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/payment-subscriptions">Payment & Subscriptions</Link>
                    <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/settings">Settings</Link>

                    {/* Conditional rendering based on user role */}
                    {isConsultantOrContentCreator && (
                        <>
                            <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/consultation-slots">Consultation Slots</Link>
                            <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/reviews-ratings">Reviews & Ratings</Link>
                            <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/earnings">Earnings</Link>
                            <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/analytics">Analytics</Link>
                        </>
                    )}

                    <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/logout">Logout</Link>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
