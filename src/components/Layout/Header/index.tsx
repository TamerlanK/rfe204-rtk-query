import { NavLink } from "react-router-dom"
import { useAppSelector } from "../../../lib/hooks"

const Header = () => {
  const favoriteCount = useAppSelector((state) => state.favorites.items.length)
  const basketCount = useAppSelector((state) => state.basket.items.length)

  return (
    <header className="flex justify-center items-center gap-x-4 py-12 bg-slate-950 text-white relative">
      <NavLink to={"/"}>Categories</NavLink>
      <NavLink to={"/add-category"}>Add Category</NavLink>
      <div className="relative">
        <NavLink to={"/favorites"}>Favorites</NavLink>
        {favoriteCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {favoriteCount}
          </span>
        )}
      </div>
      <div className="relative">
        <NavLink to={"/basket"}>Basket</NavLink>
        {basketCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {basketCount}
          </span>
        )}
      </div>
    </header>
  )
}

export default Header
