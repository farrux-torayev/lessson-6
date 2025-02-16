import React from 'react';
import Navbar from '../../Components/navbar';
import { useTranslation } from "react-i18next";
import Footer from '../../Components/footer';


const Jahon = () => {
      const { t  } = useTranslation();
    return (
        <div>
            <Navbar />
            
            
            <div className='py-[20px]'>
            <img
          className="m-auto"
          src="./src/assets/images/image copy 5.png"
          alt=""
        />
            </div>
            <Footer/>

        </div>
    );
}

export default Jahon;
