import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sort } from "./Sort";

export const Home = () => {
  const init = {
    sortBy : '',
    type : 1
  }
  const [getData, setGetData] = useState([]);
  const [sorting, setSorting] = useState(init);

  useEffect(() => {
    get_Data();
  }, []);

  function handlesort(sortBy, type){
    setSorting({...sorting, sortBy, type})
  }

  const get_Data = () => {
    try {
      axios.get("http://localhost:8080/city").then(({ data }) => {
        setGetData(data);
      });
    } catch (err) {
      console.log(err);
    }
  };

 async function handleDelete(id) {
    await axios.delete(`http://localhost:8080/city/${id}`)
    get_Data();
  }


  return (
    <div>
      <div> <Sort handlesort={handlesort}/></div>
      <table className="Table">
        <thead>
          <tr>
            <td>id</td>
            <td>Country</td>
            <td>City</td>
            <td>Population</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {getData.sort((a, b) =>
          sorting.sortBy === "pop"
          ? sorting.type === 1
            ? a.population - b.population
            : b.population - a.population :
           sorting.sortBy === "title"
              ? sorting.type === 1
                ? a.country.localeCompare(b.country)
                : b.country.localeCompare(a.country)
              : true
          )
          .map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.country}</td>
                <td>{el.city}</td>
                <td>{el.population}</td>
                <td>
                <Link to={`/edit/${el.id}`}><button>Edit</button></Link>  
                </td>
                <td>
                  <button onClick={() => handleDelete(el.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
