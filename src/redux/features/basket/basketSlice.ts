import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Category } from "../../../types"

interface BasketState {
  items: Category[]
}

const initialState: BasketState = {
  items: [],
}

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<Category>) {
      state.items.push(action.payload)
    },
    removeFromBasket(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions
export default basketSlice.reducer
