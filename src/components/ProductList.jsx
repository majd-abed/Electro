import React from "react";
import { useParams } from "react-router-dom";
import { useFilterContext } from "../context/filter_context";
import { ProductCard } from "../components";

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();
  if (products.length < 1) {
    return (
      <p className='pl-2 font-semibold text-3xl'>Sorry, no products matched your search.</p>
    );
  }
  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-3 px-5'>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
