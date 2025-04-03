import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { assets } from "../../assets/assets";
import { IoClose } from "react-icons/io5";

const HomeAbout = () => {
  const images = [
    assets.car6,
    assets.car1,
    assets.brezza,
    assets.scorpio,
    assets.fortuner,
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMore, setShowMore] = useState(false); // State to toggle the third paragraph

  const openPopup = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-10 bg-gray-100">
      {/* About Us Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold text-primary">About CarRent NCR</h2>
        <p className="mt-4 text-gray-700 text-sm md:text-base">
          If you’re looking for a reliable <b>car rental service in Delhi-NCR</b>,
          you’ve come to the right place. <b>CarRent NCR</b> offers a wide range
          of rental options tailored to your budget and travel needs. Whether
          you need a luxury car for a business trip, a comfortable ride for a
          family vacation, or an affordable option for daily commuting, we’ve
          got you covered.
        </p>
        <p className="mt-2 text-gray-700 text-sm md:text-base">
          With our top-quality <b>vehicle hire services in Delhi-NCR</b>, you’ll
          enjoy <b>great rates, easy online booking, and a hassle-free rental
            experience</b>. Booking a car with us is simple—just visit our website
          or give us a call, and we’ll ensure you get the best ride for your
          journey.
        </p>
        {/* Third paragraph - Hidden initially */}
        {showMore && (
          <p className="mt-2 text-gray-700 text-sm md:text-base">
            At <b>CarRent NCR</b>, we believe in treating our customers like
            family. Your comfort and satisfaction are our top priorities. So,
            relax, enjoy every moment of your trip, and create unforgettable
            memories with your loved ones.
          </p>
        )}
        {/* Read More / Read Less Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 px-6 py-2 bg-primary text-white shadow-md hover:bg-red-700 transition text-sm md:text-base"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Image Grid */}
      <div className="w-full md:w-1/2">
        {/* Image Slider for Small Screens */}
        <div className="block md:hidden">
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
            className="w-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} onClick={() => openPopup(index)}>
                <img
                  src={img}
                  alt={`Car ${index + 1}`}
                  className="w-full h-56 min-w-80 object-cover border-2 border-white shadow-lg cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid Layout for Medium and Larger Screens */}
        <div className="hidden md:grid grid-cols-2 gap-2 md:gap-4 relative">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative cursor-pointer ${index === 2 ? "col-span-2 row-span-2" : ""}`}
              onClick={() => openPopup(index)}
            >
              <img
                src={img}
                alt={`Car ${index + 1}`}
                className="w-full h-full object-cover border-2 md:border-4 border-white shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>


      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closePopup} // Close on clicking outside
        >
          <div
            className="relative w-full max-w-lg bg-white p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              className="absolute -top-14 right-0 text-primary text-3xl"
              onClick={closePopup}
            >
              <IoClose size={50} />
            </button>

            {/* Image Slider */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              initialSlide={activeIndex}
              loop
              className="w-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Car ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeAbout;
