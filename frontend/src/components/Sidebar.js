import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/">Dashboard</Link>
            <Link to="/my-profile">My Profile</Link>
            {/* ... add other side nav links */}
        </div>
    );
}

export default Sidebar;
