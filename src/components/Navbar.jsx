import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Logo, Container } from "./";
import { FaShoppingCart } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";
import { linksData } from "../data";
import { useGlobal } from "../context/context";
import { ProductDropdown } from "./ProductDropdown";
import { scrollToTop } from "../helpers/ScrollToTop";
const Navbar = ({ totalItems }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const { closeDropdown, switchSidebar } = useGlobal();
  const handleDropdown = (e) => {
    if (e.target.innerHTML !== "Products") {
      closeDropdown();
    }
  };
  return (
    <>
      <div className='w-1 h-12'></div>
      <nav
        className=' bg-white fixed top-0 w-screen h-12 flex items-center border-b shadow-sm shadow-gray-200 z-20 px-3'
        onClick={handleDropdown}>
        <Container>
          <div className='flex items-center justify-between'>
            <button onClick={switchSidebar} className='lg:hidden'>
              <CgMenu className='text-4xl' />
            </button>
            <div className='lg:pr-4'>
              <Logo />
            </div>
            <div className='flex justify-evenly lgx:hidden'>
              <ul className='bg-white flex justify-between gap-2 border-b'>
                {linksData.map((link) => {
                  const { id, name, url, icon } = link;
                  if (name !== "Products")
                    return (
                      <li key={id}>
                        <Link
                          to={url}
                          onClick={scrollToTop}
                          className=' flex items-center text-lg h-10 my-1 px-6 hover:bg-gray-50 hover:rounded-md duration-300 '>
                          <div className='mr-1 text-black'>{icon}</div>
                          <p>{name}</p>
                        </Link>
                      </li>
                    );
                  else return <ProductDropdown key={id} name={name} icon={icon} />;
                })}
              </ul>
            </div>
            <div className='relative lg:w-1/2 flex justify-end items-center'>
              {isAuthenticated ? (
                <>
                  <p className='border-r pr-2 text-sm font-semibold smx:hidden'>
                    {user.email}
                  </p>
                  <button className='' title='Log Out' onClick={() => logout()}>
                    <BiLogOut className='mr-3 h-8 w-8' />
                  </button>
                </>
              ) : (
                <button
                  className=''
                  title='Log In'
                  onClick={() => loginWithRedirect()}>
                  <BiLogIn className='mr-3 h-8 w-8' />
                </button>
              )}
              <Link to='/cart'>
                <FaShoppingCart className='mr-3 h-8 w-8' />
                <div className='absolute bottom-4 right-1 bg-red-500 px-1  rounded-full text-sm text-white font-semibold  border-x-2 border-red-500'>
                  {totalItems ? totalItems : ""}
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
