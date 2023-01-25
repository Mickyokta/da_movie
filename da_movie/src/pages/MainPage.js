import SliderBar from "../components/SliderBar"
import { fetchMovies, nextPageMovies, searchMovie } from "../stores/actions/movieAction"
import { useEffect, useState } from "react"
import "../css/style.css"
import { useDispatch, useSelector } from "react-redux"
import useDebounce from '../hooks/useDebounce';
import HeadBar from "../components/HeadBar"
import MovieCard from "../components/MovieCard"
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from "react-router-dom"

function MainPage() {
    const dispatch = useDispatch()
    const [category, setCategory] = useState('popular')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const { movies } = useSelector((state) => { return state })
    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    useEffect(() => {
        console.log(movies)
    }, [movies])

    useDebounce(() => {
        if (search.length) {
            dispatch(searchMovie(search))
        }
    }, [search], 1500)

    function handleSearch(e) {
        setSearch(e.target.value);
    }
    if (movies.length) {
        return (
            <>
                {/* START PAGE SOURCE */}
                <div id="shell">
                    <div id="header">
                        <HeadBar />
                        <SliderBar></SliderBar>
                        <div id="sub-navigation">
                            <ul>
                                <li>
                                    <a onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(fetchMovies("now_playing"))
                                        setCategory("now_playing")
                                    }}>NOW PLAYING</a>
                                </li>
                                <li>
                                    <a onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(fetchMovies("popular"))
                                        setCategory("popular")
                                    }}>POPULAR</a>
                                </li>
                                <li>
                                    <a onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(fetchMovies("top_rated"))
                                        setCategory("top_rated")
                                    }}>TOP RATED</a>
                                </li>
                                <li>
                                    <a onClick={(e) => {
                                        e.preventDefault()
                                        dispatch(fetchMovies("upcoming"))
                                        setCategory("upcoming")
                                    }}>UPCOMING</a>
                                </li>
                            </ul>
                            <div id="search">
                                <form action="#" method="get" acceptCharset="utf-8">
                                    <label htmlFor="search-field"></label>
                                    <input
                                        type="text"
                                        name="search field"
                                        placeholder="Enter search here"
                                        id="search-field"
                                        className="blink search-field"
                                        onChange={handleSearch}
                                        autoComplete="off"
                                    />
                                    {/* <input type="submit" className="search-button" onSubmit={(e) => e.preventDefault()}></input> */}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="main">
                        <div id="content">
                            <div className="">
                                <div className="card-box justify-center">
                                    {/* state awal di concat atau push tambah di reducer */}
                                    <InfiniteScroll
                                        dataLength={movies.length}
                                        next={
                                            () => {
                                                console.log(page + 1, "101 main page")
                                                dispatch(nextPageMovies(movies, category, page + 1))
                                                setPage(page + 1)
                                            }
                                        }
                                        hasMore={true}
                                        // loader={<h4>Loading...</h4>}
                                        endMessage={
                                            <p style={{ textAlign: 'center' }}>
                                                <b>Yay! You have seen it all</b>
                                            </p>
                                        }
                                    />
                                    {
                                        movies.map((el, i) => {
                                            return (
                                                <MovieCard movie={el} key={i} />
                                            )
                                        })
                                    }
                                    {/* </InfiniteScroll> */}
                                </div>
                                <div className="cl">&nbsp;</div>
                            </div>
                        </div>
                        {/* <div id="news">
                                <div className="head">
                                    <h3>NEWS</h3>
                                    <p className="text-right">
                                        <a href="#">See all</a>
                                    </p>
                                </div>
                                <div className="content">
                                    <p className="date">12.04.09</p>
                                    <h4>Disney's A Christmas Carol</h4>
                                    <p>
                                        "Disney's A Christmas Carol," a multi-sensory thrill ride
                                        re-envisioned by Academy Award®-winning filmmaker Robert Zemeckis,
                                        captures...{" "}
                                    </p>
                                    <a href="#">Read more</a>{" "}
                                </div>
                                <div className="content">
                                    <p className="date">11.04.09</p>
                                    <h4>Where the Wild Things Are</h4>
                                    <p>
                                        Innovative director Spike Jonze collaborates with celebrated author
                                        Maurice Sendak to bring one of the most beloved books of all time to
                                        the big screen in "Where the Wild Things Are,"...
                                    </p>
                                    <a href="#">Read more</a>{" "}
                                </div>
                                <div className="content">
                                    <p className="date">10.04.09</p>
                                    <h4>The Box</h4>
                                    <p>
                                        Norma and Arthur Lewis are a suburban couple with a young child who
                                        receive an anonymous gift bearing fatal and irrevocable
                                        consequences.
                                    </p>
                                    <a href="#">Read more</a>{" "}
                                </div>
                            </div>
                            <div id="coming">
                                <div className="head">
                                    <h3>
                                        COMING SOON<strong>!</strong>
                                    </h3>
                                    <p className="text-right">
                                        <a href="#">See all</a>
                                    </p>
                                </div>
                                <div className="content">
                                    <h4>The Princess and the Frog </h4>
                                    <a href="#">
                                        <img src="../css/images/coming-soon1.jpg" alt="" />
                                    </a>
                                    <p>
                                        Walt Disney Animation Studios presents the musical "The Princess and
                                        the Frog," an animated comedy set in the great city of New
                                        Orleans...
                                    </p>
                                    <a href="#">Read more</a>{" "}
                                </div>
                                <div className="cl">&nbsp;</div>
                                <div className="content">
                                    <h4>The Princess and the Frog </h4>
                                    <a href="#">
                                        <img src="../css/images/coming-soon2.jpg" alt="" />
                                    </a>
                                    <p>
                                        Walt Disney Animation Studios presents the musical "The Princess and
                                        the Frog," an animated comedy set in the great city of New
                                        Orleans...
                                    </p>
                                    <a href="#">Read more</a>{" "}
                                </div>
                            </div>
                            <div className="cl">&nbsp;</div> */}
                    </div>
                    <div id="footer">
                        <p className="lf">
                            Copyright © 2022 <a>Da Movie</a> - All Rights Reserved
                        </p>
                        <div style={{ clear: "both" }} />
                    </div>
                </div>
            </>
        )
    }
}

export default MainPage