import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tvDescriptionApi = createApi({
    reducerPath: 'tvDescriptionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getTvDescriptionData: builder.query({
            query: (tvId) => `tv/${tvId}?api_key=135415f9a797d34322ab73f628f4fe1d`,
        }),
    }),
});

export const { useGetTvDescriptionDataQuery } = tvDescriptionApi;
