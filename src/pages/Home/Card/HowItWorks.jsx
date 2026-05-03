import React from 'react';
import { 
  LogIn, 
  PlusCircle, 
  CheckCircle, 
  CreditCard, 
  UserCheck, 
  Settings, 
  ArrowRight,
  MousePointerClick
} from 'lucide-react';

// --- JSON Data for Features ---
const systemSteps = [
  {
    id: 1,
    title: "Authentication",
    description: "Citizens register with their details. Social login (Google) is also available for quick access.",
    icon: <LogIn className="text-blue-500" />,
    role: "Citizen / Admin / Staff",
    color: "bg-blue-50"
  },
  {
    id: 2,
    title: "Report an Issue",
    description: "Citizens submit reports for broken streetlights or potholes with photos, category, and location.",
    icon: <PlusCircle className="text-green-500" />,
    role: "Citizen",
    color: "bg-green-50"
  },
  {
    id: 3,
    title: "Admin Assignment",
    description: "Admin reviews the reported issues and assigns them to available Staff members.",
    icon: <UserCheck className="text-purple-500" />,
    role: "Admin",
    color: "bg-purple-50"
  },
  {
    id: 4,
    title: "Priority Boost",
    description: "Citizens can pay 100tk to boost an issue to 'High' priority, moving it to the top of the list.",
    icon: <CreditCard className="text-yellow-600" />,
    role: "Citizen",
    color: "bg-yellow-50"
  },
  {
    id: 5,
    title: "Staff Action",
    description: "Staff updates the issue status from 'Pending' to 'In-Progress' and finally to 'Resolved'.",
    icon: <Settings className="text-orange-500" />,
    role: "Staff",
    color: "bg-orange-50"
  },
  {
    id: 6,
    title: "Issue Resolution",
    description: "Once resolved, the tracking timeline is updated, and the citizen can see the final status.",
    icon: <CheckCircle className="text-emerald-500" />,
    role: "System / Staff",
    color: "bg-emerald-50"
  }
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          How <span className="text-indigo-600">CityCare</span> Works
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          A step-by-step guide to our Public Infrastructure Issue Reporting System.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {systemSteps.map((step, index) => (
          <div 
            key={step.id} 
            className="relative group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Step Number */}
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
              {index + 1}
            </div>

            {/* Icon & Role Badge */}
            <div className="flex justify-between items-start mb-6">
              <div className={`p-4 rounded-xl ${step.color}`}>
                {React.cloneElement(step.icon, { size: 32 })}
              </div>
              <span className="text-[10px] font-bold px-2 py-1 bg-gray-100 text-gray-600 rounded-md uppercase">
                {step.role}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {step.description}
            </p>

            {/* Hover Decorator */}
            <div className="mt-6 flex items-center text-indigo-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More <ArrowRight size={16} className="ml-2" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary Section */}
      <div className="max-w-4xl mx-auto mt-20 bg-indigo-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to improve your city?</h2>
          <p className="text-indigo-100 mb-8 max-w-lg">
            Join thousands of citizens making their neighborhood better, one report at a time. 
            Premium members get unlimited reports and priority support.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors flex items-center gap-2">
              <MousePointerClick size={20} /> Get Started
            </button>
            <button className="bg-transparent border border-indigo-400 px-8 py-3 rounded-full font-bold hover:bg-indigo-800 transition-colors">
              View All Issues
            </button>
          </div>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      </div>
    </div>
  );
};

export default HowItWorks;