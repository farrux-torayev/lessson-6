import Card from "../Components/card";
import React from "react";
import Navbar from "../Components/navbar";
import { useTranslation } from "react-i18next";
import Footer from "../Components/footer";
const Home = () => {
  const { t } = useTranslation([]);
  return (
    <>
      <div className="">
        <Navbar />
        <Card />
        <Footer />
      </div>
    </>
  );
};

export default Home;
