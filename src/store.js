// import { configureStore } from "@reduxjs/toolkit";
// import { trendingApi } from "./features/trendingApiSlice";

// export const Store = configureStore({
//     reducer: {
//         [trendingApi.reducerPath]: trendingApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(trendingApi.middleware),
// })

import { configureStore } from "@reduxjs/toolkit";
import { trendingApi } from "./features/trendingApiSlice";
import { upcomingMovieApi } from "./features/upcomingMovieApiSlice"; // Import the upcomingMovieApi slice
import { topRatedMovieApi } from "./features/topRatedMoviesSlice";
import { popularTvApi } from "./features/popularTv";
import { airingTodayTvApi } from "./features/ariringTodayTvSlice";
import { movieDescriptionApi } from "./features/movieDescriptionSlice";
import { castApi } from "./features/castSlice";
import { movieTrailorApi } from "./features/movieTrailorSlice";
import { similarMovieApi } from "./features/similarMovieSlice";
import { movieGenreApi } from "./features/movieGenreSlice";
import { queryGenMovieApi } from "./features/queryMovieByGenreSlice";
import { nameQueryMovieApi } from "./features/nameQueryMovieSlice";
import { queryGenTvApi } from "./features/queryTvByGenreSlice";
import { nameQueryTvApi } from "./features/nameQueryTvSlice";
import { similarTvApi } from "./features/similarTvSlice";
import { tvDescriptionApi } from "./features/tvDescriptionSlice";
import { tvCastApi } from "./features/tvCastSlice";
import { tvTrailorApi } from "./features/tvTrailorSlice";

export const Store = configureStore({
    reducer: {
        [trendingApi.reducerPath]: trendingApi.reducer,
        [upcomingMovieApi.reducerPath]: upcomingMovieApi.reducer,
        [topRatedMovieApi.reducerPath]: topRatedMovieApi.reducer,
        [popularTvApi.reducerPath]: popularTvApi.reducer,
        [airingTodayTvApi.reducerPath]: airingTodayTvApi.reducer,
        [movieDescriptionApi.reducerPath]: movieDescriptionApi.reducer,
        [castApi.reducerPath]: castApi.reducer,
        [movieTrailorApi.reducerPath]: movieTrailorApi.reducer,
        [similarMovieApi.reducerPath]: similarMovieApi.reducer,
        [movieGenreApi.reducerPath]: movieGenreApi.reducer,
        [queryGenMovieApi.reducerPath]: queryGenMovieApi.reducer,
        [nameQueryMovieApi.reducerPath]: nameQueryMovieApi.reducer,
        [queryGenTvApi.reducerPath]: queryGenTvApi.reducer,
        [nameQueryTvApi.reducerPath]: nameQueryTvApi.reducer,
        [similarTvApi.reducerPath]: similarTvApi.reducer,
        [tvDescriptionApi.reducerPath]: tvDescriptionApi.reducer,
        [tvCastApi.reducerPath]: tvCastApi.reducer,
        [tvTrailorApi.reducerPath]: tvTrailorApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            trendingApi.middleware,
            upcomingMovieApi.middleware,
            topRatedMovieApi.middleware,
            popularTvApi.middleware,
            airingTodayTvApi.middleware,
            movieDescriptionApi.middleware,
            castApi.middleware,
            movieTrailorApi.middleware,
            similarMovieApi.middleware,
            movieGenreApi.middleware,
            queryGenMovieApi.middleware,
            nameQueryMovieApi.middleware,
            queryGenTvApi.middleware,
            nameQueryTvApi.middleware,
            similarTvApi.middleware,
            tvDescriptionApi.middleware,
            tvCastApi.middleware,
            tvTrailorApi.middleware,
        ),
});
