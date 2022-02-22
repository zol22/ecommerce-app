import { createSlice } from '@reduxjs/toolkit';

      
/* Another way to use map()
return state.map((item) => 
    item.product.id === action.payload.product.id ? { ...item, qty: item.qty + 1 } : item
);*/
const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state,action) => {

        // Check if product already exist by its id
        const isExist = state.find((c)=> c.product.id === action.payload.product.id)
        if (isExist) {
          alert("It's already on the cart. You can modify the quantity there!")
        } 
        else {
          console.log("New non-repeated Product")
          return  [
            ...state, // Dont overwrite anything, just push a new product and add property qty: 1
            {
              ...action.payload,
              qty: 1,
            }
          ]
        } 

    },
    addQuantityCart: (state,action) => {

      // Make sure the product already exist by filtered by its id
      const isExist = state.find((c)=> c.product.id === action.payload.id);

      // Now that we know that the item is somewhere on the cart, we need to find it; Therefore, we use .map() to iterate the cart
      if (isExist) {
        return state.map((item)=> {  // Iterate through each item 
          if (item.product.id === action.payload.id){ // if item is found 
            return {
              ...item,
              qty: item.qty + 1 // overwrite its quatity
            }
          }
          return item // To not return undefined values from a map() method, you have to explicitly return a value from the callback function you passed to the map() method.
        })
      }
    },
    removeCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addCart, addQuantityCart, removeCart } = cartSlice.actions;
export const selectCart = (state) => state.cart

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
