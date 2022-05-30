import "./App.css";
import { Navbar } from "./components/NavbarHandler/NavbarHandler";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/HomeHandler/HomeHandler";
import { City } from "./components/CityHandler/CityHandler";
import { Country } from "./components/CountryHandler/CountryHandler";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add-city" element={<City></City>}></Route>
        <Route path="/add-country" element={<Country></Country>}></Route>
      </Routes>
    </div>
  );
}

export default App;
