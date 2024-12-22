import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const queryGenMovieApi = createApi({
    reducerPath: 'queryGenMovieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getQueryGenMovieData: builder.query({
            query: ({ genre, pageNumber }) => `discover/movie?api_key=135415f9a797d34322ab73f628f4fe1d&with_genres=${genre}&page=${pageNumber}`,
        }),
    }),
});

export const { useGetQueryGenMovieDataQuery } = queryGenMovieApi;
