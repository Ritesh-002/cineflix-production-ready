// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const upcomingMovieApi = createApi({
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://api.themoviedb.org/3/',
//     }),
//     endpoints: (builder) => ({
//         getUpcomingMovieData: builder.query({
//             query: (page = 1) => `movie/upcoming?api_key=135415f9a797d34322ab73f628f4fe1d&page=${page}`,
//             // transformResponse: (response) => response.results.slice(15, 20),
//         })
//     })
// })

// export const { useGetUpcomingMovieDataQuery } = upcomingMovieApi

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const upcomingMovieApi = createApi({
    reducerPath: 'upcomingMovieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        getUpcomingMovieData: builder.query({
            query: (page) => `movie/upcoming?api_key=135415f9a797d34322ab73f628f4fe1d&page=${page}`,
        }),
    }),
});

export const { useGetUpcomingMovieDataQuery } = upcomingMovieApi;
