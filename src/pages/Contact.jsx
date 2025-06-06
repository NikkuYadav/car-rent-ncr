import React from "react";
import { assets } from "../assets/assets";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      icon: <FaPhoneAlt size={40} className="text-white transition-transform duration-500 hover:rotate-[360deg]" />,
      title: "Phone NO",
      detail: "+91 8383801636",
    },
    {
      icon: <MdEmail size={40} className="text-white transition-transform duration-500 hover:rotate-[360deg]" />,
      title: "Email",
      detail: "carrentncr@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt size={40} className="text-white transition-transform duration-500 hover:rotate-[360deg]" />,
      title: "Address",
      detail: "ETA ll Jaitpur Market , Opposite Migsun Wynn Near by HP Petrol pump , Greater Noida Uttar Pradesh,201310",
    },
  ];

  return (
    <div>
      {/* Banner Section */}
      {/* linear-gradient(rgba(9, 68, 124, 0.2), rgba(9, 68, 124, 0.7)),  */}
      <div
        className="relative h-[300px] flex items-center justify-center text-white text-4xl font-bold"
        style={{
          backgroundImage: `url(${assets.contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.2)",
        }}
      >
        <h1 className="z-10">Contact Us !</h1>
      </div>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto py-10 text-center px-4">
        <h2 className="text-2xl font-bold text-primary mb-6">Contact Us Through!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-primary text-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-500 hover:scale-105"
              style={{
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
              }}
            >
              <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">{contact.icon}</div>
              <h3 className="text-lg font-bold">{contact.title}</h3>
              <p className="text-sm text-center">{contact.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Embed Map */}

      <div style={{ position: "relative" }} className="pb-3">
        <div style={{ position: "relative", paddingBottom: "25%", height: 0, overflow: "hidden" }}>
          <iframe
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3506.5171695923773!2d77.538673!3d28.494083999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI5JzM4LjciTiA3N8KwMzInMTkuMiJF!5e0!3m2!1sen!2sin!4v1743440747342!5m2!1sen!2sin"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
