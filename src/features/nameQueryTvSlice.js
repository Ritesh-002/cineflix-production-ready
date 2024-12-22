import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nameQueryTvApi = createApi({
    reducerPath: 'nameQueryTvApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getNameQueryTvData: builder.query({
            query: (queryText) => `search/tv?query=${queryText}&api_key=135415f9a797d34322ab73f628f4fe1d`,
        }),
    }),
});

export const { useGetNameQueryTvDataQuery } = nameQueryTvApi;
