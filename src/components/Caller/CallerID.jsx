import React from 'react'


const CallerID = (props) => {
  return (
    <div className="">
      <div className="">
        <div className="bg-slate-300 w-24 h-24 rounded-full flex justify-center text-center">
          <h1 className='mt-8'>{props.username}</h1>
        </div>
        <div className="">
          <p className='mt-4 text-white'>{props.guyName}</p>
          <p className='mt-4 text-white'>{props.contact}</p>
        </div>
      </div>

     
  



    </div>
  )
}

export default CallerID