import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { assets } from "../../assets/assets";
import CarRatesTable from "./CarRatesTable";

const OurPackages = () => {
  const [packages] = useState([
    { id: 1, name: "Scorpio N", image: assets.car2, price: 4500 },
    { id: 2, name: "Maruti Swift", image: assets.car1, price: 2200 },
    { id: 3, name: "Hyundai Creta", image: assets.car4, price: 3500 },
    { id: 4, name: "Hyundai Venue", image: assets.car6, price: 3000 },
    { id: 5, name: "Maruti Dzire", image: assets.car7, price: 2500 },
    { id: 6, name: "Maruti Fronx", image: assets.car8, price: 2800 },
    { id: 7, name: "Toyota Innova Crysta", image: assets.car9, price: 4500 },
    { id: 8, name: "Maruti Baleno", image: assets.car5, price: 2400 },
    { id: 9, name: "Toyota Glenza", image: assets.car11, price: 2800 },
    { id: 10, name: "Maruti Breeza", image: assets.car10, price: 3000 },
  ]);

  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-center py-12 px-4 md:px-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${assets.threecars2})`,
          filter: "brightness(3)",
        }}
      ></div>

      <div className="relative w-full max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wider">
          Our Packages
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {packages.map((car) => (
            <SwiperSlide key={car.id}>
              <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-40 md:h-52 object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="py-2 text-base md:text-lg font-bold bg-white text-primary border border-t-4 border-primary">
                  {car.name}
                </h3>
                <h3 className="pb-3 text-base md:text-lg font-bold bg-white text-primary">
                  Price ₹{car.price}/day
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 w-full max-w-4xl mx-auto">
          <CarRatesTable />
        </div>
      </div>
    </div>
  );
};

export default OurPackages;
