import { motion } from 'motion/react';
import { Heart, Stethoscope, Bed, Star, ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  
  const stats = [
    {
      value: '15+',
      label: 'Specialist Doctors',
      desc: 'Expert clinical consultants',
      icon: Stethoscope,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      value: '25,000+',
      label: 'Patients Treated',
      desc: 'Trusted by families nationwide',
      icon: Heart,
      iconColor: 'text-rose-500',
      bgColor: 'bg-rose-50'
    },
    {
      value: '120+',
      label: 'Inpatient Beds',
      desc: 'Modern recovery rooms',
      icon: Bed,
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      value: '98%',
      label: 'Satisfaction Rate',
      desc: 'Outstanding care quality',
      icon: Star,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50'
    }
  ];

  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-indigo-50/20 to-white overflow-hidden">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs sm:text-sm font-bold shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-500 fill-blue-500/10" />
              <span>Your Health, Our Supreme Priority</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Exceptional Care for{' '}
              <span className="text-blue-600 relative inline-block">
                Your Family
                <span className="absolute bottom-1 left-0 w-full h-1.5 bg-blue-200/40 rounded-full -z-10" />
              </span>{' '}
              and You
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Experience world-class healthcare driven by compassion, clinical excellence, and advanced medical technology. Anaverse Hospital provides standard clinical specialties with warmth and hospitality.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={handleLearnMore}
                className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Book Appointment</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Hero Image Wrap */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[450px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-tr from-blue-100 to-indigo-100"
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800"
                alt="Friendly female doctor smiling at a smiling child patient during pediatric consultation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay shadow to integrate bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Decorative background circle */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-100/60 rounded-full blur-xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100/60 rounded-full blur-xl -z-10 animate-pulse" />
          </div>

        </div>

        {/* Floating Overlapping Metrics Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-24 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 group hover:translate-y-[-2px] transition-transform duration-300"
                >
                  <div className={`p-3.5 ${stat.bgColor} rounded-2xl transition-colors duration-300 flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight block">
                      {stat.value}
                    </span>
                    <span className="text-sm font-bold text-slate-800 block">
                      {stat.label}
                    </span>
                    <span className="text-xs text-slate-400 font-medium block mt-0.5">
                      {stat.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
