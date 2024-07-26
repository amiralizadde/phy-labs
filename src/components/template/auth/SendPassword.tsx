import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";

const SendPassword = () => {
  return (
    <button  className="bg-primary mb-16 hover:bg-red-600 transition-all duration-200 text-white min-w-52 max-w-80 py-[10px] px-4 mt-7 rounded flex items-center justify-between">
        <span className='text-sm'>Click Here to Send Verification Link</span>
        <FaRegEnvelope  className='ms-5'/>
    </button>
  )
}

export default SendPassword