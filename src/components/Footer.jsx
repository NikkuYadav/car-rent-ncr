import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailUnread } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer
      className="text-white px-[10%] pb-3"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${assets.threecars1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid md:grid-cols-4 gap-10 justify-center">
        {/* Left Section - Brand Info */}
        <div>
          <img src={assets.logo} alt="Logo" />
          <p className="text-sm mt-3 text-justify">
            If you are looking for a reliable and hassle-free car rental service in Delhi NCR, CarRent NCR is your ultimate destination for renting well-maintained cars with top-notch service. Whether you need a self-drive car for a road trip or a chauffeur-driven ride for a comfortable journey, we've got you covered!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 pt-12">Quick Links</h3>
          <ul className="space-y-2 text-lg pl-2">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="hidden md:block">
          <h3 className="font-semibold text-2xl mb-3 pt-12">Helpful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
            <li><Link to="/blogs" onClick={scrollToTop}>Blogs</Link></li>
            <li><Link to="/sitemap" onClick={scrollToTop}>Sitemap</Link></li>
            <li><Link to="/agent-login" onClick={scrollToTop}>Agent Login</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 pt-12">Reach Us</h3>
          <p className="text-sm">
            ORIX Corporation India Limited <br />
            Plot No - 94, Marol Co-operative Industrial Estate, Andheri-Kurla Road, Andheri(E), Mumbai - 400059
          </p>
          <p><IoMailUnread size={25} className="inline-block" /> <a href="mailto:carrentncr@gmail.com">carrentncr@gmail.com</a></p>
          <p>
            <BiSolidPhoneCall size={25} className="inline-block" />
            <a href="tel:9992929822">+91-9992929822</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <ul className='flex gap-5'>
              <li><a href="#"><RiInstagramFill size={25} /></a></li>
              <li><a href="#"><FaSquareWhatsapp size={25} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
