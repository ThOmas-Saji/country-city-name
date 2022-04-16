import axios from "axios";

const ADD_COUNTRY = "ADD_COUNTRY"
const ADD_CITY = "ADD_CITY"

const get_country = (payload) => {
    return {
        type : ADD_COUNTRY,
         payload
    }
}
const add_city = (payload) => {
    return {
        type : ADD_CITY,
        payload
    }
}

const addCountry = (formData) => (dispatch) =>{
    try{
        axios.post("http://localhost:8080/country", formData).then(({data})=>{
            console.log(data);
            dispatch(get_country(data))
        })
    }catch(err){
        console.log(err);
    }
} 
const addCity = (formData) => (dispatch) =>{
    try{
        axios.post("http://localhost:8080/city", formData).then(({data})=>{
            console.log(data);
            dispatch(add_city(data))
        })
    }catch(err){
        console.log(err);
    }
} 


export {
    addCountry,
    addCity,
    ADD_CITY,
    ADD_COUNTRY,
}
