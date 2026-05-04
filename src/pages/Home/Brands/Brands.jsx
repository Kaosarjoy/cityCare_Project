import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Assets
import BikasImg from '../../../assets/bikash.png';
import NagadImg from '../../../assets/nagad.png';
import WasaImg from '../../../assets/wasa.jpg';
import WapdaImg from '../../../assets/wapda.jpg';
import BdCleanImg from '../../../assets/bdClean.png';
import BrtaImg from '../../../assets/brta.png';

const Brands = () => {
    const brands = [
        { id: 1, img: BikasImg, name: "bKash" },
        { id: 2, img: NagadImg, name: "Nagad" },
        { id: 3, img: WasaImg, name: "WASA" },
        { id: 4, img: WapdaImg, name: "WAPDA" },
        { id: 5, img: BdCleanImg, name: "BD Clean" },
        { id: 6, img: BrtaImg, name: "BRTA" },
    ];

    return (
        <section className="bg-[#0f172a] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h3 className="text-gray-400 font-medium tracking-[0.2em] uppercase text-sm mb-2">
                        Strategic Partners
                    </h3>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Swiper Section */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-10 shadow-2xl">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        freeMode={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3, spaceBetween: 30 },
                            1024: { slidesPerView: 5, spaceBetween: 40 },
                        }}
                        modules={[FreeMode, Autoplay, Pagination]}
                        className="mySwiper flex items-center"
                    >
                        {brands.map((brand) => (
                            <SwiperSlide key={brand.id}>
                                <div className="group relative flex flex-col items-center justify-center p-4 transition-all duration-300">
                                    {/* Logo Container */}
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/10 border border-white/5 flex items-center justify-center p-4 grayscale group-hover:grayscale-0 group-hover:bg-white/20 group-hover:border-white/20 transition-all duration-500 shadow-lg">
                                        <img 
                                            src={brand.img} 
                                            alt={`${brand.name} Logo`} 
                                            className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500" 
                                        />
                                    </div>
                                    {/* Brand Name (Optional) */}
                                    <p className="mt-4 text-gray-500 text-xs font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {brand.name}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Brands;