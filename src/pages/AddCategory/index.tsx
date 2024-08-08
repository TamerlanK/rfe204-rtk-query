import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useAddCategoryMutation } from "../../api/categoryApi"
import { CategoryFormValues, categorySchema } from "../../lib/validation"

const AddCategoryPage = () => {
  const [addCategory, { isLoading, isError, isSuccess }] =
    useAddCategoryMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
  })

  const onSubmit = async (data: CategoryFormValues) => {
    try {
      await addCategory(data).unwrap()
      alert("Category added successfully!")
    } catch (err) {
      console.error("Failed to add category:", err)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Add Category</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter category name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter category description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
        >
          {isLoading ? "Adding..." : "Add Category"}
        </button>

        {isError && <p className="text-red-500 text-sm mt-4">Try again.</p>}
        {isSuccess && (
          <p className="text-green-500 text-sm mt-4">
            Category added successfully!
          </p>
        )}
      </form>
    </div>
  )
}

export default AddCategoryPage
