import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailUnread } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Top = () => {
  return (
    <div className='flex items-start justify-between text-sm sm:text-lg font-semibold bg-primary text-white py-3 px-2 md:px-[10%]'>
        <div className='flex'>
        <ul className='flex gap-5'>
        <li className='flex gap-1'><BiSolidPhoneCall size={25}  /><a href="tel:9992929822">+91-9992929822,</a></li>
        <li className='flex gap-1'><IoMailUnread size={25} /> <a href="mailto:carrentncr@gmail.com">carrentncr@gmail.com</a></li>
       </ul>
        </div>
      
       
       <div className='hidden sm:flex text-right'>
       <ul className='flex gap-5'>
        
        <li><a href="#"><RiInstagramFill size={25} /></a></li>
        <li><a href="#"><FaSquareWhatsapp size={25}/></a></li>
       </ul>
       </div>
      

     
    </div>
  )
}

export default Top