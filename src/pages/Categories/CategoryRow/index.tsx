import { FaShoppingCart, FaHeart, FaTrash, FaInfoCircle } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "../../../lib/hooks"
import {
  addToBasket,
  removeFromBasket,
} from "../../../redux/features/basket/basketSlice"
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/features/favorites/favoritesSlice"
import { Category } from "../../../types"
import { useDeleteCategoryMutation } from "../../../api/categoryApi"
import { useNavigate } from "react-router-dom"

interface CategoryRowProps {
  category: Category
}

const CategoryRow = ({ category }: CategoryRowProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { items: favoriteItems } = useAppSelector((state) => state.favorites)
  const { items: basketItems } = useAppSelector((state) => state.basket)

  const isInBasket = basketItems.some((item) => item.id === category.id)
  const isInFavorites = favoriteItems.some((item) => item.id === category.id)

  const [deleteCategory] = useDeleteCategoryMutation()

  const handleBasketClick = () => {
    if (isInBasket) {
      dispatch(removeFromBasket(category.id))
    } else {
      dispatch(addToBasket(category))
    }
  }

  const handleFavoritesClick = () => {
    if (isInFavorites) {
      dispatch(removeFromFavorites(category.id))
    } else {
      dispatch(addToFavorites(category))
    }
  }

  const handleDeleteClick = async () => {
    try {
      await deleteCategory(category.id).unwrap()
    } catch (error) {
      console.error("Failed to delete the category:", error)
    }
  }

  const handleInfoClick = () => {
    navigate(`/categories/${category.id}`)
  }

  return (
    <tr className="bg-white hover:bg-gray-50 transition-colors duration-300">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {category.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {category.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {category.description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <button
            onClick={handleInfoClick}
            className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300"
            aria-label="Info"
          >
            <FaInfoCircle />
          </button>
          <button
            onClick={handleDeleteClick}
            className="text-red-600 hover:text-red-800 transition-colors duration-300"
            aria-label="Delete"
          >
            <FaTrash />
          </button>
          <button
            onClick={handleFavoritesClick}
            className={`text-lg ${
              isInFavorites ? "text-red-600" : "text-gray-400"
            } hover:text-red-800 transition-colors duration-300`}
            aria-label="Add to Favorites"
          >
            <FaHeart />
          </button>
          <button
            onClick={handleBasketClick}
            className={`text-lg ${
              isInBasket ? "text-green-600" : "text-gray-400"
            } hover:text-green-800 transition-colors duration-300`}
            aria-label="Add to Basket"
          >
            <FaShoppingCart />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default CategoryRow
