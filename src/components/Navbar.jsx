import React, { useState } from "react";
// Import Link from next/link


import NavLinks from "./NavLinks";

import { MdOutlineHome } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white  font-montserrat">
      <div className="flex items-center font-medium justify-around">
        
        <div className="z-50 px-2 md:w-auto w-full flex justify-between">
        <img src={"/images/Screenshot_2024-04-23_134457-removebg-preview.png"} width={100} height={90} className="h-16 w-[120px] bg-black rounded-full  md:w-[70px] object-cover  " alt="Logo" />
          <div
            className="text-3xl p-4 text-[#015AA0] md:hidden"
            onClick={() => setOpen(!open)}
          >
          {open ? <IoMdClose /> : <HiMenuAlt3 />}
            {/* Your mobile menu icon */}
          </div>
        </div>
        <ul className="md:flex font-montserrat hidden  items-center gap-8 ">
        
          <li>
            <Link className="hover:text-[#015AA0] flex items-center gap-2 uppercase font-[600]" to="/">
              {/* Apply to directly to Link */}
              <MdOutlineHome className="block lg:hidden" />
                Home
              
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link className="hover:text-[#015AA0] font-[600]" to="/contact">
              {/* Apply to directly to Link */}
                CONTACT US
              
            </Link>
          </li>
        </ul>
       
        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-white z-50  fixed w-full top-16 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li className="pl-3 ">
            <Link className="items-center uppercase font-[600] pb-2 gap-2 flex"  to="/">
            <MdOutlineHome />
                Home
              
            </Link>
          </li>
          <NavLinks />
          
        </ul>
      </div>
      <div className="nav-1 bg-zinc-300  mx-auto ">
      <div className="marquee whitespace-nowrap overflow-hidden flex items-center">
        <h1 className="text-black  font-[700] text-base">Empowering rural youth through education, entrepreneurship, and innovation</h1>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
