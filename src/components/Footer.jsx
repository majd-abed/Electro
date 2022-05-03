import React from "react";
import { useGlobal } from "../context/context";

const Footer = () => {
  const { productsLoading } = useGlobal();
  if (productsLoading) return null
  return (
    <div className='h-12 bg-gray-900 flex justify-center items-center'>
      <p className='text-white text-xl'>
        © 2022 <span className='text-blue-700'>Electro</span> All rights reserved
      </p>
    </div>
  );
  
};

export default Footer;
