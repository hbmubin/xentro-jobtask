import { useContext } from "react";
import { FaRegBell } from "react-icons/fa";
import { FiMessageSquare, FiMoon } from "react-icons/fi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineWbSunny } from "react-icons/md";
import { FuncContext } from "../../provider/FuncProvider";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  const { hideBar, setHideBar } = useContext(FuncContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <header className=" w-full dark:bg-slate-800 flex items-center justify-between py-4 pr-10 pl-6">
      <button
        className={`${
          !hideBar && "lg:hidden block"
        } text-neutral-500 border rounded-md p-1 mr-6 dark:border-slate-700 dark:bg-slate-900 dark:active:bg-gray-700 border-neutral-300 cursor-pointer active:bg-neutral-200 hover:bg-neutral-200 duration-100 active:scale-95 dark:hover:bg-slate-800`}
        onClick={() => setHideBar(false)}
      >
        <MdOutlineKeyboardDoubleArrowRight size={24} />
      </button>
      <div className="flex items-center justify-between w-full">
        <figure className={`w-32 ${!hideBar && "opacity-0"}`}>
          <img className="max-w-full" src={logo} alt="xentro-logo" />
        </figure>
        <div className="flex items-center gap-3">
        <div className=" items-center sm:flex hidden bg-white dark:bg-slate-800 pl-5 py-1 rounded-xl border dark:border-slate-700 border-neutral-200">
          <input className="flex-grow  xl:w-96 py-1 dark:text-neutral-300 dark:placeholder:text-neutral-500 outline-none bg-white dark:bg-slate-800" type="text" placeholder="Search here..." />
          <span className="px-3 text-neutral-500 cursor-pointer">
            <HiMiniMagnifyingGlass size={20} />
          </span>
        </div>
          <span className="p-2 sm:hidden block cursor-pointer text-neutral-700 bg-bgGray active:scale-95 duration-100 rounded-full relative dark:bg-gray-700 dark:text-neutral-400">
            <HiMiniMagnifyingGlass size={20} />
          </span>
          {isDarkMode ? (
            <span onClick={toggleTheme} className="p-2 cursor-pointer text-neutral-700 bg-bgGray active:scale-95 duration-100 rounded-full dark:bg-gray-700 dark:text-neutral-400">
              <MdOutlineWbSunny size={22} />
            </span>
          ) : (
            <span onClick={toggleTheme} className="p-2 cursor-pointer text-neutral-700 bg-bgGray active:scale-95 duration-100 rounded-full dark:bg-gray-700 dark:text-neutral-400">
              <FiMoon size={22} />
            </span>
          )}

          <span className="p-2 cursor-pointer sm:block hidden text-neutral-700 bg-bgGray active:scale-95 duration-100 rounded-full relative dark:bg-gray-700 dark:text-neutral-400">
            <FiMessageSquare size={22} />
            <span className="absolute -top-1 -right-1 bg-amber-500 rounded-full size-4 flex justify-center items-center text-xs font-light text-white">4</span>
          </span>
          <span className="p-2 cursor-pointer sm:block hidden text-neutral-700 bg-bgGray active:scale-95 duration-100 rounded-full relative dark:bg-gray-700 dark:text-neutral-400">
            <FaRegBell size={22} />
            <span className="absolute -top-1 -right-1 bg-amber-500 rounded-full size-4 flex justify-center items-center text-xs font-light text-white">3</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
