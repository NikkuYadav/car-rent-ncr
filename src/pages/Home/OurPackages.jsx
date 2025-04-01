import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaCar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { assets } from "../../assets/assets";
import CarRatesTable from "./CarRatesTable";

const OurPackages = () => {
  const [packages] = useState([
    { id: 1, name: "Scorpio N", image: assets.scorpio, price: 5000 },
    { id: 2, name: "Maruti Swift", image: assets.swift, price: 2200 },
    { id: 3, name: "Hyundai Creta", image: assets.creta, price: 3500 },
    { id: 4, name: "Hyundai Venue", image: assets.car6, price: 3000 },
    { id: 5, name: "Maruti Dzire", image: assets.dzire, price: 2500 },
    { id: 6, name: "Maruti Fronx", image: assets.fonex, price: 2800 },
    { id: 7, name: "Toyota Innova Crysta", image: assets.crysta, price: 4500 },
    { id: 8, name: "Maruti Baleno", image: assets.baleno, price: 2400 },
    { id: 9, name: "Toyota Glenza", image: assets.glanza, price: 2800 },
    { id: 10, name: "Maruti Breeza", image: assets.brezza, price: 3000 },
    { id: 11, name: "Toyota Fortuner", image: assets.fortuner, price: 6000 },
    { id: 12, name: "Mahindra Thar", image: assets.thar, price: 5000 },
  ]);

  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-center py-12 px-4 md:px-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(#09447C, black)` }}
      >
      </div>

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
          {packages.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-full h-[200px] rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300"></div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-indigo-700 font-semibold flex items-center justify-center gap-2">
                    <FaCar /> Price ₹{car.price}/day
                  </p>
                  <p className="text-lg md:text-xl font-bold">{car.name}</p>
                </div>
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
