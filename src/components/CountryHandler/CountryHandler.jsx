import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import styles from "./CountryHandler.module.css";
import { useState } from "react";
import axios from "axios";

export const Country = () => {
  const [details, setDetails] = useState({
    Country: "",
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
        "https://my-cool-projecunit6.herokuapp.com/add-country",
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
        <Button variant="contained" onClick={handleSubmit}>
          Add Country
        </Button>
      </div>
    </>
  );
};
