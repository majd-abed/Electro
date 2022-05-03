import React from "react";
import { dropDownData } from "../data";
import clsx from "clsx";
import { useGlobal } from "../context/context";
import { Link } from "react-router-dom";
import { scrollToTop } from "../helpers/ScrollToTop";
export const ProductDropdown = ({ id, name, icon }) => {
  const { switchCategory, isCategoryOpen } = useGlobal();
  return (
    <li key={id} className='relative visible-menu' onClick={switchCategory}>
      <button className='flex items-center text-lg h-10 my-1 px-6 hover:bg-gray-50 hover:rounded-md duration-300'>
        <div className='mr-1 text-black'>{icon}</div>
        <p>{name}</p>
      </button>
      <div
        className={clsx(
          "absolute",
          "bg-white border rounded-b-md border-t-0 duration-300 -z-10  overflow-hidden",
          {
            "translate-y-[1.2px]": isCategoryOpen,
            "-translate-y-full": !isCategoryOpen,
          }
        )}>
        {dropDownData.map((link) => {
          const { id, name, icon,url } = link;
          return (
            <Link to={url} onClick={scrollToTop} key={id} className=' border-b last:border-b-0 '>
              <button
                name='category'
                data-category={name}
                className='w-full flex items-center text-lg h-10 pl-2 pr-6 py-6 border-gray-200 hover:bg-gray-50 duration-300'>
                <div className='mx-1 text-black'>{icon}</div>
                <p className='text-sm'>{name}</p>
              </button>
            </Link>
          );
        })}
      </div>
    </li>
  );
};
