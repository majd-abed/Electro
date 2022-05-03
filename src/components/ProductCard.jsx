import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <Link
      to={`/${product.id}`}
      className='bg-white items-center shadow-sm shadow-gray-300 rounded-sm overflow-hidden group'>
      <div className='bg-white h-48 shadow '>
        <img src={product.image.url} alt='Product_image' className='h-full m-auto min-w-56' />
      </div>
      <div className='bg-gray-50 overflow-hidden shadow-sm shadow-gray-300 relative'>
        <div className='flex flex-col pl-2 '>
          <h1 className='font-semibold text-lg my-2'>{product.name}</h1>
          <p
            className='pb-4 px-1 text-sm italic'
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
        <div className='flex justify-between relative items-center'>
          <div className='flex items-center'>
            {product?.variant_groups[0]?.options.map((item, index) => {
              var color = `bg-${item?.name}`;
              if (color === "bg-gray") color = "bg-gray-500";
              if (color === "bg-black") color = "bg-white invert";
              return (
                <div
                  key={index}
                  name='color'
                  className={`${color} w-[1.5rem] h-[1.5rem] rounded-full ml-2 flex items-center justify-center border-[1.4px] border-gray-400`}></div>
              );
            })}
          </div>
          <p className='p-2 font-semibold'>{product.price.formatted_with_symbol}</p>
          <div
            className={clsx(
              "rounded-b-sm w-3/4 h-full absolute top-full left-0 group-hover:top-0 duration-500 flex justify-center items-center px-2",
              { "bg-green-500": product.inventory.available },
              { "bg-red-500": !product.inventory.available }
            )}>
            <div className='text-white font-semibold text-md md:text-xl smx:text-xl'>
              {product.inventory.available
                ? `${product.inventory.available} Pieces left in stock`
                : "Out of stock"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
