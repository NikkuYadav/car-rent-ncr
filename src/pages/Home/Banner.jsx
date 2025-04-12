import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { assets } from "../../assets/assets";

const Banner = () => {
    const slides = [
        {
            image: assets.three2,
            title: "Welcome to CarRent NCR",
            description: "If you’re looking for a reliable Car rental service in Delhi-NCR. you’ve come to the right place... ",
        },
        {
            image: assets.three3,
            title: "Rent A Car",
            description: "Just select your Duration, Location and Car. By Just Calling Us! It's all super easy.",
        },
        {
            image: assets.three1,
            title: "Drive Anywhere",
            description: "Enjoy the freedom to self-drive your rental car to any destination across INDIA.",
        },
        {
            image: assets.three4,
            title: "Pick & Drop Service",
            description: "Jitender and Sumit. Contact No. 9313314040",
        },
    ];

    return (
        <div className="relative w-full h-[450px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
                loop
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            {/* Background Image with Blur Effect */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(90, 90, 90, 0.4)), url(${slide.image})`,
                                }}
                            ></div>

                            {/* Foreground Content with CSS Animation */}
                            <div className="relative w-full h-full flex items-center justify-center text-white">
                                <div className="text-center">
                                    <h1 className="text-5xl font-bold">{slide.title}</h1>
                                    <p className="mt-2 text-center px-24">{slide.description}</p>

                                    <a
                                        href="tel:8383801636"
                                        className="mt-4 relative top-8 bg-primary hover:bg-sky-950 
                                            transition-all duration-300 text-white px-6 py-3 
                                            rounded-lg shadow-md text-sm md:text-base"
                                    >
                                        Call Now +91-8383801636
                                    </a>
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
