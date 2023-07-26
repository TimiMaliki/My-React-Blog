import React from 'react'
import {
    FaPhone,
    FaArrowAltCircleRight
  } from "react-icons/fa";
  


const CloseFriends = (props) => {
  return (
    <div className=''>

{/* one */}
      <div className="flex justify-between gap-2 mb-8">
        {/* //friends */}
        <div className="bg-slate-300 w-20 h-20 rounded-full flex justify-center text-center">
               <h1 className='mt-8'>{props.username}</h1>
        </div>

        {/* //lenghtOFCall */}
        <div className="text-white mt-4">

        <div className="grid">
            <h2>{props.guyName}</h2>
            </div>
            <div className="flex">
                <FaPhone></FaPhone>
                <h4>2</h4>
                <p>Out-Going</p>
                <p>8:14 Pm</p>
            </div>
        </div>

{/* //arrow */}
<div className="text-white text-lg lg:lg:ml-96  mt-8">
<FaArrowAltCircleRight ></FaArrowAltCircleRight>
</div>
      </div>


      
    </div>
  )
}

export default CloseFriends