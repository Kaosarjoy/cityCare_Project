import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Globe,
  Github,
  Linkedin
} from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for contact form submission
  };

  return (
    <section className="bg-[#0f172a] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <MessageSquare size={14} /> Get In Touch
          </div>
          <h2 className="text-4xl font-black text-white sm:text-5xl tracking-tight mb-4">
            Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">CityCare</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have suggestions or need help? Our team is here to assist you in building a better city.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Information Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            {/* Info Cards */}
            {[
              { icon: <Mail className="text-blue-400" />, label: "Email Us", value: "support@citycare.com", desc: "Response within 24 hours" },
              { icon: <Phone className="text-indigo-400" />, label: "Call Us", value: "+880 1234 567 890", desc: "Sun - Thu, 9am - 6pm" },
              { icon: <MapPin className="text-emerald-400" />, label: "Office Address", value: "Compact Polytechnic Institute", desc: "Feni, Bangladesh" }
            ].map((info, idx) => (
              <div key={idx} className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center gap-6 hover:bg-white/10 transition-all duration-300">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{info.label}</p>
                  <p className="text-lg font-bold text-white mb-1">{info.value}</p>
                  <p className="text-sm text-gray-400">{info.desc}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-white font-bold mb-4">Follow Our Updates</p>
              <div className="flex gap-4">
                {[<Github />, <Linkedin />, <Globe />].map((icon, i) => (
                  <button key={i} className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                    {React.cloneElement(icon, { size: 20 })}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-2">Full Name</label>
                  <input type="text" placeholder="Joy" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-2">Email Address</label>
                  <input type="email" placeholder="joy@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-2">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option className="bg-[#0f172a]">Suggestion</option>
                  <option className="bg-[#0f172a]">Report Issue Help</option>
                  <option className="bg-[#0f172a]">Premium Subscription</option>
                  <option className="bg-[#0f172a]">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-2">Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
              </div>

              <button className="w-full group bg-gradient-to-r from-blue-500 to-indigo-600 p-[1px] rounded-2xl transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <div className="bg-[#0f172a] group-hover:bg-transparent rounded-[15px] py-4 flex items-center justify-center gap-2 text-white font-black transition-all">
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </div>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;