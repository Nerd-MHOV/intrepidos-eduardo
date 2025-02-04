// src/store/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
}

interface CartState {
  cartItems: CartItem[];
}

// Safely retrieve cart items from localStorage
const getInitialCartItems = (): CartItem[] => {
  try {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  } catch (error) {
    console.error("Failed to parse cart items from localStorage", error);
  }
  return [];
};

const initialState: CartState = {
  cartItems: getInitialCartItems(),
};
const saveItemsToLocalStorage = (items: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartItem>) => {
      const hasItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (hasItem) {
        hasItem.qty += 1;
        saveItemsToLocalStorage(state.cartItems);
        return;
      }
      state.cartItems.push(action.payload);
      saveItemsToLocalStorage(state.cartItems);
      toast.success("Item Adicionado ao Carrinho");
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      saveItemsToLocalStorage(state.cartItems);
      toast.success("Item Removido");
    },
    removeAllProductsFromCart: (state) => {
      state.cartItems = [];
      saveItemsToLocalStorage(state.cartItems);
      // toast.success("All items cleared successfully");
    },
    incrementQty: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload
      );
      if (item) {
        item.qty += 1;
        saveItemsToLocalStorage(state.cartItems);
      }
    },
    decrementQty: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload
      );
      if (item && item.qty > 1) {
        item.qty -= 1;
        saveItemsToLocalStorage(state.cartItems);
      } else {
        state.cartItems = state.cartItems.filter(
          (product) => product.id !== action.payload
        );
        saveItemsToLocalStorage(state.cartItems);
        toast.success("Item Removido");
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  incrementQty,
  decrementQty,
  removeAllProductsFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
