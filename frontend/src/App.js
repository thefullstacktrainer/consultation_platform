import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
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
import Consultations from './components/Consultations';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="main-content flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
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
  );
}

export default App;
