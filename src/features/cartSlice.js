import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: []
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
      state.cart = action.payload;
    },
    removeCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};*/

export default cartSlice.reducer;
