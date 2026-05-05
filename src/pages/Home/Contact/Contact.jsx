import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Globe,
  Linkedin 
} from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <section className="bg-[#0f172a] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <MessageSquare size={14} /> Get In Touch
          </div>

          <h2 className="text-4xl font-black text-white sm:text-5xl mb-4">
            Connect With <span className="text-blue-400">CityCare</span>
          </h2>

          <p className="text-gray-400 text-lg">
            Have suggestions or need help? Our team is here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Info</h3>

            {[ 
              { icon: <Mail />, label: "Email", value: "support@citycare.com" },
              { icon: <Phone />, label: "Phone", value: "+880123456789" },
              { icon: <MapPin />, label: "Address", value: "Feni, Bangladesh" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-xl">
                {React.cloneElement(item.icon, { className: "text-blue-400" })}
                <div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <p className="text-white font-bold">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="pt-6 flex gap-4">
              {[ <Linkedin />, <Globe />].map((icon, i) => (
                <button key={i} className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white">
                  {React.cloneElement(icon, { size: 20 })}
                </button>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="bg-white/5 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 bg-white/5 text-white rounded"
              />

              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 bg-white/5 text-white rounded"
              />

              <textarea 
                placeholder="Message"
                className="w-full p-3 bg-white/5 text-white rounded"
              ></textarea>

              <button className="w-full bg-blue-500 p-3 rounded text-white flex justify-center gap-2">
                <Send size={18} /> Send
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;