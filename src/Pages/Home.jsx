import React from "react";
import { Link } from "react-router-dom";
import { Container, Cover, Warranty } from "../components";

const Home = () => {
  return (
    <main className='bg-[#030810] pb-12'>
      <Cover />
      <Container>
        <Warranty />
        <div className='w-full flex justify-center'>
          <Link
            to='/discover'
            className='bg-blue-900 py-4 px-12 text-gray-100 text-xl hover:bg-gray-100 hover:text-blue-500 duration-200 rounded-md'>
            Discover Our Products
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default Home;
