import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  // 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
  return (
    <div className=" text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className=" w-full text-3xl font-bold text-[#00df9a] cursor-pointer">PLOTT.</h1>
      <ul className=" hidden md:flex">
        <li className=" p-4 cursor-pointer hover:text-[#00df9a]">Home</li>
        <li className=" p-4 cursor-pointer hover:text-[#00df9a]">Properties</li>
        <li className=" p-4 cursor-pointer hover:text-[#00df9a]">Dashboard</li>
        <li className=" p-4 cursor-pointer hover:text-[#00df9a]">Account</li>
      </ul>
      <div className=" cursor-pointer block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[-100%]"
            : "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
        }
      >
        <h1 className=" w-full text-3xl font-bold text-[#00df9a] m-4">
          PLOTT.
        </h1>
        <ul className=" p-4 uppercase">
          <li className=" p-4 border-b border-gray-600">Home</li>
          <li className=" p-4 border-b border-gray-600">Properties</li>
          <li className=" p-4 border-b border-gray-600">Dashboard</li>
          <li className=" p-4">Account</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
