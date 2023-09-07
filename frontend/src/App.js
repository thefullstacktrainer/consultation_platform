import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import MyProfile from './components/MyProfile';
import MyContent from './components/MyContent';
import MyConsultations from './components/MyConsultations';
import Messages from './components/Messages';
import Notifications from './components/Notifications';
import PaymentSubscriptions from './components/PaymentSubscriptions';
import Settings from './components/Settings';
import ConsultationSlots from './components/ConsultationSlots';
import ReviewsRatings from './components/ReviewsRatings';
import Earnings from './components/Earnings';
import Analytics from './components/Analytics';
import Sidebar from './components/Sidebar';
import ContentLibrary from './components/ContentLibrary';
import Consultations from './components/consultations/Consultations';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import UserContext from './components/UserContext';
import Register from './components/user/Register';
import Login from './components/user/Login';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Assuming user starts as logged out

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <div className="flex bg-white">
          {isLoggedIn &&
            <div className='w-1/5'>
              <Sidebar />
            </div>
          }
          <div className={isLoggedIn ? "w-4/5 pr-4 pt-4" : "w-full p-4"}>
            <Navbar />
            <div className="flex-grow overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/my-content" element={<MyContent />} />
                <Route path="/my-consultations" element={<MyConsultations />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/payment-subscriptions" element={<PaymentSubscriptions />} />
                <Route path="/settings" element={<Settings />} />

                {/* Additional Routes for consultants/content creators */}
                <Route path="/consultation-slots" element={<ConsultationSlots />} />
                <Route path="/reviews-ratings" element={<ReviewsRatings />} />
                <Route path="/earnings" element={<Earnings />} />
                <Route path="/analytics" element={<Analytics />} />

                {/* Routes you've provided before */}
                <Route path="/content-library" element={<ContentLibrary />} />
                <Route path="/consultations" element={<Consultations />} />
                {/* ... add other routes as needed */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
