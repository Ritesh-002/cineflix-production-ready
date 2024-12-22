import { useEffect, useState } from "react";
import MoviePageHeader from "../components/moviesComponents/moviePageHeader";
import { useGetQueryGenMovieDataQuery } from "../features/queryMovieByGenreSlice";
import { Link } from "react-router-dom";
import Footer from "../components/homeComponents/footer";
import { useGetNameQueryMovieDataQuery } from "../features/nameQueryMovieSlice";
import CustomSpinner from "../components/commonComponents/spinner";

function Movies() {
    const [selectedGenId, setSelectedGenId] = useState(28);
    const [pNum, setPNum] = useState(1);
    const [inputText, setInputText] = useState("");
    const [queryText, setQueryText] = useState("");
    const [imgIsLoading, setImgIsLoading] = useState(true);
    const { data: queryGenData, isLoading: queryGenIsLoading, error: queryGenError, refetch: refetchQueryGenData } = useGetQueryGenMovieDataQuery({ genre: selectedGenId, pageNumber: pNum });
    const { data: nameQueryData, isLoading: nameQueryIsLoading, error: nameQueryIsError } = useGetNameQueryMovieDataQuery(queryText);

    useEffect(() => {
        refetchQueryGenData({ genre: selectedGenId, pageNumber: pNum });
    }, [selectedGenId, pNum, refetchQueryGenData]);

    const handleImgLoad = () => {
        setImgIsLoading(false)
    }

    const handleSearchClick = () => {
        setImgIsLoading(true)
        setQueryText(inputText);
        setPNum(1); // Reset page number when searching
    };

    const incrementPageNumber = () => {
        setImgIsLoading(true)
        setPNum(prevPNum => prevPNum + 1);
    };

    const handleOnChange = (e) => {
        const genreId = parseInt(e.target.value, 10);
        setSelectedGenId(genreId);
    };
    console.log("data from query", nameQueryData)

    return (
        <>
            <MoviePageHeader />
            <div className="flex h-auto p-[5rem] justify-between bg-darkBlack text-white">
                <div>
                    <select onChange={handleOnChange} className="p-[0.5rem] bg-darkBlack border-2 rounded-md border-white" name="genre" id="genre">
                        <option value="28">--Select Genre--</option>
                        <option value="10751">Family</option>
                        <option value="27">Horror</option>
                        <option value="10749">Romance</option>
                        <option value="9648">Mystery</option>
                        <option value="878">Science Fiction</option>
                        <option value="16">Animation</option>
                    </select>
                </div>
                <div className="flex gap-5">
                    <input value={inputText} onChange={e => setInputText(e.target.value)} className="p-[0.5rem] rounded-md text-white bg-darkBlack border-2" type="text" placeholder="Search Movie..." />
                    <button onClick={handleSearchClick} className="py-[0.5rem] px-[1.5rem] bg-cyan-900  rounded-lg">Search</button>
                </div>
            </div>

            <div className="flex flex-wrap bg-darkBlack text-white">
                {(queryText !== "" ? nameQueryData?.results : queryGenData?.results)?.map(qd => {
                    const reqImage = `https://image.tmdb.org/t/p/original/${qd?.poster_path}`;
                    return (
                        <div className="pt-4 to-put-hover pb-8 ml-8 flex flex-col justify-start items-start w-44 " key={qd.id}>
                            {imgIsLoading && <CustomSpinner />}
                            <Link to={`/movie_description/${qd.id}`}><img onLoad={handleImgLoad} className={`w-40 ${imgIsLoading ? 'hidden' : ''} hover:cursor-pointer rounded-2xl`} key={qd.id} src={reqImage} alt="" /></Link>
                            <p className="text-white ml-2 mr-2 pt-1" key={qd.title}>{qd.title ? qd.title : qd.original_title}</p>
                        </div>
                    );
                })}
            </div>
            <div className="justify-center pt-[1.5rem] pb-[3rem] items-center text-center bg-darkBlack">
                {pNum < (queryText !== "" ? nameQueryData?.total_pages : queryGenData?.total_pages) && <button onClick={incrementPageNumber} className="bg-cyan-700 text-white px-[1.5rem] py-[0.5rem] rounded-lg font-semibold">Load More...</button>}
            </div>
            <div className="-mt-14"><Footer /></div>
        </>
    );
}

