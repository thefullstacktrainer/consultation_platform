import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import ContentLibrary from './components/ContentLibrary';
import Consultations from './components/Consultations';
import Community from './components/Community';
import Pricing from './components/Pricing';
import Support from './components/Support';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/content-library" element={<ContentLibrary />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/community" element={<Community />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
            {/* ... add other routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
