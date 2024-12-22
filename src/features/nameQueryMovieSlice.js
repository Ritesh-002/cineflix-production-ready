import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nameQueryMovieApi = createApi({
    reducerPath: 'nameQueryMovieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getNameQueryMovieData: builder.query({
            query: (queryText) => `search/movie?query=${queryText}&api_key=135415f9a797d34322ab73f628f4fe1d`,
        }),
    }),
});

export const { useGetNameQueryMovieDataQuery } = nameQueryMovieApi;
