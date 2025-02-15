import Card from "../Components/card";
import React from "react";
import Navbar from "../Components/navbar";
import { useTranslation } from "react-i18next";
import Footer from "../Components/footer";
const Home = () => {
  const { t } = useTranslation([]);
  return (
    <>
      <div className="bg-[#F5F5F5]">
        <Navbar />
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Home;
