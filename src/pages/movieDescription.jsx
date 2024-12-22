import React from "react";
import { Dialog, DialogBody, Card } from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { useGetMovieDescriptionDataQuery } from "../features/movieDescriptionSlice";
import '../css/movieDescription.css';
import { useGetCastDataQuery } from "../features/castSlice";
import { useGetMovieTrailorDataQuery } from "../features/movieTrailorSlice";
import VideoDialog from "../modals/videoModal";
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { useGetSimilarMovieDataQuery } from "../features/similarMovieSlice";
import Footer from "../components/homeComponents/footer";

function MovieDescription() {
    const { id: movieId } = useParams();
    const { data: movieDescriptionData, isLoading: movieDescriptionIsLoading, error: movieDescriptionError } = useGetMovieDescriptionDataQuery(movieId);
    const { data: castData, isLoading: castIsLoading, error: castIsError } = useGetCastDataQuery(movieId);
    const { data: movieTrailorData, isLoading: movieTrailorIsLoading, error: movieTrailorError } = useGetMovieTrailorDataQuery(movieId)
    const { data: similarMovieData, isLoading: similarMovieIsLoading, error: similarMovieError } = useGetSimilarMovieDataQuery(movieId)

    if (movieDescriptionIsLoading || castIsLoading || movieTrailorIsLoading || similarMovieIsLoading) {
        return <div>Loading...</div>;
    }

    if (movieDescriptionError || castIsError || movieTrailorError || similarMovieError) {
        return <div>Error: Unable to fetch data</div>;
    }

    console.log("videosData", movieTrailorData)

    const movieDescriptionBackImage = `https://image.tmdb.org/t/p/original/${movieDescriptionData?.backdrop_path}`;
    const movieDescriptionPosterImage = `https://image.tmdb.org/t/p/original/${movieDescriptionData?.poster_path}`;
    let count = 0;
    return (
        <div>
            <div className="pb-16">
                <div className="movie-description-wrapper" style={{ backgroundImage: `url(${movieDescriptionBackImage})` }}>
                </div>
                <div className="content"></div>
                <div className="text-white -mt-40 pb-10 px-60 items-center w-full flex gap-5 bg-darkBlack" >
                    <div className="w-1/2 z-50">
                        <img className="rounded-2xl max-w-xl h-96" src={movieDescriptionPosterImage} alt="" />
                    </div>
                    <div className="flex flex-col z-50 gap-6">
                        <h1 className="text-5xl">{movieDescriptionData.original_title ? movieDescriptionData.original_title : movieDescriptionData.title}</h1>
                        <div className="text-white flex gap-2">
                            {movieDescriptionData.genres && movieDescriptionData.genres.map((gen) => (
                                <div key={gen.id} className="border-2 w-28 border-white text-sm p-0.5 text-center rounded-2xl">{gen.name}</div>
                            ))}
                        </div>
                        <div className="text-white text-sm">Release Data: <span className="text-white text-sm">{movieDescriptionData.release_date}</span></div>
                        <p className="text-xs">{movieDescriptionData?.overview}</p>
                        <div className="flex flex-col gap-2">
                            <p>Casts</p>
                            <div className="flex gap-2">
                                {castData.cast && castData.cast.slice(0, 5).map((c, index) => (
                                    <div className="w-20" key={index}>
                                        {c.profile_path && <img className="rounded-sm w-full" src={`https://image.tmdb.org/t/p/w200/${c.profile_path}`} alt="" />}
                                        {c.original_name && <p className="text-xs">{c.original_name}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-white -mt-16 h-auto bg-darkBlack">
                {movieTrailorData.results.map(mt => {
                    if ((mt.type == "Teaser" || mt.type == "Trailer") && count < 3) {
                        const vdLink = `https://www.youtube.com/embed/${mt.key}`;
                        const thumbLink = `https://img.youtube.com/vi/${mt.key}/maxresdefault.jpg` ? `https://img.youtube.com/vi/${mt.key}/maxresdefault.jpg` : `https://img.youtube.com/vi/${mt.key}/default.jpg`;
                        count++;
                        return (
                            <div className="flex justify-center items-center flex-col gap-2 ">
                                <p className="text-xl p-6 font-semibold" key={mt.name}>{mt.name}</p>
                                <VideoDialog videoLink={vdLink} thumbLink={thumbLink} />
                            </div>
                        )
                    }
                })}
            </div>

            <div className="bg-darkBlack pb-20 text-white">
                <p className="ml-8  font-semibold text-xl">Similar</p>
                <div className="third-section">
                    <Swiper grabCursor={true} spaceBetween={-220} slidesPerView={6}>
                        {similarMovieData.results.map(simMovie => {
                            const upImgUrl = `https://image.tmdb.org/t/p/w200/${simMovie.poster_path}`;
                            return (
                                <SwiperSlide key={simMovie.id}>
                                    <div className="pt-4 pb-8 ml-8 flex flex-col justify-start items-start w-44">
                                        <Link to={`/movie_description/${simMovie.id}`}><img className="w-40 hover:cursor-pointer rounded-2xl" key={simMovie.id} src={upImgUrl} alt="" /></Link>
                                        <p className="text-white ml-2 mr-2 pt-1" key={simMovie.title}>{simMovie.title ? simMovie.title : simMovie.original_title}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>

            <div className="-mt-16"><Footer /></div>
        </div>
    );
}

export default MovieDescription;
