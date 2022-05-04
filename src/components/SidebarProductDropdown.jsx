import React from "react";
import { dropDownData } from "../data";
import clsx from "clsx";
import { useGlobal } from "../context/context";
import { Link } from "react-router-dom";
import { scrollToTop } from "../helpers/ScrollToTop";

export const SidebarProductDropdown = ({ id, name, icon }) => {
  const { switchCategory, isCategoryOpen,switchSidebar } = useGlobal();
  const handleClick =()=>{
    switchSidebar()
    scrollToTop()
  }
  return (
    <li
      key={id}
      className={clsx("relative visible-menu overflow-hidden duration-300 border-b ", {
        "h-[9.65rem]": isCategoryOpen,
        "h-14": !isCategoryOpen,
      })}
      onClick={switchCategory}>
      <button className='flex items-center text-xl h-14 px-2 duration-300 w-full hover:bg-blue-900 hover:pl-4'>
        <div className='mr-1 text-gray-50'>{icon}</div>
        <p className='text-gray-50'>{name}</p>
      </button>
      <div className={clsx("absolute", "bg-[#0c182d] duration-300 z-10 w-full")}>
        {dropDownData.map((link) => {
          const { id, name, url, icon } = link;
          return (
            <Link to={url} key={id} onClick={handleClick} className='block pl-8 hover:bg-blue-900 hover:pl-12 duration-300 '>
              <div
                className='flex items-center text-lg h-10 pl-2 py-6 border-gray-200 duration-300'>
                <div className='mx-1 text-gray-50'>{icon}</div>
                <p className='text-sm text-gray-50'>{name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </li>
  );
};
