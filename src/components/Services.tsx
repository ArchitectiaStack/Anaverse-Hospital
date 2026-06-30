import { motion } from 'motion/react';
import { ArrowRight, Stethoscope, Bed, AlertCircle, Activity, FlaskConical, Pill } from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  
  // Icon mapper helper
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-white" />;
      case 'Bed':
        return <Bed className="w-5 h-5 text-white" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5 text-white" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-white" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-white" />;
      case 'Pills':
        return <Pill className="w-5 h-5 text-white" />;
      default:
        return <Stethoscope className="w-5 h-5 text-white" />;
    }
  };

  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById('booking-modal-backdrop');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If modal is not in DOM, we trigger click on Header Online Booking or just scroll to emergency CTA
      const footerCta = document.getElementById('contact');
      if (footerCta) footerCta.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold">
              <span>Medical Specialties</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Clinical Services
            </h2>
          </div>
          
          <button
            onClick={handleScrollToBooking}
            className="group inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-bold tracking-wide cursor-pointer transition-colors"
          >
            <span>See All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Services Grid (6 Columns on xl, uniform cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm shadow-slate-100/40 hover:shadow-xl hover:shadow-slate-200/50 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Circular Descriptive Photo */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm mb-6 flex-shrink-0">
                <img
                  src={srv.image}
                  alt={`${srv.title} illustration`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Floating badge icon centered overlapping bottom of the photo */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg border-2 border-white group-hover:bg-blue-700 transition-colors z-10">
                  {getIconComponent(srv.iconName)}
                </div>
              </div>

              {/* Bold Title Text & Details */}
              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {srv.description}
                  </p>
                </div>
                
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase pt-3 block opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More &rarr;
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
