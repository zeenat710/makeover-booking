import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Mobile icons

const Navbar = () => {
  // Mobile menu open/close karne ke liye state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#eee6de] sticky top-0 z-50 px-6 py-4 md:px-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 bg-[#f3efea] rounded-full flex items-center justify-center font-playfair font-bold text-xs border border-[#d4c3b3]">
            EM
          </div>
          <span className="font-bold tracking-[0.2em] text-sm md:text-base">Era Makeover</span>
        </Link>

        {/* Desktop Menu - md:flex ka matlab hai tablet/laptop par dikhega, mobile par hidden */}
        <ul className="hidden md:flex gap-10 text-[10px] tracking-[0.3em] font-medium text-gray-600">
          <li><Link to="/about" className="hover:text-[#a89078] transition-colors">ABOUT US</Link></li>
          <li><Link to="/portfolio" className="hover:text-[#a89078] transition-colors">PORTFOLIO</Link></li>
          <li><Link to="/packages" className="hover:text-[#a89078] transition-colors">PACKAGES</Link></li>
          <li><Link to="/contact" className="hover:text-[#a89078] transition-colors">CONTACT US</Link></li>
        </ul>

        {/* Hamburger Icon - Only visible on Mobile */}
        <div className="md:hidden text-2xl cursor-pointer text-[#2c2c2c]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu Dropdown - Smooth Animation ke liye simple conditional rendering */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[#eee6de] md:hidden shadow-xl animate-fadeIn">
          <ul className="flex flex-col items-center py-8 gap-6 text-[11px] tracking-[0.3em] font-bold text-gray-700">
            <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#a89078]">ABOUT US</Link></li>
            <li><Link to="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-[#a89078]">PORTFOLIO</Link></li>
            <li><Link to="/packages" onClick={() => setIsOpen(false)} className="hover:text-[#a89078]">PACKAGES</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#a89078]">CONTACT US</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;