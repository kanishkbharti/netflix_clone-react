import React, { useEffect, useState } from 'react'
import instance from "./axios";
import requests from "./requests";

const truncate = (str, n) => {
    return (str ? (str.length > n) ? str.substr(0, n - 1) + ' ...' : str : "");
};


const Banner = () => {


    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const request = await instance.get(requests.fetchNetflixOriginals);

            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);

            return request;
        }

        fetchData();

    }, [])



    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>

            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <div className="banner__description">{truncate(movie?.overview, 150)}</div>


            </div>

            <div className="banner--fadeBottom">

            </div>

        </header>
    )
}

export default Banner
