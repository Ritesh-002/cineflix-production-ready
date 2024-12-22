import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const airingTodayTvApi = createApi({
    reducerPath: 'airingTodayTvApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getAiringTodayTvData: builder.query({
            query: (page) => `tv/airing_today?api_key=135415f9a797d34322ab73f628f4fe1d&page=${page}`,
        }),
    }),
});

export const { useGetAiringTodayTvDataQuery } = airingTodayTvApi;