import { Routes, Route } from "react-router-dom";
import CountriesContainer from "../conatiner/CountriesConatiner";
import CountryContainer from "../conatiner/CountryConatiner";
import { RouteKey } from "./RouteKey";

const MainRouter = () => (
  <Routes>
    <Route path={RouteKey.Index} element={<CountriesContainer />} />
    <Route path={RouteKey.Countries} element={<CountriesContainer />} />
    <Route path={RouteKey.Country} element={<CountryContainer />} />
  </Routes>
);

export default MainRouter;
