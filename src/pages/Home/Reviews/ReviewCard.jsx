import { Star, Quote, ShieldCheck } from "lucide-react";

const ReviewCard = ({ review }) => {
  const { name, email, role, rating, comment, date } = review;

  return (
    <div className="relative w-full max-w-md mx-auto group p-4 overflow-hidden">
      
      {/* Background Decorative Bubbles (Image style) */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-600 rounded-full blur-[50px] opacity-60 group-hover:opacity-80 transition-opacity"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500 rounded-full blur-[40px] opacity-50 group-hover:opacity-70 transition-opacity"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-fuchsia-500 rounded-full blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity"></div>

      {/* Main Glass Card */}
      <div className="relative h-full bg-white/10 backdrop-blur-[18px] border border-white/20 rounded-[2.5rem] p-6 sm:p-8 flex flex-col shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/15">
        
        {/* Quote Icon */}
        <Quote className="absolute top-6 right-8 text-white/5 w-12 h-12 rotate-180" />

        {/* Header Section */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Avatar with gradient glow */}
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 flex items-center justify-center text-white font-bold text-xl shadow-inner">
              {name?.charAt(0)}
            </div>
            <div className="min-w-0">
              <h3 className="text-white font-black text-base sm:text-lg tracking-tight truncate leading-tight">
                {name}
              </h3>
              <p className="text-white/60 text-[10px] sm:text-xs truncate font-medium">
                {email}
              </p>
            </div>
          </div>
          
          <span className="flex-shrink-0 text-[10px] font-black px-3 py-1 bg-white/10 text-white rounded-full border border-white/20 uppercase tracking-tighter">
            {role}
          </span>
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < rating
                  ? "text-yellow-300 fill-yellow-300 drop-shadow-[0_0_5px_rgba(253,224,71,0.6)]"
                  : "text-white/20"
              }
            />
          ))}
        </div>

        {/* Comment Section */}
        <div className="flex-grow">
          <p className="text-white/90 text-sm sm:text-base leading-relaxed font-semibold italic">
            “{comment}”
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/10 mt-8">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Date</span>
            <span className="text-xs text-white/80 font-bold">{date}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/10 border border-white/20 text-white shadow-xl">
            <ShieldCheck size={14} className="text-green-400" />
            <span className="text-[10px] font-black uppercase tracking-widest">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;