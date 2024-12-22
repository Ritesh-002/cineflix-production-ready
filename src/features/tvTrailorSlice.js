import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tvTrailorApi = createApi({
    reducerPath: 'tvTrailorApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getTvTrailorData: builder.query({
            query: (tvId) => `tv/${tvId}/videos?api_key=135415f9a797d34322ab73f628f4fe1d`,
        }),
    }),
});

export const { useGetTvTrailorDataQuery } = tvTrailorApi;
