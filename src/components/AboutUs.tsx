import { motion } from 'motion/react';
import { Clock, Users, Building, ShieldCheck, Plus } from 'lucide-react';

export default function AboutUs() {
  const features = [
    {
      title: '24-Hour Service',
      description: 'Emergency, pharmacy, and ambulance available around the clock.',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Professional Medical Staff',
      description: 'Certified specialists and compassionate nursing teams.',
      icon: Users,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Modern Facilities',
      description: 'Advanced surgical suites, high-tech labs, and comfortable wards.',
      icon: Building,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      title: 'Quality Healthcare',
      description: 'Safe, quality-accredited treatments with outstanding patient care.',
      icon: ShieldCheck,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50'
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      
      {/* Large Floating Decorative Medical Cross */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-[0.03] pointer-events-none select-none">
        <Plus className="w-[450px] h-[450px] text-slate-900 stroke-[1]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Glass Hospital Render & Ambulance */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 aspect-[4/5] bg-slate-100"
            >
              <img
                src="https://i.ibb.co/8DK3njZq/Atenci-n-personalizada-para-tus-seres-queridos.jpg"
                alt="Modern glass medical center building with clinical ambulance in front"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Accent tag floating on image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:right-4 bg-blue-600 text-white p-5 rounded-2xl shadow-xl max-w-xs"
            >
              <p className="text-2xl font-black font-mono">100%</p>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-100">National Healthcare Accreditation</p>
              <p className="text-[10px] text-blue-200 mt-1 leading-relaxed">Fully certified to provide superior clinical treatments and patient services.</p>
            </motion.div>
          </div>

          {/* Right Column: Text block & Micro Features */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 border border-slate-200/50 rounded-full text-slate-800 text-xs font-extrabold tracking-wide">
              <span>About Us</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Anaverse Hospital:{' '}
              <span className="text-blue-600">For a Healthier Life</span>
            </h2>

            {/* Description Paragraphs */}
            <p className="text-slate-600 leading-relaxed font-medium">
              Anaverse Hospital is committed to setting the benchmark for clinical care and healthcare excellence. We combine standard-defining medical technology with warm, individualized attention to ensure you and your loved ones receive the finest medical treatments possible.
            </p>
            <p className="text-slate-500 leading-relaxed text-sm">
              From preventative consultations and advanced imaging to emergency surgery, we have built a comprehensive medical center designed around safety, recovery, and patient convenience.
            </p>

            {/* 2x2 Grid of Micro-Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-200">
                    <div className={`p-3 ${feat.bgColor} ${feat.color} rounded-xl h-fit flex-shrink-0 shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-900">{feat.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
