import React from "react";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";

const Sport = () => {
  return (
    <div>
      <Navbar />
      <div className="m-auto w-[1300px] flex">
        <h1 className="pt-[20px]">
          <span className="text-2xl font-bold pb-[20px]">
            «Siti»da yirik g‘alaba, «Real» <br /> o‘yinida mojaro. Kun o‘yinlari
          </span>{" "}
          <br />
          <p className="py-[20px] text-[20px]"> 
          «Arsenal»da yangi «hujumchi» gollar urdi va chempionlik <br />{" "}
          intrigasi jonlandi. Shanba oqshomida Yevropa futbolida ro‘y <br />{" "}
          bergan asosiy voqealar, o‘yinlardagi gollar va turnir <br />{" "}
          jadvallaridagi vaziyat.
          </p>
          
        </h1>
        <img
          className="m-auto"
          src="./src/assets/images/image copy 4.png"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default Sport;
