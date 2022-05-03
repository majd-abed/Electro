import React from "react";
import { Container, Loading, ProductCard } from "../components";
import { useGlobal } from "../context/context";

const Discover = () => {
  const { products, categories, productsLoading } = useGlobal();

  if (productsLoading) return <Loading />;
  return (
    <main className='py-5 bg-[#F0F2F5]'>
      <Container>
        {categories.map((category, index) => {
          const categoryName = category?.name;
          let cat_products = products.filter((product) => {
            if (product?.categories[0]?.name === categoryName) return true;
            return false;
          });
          return (
            <div key={index}>
              <div className='group flex items-center text-white px-5 bg-blue-400 my-4 sm:rounded-md'>
                <h2 className='text-3xl pr-1 py-1 '>{categoryName}</h2>
              </div>
              <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-3 pt-5 px-5'>
                {cat_products.map((product, index) => {
                  if (index <= 2)
                    return (
                      <div key={product.id}>
                        <ProductCard product={product} />
                      </div>
                    );
                  return <div className='hidden' key={product.id}></div>;
                })}
              </div>
            </div>
          );
        })}
      </Container>
    </main>
  );
};

export default Discover;
