import axios from "axios"
import { useEffect, useState } from "react"
function MovieCard({ movie, index }) {

    const [genres, setGenres] = useState([])
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=eb39183a30261aa2de5476580f46a186&language=en-US", {
            header: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json',
                withCredentials: false,
            }
        })
            .then(({ data }) => {
                let movieGenres = []
                movie.genre_ids.forEach((el) => {
                    data.genres.forEach((elem) => {
                        if (el == elem.id) movieGenres.push(elem.name)
                    })
                })
                setGenres(movieGenres)
                let currentCard = document.getElementById(`movie-${movie.id}`)
                currentCard.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`
            })
    }, [movie])

    return (
        <>
            <div className="container">
                <div className="cellphone-container">
                    <div className="movie">
                        <div className="menu">
                            <i className="material-icons"></i>
                        </div>
                        <a href={`/movies/${movie.id}`}>
                            <div className="movie-img" id={`movie-${movie.id}`} />
                        </a>
                        <div className="text-movie-cont">
                            <div className="mr-grid">
                                <div className="col1">
                                    <h1>{movie.title}</h1>
                                    <ul className="movie-gen">
                                        {
                                            movie.adult ?
                                                <li>
                                                    +18 /
                                                </li>
                                                : <li>
                                                    PG-13 /
                                                </li>
                                        }
                                        <li>{genres.join()}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid summary-row">
                                <div className="col2">
                                    <h5>SUMMARY</h5>
                                </div>
                                <div className="col2">
                                    <ul className="movie-likes">
                                        <li>
                                            <i className="material-icons">Vote</i>{movie.vote_count}
                                        </li>
                                        <li>
                                            <i className="material-icons">Avg</i>{movie.vote_average}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid">
                                <div className="col1">
                                    <p className="movie-description">
                                        {movie.overview}
                                    </p>
                                </div>
                            </div>
                            <div className="mr-grid actors-row">
                                <div className="col1">
                                    <p className="movie-actors">
                                        {movie.release_date}
                                    </p>
                                </div>
                            </div>
                            <div className="mr-grid action-row">
                                <div className="col2">
                                    <div className="watch-btn justify-center">
                                        <a href={`/movies/${movie.id}`}>
                                            <h3>
                                                <i className="material-icons"></i>DETAILS
                                            </h3>
                                        </a>
                                    </div>
                                </div>
                                {/* <div className="col6 action-btn">
                                    <i className="material-icons">&#xE161;</i>
                                </div>
                                <div className="col6 action-btn">
                                    <i className="material-icons">&#xE866;</i>
                                </div>
                                <div className="col6 action-btn">
                                    <i className="material-icons">&#xE80D;</i>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MovieCard
