import { configureStore } from "@reduxjs/toolkit"
import { categoryApi } from "../api/categoryApi"
import basketReducer from "./features/basket/basketSlice"
import favoritesReducer from "./features/favorites/favoritesSlice"

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    basket: basketReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
