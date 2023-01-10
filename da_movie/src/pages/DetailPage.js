import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SliderBar from "../components/SliderBar"
let stars = ""

function DetailPage() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=eb39183a30261aa2de5476580f46a186`)
            .then(({ data }) => {
                console.log(data)
                setMovie(data)
            })
    }, [])
    useEffect(() => {
        if (movie.vote_average <= 2) {
            stars =
                (
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                )
        }
        else if (movie.vote_average <= 4 && movie.vote_average > 2) {
            stars =
                (
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-0" aria-hidden="true"></i>
                        <i className="fa fa-star-0" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                )
        }
        else if (movie.vote_average <= 6 && movie.vote_average > 4) {
            stars =
                (
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-0" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                )
        }
        else if (movie.vote_average <= 8 && movie.vote_average > 6) {
            stars =
                (
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                )
        }
        else {
            stars =
                (
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                )
        }
        console.log(stars)
    }, [movie])

    if (movie.title) {
        return (
            <>
                {/* <div className="slider-body"> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div id="container">
                    <div className="product-details">
                        <h1>{movie.title}</h1>
                        <div>
                            <h2 className="buy" style={{ "fontFamily": "sans-serif", color: "gray" }}>
                                {
                                    movie.genres.map((el, i) => {
                                        if (!movie.genres[i + 1]) return el.name + "."
                                        return (el.name + ", ")
                                    })
                                }
                            </h2>
                        </div>
                        <div>
                            {stars}
                        </div>
                        <p className="information">{movie.overview}</p>
                        <div className="control">
                            <button className="btn">
                                <a href={movie.homepage} target="_blank">
                                    <span className="buy">Go!</span>
                                </a>
                            </button>
                        </div>
                    </div>

                    <div className="product-image">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                        <div className="info">
                            <ul>
                                <li><strong>Production Company: </strong>
                                    {
                                        movie.production_companies.map((el, i) => {
                                            if (!movie.production_companies[i + 1]) return (el.name + ".")
                                            return (el.name + ", ")
                                        })
                                    }
                                </li>
                                <li><strong>Production Country : </strong>
                                    {
                                        movie.production_countries.map((el, i) => {
                                            if (!movie.production_countries[i + 1]) return (el.name + ".")
                                            return (el.name + ", ")
                                        })
                                    }
                                </li>
                                <li><strong>Budget: </strong>{movie.budget + "$"}</li>
                                <li><strong>Release Date: </strong>{movie.release_date}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* <h1>Detail page {id}</h1> */}
                {/* <SliderBar></SliderBar> */}
            </>
        )
    }
}

export default DetailPage