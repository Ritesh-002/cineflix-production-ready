import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trendingApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getTrendingData: builder.query({
            query: (limit = 5) => `trending/all/day?api_key=135415f9a797d34322ab73f628f4fe1d&limit=${limit}`,
            transformResponse: (response) => response.results.slice(0, 5),
        })
    })
})

export const { useGetTrendingDataQuery } = trendingApi