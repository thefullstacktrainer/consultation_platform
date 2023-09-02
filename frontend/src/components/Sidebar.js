import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    // This is just a placeholder. In a real app, you'd determine this based on user roles, etc.
    const isConsultantOrContentCreator = true;

    return (
        <div className="bg-gray-800 overflow-y-auto w-64 h-screen text-white p-6">
            <h2 className="text-2xl mb-6 font-semibold">Navigation</h2>

            <nav className="space-y-4">
                <Link className="block py-2 px-4 hover:bg-gray-700 transition duration-200" to="/">Dashboard</Link>
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
    );
}

export default Sidebar;
