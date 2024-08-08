import { useParams } from "react-router-dom"
import { useGetCategoryByIdQuery } from "../../api/categoryApi"

const CategoryDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const {
    data: category,
    isLoading,
    isError,
  } = useGetCategoryByIdQuery(id || "")

  if (isLoading) return <div className="text-center py-4">Loading...</div>
  if (isError)
    return (
      <div className="text-center py-4 text-red-600">
        Error loading category details
      </div>
    )
  if (!category)
    return (
      <div className="text-center py-4 text-red-600">Category not found</div>
    )

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">
        Category Details
      </h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">ID</h2>
          <p className="text-gray-600">{category.id}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Name</h2>
          <p className="text-gray-600">{category.name}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-700">Description</h2>
          <p className="text-gray-600">{category.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryDetailPage
