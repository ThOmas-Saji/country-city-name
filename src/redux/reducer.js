import { ADD_COUNTRY } from "./addCountry"

const initialState = {
    country: []
}
export const country_reducer = (store = initialState, {type, payload}) =>{
    switch(type){
        default :
        return store
        case ADD_COUNTRY :
            console.log(store)
            return {...store, country: payload}
    }
}