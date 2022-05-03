import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { aboutItem } from "../data";
const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p?.price.formatted);
    maxPrice = Number(Math.max(...maxPrice));
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [];
    if (sort === "price-lowest") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.price.formatted - b.price.formatted;
      });
    }
    if (sort === "price-highest") {
      tempProducts = filtered_products.sort((a, b) => {
        return b.price.formatted - a.price.formatted;
      });
    }
    if (sort === "name-a") {
      tempProducts = filtered_products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = filtered_products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, color, price, category } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        console.log(aboutItem.find((item) => item.id === product.id));
        return product.name.toLowerCase().startsWith(text);
      });
    }
    // filter by category

    if (category !== "All") {
      tempProducts = tempProducts.filter((product) => {
        return product?.categories[0]?.name === category;
      });
    }
    // filter by color
    if (color !== "All") {
      tempProducts = tempProducts.filter((product) => {
        const tempItem = aboutItem.find((item) => item.id === product.id);
        return tempItem.colors.find((c) => c === color);
      });
    }
    // filter by price
    tempProducts = tempProducts.filter((product) => product.price.formatted <= price);
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        color: "All",
        category: "All",
        price: state.filters.max_price,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default filter_reducer;
//[0].variant_groups[0].options[0]
