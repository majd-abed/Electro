import React from "react";
import { Link } from "react-router-dom";
import { linksData } from "../data";
import { useGlobal } from "../context/context";
import clsx from "clsx";
import { BiLogOut } from "react-icons/bi";
import { FaShopware } from "react-icons/fa";
import { SidebarProductDropdown } from "./SidebarProductDropdown";
import { useAuth0 } from "@auth0/auth0-react";
import { scrollToTop } from "../helpers/ScrollToTop";

const Sidebar = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  const { isSidebarOpen, switchSidebar } = useGlobal();
  const handleClick =()=>{
    switchSidebar()
    scrollToTop()
  }
  return (
    <>
      <section
        onClick={switchSidebar}
        className={clsx(
          " smx:bg-gray-900/30 smx:fixed smx:w-full smx:h-full top-0 left-0 transition duration-150 flex",
          { "z-20 opacity-100": !isSidebarOpen },
          { "-z-10 opacity-0": isSidebarOpen }
        )}></section>
      <div
        className={clsx(
          "duration-300 lg:hidden w-[70vw] h-screen fixed top-0  bg-[#0c182d] z-30  opacity-100",
          { "-translate-x-full ": isSidebarOpen },
          { "translate-x-0 shadow-2xl shadow-black": !isSidebarOpen }
        )}>
        <div className='h-screen relative'>
          <div>
            <Link to='/' className='flex flex-col items-center py-4'>
              <FaShopware className='w-8 h-8 mb-1 text-white' />
              <h1 className='font-bold text-xl text-white'>Electro</h1>
            </Link>
          </div>
          <ul className='z-20 flex-cols  '>
            {linksData.map((link) => {
              const { id, name, url, icon } = link;
              if (name !== "Products")
                return (
                  <li className='border-b last:border-b-0 first:border-t' key={id}>
                    <Link
                      to={`${url}`}
                      onClick={handleClick}
                      className='flex items-center text-xl  h-14 px-2 hover:bg-blue-900 hover:pl-4 duration-300'>
                      <div className='mr-1 text-gray-50'>{icon}</div>
                      <p className='text-gray-50'>{name}</p>
                    </Link>
                  </li>
                );
              else
                return <SidebarProductDropdown key={id} name={name} icon={icon} />;
            })}
          </ul>
          {isAuthenticated && (
            <div className='text-center absolute bottom-3 left-[17.5vw]'>
              <p className='text-base text-white font-semibold border p-2 w-fit m-auto my-3'>
                {user.email}
              </p>
              <button className='' title='Log Out' onClick={() => logout()}>
                <BiLogOut className='mr-3 h-8 w-8 text-white' />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
