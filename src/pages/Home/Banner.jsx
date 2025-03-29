import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { assets } from "../../assets/assets";
import { FaArrowCircleRight } from "react-icons/fa";

const Banner = () => {
    const images = [
        assets.threecars1,
        assets.threecars2,
        assets.threecars3,
        assets.threecars4,

    ];

    return (
        <div className="relative w-full h-[450px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="w-full h-full"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            {/* Background Image with Blur Effect */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(90, 90, 90, 0.4)), url(${img})`,
                                }}
                            ></div>

                            {/* Foreground Content with CSS Animation */}
                            <div className="relative w-full h-full flex items-center justify-center text-white">
                                <div className="text-center fade-in">
                                    <h1 className="text-5xl font-bold">Welcome to CarRent NCR</h1>
                                    <p className="mt-2">Best vehicle hire in Delhi NCR with great rates and easy booking.</p>
                                    <button className="mt-4 mx-auto px-6 py-3 border border-white text-white relative 
                   transition-all duration-300 group flex items-center gap-2 hover:scale-x-110 rounded
                   hover:bg-white/30 hover:backdrop-blur-lg">
                                        Read More
                                        <span className="inline-block transition-transform transform translate-x-2 opacity-0 
                   group-hover:opacity-100 group-hover:translate-x-0">
                                            <FaArrowCircleRight />
                                        </span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
