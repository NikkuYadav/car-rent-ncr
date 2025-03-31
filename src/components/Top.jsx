import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailUnread } from "react-icons/io5";
import { FaInstagram, FaWhatsapp, FaPhoneAlt ,FaEnvelope } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Top = () => {
  return (
    <div className='flex items-start justify-between text-sm sm:text-lg font-semibold bg-primary text-white py-3 px-2 md:px-[10%]'>
      <div className='flex'>
        <ul className='flex gap-5'>
          {/* <li className='flex gap-1'><BiSolidPhoneCall size={25}  /><a href="tel:8383801636">+91-8383801636,</a></li>
        <li className='flex gap-1'><IoMailUnread size={25} /> <a href="mailto:carrentncr@gmail.com">carrentncr@gmail.com</a></li> */}
          <li>
            <a
              href="tel:8383801636"
              className="flex items-center text-sm md:text-lg  bg-white border-2 border-blue-500 rounded-full px-3 py-1 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500">
                <FaPhoneAlt  className="text-white " />
              </div>
              <span className="ml-2 text-blue-600 font-bold">8383801636</span>
            </a>
          </li>

          <li>
          <a
        href="mailto:carrentncr@gmail.com"
        className="flex items-center text-sm md:text-lg bg-white border-2 border-yellow-500 rounded-full px-3 py-1 shadow-lg"
      >
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500">
          <FaEnvelope className="text-white " />
        </div>
        <span className="ml-2 text-yellow-600 font-bold">carrentncr@gmail.com</span>
      </a>
          </li>
        </ul>
      </div>


      <div className='hidden sm:flex text-right'>
        {/* <ul className='flex gap-5'>
        
        <li><a href="#"><RiInstagramFill size={25} /></a></li>
        <li><a href="#"><FaSquareWhatsapp size={25}/></a></li>
       </ul> */}
        <ul className='flex gap-5'>
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
              href="https://wa.me/+91 8383801636"
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
  )
}

export default Top