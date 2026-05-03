import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner1.jpg";
import bannerImg2 from "../../../assets/banner2.jpg";
import bannerImg3 from "../../../assets/banner3.jpg";
import bannerImg4 from "../../../assets/banner4.jpg";
import bannerImg5 from "../../../assets/banner5.jpg";
import bannerImg6 from "../../../assets/banner6.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
    >
      {/* Slide 1 */}
      <div className="relative">
        <img src={bannerImg1} className="h-[350px] w-full object-cover" />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            CityCare – Your City, Your Responsibility
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-200">
            Report issues like potholes, broken lights & keep your city clean and safe
          </p>

          <div className="mt-4 flex gap-3">
            <Link to="/sent-issues">
              <button className="btn btn-primary">Sent Issues</button>
            </Link>
            <Link to="/coverage">
              <button className="btn btn-accent text-white">Explore</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative">
        <img src={bannerImg2} className="h-[350px] w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            CityCare – Your City, Your Responsibility
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-200">
            Report issues like potholes, broken lights & keep your city clean and safe
          </p>

          <div className="mt-4 flex gap-3">
            <Link to="/sent-issues">
              <button className="btn btn-primary">Sent Issues</button>
            </Link>
            <Link to="/coverage">
              <button className="btn btn-accent text-white">Explore</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative">
        <img src={bannerImg3} className="h-[350px] w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            CityCare – Your City, Your Responsibility
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-200">
            Report issues like potholes, broken lights & keep your city clean and safe
          </p>

          <div className="mt-4 flex gap-3">
            <Link to="/sent-issues">
              <button className="btn btn-primary">Sent Issues</button>
            </Link>
            <Link to="/coverage">
              <button className="btn btn-accent text-white">Explore</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide 4 */}
      <div className="relative">
        <img src={bannerImg4} className="h-[350px] w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            CityCare – Your City, Your Responsibility
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-200">
            Report issues like potholes, broken lights & keep your city clean and safe
          </p>

          <div className="mt-4 flex gap-3">
            <Link to="/sent-issues">
              <button className="btn btn-primary">Sent Issues</button>
            </Link>
            <Link to="/coverage">
              <button className="btn btn-accent text-white">Explore</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide 5 */}
      <div className="relative">
        <img src={bannerImg5} className="h-[350px] w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            CityCare – Your City, Your Responsibility
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-200">
            Report issues like potholes, broken lights & keep your city clean and safe
          </p>

          <div className="mt-4 flex gap-3">
            <Link to="/sent-issues">
              <button className="btn btn-primary">Sent Issues</button>
            </Link>
            <Link to="/coverage">
              <button className="btn btn-accent text-white">Explore</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide 6 */}
      <div className="relative">
        <img src={bannerImg6} className="h-[350px] w-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            CityCare – Your City, Your Responsibility
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-200">
            Report issues like potholes, broken lights & keep your city clean and safe
          </p>

          <div className="mt-4 flex gap-3">
            <Link to="/sent-issues">
              <button className="btn btn-primary">Sent Issues</button>
            </Link>
            <Link to="/coverage">
              <button className="btn btn-accent text-white">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;