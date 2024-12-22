import React from "react";
import { Link, useParams } from "react-router-dom";
import '../css/movieDescription.css';
import VideoDialog from "../modals/videoModal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import Footer from "../components/homeComponents/footer";
import { useGetTvDescriptionDataQuery } from "../features/tvDescriptionSlice";
import { useGetTvTrailorDataQuery } from "../features/tvTrailorSlice";
import { useGetSimilarTvDataQuery } from "../features/similarTvSlice";
import { useGetTvCastDataQuery } from "../features/tvCastSlice";

function TvDescription() {
    const { id: tvId } = useParams();
    const { data: tvDescriptionData, isLoading: tvDescriptionIsLoading, error: tvDescriptionError } = useGetTvDescriptionDataQuery(tvId);
    const { data: tvCastData, isLoading: tvCastIsLoading, error: tvCastIsError } = useGetTvCastDataQuery(tvId);
    const { data: tvTrailorData, isLoading: tvTrailorIsLoading, error: tvTrailorError } = useGetTvTrailorDataQuery(tvId)
    const { data: similarTvData, isLoading: similarTvIsLoading, error: similarTvError } = useGetSimilarTvDataQuery(tvId)

    if (tvDescriptionIsLoading || tvCastIsLoading || tvTrailorIsLoading || similarTvIsLoading) {
        return <div>Loading...</div>;
    }

    if (tvDescriptionError || tvCastIsError || tvTrailorError || similarTvError) {
        return <div>Error: Unable to fetch data</div>;
    }

    console.log("videosData", tvTrailorData)

    const tvDescriptionBackImage = `https://image.tmdb.org/t/p/original/${tvDescriptionData?.backdrop_path}`;
    const tvDescriptionPosterImage = `https://image.tmdb.org/t/p/original/${tvDescriptionData?.poster_path}`;
    let count = 0;
    return (
        <div>
            <div className="pb-16">
                <div className="movie-description-wrapper" style={{ backgroundImage: `url(${tvDescriptionBackImage})` }}>
                </div>
                <div className="content"></div>
                <div className="text-white -mt-40 pb-10 px-60 items-center w-full flex gap-5 bg-darkBlack" >
                    <div className="w-1/2 z-50">
                        <img className="rounded-2xl max-w-xl h-96" src={tvDescriptionPosterImage} alt="" />
                    </div>
                    <div className="flex flex-col z-50 gap-6">
                        <h1 className="text-5xl">{tvDescriptionData.original_title ? tvDescriptionData.original_name : tvDescriptionData.name}</h1>
                        <div className="text-white flex gap-2">
                            {tvDescriptionData.genres && tvDescriptionData.genres.map((gen) => (
                                <div key={gen.id} className="border-2 w-28 border-white text-sm p-0.5 text-center rounded-2xl">{gen.name}</div>
                            ))}
                        </div>
                        <div className="text-sm text-white">First Episode date: <span className="text-white text-sm">{tvDescriptionData.first_air_date}</span></div>
                        <div className="text-sm text-white">Last Episode date: <span className="text-sm text-white">{tvDescriptionData.last_air_date ? tvDescriptionData.last_air_date : "not completed yet..."}</span></div>
                        <p className="text-xs">{tvDescriptionData?.overview}</p>
                        <div className="flex flex-col gap-2">
                            <p>Casts</p>
                            <div className="flex gap-2">
                                {tvCastData.cast && tvCastData.cast.slice(0, 5).map((c, index) => (
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
                {tvTrailorData.results.map(mt => {
                    if ((mt.type == "Teaser" || mt.type == "Trailer") && count < 3) {
                        const vdLink = `https://www.youtube.com/embed/${mt.key}`;
                        const thumbLink = `https://img.youtube.com/vi/${mt.key}/maxresdefault.jpg`;
                        if (mt.key) count++;
                        console.log(count)
                        return (
                            <div className="flex justify-center items-center flex-col gap-2 ">
                                <p className="text-xl p-6 font-semibold" key={mt.name}>{mt.name}</p>
                                <span className="p-[1rem]">Trailer found {count}</span>
                                {count != 0 ? <VideoDialog videoLink={vdLink} thumbLink={thumbLink} /> : <span>Oops... No Trailer Found</span>}
                            </div>
                        )
                    }
                })}
            </div>

            <div className="bg-darkBlack pb-20 text-white">
                <p className="ml-8  font-semibold text-xl">Similar</p>
                <div className="third-section">
                    <Swiper grabCursor={true} spaceBetween={-220} slidesPerView={6}>
                        {similarTvData.results.map(simTv => {
                            const upImgUrl = `https://image.tmdb.org/t/p/w200/${simTv.poster_path}`;
                            return (
                                <SwiperSlide key={simTv.id}>
                                    <div className="pt-4 pb-8 ml-8 flex flex-col justify-start items-start w-44">
                                        <Link to={`/movie_description/${simTv.id}`}><img className="w-40 hover:cursor-pointer rounded-2xl" key={simTv.id} src={upImgUrl} alt="" /></Link>
                                        <p className="text-white ml-2 mr-2 pt-1" key={simTv.title}>{simTv.title ? simTv.title : simTv.original_title}</p>
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

export default TvDescription;
