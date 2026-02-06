import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Animation ke liye
import aboutImg from '../assets/about-main.png';
import team1 from '../assets/team-1.png';
import team2 from '../assets/team-2.png';
import team3 from '../assets/team-3.png';

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-[#f3efea] min-h-screen py-16 md:py-24 px-6 md:px-20 font-montserrat overflow-hidden">
      
      {/* Page Title */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase text-gray-500 mb-3">About Us</h2>
        <div className="w-12 h-[1px] bg-gray-400 mx-auto"></div>
      </motion.div>

      {/* Main Image Wrapper - Responsive Padding */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto bg-white p-2 md:p-4 shadow-xl mb-16 md:mb-24"
      >
        <img src={aboutImg} alt="Makeup session" className="w-full h-[300px] md:h-[500px] object-cover" />
      </motion.div>

      {/* Philosophy & Story Grid - Stackable */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="uppercase tracking-[0.2em] font-bold mb-4 text-xs md:text-sm text-[#a89078]">Our Philosophy</h3>
          <p className="text-gray-600 text-sm leading-[1.8] text-justify md:text-left">
            Empowering your natural beauty through personalized artistry. We believe every client should feel and look beautiful, tailored to your unique style. We don't just apply makeup; we enhance the confidence that already exists within you.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="uppercase tracking-[0.2em] font-bold mb-4 text-xs md:text-sm text-[#a89078]">Our Story</h3>
          <p className="text-gray-600 text-sm leading-[1.8] text-justify md:text-left">
            Founded in 2020 by Era, Era Makeover was created as a sanctuary for beauty transformation. What started as a small passion project has grown into a premier destination for brides and editorial shoots across the country.
          </p>
        </motion.div>
      </div>

      {/* Team Section - Responsive Grid */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-24">
        <h2 className="text-center text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-12 md:mb-16">The Creative Minds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-12">
          {[
            { img: team1, name: "Olivia Brown", role: "Lead Makeup Artist" },
            { img: team2, name: "Isabella Rodriguez", role: "Beauty Director" },
            { img: team3, name: "Mei Lin", role: "Senior Stylist" }
          ].map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-[#d4c3b3] p-2 mb-6 transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <h4 className="font-bold text-sm tracking-widest uppercase mb-1">{member.name}</h4>
              <p className="text-xs text-gray-500 italic">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center pb-10"
      >
        <Link to="/contact">
          <button className="bg-[#c4b3a3] text-white px-10 py-4 text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-[#2c2c2c] transition-all duration-300 shadow-lg active:scale-95">
            Book Your Appointment
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default About;