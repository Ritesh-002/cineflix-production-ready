import { useGetTrendingDataQuery } from "../features/trendingApiSlice"
import React, { useEffect } from 'react';
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import '../css/home.css'
import { useGetUpcomingMovieDataQuery } from "../features/upcomingMovieApiSlice";
import { useGetTopRatedMovieDataQuery } from "../features/topRatedMoviesSlice";
import { useGetPopularTvDataQuery } from "../features/popularTv";
import { useGetAiringTodayTvDataQuery } from "../features/ariringTodayTvSlice";
import Footer from "../components/homeComponents/footer";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay]);
function Home() {
    const { data: trendingData, error: trendingError, isLoading: trendingIsLoading } = useGetTrendingDataQuery();
    const { data: upcomingMovieData, error: upcomingMovieError, isLoading: upcomingIsLoading } = useGetUpcomingMovieDataQuery(1)
    const { data: topRatedMovieData, error: topRatedMovieError, isLoading: topRatedMovieIsLoading } = useGetTopRatedMovieDataQuery(1)
    const { data: popularTvData, error: popularTvError, isLoading: popularTvIsLoading } = useGetPopularTvDataQuery(1)
    const { data: airingTvData, error: airingTvError, isLoading: airingTvIsLoading } = useGetAiringTodayTvDataQuery(1)

    console.log("trending", trendingData);
    console.log("upcomingMovie", upcomingMovieData)
    console.log("topMovie", topRatedMovieData)
    console.log("popular", popularTvData)
    console.log("airingTvData", airingTvData)
    if (trendingIsLoading) {
        return <div>Loading...</div>;
    }
    if (trendingError || upcomingMovieError || topRatedMovieError || popularTvError || airingTvError) {
        return <div>Error</div>;
    }

    return (
        <div className="main-page">
            <div className="hero-slide">
                <Swiper modules={[Autoplay]} grabCursor={true} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 3000 }} speed={5000} >
                    {trendingData && trendingData.map(d => {
                        const imgUrl = `https://image.tmdb.org/t/p/original/${d.backdrop_path}`;
                        const posterImgUrl = `https://image.tmdb.org/t/p/w300/${d.poster_path}`;

                        return (
                            <SwiperSlide key={d.id}>
                                <div style={{ background: `url(${imgUrl}) center/cover` }} className="w-full temporary min-h-screen pt-20 flex gap-8" key={d.id}>
                                    <div className="carousel-content temporary-two flex flex-col justify-start items-start gap-6 w-1/2 pl-44" key={d.id}>
                                        <h1 className="text-5xl pop-outin pt-16 text-white font-semibold" key={d.original_title}>{d.original_title ? d.original_title : d.original_name}</h1>
                                        <p className="text-white pop-outin-two" key={d.overview}>{d.overview}</p>
                                        <Link to={`/movie_description/${d.id}`}><button className="px-5 rounded-md hover:cursor-pointer py-1.5 bg-cyan-600 text-white" key={d.id}>watch now</button></Link>
                                    </div>
                                    <div className="w-1/2">
                                        <img className="carousel-image rounded-2xl" src={posterImgUrl} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <div className="second-section">
                <div className="flex pt-6 justify-between">
                    <p className="text-white text-lg pl-8">Upcoming Movies</p>
                    <button className="rounded-lg text-white mr-8 bg-cyan-700 px-3 py-1.5">Load More</button>
                </div>
                <Swiper grabCursor={true} spaceBetween={-220} slidesPerView={6}>
                    {upcomingMovieData && upcomingMovieData.results.map(upMovie => {
                        const upImgUrl = `https://image.tmdb.org/t/p/w200/${upMovie.poster_path}`;
                        return (
                            <SwiperSlide key={upMovie.id}>
                                <div className="pt-4 to-put-hover pb-8 ml-8 flex flex-col justify-start items-start w-44">
                                    <Link to={`/movie_description/${upMovie.id}`}><img className="w-40 hover:cursor-pointer rounded-2xl" key={upMovie.id} src={upImgUrl} alt="" /></Link>
                                    <p className="text-white ml-2 mr-2 pt-1" key={upMovie.title}>{upMovie.title ? upMovie.title : upMovie.original_title}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <div className="third-section">
                <div className="flex pt-6 justify-between">
                    <p className="text-white text-lg pl-8">Top Rated Movies</p>
                    <button className="rounded-lg text-white mr-8 bg-cyan-700 px-3 py-1.5">Load More</button>
                </div>
                <Swiper grabCursor={true} spaceBetween={-220} slidesPerView={6}>
                    {topRatedMovieData && topRatedMovieData.results.map(topMovie => {
                        const upImgUrl = `https://image.tmdb.org/t/p/w200/${topMovie.poster_path}`;
                        return (
                            <SwiperSlide key={topMovie.id}>
                                <div className="pt-4 to-put-hover  pb-8 ml-8 flex flex-col justify-start items-start w-44">
                                    <Link to={`/movie_description/${topMovie.id}`}><img className="w-40 hover:cursor-pointer rounded-2xl" key={topMovie.id} src={upImgUrl} alt="" /></Link>
                                    <p className="text-white ml-2 mr-2 pt-1" key={topMovie.title}>{topMovie.title ? topMovie.title : topMovie.original_title}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <div className="fourth-section">
                <div className="flex pt-6 justify-between">
                    <p className="text-white text-lg pl-8">Popular Tv</p>
                    <button className="rounded-lg text-white mr-8 bg-cyan-700 px-3 py-1.5">Load More</button>
                </div>
                <Swiper grabCursor={true} spaceBetween={-220} slidesPerView={6}>
                    {popularTvData && popularTvData.results.map(popTv => {
                        const upImgUrl = `https://image.tmdb.org/t/p/w200/${popTv.poster_path}`;
                        return (
                            <SwiperSlide key={popTv.id}>
                                <div className="pt-4 pb-8 to-put-hover  ml-8 flex flex-col justify-start items-start w-44">
                                    <Link to={`/tv_description/${popTv.id}`}><img className="w-40 hover:cursor-pointer rounded-2xl" key={popTv.id} src={upImgUrl} alt="" /></Link>
                                    <p className="text-white mr-2 ml-2 pt-1" key={popTv.name}>{popTv.name ? popTv.name : popTv.original_name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <div className="fifth-section">
                <div className="flex pt-6 justify-between">
                    <p className="text-white text-lg pl-8">Airing Today Tv</p>
                    <button className="rounded-lg text-white mr-8 bg-cyan-700 px-3 py-1.5">Load More</button>
                </div>
                <Swiper grabCursor={true} spaceBetween={-220} slidesPerView={6}>
                    {airingTvData && airingTvData.results.map(airTv => {
                        const upImgUrl = `https://image.tmdb.org/t/p/w200/${airTv.poster_path}`;
                        return (
                            <SwiperSlide key={airTv.id}>
                                <div className="pt-4 to-put-hover  pb-8 ml-8 flex  flex-col justify-start items-start w-44">
                                    <Link to={`/tv_description/${airTv.id}`}><img className="w-40 to-put-hover hover:cursor-pointer rounded-2xl" key={airTv.id} src={upImgUrl} alt="" /></Link>
                                    <p className="text-white ml-2 mr-2 pt-1" key={airTv.name}>{airTv.name ? airTv.name : airTv.original_name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <Footer />
        </div>
    );
}

export default Home
