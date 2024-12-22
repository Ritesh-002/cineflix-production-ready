import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const queryGenTvApi = createApi({
    reducerPath: 'queryGenTvApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getQueryGenTvData: builder.query({
            query: ({ genre, pageNumber }) => `discover/tv?api_key=135415f9a797d34322ab73f628f4fe1d&with_genres=${genre}&page=${pageNumber}`,
        }),
    }),
});

export const { useGetQueryGenTvDataQuery } = queryGenTvApi;
