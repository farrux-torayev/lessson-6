import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { NavLink } from "react-router";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-[1300px] m-auto  text-center">
        <h1 className="text-[25px] ">
          <p className="text-[40px] font-bold py-[20px]">Sayt haqida</p>
          «KUN.UZ» - O‘zbekistondagi eng faol onlayn nashrlardan biri. Sayt o‘z
          oldiga O‘zbekiston va <br />
          jahonda ro‘y berayotgan eng muhim voqea-hodisalar haqida tezkor, aniq
          va xolis axborot <br /> berishni maqsad qilib qo‘ygan.
        </h1>
        <h2 className="text-[40px] font-bold py-[20px]">
          Sayt materiallaridan boshqa saytlar yoki <br /> OAV foydalanishi
          shartlari:
        </h2>
        <ul className="flex flex-col gap-[15px] text-start w-[1000px]  list-disc m-auto text-[20px]  " >
          <li>
            <NavLink>
              Sayt O‘zbekiston Respublikasi hududida, mintaqa va chet ellarda
              faoliyat yuritayotgan internet saytlari, nashrlar <br /> bilan o‘zaro
              ma’lumot, maqolalar almashishni yo‘lga qo‘yadi.
            </NavLink>
          </li>
          <li>
            <NavLink>
              Saytdagi ma’lumotlardan faqat tahririyatdan yozma ravishda ruxsat
              olingandagina foydalanish talab etiladi.
            </NavLink>
          </li>
          <li>
            <NavLink>
              Materiallardan foydalanishda, sayt nomini (muallifini)
              berilayotgan materialning birinchi yoki uchinchi qatorigacha <br />
              bo‘lgan hududda taqdim etish so‘raladi.
            </NavLink>
          </li>
          <li>
            <NavLink>
              Bu o‘rinda nashr nomi - «KUN.UZ» so‘ziga havola qo‘yilib, bu
              havola http://kun.uz/ sahifasiga yo‘naltirilgan bo‘lishi, <br />
              qolaversa, «xabar beradi» so‘z birikmasiga havola qo‘yilib, bu
              havola «KUN.UZ» saytidan olingan xabarga <br /> yo‘naltirilgan bo‘lishi
              kerak.
            </NavLink>
          </li>
          <li>
            <NavLink>
              Boshqa nashrlar bilan hamkorlikda ishlashdan doim mamnun bo‘lamiz.
            </NavLink>
          </li>
          <li>
            <NavLink>Masalan, «Bu haqda KUN.UZ sayti xabar berdi».</NavLink>
          </li>
        </ul>
        <div className="w-[1000px] m-auto flex flex-col gap-[15px] py-[20px] ">
        <h3 className="text-[20px] font-bold text-start">
        Murojaat uchun:tel: +998 55 500 11 99 (Qo‘ng‘iroqlar haftaning
        dushanbadan juma kuniga <br /> qadar soat 10:00 dan 17:00 gacha qabul
        qilinadi)pochta: info@kun.uz 
        
        </h3>
        <h3 className="text-[20px] font-bold text-start">
        Reklama bo‘limi:tel: +998 78 113 10 10
        
        (Qo‘ng‘iroqlar soat 09:00 dan 18:00 gacha qabul <br /> qilinadi)pochta:
        reklama@kun.uz
        </h3>
        
        </div>
        
      </div>

      <Footer />
    </>
  );
};

export default About;
