import React from 'react'
import { FaCopyright } from "react-icons/fa";

const Bottom = () => {
    return (
        <div className='text-center text-sm sm:text-lg font-semibold bg-primary text-white py-3 px-[10%]'>
            <p>Copyright, <FaCopyright className='inline-block'/> <span className="font-bold">CarRent NCR , 2025</span>. All rights reserved.</p>
        </div>
    )
}

export default Bottom