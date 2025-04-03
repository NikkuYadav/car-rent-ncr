import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailUnread } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-white px-[8%] pb-3"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${assets.threecars1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid md:grid-cols-3 gap-5 lg:gap-10 justify-center ">
        {/* Left Section - Brand Info */}
        <div className="text-center">
          <img
            src={assets.logosvg}
            alt="CarRent Logo"
            className="mt-3 mx-auto drop-shadow-[0_4px_6px_rgba(255,255,255,0.6)]"
          />
          <p className="text-sm text-justify">
            If you are looking for a reliable and hassle-free car rental service in Delhi NCR, CarRent NCR is your ultimate destination for renting well-maintained cars with top-notch service. Whether you need a self-drive car for a road trip or a chauffeur-driven ride for a comfortable journey, we've got you covered!
          </p>
        </div>


        {/* Quick Links */}
        <div className="md:ml-10 lg:ml-20">
          <h3 className="font-semibold text-2xl mb-3 md:pt-12">Quick Links</h3>
          <ul className="space-y-2 text-lg pl-2">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
          </ul>
        </div>


        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 md:pt-12">Reach Us</h3>
          <p className="text-sm">
          ETA ll Jaitpur Market , Opposite Migsun Wynn Near by HP Petrol pump , Greater Noida Uttar Pradesh 201310
          </p>
          <p><IoMailUnread size={25} className="inline-block" /> <a href="mailto:carrentncr@gmail.com">carrentncr@gmail.com</a></p>
          <p>
            <BiSolidPhoneCall size={25} className="inline-block" />
            <a href="tel:8383801636">+91-8383801636</a>,
            <a href="tel:9310104040">+91-9310104040</a><br />
            <a href="tel:9313314040">+91-9313314040</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <ul className='flex md:flex-col lg:flex-row gap-5'>
              {/* Instagram Link */}
              <li>
                <a
                  href="https://www.instagram.com/carrent_ncr?igsh=MWxtdGMyeXllNjdlaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white border-2 border-red-500 rounded-full px-3 py-1 shadow-lg"
                >

                  {/* Instagram Logo with Gradient */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
                    <FaInstagram className="text-white text-2xl" />
                  </div>

                  {/* Instagram Handle */}
                  <span className="ml-2 text-red-600 font-bold">@carrentncr</span>
                </a>
              </li>

              {/* WhatsApp Link */}
              <li>
                <a
                  href="https://wa.me/918383801636?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white border-2 border-green-500 rounded-full px-3 py-1 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                  <span className="ml-2 text-green-600 font-bold">8383801636</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
