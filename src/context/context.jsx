import React, { useState, useEffect, useContext } from "react";
import { commerce } from "../lib/commerce";
const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [cartLoading, setcartLoading] = useState(true);

  const switchSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const switchCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };
  const closeDropdown = () => {
    setIsCategoryOpen(false);
  };
  const fetchProducts = async () => {
    const { data } = await commerce?.products?.list();
    setProducts(data);
    setProductsLoading(false);
  };
  const fetchCategories = async () => {
    const { data } = await commerce?.categories?.list();
    setCategories(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  useEffect(() => {
    fetchCart();
    setcartLoading(false);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        isCategoryOpen,
        switchCategory,
        switchSidebar,
        closeDropdown,
        cart,
        setCart,
        cartLoading,
        productsLoading,
        handleAddToCart,
        handleEmptyCart,
        handleRemoveFromCart,
        products,
        categories,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
export function useGlobal() {
  return useContext(GlobalContext);
}
export { ContextProvider, GlobalContext };
