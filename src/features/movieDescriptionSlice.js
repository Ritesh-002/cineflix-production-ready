import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieDescriptionApi = createApi({
    reducerPath: 'movieDescriptionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getMovieDescriptionData: builder.query({
            query: (movieId) => `movie/${movieId}?api_key=135415f9a797d34322ab73f628f4fe1d`,
        }),
    }),
});

export const { useGetMovieDescriptionDataQuery } = movieDescriptionApi;
