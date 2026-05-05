import { Star, Quote } from 'lucide-react';

const ReviewCard = ({ review }) => {
  const { name, email, role, rating, comment, date } = review;

  return (
    <div className="relative group ">

      {/* Glow border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur opacity-40 group-hover:opacity-80 transition duration-500"></div>

      {/* Card */}
      <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl transition-all duration-500 group-hover:-translate-y-2">

        {/* Quote icon */}
        <div className="absolute top-4 right-4 text-white/10">
          <Quote size={40} />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-4">

          <div>
            <h3 className="text-white font-bold text-lg tracking-wide">
              {name}
            </h3>
            <p className="text-gray-400 text-xs">{email}</p>
          </div>

          <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20 backdrop-blur">
            {role}
          </span>

        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-600"
              }
            />
          ))}
        </div>

        {/* Comment */}
        <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
          “{comment}”
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/10 pt-4">

          <span>{date}</span>

          <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">
            Verified User
          </span>

        </div>

      </div>
    </div>
  );
};

export default ReviewCard;