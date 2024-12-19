import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// reducer
const addToCart = createAction("ADD_TO_CART");
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("CREATE_SESSION");
const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("oncreate store : ", store.getState());

// subcribe
store.subscribe(() => {
  console.log("Store Change : ", store.getState());
});

// dispatch
store.dispatch(addToCart({ id: 1, qty: 10 }));
store.dispatch(addToCart({ id: 2, qty: 10 }));
store.dispatch(login());
