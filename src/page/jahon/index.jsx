import React from 'react';
import Navbar from '../../Components/navbar';
import { useTranslation } from "react-i18next";


const Jahon = () => {
      const { t  } = useTranslation();
    return (
        <div>
            <Navbar />
            <h1> {t("Jahon")}</h1>

        </div>
    );
}

export default Jahon;
