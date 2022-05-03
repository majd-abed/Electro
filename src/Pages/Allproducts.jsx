import React from "react";
import { Container, Loading, ProductList } from "../components";
import Filters from "../components/Filters";
import { useGlobal } from "../context/context";

const Allproducts = () => {
  const {productsLoading } = useGlobal();

  if (productsLoading) return <Loading />;
  return (
    <main className='py-5 bg-[#F0F2F5]'>
      <Container>
        <div className='grid lg:grid-cols-12 pt-5 '>
          <div className='lg:col-span-2 pr-4 lg:h-[30rem] lg:sticky lg:top-16'>
            <Filters />
          </div>
          <div className='lg:col-span-10 '>
            <ProductList />
          </div>
        </div>
      </Container>
    </main>
  );
};
export default Allproducts;
