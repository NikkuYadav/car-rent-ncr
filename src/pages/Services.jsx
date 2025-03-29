import React from 'react'
import { assets } from '../assets/assets'
import { MdLibraryAddCheck } from "react-icons/md";
import CarRatesTable from './Home/CarRatesTable';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaCar } from "react-icons/fa";

const Services = () => {

  const services = [
    "We provide service 24x7. Always keeping our clean and hygienic for you to a comfortable and mind refreshing trips.",
    "Well maintained & attractive cars.",
    "If you face any difficulty in our vehicle, at any place (all over India) we’ll be there at your resource.",
    "Cars provided by us are just a few months old, so you can have a smooth and trouble-free ride."
  ]

  const cars = [
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
  ];

  return (
    <div>
      <div
        className="relative h-[300px] flex items-center justify-center text-white text-4xl font-bold"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${assets.threecars2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.3)",
        }}
      >
        <h1 className="z-10 text-center text-2xl md:text-4xl">Our Services</h1>
      </div>

      <div className="flex flex-col md:flex-row bg-white py-10 px-6 md:px-[10%]">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Services :</h2>
          <div className="space-y-3">
            {services.map((text, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-primary text-white p-2 rounded">
                  <MdLibraryAddCheck />
                </div>
                <p className="ml-3 text-gray-700 text-sm md:text-base">{text}</p>
              </div>
            ))}
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded shadow-md">Enquiry</button>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 rounded-lg">
          <div className="relative rounded-lg overflow-hidden border-4 border-primary">
            <img
              src={assets.car1}
              alt="Car"
              className="w-full h-auto object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      <div className='px-6 md:px-[10%] py-10 bg-[#fd2d96]' style={{ backgroundImage: `linear-gradient(rgba(34,193,195,1) , rgba(253,45,150,1))` }}>
        <h2 className='text-center pb-3 text-2xl md:text-3xl font-bold text-primary'>Service Rates for the CarRent NCR</h2>
        <CarRatesTable />
      </div>

      <div className="p-6 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-800 mb-6">Best Selling Models</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          spaceBetween={20}
          navigation={true}
          autoplay={{ delay: 3000 }}
          loop
          modules={[Navigation]}
          className="w-full"
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
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
      </div>
    </div>
  )
}

export default Services
