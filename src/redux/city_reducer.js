import { ADD_CITY } from "./addCountry"

const initialState = {
    city: "",
    population:""
}
export const city_reducer = (store = initialState, {type, payload}) =>{
    switch(type){
        default :
        return store
        case ADD_CITY :
            return {...store, ...payload}
    }
}