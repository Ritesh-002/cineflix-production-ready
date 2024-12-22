import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const similarMovieApi = createApi({
    reducerPath: 'similarMovieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getSimilarMovieData: builder.query({
            query: (movieId) => `movie/${movieId}/similar?api_key=135415f9a797d34322ab73f628f4fe1d`,
        }),
    }),
});

export const { useGetSimilarMovieDataQuery } = similarMovieApi;