export default Movies;


// import { useEffect, useState } from "react"
// import MoviePageHeader from "../components/moviesComponents/moviePageHeader"
// import { useGetQueryGenMovieDataQuery } from "../features/queryMovieByGenreSlice"
// import { Link } from "react-router-dom"
// import Footer from "../components/homeComponents/footer"
// import { useGetNameQueryMovieDataQuery } from "../features/nameQueryMovieSlice"

// function Movies() {

//     const [selectedGenId, setSelectedGenId] = useState(28)
//     const [pNum, setPNum] = useState(1)
//     const [queryText, setQueryText] = useState('')
//     const [inputText, setInputText] = useState('')
//     const { data: queryGenData, isLoading: queryGenIsLoading, error: queryGenError, refetch: refetchQueryGenData } = useGetQueryGenMovieDataQuery({ genre: selectedGenId, pageNumber: pNum })
//     const { data: nameQueryData, isLoading: nameQueryIsLoading, error: nameQueryIsError } = useGetNameQueryMovieDataQuery(queryText)

//     if (queryGenIsLoading) {
//         return <div>Loading...</div>;
//     }

//     if (queryGenError) {
//         return <div>Error: Unable to fetch data</div>;
//     }

//     useEffect(() => {
//         refetchQueryGenData({ genre: selectedGenId, pageNumber: pNum });
//     }, [selectedGenId, pNum, refetchQueryGenData]);
//     console.log(queryGenData)
//     console.log(queryGenData)

//     const handleSearchClick = () => {
//         setQueryText(inputText)
//         console.log(queryText)
//         if (queryText == '') refetchQueryGenData({ genre: selectedGenId, pageNumber: pNum })
//         else {

//             setInputText('')
//         }
//         console.log("refetched")
//     }


//     const incrementPageNumber = () => {
//         console.log(pNum)
//         setPNum(prevPNum => prevPNum + 1)
//     }

//     const handleOnChange = (e) => {
//         const genreId = parseInt(e.target.value, 10)
//         console.log(genreId)
//         console.log(queryGenData)
//         setSelectedGenId(genreId)
//     }
//     return (
//         <>
//             <MoviePageHeader />
//             <div className="flex h-auto p-[5rem] justify-between bg-darkBlack text-white">
//                 <div>
//                     <select onChange={handleOnChange} className="p-[0.5rem] bg-darkBlack border-2 rounded-md border-white" name="genre" id="genre">
//                         <option value="28">--Select Genre--</option>
//                         <option value="10751">Family</option>
//                         <option value="27">Horror</option>
//                         <option value="10749">Romance</option>
//                         <option value="9648">Mystery</option>
//                         <option value="878">Science Fiction</option>
//                         <option value="16">Animation</option>
//                     </select>
//                 </div>
//                 <div className="flex gap-5">
//                     <input value={inputText} onChange={e => setInputText(e.target.value)} className="p-[0.5rem] rounded-md text-white bg-darkBlack border-2" type="text" placeholder="Search Movie..." />
//                     <button onClick={handleSearchClick} className="py-[0.5rem] px-[1.5rem] bg-cyan-900  rounded-lg">Search</button>
//                 </div>
//             </div>

//             <div className="flex flex-wrap bg-darkBlack text-white">
//                 {queryGenData.results.map(qd => {
//                     const reqImage = `https://image.tmdb.org/t/p/original/${qd?.poster_path}`
//                     return (
//                         <div className="pt-4 to-put-hover pb-8 ml-8 flex flex-col justify-start items-start w-44 ">
//                             <Link to={`/movie_description/${qd.id}`}><img className="w-40 hover:cursor-pointer rounded-2xl" key={qd.id} src={reqImage} alt="" /></Link>
//                             <p className="text-white ml-2 mr-2 pt-1" key={qd.title}>{qd.title ? qd.title : qd.original_title}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//             <div className="justify-center pt-[1.5rem] pb-[3rem] items-center text-center bg-darkBlack">
//                 {pNum < queryGenData.total_pages && <button onClick={incrementPageNumber} className="bg-cyan-700 text-white px-[1.5rem] py-[0.5rem] rounded-lg font-semibold">Load More...</button>}
//             </div>
//             <div className="-mt-14"><Footer /></div>
//         </>
//     )
// }

