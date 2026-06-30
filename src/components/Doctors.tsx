import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Calendar, Award } from 'lucide-react';
import { DOCTORS } from '../data';

interface DoctorsProps {
  onOpenBookingWithDoctor: (doctorId: string) => void;
}

export default function Doctors({ onOpenBookingWithDoctor }: DoctorsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = 320; // card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white border-t border-b border-slate-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Sticky Sidebar Text Area) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-xs font-bold">
                <span>Our Doctors</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Experienced Specialist Doctors
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm font-medium">
              Consult with our board-certified clinical experts. Our physicians are recognized leaders in their fields, dedicated to bringing you the highest standard of personalized medical treatments.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenBookingWithDoctor('')}
                className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                Schedule Consultation
              </button>
              
              {/* Modern Custom Carousel Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-all shadow-sm cursor-pointer"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-all shadow-sm cursor-pointer"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="hidden lg:block border-t border-slate-100 pt-6">
              <div className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <Award className="w-5 h-5 text-indigo-600" />
                <span>Fully Licensed & Certified</span>
              </div>
            </div>

          </div>

          {/* Right Column (Horizontal Carousel of Doctor Cards) */}
          <div className="lg:col-span-8 overflow-hidden relative">
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {DOCTORS.map((doc) => (
                <div
                  key={doc.id}
                  className="w-[280px] sm:w-[300px] flex-shrink-0 snap-start bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-slate-200/40 hover:bg-white"
                >
                  {/* Portrait photo against a clean solid background */}
                  <div className="relative aspect-[3/4] bg-slate-200/50 overflow-hidden flex-shrink-0">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter contrast-[1.02] transform group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating schedule indicator */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${doc.available ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
                      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                        {doc.available ? 'Available' : 'On Leave'}
                      </span>
                    </div>
                  </div>

                  {/* White text wrapper box at the bottom */}
                  <div className="p-5 bg-white space-y-3 border-t border-slate-100">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-950 truncate">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-bold text-blue-600 truncate mt-0.5">
                        {doc.specialty}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-50">
                      {/* Rating block */}
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span className="font-extrabold text-slate-800">{doc.rating}</span>
                        <span className="text-slate-400">({doc.reviewsCount})</span>
                      </div>
                      
                      <span className="text-slate-400 font-medium">Exp: {doc.experience}</span>
                    </div>

                    {/* Booking CTAs */}
                    <button
                      onClick={() => onOpenBookingWithDoctor(doc.id)}
                      className="w-full py-2 bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-700 border border-slate-100 hover:border-blue-600 rounded-xl text-xs font-extrabold tracking-wide transition-all flex items-center justify-center gap-1.5 group-hover:bg-slate-100 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-blue-600 group-hover:text-white group-hover:scale-110 transition-colors" />
                      <span>Book Consultation</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
