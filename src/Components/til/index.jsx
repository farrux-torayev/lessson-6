import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";

const Til = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [showInput, setShowInput] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <>
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center  gap-[10px]  px-4 py-2 rounded-md   bg-gray-100 hover:bg-gray-100"
        >
          <GrLanguage />
          O'zbekiston
        </button>
        {isOpen && (
          <div className="absolute right-0  bg-white  rounded-md shadow-lg w-[142px]">
            <ul className="py-2 ">
              <li
                onClick={() => changeLanguage("uzb")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                O‘zbekcha
              </li>
              <li
                onClick={() => changeLanguage("rus")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Русский
              </li>
              <li
                onClick={() => changeLanguage("eng")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                English
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="p-4 flex items-center gap-4">
        {showInput && (
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
        <button
          onClick={toggleInput}
          className="p-2 bg-gray-200 rounded-full z-30 hover:bg-gray-300"
        >
          <CiSearch />
        </button>
      </div>
    </>
  );
};

export default Til;


