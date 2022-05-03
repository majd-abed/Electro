import React from "react";
import { useGlobal } from "../context/context";
import { Container, Loading } from "../components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { cart, handleEmptyCart, handleRemoveFromCart } = useGlobal();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (!cart.line_items) return <Loading />;
  return (
    <main className='lg:mx-20 h-screen'>
      <Container>
        <>
          <h1 className='text-3xl font-bold py-4 pl-2'>Your Shopping Cart</h1>
          <div className='sm:w-[70vw] w-[95vw] m-auto'>
            {cart?.line_items.map((item) => {
              return (
                <>
                  <div className='flex bg-gray-100 mb-2 py-3 h-28 items-center'>
                    <div className='h-20 w-48 smx:w-24 smx:h-16 flex justify-center '>
                      <img
                        src={item.image.url}
                        alt='Product_image'
                        className='h-full min-w-32 py-1'
                      />
                    </div>
                    <div className='flex-1 flex flex-col justify-between h-full'>
                      <div className='flex justify-between w-full'>
                        <h2 className='font-semibold'>{item.name}</h2>
                        <p className='font-semibold pr-3'>
                          {item.quantity > 1 ? `${item.quantity} Items` : "1 Item"}
                        </p>
                      </div>
                      <div className='flex justify-between'>
                        <div className='space-x-2'>
                          <Link
                            to={`/${item.product_id}`}
                            className='p-1 bg-blue-500 hover:bg-blue-600 duration-200 text-white rounded-md text-sm font-semibold'>
                            View Product
                          </Link>
                          <button
                            onClick={() => {
                              handleRemoveFromCart(item.id);
                            }}
                            className='p-1 bg-red-500 hover:bg-red-600 duration-200 text-white rounded-md text-sm font-semibold'>
                            Remove
                          </button>
                        </div>
                        <p className='font-semibold pr-3'>
                          {item.line_total.formatted_with_symbol}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {cart.total_items ? (
            <div className='sm:w-[82vw] w-[99vw] flex flex-col items-end pr-3'>
              <p className='text-2xl font-semibold p-3 pr-1'>
                Subtotal: {cart.subtotal.formatted_with_symbol}
              </p>
              <div className='space-x-2 '>
                <button
                  onClick={() => {
                    handleEmptyCart();
                  }}
                  className='py-2 px-4 bg-red-500 text-white rounded-md text-lg font-semibold hover:bg-red-600 duration-200'>
                  Empty Cart
                </button>
                {isAuthenticated ? (
                  <button className='py-2 px-4 bg-green-500 text-white rounded-md text-lg font-semibold hover:bg-green-600 duration-200'>
                    Checkout
                  </button>
                ) : (
                  <button
                    onClick={() => loginWithRedirect()}
                    className='py-2 px-4 bg-green-300 text-white rounded-md text-;g font-semibold hover:bg-green-400 duration-200'>
                    Log In to Checkout
                  </button>
                )}
              </div>
            </div>
          ) : (
            <p className='text-lg font-semibold pl-4 '>
              You have no items in your shopping Cart
            </p>
          )}
        </>
      </Container>
    </main>
  );
};
export default Cart;
