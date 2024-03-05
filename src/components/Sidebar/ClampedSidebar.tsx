import React from 'react'
import { useState } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";
import { MdHomeFilled } from 'react-icons/md';
import { FaChevronDown, FaChevronUp ,FaUser ,FaChevronCircleUp} from "react-icons/fa";
import Sidebar from './Sidebar';

const ClampedSidebar = () => {
const [isClamped ,setIsClamped] = useState(false);
// const [show, SetShow] = useState<boolean>(false);


  return (
    <div  >
    <div onClick={()=>{
        setIsClamped(!isClamped);
    }} className='border-2 border-orange-300 min-w-[70vw] h-10 flex flex-col justify-center items-center cursor-pointer hover:bg-orange-300 transition duration-300'>
   {isClamped?   (<FaChevronCircleDown className='h-[40px] scale-150' />):(<FaChevronCircleUp className='h-[40px] scale-150' />)}
    </div>

    {
        isClamped && <Sidebar />
        
    }

    </div>
  )
}

export default ClampedSidebar
