import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

const faqData = [
  {
    question: "How can I report a public infrastructure issue?",
    answer: "After logging into your account, go to the 'Report Issue' page. Fill out the form with a title, description, category (e.g., Pothole, Streetlight), upload an image, and provide the location. Once submitted, it will appear in your 'My Issues' list."
  },
  {
    question: "Is there a limit to how many issues I can report?",
    answer: "Free users can report a maximum of 3 issues. To report unlimited issues, you can upgrade to a Premium subscription from your profile page for 1000tk."
  },
  {
    question: "What is 'Boosting' an issue?",
    answer: "Boosting allows you to increase an issue's priority to 'High' by paying 100tk. Boosted issues stay at the top of the list for Admin and Staff, ensuring faster attention."
  },
  {
    question: "How can I track the progress of my report?",
    answer: "Every issue has a dedicated 'Issue Tracking & Timeline' section. You can see real-time updates like when a staff member is assigned, when work starts, and when it is marked as resolved."
  },
  {
    question: "Can I edit or delete my reported issue?",
    answer: "You can edit or delete an issue only if its status is still 'Pending'. Once a staff member is assigned or work begins, these actions are disabled to maintain the system's integrity."
  },
  {
    question: "What happens after an issue is marked as 'Resolved'?",
    answer: "When a staff member fixes the issue, they update the status to 'Resolved'. You can then view the final update in your timeline. If the staff member or admin closes the issue, it will be marked as 'Closed'."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0f172a] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <HelpCircle size={14} /> Knowledge Base
          </div>
          <h2 className="text-4xl font-black text-white sm:text-5xl tracking-tight mb-4">
            Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about using the CityCare platform.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`group rounded-3xl border transition-all duration-500 overflow-hidden ${
                activeIndex === index 
                ? 'bg-white/10 border-white/20 shadow-2xl shadow-indigo-500/10' 
                : 'bg-white/5 border-white/5 hover:border-white/10'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${
                  activeIndex === index ? 'text-blue-400' : 'text-white'
                }`}>
                  {item.question}
                </span>
                <div className={`p-2 rounded-xl transition-all duration-500 ${
                  activeIndex === index ? 'bg-blue-500 text-white rotate-180' : 'bg-white/5 text-gray-500'
                }`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 border-t border-white/5">
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {item.answer}
                  </p>
                  {activeIndex === index && (
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-widest animate-pulse">
                      <Sparkles size={14} /> Helpful Tip
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium">
            Still have questions? <span className="text-blue-400 cursor-pointer hover:underline"><Link to="/contact">Contact our support team</Link></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;