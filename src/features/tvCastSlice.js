import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tvCastApi = createApi({
    reducerPath: 'tvCastApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getTvCastData: builder.query({
            query: (id) => `tv/${id}/credits?api_key=135415f9a797d34322ab73f628f4fe1d`,
        }),
    }),
});

export const { useGetTvCastDataQuery } = tvCastApi;