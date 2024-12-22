import '../../css/moviePage.css'

function MoviePageHeader() {
    return (
        <div className="flex flex-col text-center h-auto w-full gap-5">
            <div className="movie-page-header h-full"><img className="w-full h-40" src="src\assets\header_image_movie_page.jpg" alt="" /></div>
            <div className="content"></div>
            <h1 className="text-4xl tracking-wider -mt-[2.5rem] p-[2rem] font-semibold text-white bg-darkBlack">MOVIES</h1>
        </div>
    )
}

export default MoviePageHeader