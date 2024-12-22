import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieTrailorApi = createApi({
    reducerPath: 'movieTrailorApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getMovieTrailorData: builder.query({
            query: (movieId) => `movie/${movieId}/videos?api_key=135415f9a797d34322ab73f628f4fe1d`,
        }),
    }),
});

export const { useGetMovieTrailorDataQuery } = movieTrailorApi;
