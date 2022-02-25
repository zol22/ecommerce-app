import { createSlice } from '@reduxjs/toolkit';

      
/* Another way to use map()
return state.map((item) => 
    item.product.id === action.payload.product.id ? { ...item, qty: item.qty + 1 } : item
);*/
const initialState = {
  cart: [],
  favorites: []
}

export const cartSlice = createSlice({
  name: 'cartSEESH',
  initialState,
  reducers: {
    addCart: (state,action) => {

        // Check if product already exist by its id
        const isExist = state.cart.find((c)=> c.product.id === action.payload.product.id)
        if (isExist) {
          alert("It's already on the cart. You can modify the quantity there!")
        } 
        else {
          console.log("New non-repeated Product")
          state.cart =  [
            ...state.cart, // Dont overwrite anything, just push a new product and add property qty: 1
            {
              ...action.payload,
              qty: 1,
            }
          ]
        } 
    },
    addQuantityCart: (state,action) => {

      // Make sure the product already exist by filtered by its id
      const isExist = state.cart.find((c)=> c.product.id === action.payload.id);
      // Now that we know that the item is somewhere on the cart, we need to find it; Therefore, we use .map() to iterate the cart
      if (isExist) {
        const returnValues = state.cart.map((item)=> {  // Iterate through each item 
          if (item.product.id === action.payload.id){ // if item is found 
            console.log(JSON.stringify(state.cart))
            return {
              ...item,
              qty: item.qty + 1 // overwrite its quatity
            }
          }
           console.log(JSON.stringify(item))
          return item// To not return undefined values from a map() method, you have to explicitly return a value from the callback function you passed to the map() method.
        })
        state.cart = [...returnValues]
      }
      else {
        return false;
      }
    },
    removeQuantityCart: (state, action) => {
       // Make sure the product exist by filtered by its id
       const isExist = state.cart.find((c)=> c.product.id === action.payload.id);
       if (isExist) {
        const returnValues = state.cart.map((item)=> {
           if (item.product.id === action.payload.id){
             return {
               ...item,
               qty: item.qty-1
             }
           }
           return item
         })
         state.cart = [...returnValues]
       }
       else {
         return false;
       }

    },
    favoriteCart: (state, action) => {

      // Find if the item is already on the favorite list
      const isExist = state.favorites.find((c)=> c.product.id === action.payload.product.id);
      console.log(isExist)

      if (isExist){
        console.log("Its already on favorite, need to be removed now")
        const returnValues = state.favorites.filter((item)=> item.product.id !== action.payload.product.id);
        state.favorites= [...returnValues];
      }
      else {
        state.favorites = [...state.favorites, action.payload];
        // go to the cart and set the item favorite to true
        console.log("Ok, It's on the favorite List")
      }
    },
    removeFavoriteCart: (state,action) => {
      const returnValues = state.favorites.filter((item)=> item.product.id !== action.payload.id);
      console.log(JSON.stringify(returnValues));
      state.favorites = [...returnValues];
    },
    removeCart: (state, action) => {
      const returnValues = state.cart.filter((item)=> item.product.id !== action.payload.id);
      state.cart = [...returnValues];
    },
  },
});

export const { addCart, addQuantityCart, removeQuantityCart, favoriteCart, removeFavoriteCart,removeCart } = cartSlice.actions;
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
