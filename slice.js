import { configureStore, createSlice } from "@reduxjs/toolkit";

// slice (merupakan gabungan reducer dan action)
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});


// store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log("oncreate store : ", store.getState());

// subcribe
store.subscribe(() => {
  console.log("Store Change : ", store.getState());
});

// dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }));