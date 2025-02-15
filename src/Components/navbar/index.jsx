import React from "react";
import { NavLink } from "react-router";
import Til from "../til";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center m-auto  w-[1300px] justify-around">
        <div>
          <img src="./src/assets/logo-light.svg" alt="" />
        </div>
        <ul className="flex">
          <li className="py-[23px] px-[18px] font-bold hover:text-blue-700">
            <NavLink to="/">O'zbekiston</NavLink>
          </li>
          <li className="py-[23px] px-[18px] font-bold hover:text-blue-700">
            <NavLink to="/Jahon"> {t("Jahon")}</NavLink>
          </li>
          <li className="py-[23px] px-[18px] font-bold hover:text-blue-700">
            <NavLink to="/Iqtisodiyot">{t("Iqtisodiyot")}</NavLink>
          </li>
          <li className="py-[23px] px-[18px] font-bold hover:text-blue-700">
            <NavLink to="/Jamiyat">{t("Jamiyat")}</NavLink>
          </li>
          <li className="py-[23px] px-[18px] font-bold hover:text-blue-700">
            <NavLink to="/Sport">{t("Sport")}</NavLink>
          </li>
          <li className="py-[23px] px-[18px] font-bold hover:text-blue-700">
            <NavLink to="/Fantexnika">{t("Fan-texnika")}</NavLink>
          </li>
        </ul>
        <div className="flex items-center">
          <Til />
        </div>
      </div>
    </>
  );
};

export default Navbar;
