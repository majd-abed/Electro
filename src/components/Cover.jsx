import React from "react";
import { FaArrowDown } from "react-icons/fa";
const Cover = () => {
  return (
    <>
      <div className='h-screen -mt-[3rem] flex justify-end z-10 w-full overflow-hidden bg-[#030810] relative'>
        <div className='absolute z-20 left-10 top-[10rem] smx:left-[1rem]'>
          <p className='text-gray-100 text-[4rem] font-Montserrat italic text-[900] smx:text-5xl xlx:text-[3.5rem]'>
            Introducing The Best <br /> Cutting-edge <br /> Gaming Products
          </p>
        </div>
        <img
          src={require("../assets/gaming-mouse.webp")}
          alt=' '
          className='h-full brightness-[0.2] min-w-fit'
        />
        <div>
          <FaArrowDown className='text-gray-100 w-12 h-12 absolute bottom-2 left-[calc(50vw_-_1.5rem)] animate-bounce' />
        </div>
      </div>
    </>
  );
};

export default Cover;
