import { legacy_createStore as createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import movieReducer from "./reducers/movieReducer"

const store = createStore(movieReducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))

export default store