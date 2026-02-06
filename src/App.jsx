import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import BookingInfo from './pages/BookingInfo.jsx';
import CategoryPage from './pages/CategoryPage';
import InquiryPage from './pages/InquiryPage';

import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking-info" element={<BookingInfo />} />
            <Route path="/portfolio/:categoryName" element={<CategoryPage />} />
            <Route path="/inquiry" element={<InquiryPage />} />
          </Routes>
        </main>

        {/* 4. Footer hamesha yahan dikhega */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;