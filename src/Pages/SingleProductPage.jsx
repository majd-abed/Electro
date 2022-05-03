import React, { useState, useEffect, useRef } from "react";
import { commerce } from "../lib/commerce";
import { useParams } from "react-router-dom";
import { Container, Loading, PurchaseDropdown } from "../components";
import { Rating } from "react-simple-star-rating";
import { aboutItem } from "../data";
import { BiPlus, BiMinus } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobal } from "../context/context";
const SingleProductPage = () => {
  const { handleAddToCart } = useGlobal();
  const { productId } = useParams();
  const [productData, setProductData] = useState([]);
  const [imgIndex, setImgIndex] = useState(2);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const quantityValue = useRef("");
  const handleRating = (rate) => {
    setRating(rate);
  };
  const decreaseValue = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const increaseValue = () => {
    if (quantity < productData.inventory.available) setQuantity(quantity + 1);
  };
  const fetchProduct = async () => {
    const data = await commerce?.products?.retrieve(productId);
    setProductData(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  if (!productData?.assets) return <Loading/>;
  return (
    <main className='pb-5 min-h-[calc(100vh_-_6rem)]'>
      <Container>
          <div className='grid grid-cols-3 smx:grid-cols-1 lgx:grid-cols-2 pt-10'>
            <div className='sm:grid sm:grid-cols-2 sm:col-span-2'>
              {/* -------------- Images ---------------- */}
              <div >
                <div className='w-full h-56 flex justify-center'>
                  <button
                    onClick={() => {
                      window.open(productData?.assets[imgIndex]?.url, "_blank");
                    }}
                    className='smx:h-72 sm:h-92 '>
                    <img
                      src={productData?.assets[imgIndex]?.url}
                      alt=''
                      className='max-h-56'
                    />
                  </button>
                </div>
                <div className='grid grid-cols-5 gap-1 pt-12 pb-2 px-4 '>
                  {productData?.assets.map((image, index) => {
                    if (index % 2 !== 0 && index > 0)
                      return (
                        <button key={index}
                        className="flex justify-center items-center"
                          onMouseOver={() => {
                            setImgIndex(index + 1);
                          }}>
                          <img
                            src={image.url}
                            alt=''
                            className='max-w-16 max-h-16 hover:scale-[1.07] duration-200'
                          />
                        </button>
                      );
                  })}
                </div>
              </div>
              {/* -------------- Details ---------------- */}
              <div className=' px-5 flex flex-col smx:items-center'>
                <h1 className='text-2xl font-bold smx:pt-5'>{productData.name}</h1>
                <p
                  className='text-2xl font-bold smx:text-center'
                  dangerouslySetInnerHTML={{ __html: productData.description }}
                />
                <div>
                  <p className='font-semibold text-lg pt-5 pb-2'>About this product</p>
                  <ul>
                    {aboutItem.map((item) => {
                      if (item.id === productData.id)
                        return item.about.map((el, index) => (
                          <li key={index} className='list-disc pb-2 ml-4'>
                            {el}
                          </li>
                        ));
                    })}
                  </ul>
                </div>
              </div>
            </div>
            {/* -------------- Add to Cart ---------------- */}
            <div className='sm:shadow-md sm:border smx:border-t smx:border-gray-500 sm:border-gray-100 sm:rounded-m mdx:col-span-2 h-fit'>
              <div className='flex items-center justify-between text-2xl pt-4 pl-4'>
                <div>
                  {productData.inventory.available
                    ? `${productData.inventory.available} Pieces left in stock`
                    : "Out of stock"}
                </div>
                <p className='pr-5 font-semibold '>
                  {productData.price.formatted_with_symbol}
                </p>
              </div>
              <div className='p-4'>
                {productData.has.physical_delivery ? (
                  <p>
                    Can be deliverd within 2 Weeks
                    {productData.inventory.available ? "" : " when it is Available"}
                  </p>
                ) : (
                  <p>Delivery is not available for this product</p>
                )}
              </div>
              <div>
                {productData.inventory.available ? (
                  ""
                ) : (
                  <p className='text-xl text-red-500 pl-4 pb-1 font-semibold'>
                    Pre-Order Now!
                  </p>
                )}
              </div>
              <div className='w-fit pl-4 pb-4 capitalize flex items-center font-semibold'>
                <p>Choose color:</p>
                <PurchaseDropdown product_options={productData.variant_groups[0].options} />
              </div>
              <div className='flex justify-center items-center mb-5 gap-5'>
                <div className='flex items-center bg-gray-100 w-fit h-fit p-2 rounded-md '>
                  <button
                    className='text-3xl text-blue-500 rounded-md hover:bg-gray-50 duration-200'
                    onClick={decreaseValue}>
                    <BiMinus />
                  </button>
                  <input
                    type='number'
                    disabled
                    className='bg-gray-100 w-20 text-center focus:outline-none'
                    value={quantity}
                    ref={quantityValue}
                    onChange={() => {
                      setQuantity(parseInt(quantityValue.current.value));
                    }}
                  />
                  <button
                    className='text-3xl  text-blue-500 rounded-md hover:bg-gray-50 duration-200'
                    onClick={increaseValue}>
                    <BiPlus />
                  </button>
                </div>
                <div className='flex items-center'>
                  <button
                    onClick={() => {
                      handleAddToCart(productId, quantity);
                    }}
                    className='px-5 py-3 bg-blue-500 hover:bg-blue-600 duration-200 text-white rounded-md font-semibold flex items-center'>
                    <AiOutlineShoppingCart className='text-xl mr-2' /> <p>Add to Cart</p>
                  </button>
                </div>
              </div>
              {/* -------------- Rating ---------------- */}
              <div className='pl-4 pb-5 text-xl'>
                <p className='pb-2'> Rate this product</p>
                <Rating
                  onClick={handleRating}
                  ratingValue={rating}
                  transition
                  showTooltip
                  allowHalfIcon
                  tooltipDefaultText={0}
                  fillColorArray={["#f17a45", "#f19745", "#f1a545", "#f1b345", "#f1d045"]}
                />
              </div>
            </div>
          </div>
      </Container>
    </main>
  );
};

export default SingleProductPage;
