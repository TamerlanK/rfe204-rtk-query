import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Category } from "../types"

const baseUrl = "https://northwind.vercel.app/api"

export const categoryApi = createApi({
  reducerPath: "api/categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["Categories"],
    }),
    getCategoryById: builder.query<Category, string>({
      query: (id) => `/categories/${id}`,
    }),
    deleteCategory: builder.mutation<void, number>({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
    addCategory: builder.mutation<Category, Omit<Category, "id">>({
      query: (newCategory) => ({
        url: "categories",
        method: "POST",
        body: newCategory,
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
  tagTypes: ["Categories"],
})

export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useDeleteCategoryMutation,
  useAddCategoryMutation,
} = categoryApi
