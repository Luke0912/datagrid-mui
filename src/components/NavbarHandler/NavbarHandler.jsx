import styles from "./Navbar.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={styles.maindiv}>
        <Button component={Link} to="/" variant="contained">
          Home
        </Button>
        <Button component={Link} to="/add-country" variant="contained">
          Add New Country
        </Button>
        <Button component={Link} to="add-city" variant="contained">
          Add New City
        </Button>
      </div>
    </>
  );
};
