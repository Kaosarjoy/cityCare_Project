import React from 'react';
import { 
  LightbulbOff, 
  Construction, 
  Droplets, 
  Trash2, 
  Footprints, 
  ShieldCheck,
  Zap,
  Clock,
  LayoutDashboard,
  ArrowUpRight
} from 'lucide-react';
import { NavLink } from 'react-router';

// --- Static JSON Data for CityCare Services ---
const servicesData = [
  {
    id: 1,
    title: "Streetlight Repair",
    description: "Report broken or flickering streetlights to ensure safety and visibility in your neighborhood at night.",
    icon: <LightbulbOff className="text-yellow-400" />,
    tag: "Safety",
    gradient: "from-yellow-500/20 to-transparent"
  },
  {
    id: 2,
    title: "Pothole Fixing",
    description: "Report road damages and potholes to help municipal staff prioritize repairs and improve road safety.",
    icon: <Construction className="text-orange-400" />,
    tag: "Infrastructure",
    gradient: "from-orange-500/20 to-transparent"
  },
  {
    id: 3,
    title: "Water Leakage Control",
    description: "Quickly report water pipe bursts or leakage to prevent resource waste and maintain city water supply.",
    icon: <Droplets className="text-blue-400" />,
    tag: "Municipal",
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    id: 4,
    title: "Garbage Overflow Management",
    description: "Ensure a cleaner environment by reporting overflowing trash bins or illegal dumping sites in your area.",
    icon: <Trash2 className="text-emerald-400" />,
    tag: "Sanitation",
    gradient: "from-emerald-500/20 to-transparent"
  },
  {
    id: 5,
    title: "Damaged Footpath Repair",
    description: "Report broken sidewalks or footpaths to ensure safe walking conditions for pedestrians.",
    icon: <Footprints className="text-gray-400" />,
    tag: "Pedestrian",
    gradient: "from-gray-500/20 to-transparent"
  },
  {
    id: 6,
    title: "Priority Issue Boosting",
    description: "Premium users or citizens can boost reports to high priority for faster resolution and tracking.",
    icon: <Zap className="text-indigo-400" />,
    tag: "Premium",
    gradient: "from-indigo-500/20 to-transparent"
  }
];

const ServiceCard = () => {
  return (
    <section className="relative bg-[#0f172a] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-xs uppercase tracking-widest">
            CityCare Ecosystem
          </span>
          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl tracking-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Public Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg">
            Experience a new era of municipal transparency and efficiency.
          </p>
        </div>

        {/* Services Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

              {/* Icon Section */}
              <div className="flex justify-between items-start mb-8">
                <div className="relative">
                   <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="relative p-4 bg-white/10 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(service.icon, { size: 30 })}
                  </div>
                </div>
                <span className="text-[10px] font-black px-2.5 py-1 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 uppercase tracking-tighter">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                {service.title}
                <ArrowUpRight size={18} className="text-white/0 group-hover:text-white/100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
                {service.description}
              </p>

              {/* Stats/Tags with Glass Effect */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/5 text-[11px] text-gray-300">
                  <ShieldCheck size={14} className="text-emerald-400" /> Verified
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/5 text-[11px] text-gray-300">
                  <Clock size={14} className="text-blue-400" /> 24/7 Support
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Ultra Modern Glass */}
        <div className="mt-20 relative p-1 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
          <div className="bg-[#0f172a] rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <div className="hidden md:flex p-5 bg-blue-500/10 rounded-2xl border border-blue-500/20 animate-pulse">
                <LayoutDashboard size={48} className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-3xl font-black text-white mb-2">Ready to contribute?</h4>
                <p className="text-gray-400 font-medium">Be the hero your neighborhood needs. Report issues instantly.</p>
              </div>
            </div>
            <NavLink to='/report' className="w-full md:w-auto">
              <button className="w-full group px-10 py-4 bg-white text-[#0f172a] font-black rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20">
                Start Reporting Now
                <Zap size={20} className="fill-current group-hover:animate-bounce" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;