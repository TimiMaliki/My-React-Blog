import React from 'react'
import {
    FaClock,
    FaHeadphones,
    FaSignal,
    FaBatteryHalf,
    FaBars,
  } from "react-icons/fa";
  

const Header = () => {
  return (
    <div className=''>

 {/* network bar, phone percent */}
 <div className="flex justify-between">

        {/* time */}
        <div className="flex mt-2 text-white gap-2 text-lg">
          <p>10:21PM | 28.1kbs</p> <FaClock></FaClock>{" "}
          <FaHeadphones></FaHeadphones>
        </div>

        {/* battery life */}
        <div className="flex gap-2 text-white text-lg mt-2">
          <FaSignal></FaSignal> <FaSignal></FaSignal>{" "}
          <FaBatteryHalf></FaBatteryHalf>
         <div className='-mt-2'>50%</div> 
        </div>
      </div>

 {/* searchbar */}
 <div className="mt-8 h-16 flex justify-center">
        {/* input */}
        <input type="text" name="Search numbers, names and more"  className='flex justify-center text-center w-96 h-12 mt-2 rounded text-black'/>

        </div>

 {/* e */}
 <div className="bg-slate-300 flex justify-center absolute w-10 h-10 -mt-14 lg:ml-72 rounded-full">
          <p className='text-lg mt-1'>e</p>
          <div className="absolute w-2.5 h-2.5 bg-slate-600 rounded-full ml-6 "></div>
        </div>
      


    </div>
  )
}

export default Header