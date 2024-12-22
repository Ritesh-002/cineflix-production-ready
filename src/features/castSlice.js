import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const castApi = createApi({
    reducerPath: 'castApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getCastData: builder.query({
            query: (id) => `movie/${id}/credits?api_key=135415f9a797d34322ab73f628f4fe1d`,
        }),
    }),
});

export const { useGetCastDataQuery } = castApi;