import { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";



const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    //console.log(reviews);
    return (
     <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">

  {/* Header */}
  <div className="text-center mb-14">
    <h2 className="text-4xl font-black text-white sm:text-5xl">
      What People Say
    </h2>
    <p className="text-gray-400 mt-3 text-lg">
      Real feedback from citizens, staff & admins
    </p>
  </div>

  {/* Swiper Container */}
  <div className="max-w-7xl mx-auto">

<Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={3}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 2,
    slideShadows: false,
  }}
  pagination={true}
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="py-10"
>
  {reviews.map((review) => (
    <SwiperSlide key={review.id}>
      <div className="transition-all duration-500 scale-90 opacity-40 blur-sm">
        <ReviewCard review={review} />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

  </div>

</div>
    );
};

export default Reviews;