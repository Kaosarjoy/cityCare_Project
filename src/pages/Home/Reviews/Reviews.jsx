import { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          What People Say
        </h2>
        <p className="text-gray-400 mt-3 text-sm sm:text-lg">
          Real feedback from citizens, staff & admins
        </p>
      </div>

      <div className="max-w-7xl mx-auto">

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="py-10"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="flex justify-center">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Reviews;