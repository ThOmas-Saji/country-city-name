import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { country_reducer,  } from "./reducer"
import { city_reducer } from "./city_reducer" 

const rootReducer = combineReducers({
    addCountry : country_reducer,
    addCity : city_reducer
})

export const store = createStore(
    rootReducer,
    compose( applyMiddleware(thunk))
)