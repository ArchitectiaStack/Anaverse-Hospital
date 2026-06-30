/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Facilities from './components/Facilities';
import News from './components/News';
import EmergencyFooter from './components/EmergencyFooter';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedDoctorId, setPreselectedDoctorId] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'doctors', 'facilities', 'news', 'contact'];
      const scrollPosition = window.scrollY + 200; // offset for sticky navigation header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openBookingWithDoctor = (docId: string) => {
    setPreselectedDoctorId(docId);
    setIsBookingOpen(true);
  };

  const openBookingGeneral = () => {
    setPreselectedDoctorId(undefined);
    setIsBookingOpen(true);
  };

  return (
    <div className="font-sans antialiased text-slate-600 bg-white min-h-screen">
      
      {/* Navigation Header */}
      <Header onOpenBooking={openBookingGeneral} activeSection={activeSection} />
      
      <main>
        {/* Hero Banner Section */}
        <Hero onOpenBooking={openBookingGeneral} />
        
        {/* About Section */}
        <AboutUs />
        
        {/* Services & Specialties Section */}
        <Services />
        
        {/* Doctor Slider Section */}
        <Doctors onOpenBookingWithDoctor={openBookingWithDoctor} />
        
        {/* Modern Facilities Strip */}
        <Facilities />
        
        {/* Health Articles & Tips */}
        <News />
        
        {/* Split Emergency Hotline Banner */}
        <EmergencyFooter onOpenBooking={openBookingGeneral} />
      </main>

      {/* Footer & Accreditations */}
      <Footer />

      {/* Appointment Ticket System */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedDoctorId={preselectedDoctorId}
      />

    </div>
  );
}
