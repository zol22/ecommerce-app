import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: []
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {
        // Check if product already exist by its id
        const isExist = state.cart.filter((c)=> c.id === action.payload.id)

        // if exist, increase its quantity
        if (isExist.length > 0){
          action.payload.quantity = action.payload.quantity + 1; //increase its quantity
          state.cart = [action.payload] // return just the given payload (overWrite the filtered product by adding + 1 to its quantity)
        } 
        // if not exist
        else {
          state.cart = [...state.cart ,action.payload]; // Dont overwrite anything, just push a new product 
        } 
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
