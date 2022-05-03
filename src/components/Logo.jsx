import React from "react";
import { FaShopware } from "react-icons/fa";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to='/' className='flex items-center'>
      <FaShopware className="w-8 h-8 mx-2 "/>
      
      <h1 className='font-bold text-xl'>Electro</h1>
    </Link>
  );
};

export default Logo;
