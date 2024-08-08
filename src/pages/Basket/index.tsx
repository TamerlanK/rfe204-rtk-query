import { useAppSelector } from "../../lib/hooks"
import { Category } from "../../types"

const BasketPage = () => {
  const basketItems = useAppSelector((state) => state.basket.items)

  if (basketItems.length === 0) {
    return <div>No items in basket</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Basket</h1>
      <ul className="space-y-4">
        {basketItems.map((item: Category) => (
          <li key={item.id} className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BasketPage
