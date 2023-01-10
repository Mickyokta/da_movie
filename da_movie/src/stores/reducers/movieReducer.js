const initialState = {
    movies: []
}

function movieReducer(state = initialState, action) {
    switch (action.type) {
        case "movies/setMovies":
            return {
                ...state,
                movies: action.payload
            }


        default:
            return state;
    }

}

export default movieReducer