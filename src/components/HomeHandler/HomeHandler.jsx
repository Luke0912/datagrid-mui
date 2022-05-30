import styles from "./Home.module.css";
import { Grid } from "../common/GridHandler";
import { useEffect, useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 130 },
  { field: "Country", headerName: "Country", width: 130 },
  { field: "City", headerName: "City", width: 130 },
  {
    field: "Population",
    headerName: "Population",
    type: "number",
    width: 130,
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 130,
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 130,
  },
];
export const Home = () => {
  const [city, setCity] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await fetch("https://my-cool-projecunit6.herokuapp.com/add-city")
      .then((data) => data.json())
      .then((data) => setCity(data));
  };

  return (
    <>
      <div className={styles.maindiv}>
        <Grid rows={city} columns={columns} actionsColumnIndex={-1} />;
      </div>
    </>
  );
};
