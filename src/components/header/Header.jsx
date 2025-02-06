import { useContext } from "react";
import { FaRegBell } from "react-icons/fa";
import { FiMessageSquare, FiMoon } from "react-icons/fi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineWbSunny } from "react-icons/md";
import { FuncContext } from "../../provider/FuncProvider";

const Header = () => {
  const { hideBar, setHideBar } = useContext(FuncContext);
  return (
    <header className=" w-full flex items-center justify-between py-4 pr-10 pl-6">
        {hideBar && (
          <button className="text-neutral-500 border rounded-md p-1 mr-6 border-neutral-300 cursor-pointer active:bg-neutral-200 duration-100 active:scale-95" onClick={() => setHideBar(false)}>
            <MdOutlineKeyboardDoubleArrowRight size={24} />
          </button>
        )}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center bg-white pl-5 py-1 rounded-xl border border-neutral-200">
          <input className="flex-grow w-96 py-1 outline-none bg-white" type="text" placeholder="Search here..." />
          <span className="px-3 text-neutral-500 cursor-pointer">
            <HiMiniMagnifyingGlass size={20} />
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="p-2 cursor-pointer text-neutral-700 bg-bgGray active:scale-95 duration-100 rounded-full">
            <FiMoon size={22} />
          </span>
          {/* <span className="p-2 cursor-pointer text-neutral-700 bg-bgGray active:scale-95 duration-100 rounded-full">
            <MdOutlineWbSunny size={22} />
          </span> */}
          <span className="p-2 cursor-pointer text-neutral-700 bg-bgGray active:scale-95 duration-100 rounded-full relative">
            <FiMessageSquare size={22} />
            <span className="absolute -top-1 -right-1 bg-amber-500 rounded-full size-4 flex justify-center items-center text-xs font-light text-white">4</span>
          </span>
          <span className="p-2 cursor-pointer text-neutral-700 bg-bgGray active:scale-95 duration-100 rounded-full relative">
            <FaRegBell size={22} />
            <span className="absolute -top-1 -right-1 bg-amber-500 rounded-full size-4 flex justify-center items-center text-xs font-light text-white">3</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
