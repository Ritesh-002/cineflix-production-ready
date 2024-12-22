import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const popularTvApi = createApi({
    reducerPath: 'popularTvApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getPopularTvData: builder.query({
            query: (page) => `tv/popular?api_key=135415f9a797d34322ab73f628f4fe1d&page=${page}`,
        }),
    }),
});

export const { useGetPopularTvDataQuery } = popularTvApi;
