import { api } from "./api";

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        // Get request
        getProducts: build.query({
            query: () => ({
                url: "/products",
            }),
            providesTags: ["Product"],
        }),
        postProduct: build.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Product"],
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"],
        }),
    }),
});

export const {
    useGetProductsQuery,
    usePostProductMutation,
    useDeleteProductMutation,
} = productApi;
