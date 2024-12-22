import React, { useEffect } from 'react';
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import '../../css/home.css'
SwiperCore.use([Autoplay]);
function HeroSlide() {
    return (
        <div className="user-defined">
            <Swiper modules={[Autoplay]} grabCursor={true} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 3000 }}>
                {data.map(d => {
                    const imgUrl = `https://image.tmdb.org/t/p/original/${d.backdrop_path}`;
                    const posterImgUrl = `https://image.tmdb.org/t/p/w200/${d.poster_path}`;

                    return (
                        <SwiperSlide key={d.id}>
                            <div style={{ background: `url(${imgUrl}) center/cover` }} className="w-full temporary min-h-screen pt-32 flex gap-8" key={d.id}>
                                <div className="carousel-content temporary-two flex flex-col justify-start items-start gap-6 w-1/2 pl-44" key={d.id}>
                                    <h1 className="text-5xl text-white font-semibold" key={d.original_title}>{d.original_title ? d.original_title : d.original_name}</h1>
                                    <p className="text-white" key={d.overview}>{d.overview}</p>
                                    <button className="px-5 rounded-md hover:cursor-pointer py-1.5 bg-cyan-600 text-white" key={d.id}>watch now</button>
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
    )
}

export default HeroSlide