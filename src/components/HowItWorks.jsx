import React from "react";
import { assets } from "../assets/assets";

const HowItWorks = () => {
  const steps = [
    {
      title: "Rent A Car",
      description: "Just select your Duration, Location and Car. By Just Calling Us! It's all super easy.",
      imgSrc: assets.rent,
    },
    {
      title: "Delivery",
      description: "We deliver your selected rental car on your desired location in Delhi NCR.",
      imgSrc: assets.deliver,
    },
    {
      title: "Drive Anywhere",
      description: "Enjoy the freedom to self-drive your rental car to any destination across INDIA.",
      imgSrc: assets.drive,
    },
    {
      title: "Return Car",
      description: "You can return the car back after completing your trip at your provided location in Delhi NCR.",
      imgSrc: assets.returncar,
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20">
          {steps.map((step, index) => (
            <div key={index} 
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src={step.imgSrc} alt={step.title} className="w-16 h-16 mb-4 mx-auto" />
              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
