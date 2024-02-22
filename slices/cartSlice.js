import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       // const newCart = action.payload;
//       const existingCart = state.cart.find((itm) => itm.id === newCart.id);

//       const updatedCart = [...state.cart];
//       // if (existingCart>-1) {
//       //   state.cart.push(newCart);
//       // }
//       if (!existingCart) {
//         updatedCart.push({ ...action.payload, quantity: 1 });
//         // state.cart.push(newCart);
//       } else {
//         const updateQty = {
//           ...state.cart[existingCart],
//           quantity: state.cart[existingCart].quantity + 1,
//         };

//         updatedCart[existingCart] = updateQty;
//       }
//     },

//     removeCart(state, action) {
//       const id = action.payload;
//       const existingCart = state.cart.find((itm) => itm.id == id);

//       const updatedCart = [...state.cart];

//       if (existingCart.quantity === 1) {
//         updatedCart.splice(existingCart, 1);
//         // state.cart = state.cart.filter((itm) => itm.id !== id);
//       } else {
//         const updatedItem = {
//           ...existingCart,
//           quantity: existingCart.quantity - 1,
//         };

//         updatedCart[existingCart] = updatedItem;

//         return { ...state, cart: updatedCart };
//       }
//     },

//     emptyCart(state, action) {
//       state.cart = [];
//     },
//   },
// });

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newCart = action.payload;
      const existingCart = state.cart.find((itm) => itm.id === newCart.id);

      const updatedCart = [...state.cart];
      if (!existingCart) {
        updatedCart.push({ ...action.payload, quantity: 1 });

        //         updatedCart.push({ ...action.payload, quantity: 1 });
        //         // state.cart.push(newCart);
        //       } else {
        //         const updateQty = {
        //           ...state.cart[existingCart],
        //           quantity: state.cart[existingCart].quantity + 1,
        //         };
      } else {
        const updatedQty = {
          ...state.cart[existingCart],
          quantity: state.cart[existingCart].quantity + 1,
        };

        // updatedCart.push()
        updatedCart[existingCart] = updatedCart;
      }
      // if (!existingCart) {
      //   state.cart.push(newCart);
      // }
    },

    removeCart(state, action) {
      const id = action.payload;
      const existingCart = state.cart.find((itm) => itm.id == id);
      if (existingCart) {
        state.cart = state.cart.filter((itm) => itm.id !== id);
      }
    },

    // totalCost(state, action){
    //     // const totalPrice = state.cart.reduce((acc, curr)=> {
    //     //   let cur = curr.price.match(/\d./g).join("")
    //     //   return acc+ Number(cur)
    //     // })
    //     state.cart.reduce(qty, item)=>q
    // },

    emptyCart(state, action) {
      state.cart = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
