import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieGenreApi = createApi({
    reducerPath: 'movieGenreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getMovieGenreData: builder.query({
            query: () => `genre/movie/list?api_key=135415f9a797d34322ab73f628f4fe1d`,
        }),
    }),
});

export const { useGetMovieGenreDataQuery } = movieGenreApi;