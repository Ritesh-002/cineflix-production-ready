import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const similarTvApi = createApi({
    reducerPath: 'similarTvApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getSimilarTvData: builder.query({
            query: (tvId) => `tv/${tvId}/similar?api_key=135415f9a797d34322ab73f628f4fe1d`,
        }),
    }),
});

export const { useGetSimilarTvDataQuery } = similarTvApi;