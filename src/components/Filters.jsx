import React from "react";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import { categoryData, colors } from "../data";
const Filters = () => {
  const {
    filters: { category, text, color, min_price, price, max_price },
    filtered_products: products,
    updateFilters,
    clearFilters,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <section className='lgx:px-5'>
      <h2 className='font-semibold text-2xl py-2'>
        Filters
        <span className='text-sm text-gray-600'> ({products.length} products found)</span>
      </h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='lgx:grid lgx:grid-cols-2 smx:grid-cols-1 lgx:pb-5'>
        <div>
          {/* search input */}
          <div className='py-2'>
            <input
              type='text'
              name='text'
              value={text}
              placeholder='Search'
              onChange={updateFilters}
              className='outline-none border rounded-sm bg-white px-2 focus:border-gray-400 w-44'
            />
          </div>
          {/* end of search input */}
          {/* Sort */}
          <div className='py-2'>
            <label htmlFor='sort'>Sort by</label>
            <select
              name='sort'
              id='sort'
              value={sort}
              onChange={updateSort}
              className='bg-transparent font-semibold pl-1 focus:outline-none cursor-pointer'>
              <option value='price-lowest'>Price (Lowest)</option>
              <option value='price-highest'>Price (Highest)</option>
              <option value='name-a'>Name (A - Z)</option>
              <option value='name-z'>Name (Z - A)</option>
            </select>
          </div>
          {/* end of Sort */}
          {/* category */}
          <div>
            <h3 className='font-semibold text-xl'>Category</h3>
            <div>
              {categoryData.map((link) => {
                const { id, name, icon } = link;
                return (
                  <button
                    key={id}
                    onClick={updateFilters}
                    data-category={name}
                    type='button'
                    name='category'
                    className={`${
                      category === name ? "border-l border-gray-400 font-semibold" : null
                    }
                    w-full flex items-center text-sm pl-2 py-1`}>
                    {name}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of category */}
        </div>
        <div>
          {/* Colors */}
          <div className='py-2'>
            <h3 className='font-semibold text-xl'>Colors</h3>
            <div className='flex items-center ml-1'>
              {colors.map((c, index) => {
                if (c === "All") {
                  return (
                    <button
                      key={index}
                      name='color'
                      onClick={updateFilters}
                      data-color='All'
                      className={`${color === "All" ? "border-b border-gray-400" : null} mr-2
                    `}>
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name='color'
                    style={{ background: c }}
                    className={`${
                      color === c
                        ? " w-4 h-4 rounded-full mr-2 flex items-center justify-center"
                        : " w-4 h-4 rounded-full mr-2 opacity-80"
                    }`}
                    data-color={c}
                    onClick={updateFilters}>
                    {color === c ? (
                      <FaCheck
                        className={`${
                          color === "white"
                            ? "text-[0.6rem] text-black"
                            : "text-[0.6rem] text-white"
                        }`}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* End of Colors */}
          {/* Price */}
          <div className='py-2'>
            <h3 className='font-semibold text-xl'>Price</h3>
            <p className='pl-1 text-slate-600'>${price}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* End of Price */}
          <button
            type='button'
            className='bg-red-500 py-[0.1rem] px-2 rounded-md text-white text-lg hover:bg-red-600 duration-200'
            onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </form>
    </section>
  );
};

export default Filters;
