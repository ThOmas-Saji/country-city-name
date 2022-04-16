import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCity } from "../redux/addCountry";

export const CreateCity = () => {
  const [formData, setformData] = useState({});
    const [getData, setGetData] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
      get_Data()
  }, []);
 const get_Data = () =>{
    try{
        axios.get("http://localhost:8080/country").then(({data})=>{
            setGetData(data)
        })
    }catch(err){
        console.log(err);
    }
} 


function handleChange(e) {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
}

function handleClick(e) {
  dispatch(addCity(formData));
}

  return (
    <div>
      <form action="" onSubmit={(event) => handleClick(event)}>
        <select name="country" id=""  onChange={(e) => handleChange(e)} >
            <option disabled > Select your country</option>
          {getData.map((el) => {
            return (
              <option key={el.id} value={el.country} >
                {el.country}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          name="city"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="enter city name"
        />
        <input
          type="number"
          name="population"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="enter population"
        />
        <input type="submit" value="submit" id="" />
      </form>
      <p>If your country is not in the list <Link to="/add-country" >Click here</Link> </p>
    </div>
  );
};
