import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import RootLayout from "../components/Layout"
import CategoriesPage from "../pages/Categories"
import AddCategoryPage from "../pages/AddCategory"
import FavoritesPage from "../pages/Favorites"
import BasketPage from "../pages/Basket"
import CategoryDetailPage from "../pages/CategoryDetail"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<CategoriesPage />} />
      <Route path="/add-category" element={<AddCategoryPage />} />
      <Route path="/categories/:id" element={<CategoryDetailPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Route>
  )
)
