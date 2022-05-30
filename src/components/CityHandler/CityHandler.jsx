import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import styles from "./CityHandler.module.css";
import { useState } from "react";
import axios from "axios";

export const City = () => {
  const [details, setDetails] = useState({
    Country: "",
    City: "",
    Population: "",
  });
  const handleChange = (e) => {
    let val = e.target.value;
    console.log(val);
    setDetails({ ...details, [e.target.name]: val });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post(
        "https://my-cool-projecunit6.herokuapp.com/add-city",
        details
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.maindiv}>
        <TextField
          label="Country"
          id="outlined-size-small"
          name="Country"
          onChange={handleChange}
        />
        <TextField
          label="City"
          id="outlined-size-small"
          name="City"
          onChange={handleChange}
        />
        <TextField
          label="Population"
          id="outlined-size-small"
          name="Population"
          type="Number"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add City
        </Button>
      </div>
    </>
  );
};
