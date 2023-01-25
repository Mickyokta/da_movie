import axios from 'axios'

export function actionSetMovies(payload) {
    return {
        type: "movies/setMovies",
        payload: payload.results
    }
}

export function fetchMovies(filter = "popular", page = 1) {
    return (dispatch, getState) => {
        return axios.get(`https://api.themoviedb.org/3/movie/${filter}?api_key=eb39183a30261aa2de5476580f46a186&language=en-US&page=${page}`, {
            header: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json',
                withCredentials: false,
            }
        }).then(({ data }) => {
            dispatch(actionSetMovies(data))
        })
    }
}
export function nextPageMovies(movies, filter, page) {
    return (dispatch, getState) => {
        return axios.get(`https://api.themoviedb.org/3/movie/${filter}?api_key=eb39183a30261aa2de5476580f46a186&language=en-US&page=${page}`, {
            header: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json',
                withCredentials: false,
            }
        }).then(({ data }) => {
            console.log(data, "32 movieaction")
            let { results } = data
            let moviesResult = movies.concat(results)
            let payload = {
                results: moviesResult
            }
            dispatch(actionSetMovies(payload))
        })
    }
}
export function searchMovie(filter = "", page = 1) {
    return (dispatch, getState) => {
        if (filter) {
            return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=eb39183a30261aa2de5476580f46a186&language=en-US&page=${page}&include_adult=true&query=${filter}`, {
                header: {
                    'Access-Control-Allow-Origin': true,
                    'Content-Type': 'application/json',
                    withCredentials: false,
                }
            }).then(({ data }) => {
                dispatch(actionSetMovies(data))
            })
        }
    }
}