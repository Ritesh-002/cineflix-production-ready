import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const topRatedMovieApi = createApi({
    reducerPath: 'topRatedMovieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getTopRatedMovieData: builder.query({
            query: (page) => `movie/top_rated?api_key=135415f9a797d34322ab73f628f4fe1d&page=${page}`,
        }),
    }),
});

export const { useGetTopRatedMovieDataQuery } = topRatedMovieApi;