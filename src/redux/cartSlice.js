import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQty: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existItem = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existItem >= 0) {
        state.cartItems[existItem] = {
          ...state.cartItems[existItem],
          cartQty: state.cartItems[existItem].cartQty + 1,
        };
        let productName = state.cartItems[existItem].name;
        toast.success(`${productName} added to cart`, {
          position: 'bottom-left',
        });
      } else {
        const tempProduct = { ...action.payload, cartQty: 1 };
        state.cartItems.push(tempProduct);
        let productName = tempProduct.name;
        toast.success(`${productName} added to cart`, {
          position: 'bottom-left',
        });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQty > 1) {
        state.cartItems[itemIndex].cartQty -= 1;

        let productName = state.cartItems[itemIndex].name;
        toast.info(`${productName} deleted from cart`, {
          position: 'bottom-left',
        });
      } else if (state.cartItems[itemIndex].cartQty === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );

        state.cartItems = nextCartItems;

        let productName = state.cartItems[itemIndex].name;
        toast.info(`${productName} deleted from cart`, {
          position: 'bottom-left',
        });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item._id !== cartItem._id
          );

          state.cartItems = nextCartItems;
          toast.info(`Product removed from cart`, {
            position: 'bottom-left',
          });
        }
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotalAmount(state, action) {
      let { total, qty } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQty } = cartItem;
          const itemTotal = price * cartQty;

          cartTotal.total += itemTotal;
          cartTotal.qty += cartQty;

          return cartTotal;
        },
        {
          total: 0,
          qty: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQty = qty;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, decreaseCart, getTotalAmount, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
