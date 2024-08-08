import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Category } from "../../../types"

interface FavoritesState {
  items: Category[]
}

const initialState: FavoritesState = {
  items: [],
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<Category>) {
      state.items.push(action.payload)
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
