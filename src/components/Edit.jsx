import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export const Edit = () => {
  const { id } = useParams();
  const [formData, setformData] = useState({});
  const [getData2, setGetData2] = useState([]);
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    get_Data2();
    get_Data();
  }, []);

  const get_Data2 = () => {
    try {
      axios.get(`http://localhost:8080/country`).then(({ data }) => {
        setGetData2(data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  const get_Data = () => {
    try {
      axios.get(`http://localhost:8080/city/${id}`).then(({ data }) => {
        setGetData(data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  function handleChange(e) {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
}

function handleClick(e) {
    try {
        axios.patch(`http://localhost:8080/city/${id}`, formData).then(() => {
            getData2()
        });
      } catch (err) {
        console.log(err);
      }
}

  return <div>
            <form action="" onSubmit={(event) => handleClick(event)}>
        <select name="country" id=""  onChange={(e) => handleChange(e)} >
            <option disabled > Select your country</option>
          {getData2.map((el) => {
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
      <div>
          <h2>Current Data</h2>
        <p>country name : <h3>{getData.country}</h3></p>
        <p> city name : <h3>{getData.city}</h3></p>
        <p>population : <h3>{getData.population}</h3></p>

      </div>
  </div>;
};
