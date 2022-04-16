import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCountry } from "../redux/addCountry";

export const CreateCountry = () => {
  const [formData, setformData] = useState({});

  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(addCountry(formData));
    console.log(formData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  }

  return (
    <div>
      <form action="" onSubmit={(event) => handleClick(event)}>
        <input
          type="text"
          name="country"
          id=""
          onChange={(e) => handleChange(e)}
          placeholder="enter country name"
        />
        <input type="submit" value="submit" id="" />
      </form>
    </div>
  );
};
