import React from "react";
import Home from "../Home";
import Admin from "../Admin";
import Fantexnika from "../page/fan-texnika";
import { Route, Routes } from "react-router";
import Jahon from "../page/jahon";
import Iqtisodiyot from "../page/iqtisodiyot";
import Jamiyat from "../page/jamiyat";
import Sport from "../page/sport";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Jahon" element={<Jahon />} />
      <Route path="/Iqtisodiyot" element={<Iqtisodiyot/>}/>
      <Route path="/Jamiyat" element={<Jamiyat/>}/>
      <Route path="/Sport" element={<Sport/>}/>
      <Route path="/Fantexnika" element={<Fantexnika/>}/>
    </Routes>
  );
};

export default Router;
