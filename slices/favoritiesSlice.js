import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favories",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const newFav = action.payload;
      const existingFav = state.favorite.find((itm) => itm.id);

      if (!existingFav) {
        state.favorite.push(newFav);
      }
    },

    removeFavorites(state, action) {
      const id = action.payload;
      const existingFav = state.favorite.find((itm) => itm.id);

      if (existingFav) {
        state.favorite = state.favorite.filter((itm) => itm.id !== id);
      }
    },
    emptyFavorites(state, action) {
      state.favorite = [];
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;
