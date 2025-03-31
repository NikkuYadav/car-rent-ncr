import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { assets } from "../../assets/assets";


const testimonials = [
  {
    name: "Aman",
    city:"Noida",
    review:
      "Car Rent NCR provided me with a seamless rental experience. The car was in top-notch condition, clean, and well-maintained. The booking process was quick and hassle-free. Highly recommended!",
    img: assets.avatar1,
  },
  {
    name: "Ajay",
    city:"Delhi",
    review:
      "I was impressed with the affordability and quality of service. The staff was professional and ensured a smooth pick-up and drop-off. Will definitely book again!" ,
    img: assets.avatar2,
  },
  {
    name: "Rahul",
    city:"Ghaziabad",
    review:
      "The entire process, from booking to returning the car, was effortless. The vehicle was comfortable, and the ride was smooth. Thank you, Car Rent NCR, for the great service!",
    img: assets.avatar3,
  },
  {
    name: "Neha",
    city:"Delhi",
    review:
      "I was impressed with the affordability and quality of service. The staff was professional and ensured a smooth pick-up and drop-off. Will definitely book again!" ,
    img: assets.avatar4,
  },
];

const TestimonialSlider = () => {
  return (
    <div className="relative p-8 "
    style={{ backgroundImage: `linear-gradient(rgba(34,193,195,1) , rgba(253,45,150,1))` }}>
      <h2 className="text-center text-3xl font-bold text-primary mb-6">
         Testimonials
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={3}  // Show 3 slides at a time
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 }, // 1 slide for small screens
          768: { slidesPerView: 2 }, // 2 slides for tablets
          1024: { slidesPerView: 3 }, // 3 slides for desktops
        }}
        className="relative"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-white text-gray-800 shadow-lg rounded-lg flex flex-col items-center text-center">
              <img src={testimonial.img} alt="User" className="w-16 h-16 rounded-full mb-4" />
              <p className="mb-4">"{testimonial.review}"</p>
              <span className="text-primary font-bold text-lg">{testimonial.name}</span>
              <span className="text-primary pb-2 font-bold text-lg">({testimonial.city})</span>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </div>
  );
};

export default TestimonialSlider;
