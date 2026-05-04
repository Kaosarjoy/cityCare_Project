import React from 'react';
import { 
  LogIn, 
  PlusCircle, 
  CheckCircle, 
  CreditCard, 
  UserCheck, 
  Settings, 
  MousePointerClick,
  Sparkles
} from 'lucide-react';

// --- JSON Data for Features ---
const systemSteps = [
  {
    id: 1,
    title: "Seamless Authentication",
    description: "Citizens register with their details. Social login (Google) is also available for instant access to the platform.",
    icon: <LogIn className="text-blue-400" />,
    role: "Citizen / Admin / Staff",
    glow: "group-hover:shadow-blue-500/20"
  },
  {
    id: 2,
    title: "Report with Precision",
    description: "Submit detailed reports for broken streetlights or potholes with live photos, specific categories, and GPS location.",
    icon: <PlusCircle className="text-emerald-400" />,
    role: "Citizen",
    glow: "group-hover:shadow-emerald-500/20"
  },
  {
    id: 3,
    title: "Smart Admin Assignment",
    description: "Our admin dashboard allows quick review and direct assignment of issues to the most relevant staff members.",
    icon: <UserCheck className="text-purple-400" />,
    role: "Admin",
    glow: "group-hover:shadow-purple-500/20"
  },
  {
    id: 4,
    title: "Priority Accelerator",
    description: "Boost your issue to 'High' priority for just 100tk. Boosted issues move to the top of the processing queue.",
    icon: <CreditCard className="text-yellow-400" />,
    role: "Citizen",
    glow: "group-hover:shadow-yellow-500/20"
  },
  {
    id: 5,
    title: "Real-time Staff Action",
    description: "Staff members manage their tasks efficiently, updating progress from 'Pending' to 'Resolved' instantly.",
    icon: <Settings className="text-orange-400" />,
    role: "Staff",
    glow: "group-hover:shadow-orange-500/20"
  },
  {
    id: 6,
    title: "Full Resolution Cycle",
    description: "Complete transparency with a full tracking timeline. Citizens receive updates once the issue is closed.",
    icon: <CheckCircle className="text-cyan-400" />,
    role: "System / Staff",
    glow: "group-hover:shadow-cyan-500/20"
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Dynamic Background Blurs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles size={14} /> The CityCare Journey
        </div>
        <h1 className="text-5xl font-black text-white sm:text-6xl tracking-tight mb-6">
          How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">CityCare</span> Works
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A streamlined digital ecosystem designed for transparency, speed, and efficient public service management.
        </p>
      </div>

      {/* Steps Grid with Connector Line (Hidden on mobile) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
        
        {systemSteps.map((step, index) => (
          <div 
            key={step.id} 
            className={`group relative bg-white/5 backdrop-blur-xl rounded-[32px] p-10 border border-white/10 hover:border-white/20 transition-all duration-500 ${step.glow} hover:shadow-2xl hover:-translate-y-2`}
          >
            {/* Step Number Badge */}
            <div className="absolute -top-5 -right-5 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
              {index + 1}
            </div>

            {/* Icon & Role */}
            <div className="flex justify-between items-start mb-8">
              <div className="p-4 bg-white/10 rounded-2xl border border-white/10 group-hover:bg-white/15 transition-colors">
                {React.cloneElement(step.icon, { size: 32 })}
              </div>
              <span className="text-[10px] font-black px-3 py-1.5 bg-white/5 text-gray-400 rounded-lg border border-white/10 uppercase tracking-tighter">
                {step.role}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm font-medium mb-6">
              {step.description}
            </p>

            {/* Bottom Accent */}
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-50 group-hover:w-full transition-all duration-700"></div>
          </div>
        ))}
      </div>

      {/* Modern CTA Footer */}
      <div className="max-w-5xl mx-auto mt-32">
        <div className="relative group p-12 rounded-[40px] bg-gradient-to-br from-indigo-600/20 to-blue-600/20 backdrop-blur-3xl border border-white/10 text-center overflow-hidden">
          {/* Decorative shapes inside CTA */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Ready to transform your neighborhood?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg font-medium">
              Join our community of proactive citizens. Get premium access for unlimited reports and high-priority resolutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="group px-10 py-4 bg-white text-indigo-950 font-black rounded-2xl hover:bg-blue-50 transition-all flex items-center gap-3 shadow-xl shadow-blue-500/10">
                <MousePointerClick size={20} className="group-hover:animate-bounce" /> 
                Get Started Now
              </button>
              <button className="px-10 py-4 bg-transparent border border-white/20 text-white font-black rounded-2xl hover:bg-white/10 transition-all">
                Explore All Issues
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;