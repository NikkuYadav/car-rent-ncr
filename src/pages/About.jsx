import React from 'react'
import { assets } from '../assets/assets'
import WhyChooseUs from './Home/WhyChooseUs'

const About = () => {
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
        <h1 className="z-10">About Us</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-white px-[10%] py-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-justify pr-5">
          <h2 className="text-3xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-gray-700 text-lg space-y-4">
            Looking for a reliable and hassle-free car rental service in <span className="font-semibold text-black">Delhi NCR</span>?
            <span className="font-bold text-primary"> CarRent NCR</span> is your go-to destination for premium car rentals, tailored to suit your budget and travel needs.
            Whether you need a self-drive car for a weekend getaway or a chauffeur-driven ride for a seamless journey, we’ve got you covered!
          </p>

          <p className="text-gray-700 text-lg  space-y-4 mt-4">
            With our <span className="font-semibold">well-maintained vehicles</span> and affordable rates, we ensure a smooth and comfortable ride every time.
            Our easy online booking process allows you to reserve your car in just a few clicks.
          </p>

          <p className="text-gray-700 text-lg space-y-4 mt-4">
            At <span className="font-bold text-primary">CarRent NCR</span>, customer satisfaction is our top priority —we treat our clients like family, providing
            <span className="font-semibold">safe, clean, and reliable vehicles</span> for every trip.
          </p>

          <p className="text-gray-700 text-lg  space-y-4 mt-4">
            Experience the joy of hassle-free travel with <span className="font-bold text-primary">CarRent NCR</span>.
            Book your ride today and hit the road with confidence!
          </p>

        </div>

        <div className="md:w-1/2 ml-4 pt-4 md:pt-0">
          {/* Image Covering Full Background */}
          <img
            src={assets.riding}
            alt="Image"
            className="w-full h-full border-8 border-primary object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

      </div>

      <WhyChooseUs />

      <div className="flex flex-col md:flex-row items-center px-10 py-12 bg-white">
        {/* Left Side - Image with Border Effect */}
        <div className="md:w-1/2 p-5">
          <img
            src={assets.riding1}
            alt="Mission Vision"
            className="w-full h-full border-8 border-primary object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Mission Vision Text */}
        <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0 text-justify">
          <h2 className="text-2xl font-bold text-primary">Mission & Vision</h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            At <span className="font-semibold">Car Rent NCR</span>, our mission is to provide a seamless and affordable car rental experience across Delhi NCR.
            We are committed to offering well-maintained, top-quality vehicles that cater to every journey—whether it's a business trip, a family vacation, or a weekend getaway.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our vision is to become the most trusted car rental service in the region by focusing on customer satisfaction, safety, and convenience.
            With competitive pricing, easy booking, and reliable support, we ensure that our customers enjoy a stress-free travel experience every time.
          </p>
        </div>
      </div>


    </div>
  )
}

export default About