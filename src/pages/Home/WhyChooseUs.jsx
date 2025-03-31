import { FaCar, FaGlobe, FaBook } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa6";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaBook className="text-primary text-5xl mx-auto" />,
      title: "Easy Booking",
      description: "By Just calling us you can easily book a car for rent online.",
    },
    
    {
      icon: <FaCar className="text-primary text-5xl mx-auto" />,
      title: "Variety of Car Brands",
      description:
        "Find the perfect car from our extensive collection. Easy booking, effortless travel!.",
    },
    {
      icon: <FaGooglePay className="text-primary text-5xl font-bold mx-auto" />,
      title: "Online Payment",
      description: "Book your car in minutes and complete payment online!",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary uppercase">Why Choose Us</h2>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