// export default Movies

// import { useEffect, useState } from "react";
// import MoviePageHeader from "../components/moviesComponents/moviePageHeader";
// import { useGetQueryGenMovieDataQuery } from "../features/queryMovieByGenreSlice";
// import { Link } from "react-router-dom";
// import Footer from "../components/homeComponents/footer";

// function Movies() {
//     const [selectedGenId, setSelectedGenId] = useState(28);
//     const [pNum, setPNum] = useState(1);
//     const { data: queryGenData, isLoading: queryGenIsLoading, error: queryGenError, refetch: refetchQueryGenData } = useGetQueryGenMovieDataQuery({ genre: selectedGenId, pageNumber: pNum });
//     const [testData, setTestData] = useState(queryGenData);

//     useEffect(() => {
//         if (queryGenData) {
//             setTestData(prevTestData => ({
//                 ...prevTestData,
//                 results: [...(prevTestData?.results || []), ...queryGenData.results]
//             }));
//         }
//     }, [queryGenData]);

//     if (queryGenIsLoading) {
//         return <div>Loading...</div>;
//     }

//     if (queryGenError) {
//         return <div>Error: Unable to fetch data</div>;
//     }

//     const incrementPageNumber = () => {
//         setPNum(prevPNum => prevPNum + 1);
//     };

//     const handleOnChange = (e) => {
//         const genreId = parseInt(e.target.value, 10);
//         setSelectedGenId(genreId);
//     };
//     let count = 0;
//     return (
//         <>
//             <MoviePageHeader />
//             <div className="flex h-auto p-[5rem] justify-between bg-darkBlack text-white">
//                 <div>
//                     <select onChange={handleOnChange} className="p-[0.5rem] bg-darkBlack border-2 rounded-md border-white" name="genre" id="genre">
//                         <option value="28">--Select Genre--</option>
//                         <option value="10751">Family</option>
//                         <option value="27">Horror</option>
//                         <option value="10749">Romance</option>
//                         <option value="9648">Mystery</option>
//                         <option value="878">Science Fiction</option>
//                         <option value="16">Animation</option>
//                     </select>
//                 </div>
//                 <div className="flex gap-5">
//                     <input className="p-[0.5rem] rounded-md text-white bg-darkBlack border-2" type="text" placeholder="Search Movie..." />
//                     <button className="py-[0.5rem] px-[1.5rem] bg-cyan-900  rounded-lg">Search</button>
//                 </div>
//             </div>

//             <div className="flex flex-wrap bg-darkBlack text-white">
//                 {testData.results && testData.results.map(qd => {
//                     const reqImage = `https://image.tmdb.org/t/p/original/${qd?.poster_path}`;
//                     return (
//                         <div className="pt-4 to-put-hover pb-8 ml-8 flex flex-col justify-start items-start w-44 " key={qd.id}>
//                             <Link to={`/movie_description/${qd.id}`}><img className="w-40 hover:cursor-pointer rounded-2xl" src={reqImage} alt="" /></Link>
//                             <p className="text-white ml-2 mr-2 pt-1">{qd.title ? qd.title : qd.original_title}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//             <div className="justify-center pt-[1.5rem] pb-[3rem] items-center text-center bg-darkBlack">
//                 {(pNum < testData.total_pages) && <button onClick={incrementPageNumber} className="bg-cyan-700 text-white px-[1.5rem] py-[0.5rem] rounded-lg font-semibold">Load More...</button>}
//             </div>
//             <div className="-mt-14"><Footer /></div>
//         </>
//     );
// }

// export default Movies;
