import { assets } from "../../assets/assets";

const HeroSection = () => {
    return (
      <div
        className="relative w-full h-[60vh] md:h-80 flex flex-col items-center justify-center text-center text-white px-4 md:px-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${assets.threecars1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold uppercase">Or Anywhere You Need Us To Take</h2>
        <p className="text-base md:text-lg mt-2 max-w-lg md:max-w-2xl">
          Not only taking to night parties, weddings, casinos, birthdays but we also take you to anywhere you want to go.
        </p>
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <a href="tel:9992929822" className="bg-gray-700 hover:bg-gray-600 hover:scale-105 transition-all text-white px-6 py-3 rounded-lg shadow-md text-sm md:text-base">
            Call Now +91-9992929822
          </a>
          <button className="bg-primary hover:bg-sky-950 text-white hover:scale-105 transition-all px-6 py-3 rounded-lg shadow-md text-sm md:text-base">
            Online Booking
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
