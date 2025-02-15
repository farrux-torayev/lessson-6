import React from 'react';
import { NavLink } from 'react-router';
import { BsTelegram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import About from '../about';

const Footer = () => {
    return (
        <> 
        <div className='w-[1300px] m-auto  py-[50px] bg-white'>
            <div className='flex items-center gap-[15px]  justify-around'>
            <div >
            <img src="./src/assets/logo-grey.svg" alt="" />
            </div>
            <ul className='flex gap-[15px]'>
                <li>
                    <NavLink to="/about" ><About/> </NavLink>
                </li>
                <li>
                    <NavLink>  RSS </NavLink>
                </li>
                <li>
                    <NavLink> Aloqa </NavLink>
                </li>
                <li>
                    <NavLink>  Reklama</NavLink>
                </li>
                <li>
                    <NavLink>Kun.uz jamoasi</NavLink>
                </li>
            </ul>
            <div className='flex items-center gap-[15px]'>
            <BsTelegram />
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            </div>
            </div>
            <div className='pt-[30px]'>
            <h1 className='text-[11px] leading-[15px] text-[#B2B2B2] '>
        “KUN.UZ” saytida eʼlon qilingan materiallardan nusxa koʻchirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi mumkin. <br />
Guvohnoma: №0987. Berilgan sanasi: 22.06.2015-yil. Muassis: “WEB EXPERT” MCHJ. Tahririyat manzili: 100043, Toshkent shahri, K. Yormatov koʻchasi, 12-uy. Elektron manzil: info@kun.uz. <br />
Saytda eʼlon qilinayotgan mualliflik maqolalarida keltirilgan fikrlar muallifga tegishli va ular Kun.uz tahririyati nuqtayi nazarini ifoda etmasligi mumkin.
Ⓣ - maqola va materiallarda qo‘yilgan mazkur belgi ularning tijorat va reklama huquqlari asosida eʼlon qilinganligini bildiradi.
</h1>
</div>

        </div>
   
        </>

    );
}

export default Footer;
