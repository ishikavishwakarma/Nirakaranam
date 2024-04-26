import React, { useState } from "react";
import { Link } from "react-router-dom";// Import Link from next/link
import { IoIosArrowDown } from "react-icons/io";
import { TfiControlShuffle } from "react-icons/tfi";
import { FaServicestack } from "react-icons/fa";
import { CiBadgeDollar } from "react-icons/ci";

const NavLinks = () => {
  const links = [
    {
      name: "Courses",
      submenu: true,
      linked:"/training",
      Icon:<TfiControlShuffle />,
      linkName:"More About Us",
      sublinks: [
        {
          Head: "Business Management",
          sublink: [
            { name: "Introduction to Business Administration", link: "/" },
            { name: "Small Business Management", link: "/" },
            { name: "Marketing Strategies for Small Enterprises", link: "/" },
           
          ],
        },
        {
          Head: "Logistics and Supply Chain Management",
          sublink: [
            { name: "Fundamentals of Logistics", link: "/" },
            { name: "Inventory Management", link: "/" },
            { name: "Supply Chain Optimization Techniques", link: "/" },
           
          ],
        },
        {
          Head: "Digital Skills",
          sublink: [
            { name: "Introduction to Digital Marketing", link: "/" },
            { name: "Website Development and Design", link: "/" },
            { name: "E-commerce Basics", link: "/" },
           
          ],
        },  
        {
          Head: "Industry-specific Training",
          sublink: [
            { name: "Agriculture Entrepreneurship", link: "/" },
            { name: "Handicraft and Artisanal Skills Development", link: "/" },
            { name: "Tourism and Hospitality Management", link: "/" },
           
          ],
        }, 
      ],
    },
    // {
    //   name: "Our Services",
    //   submenu: true,
    //   Icon:<FaServicestack />,
    //   linked:"/services",
    //   linkName:"All Services",
    //   sublinks: [
    //     {
    //       Head: "Design",
    //       sublink: [
    //         { name: "Web Design", link: "/" },
    //         { name: "UI/UX Design", link: "/" },
    //         { name: "Product Design", link: "/" },
    //         { name: "Brand Identity", link: "/" },
           
    //       ],
    //     },
    //     {
    //       Head: "Development",
    //       sublink: [
    //         { name: "Web Development", link: "/" },
    //         { name: "Android App Development", link: "/" },
    //         { name: "Ecommerce Development", link: "/" },
    //         { name: "Web App Development", link: "/" },
    //         { name: "formal shirts", link: "/" },
    //       ],
    //     },
    //     {
    //       Head: "Marketing",
    //       sublink: [
    //         { name: "SEO", link: "/" },
    //         { name: "Social Media Marketing", link: "/" },
    //         { name: "Paid Advertising", link: "/" },
    //       ],
    //     },
  
       
    //   ],
    // },
    {
      name: "Join Us",
      submenu: true,
    
      Icon:<CiBadgeDollar />,
 
      sublinks: [
        {
          Head: "Join Us as a teacher",
          sublink: [
            { name: "Join Us as a teacher", link: "/register" },
           
          ],
        },
        {
          Head: "Join us as a learner",
          sublink: [
            { name: "Join us as a learner", link: "/login" },
           
          ],
        },
    
       
      ],
    },
  ];
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 overflow-hidden font-montserrat text-left md:cursor-pointer group">
            <h1
              className="md:py-7 py-4 flex justify-between uppercase hover:text-[#015AA0] font-[600] items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            ><span className="flex items-center gap-2"> <span className="block lg:hidden">{link.Icon}</span>   {link.name}</span>
             
              <span className="text-xl md:hidden inline"></span>
              <span className="text-xl md:mt-1 md:ml-2  md:block  group-hover:rotate-180 group-hover:-mt-2">
                {/* <ion-icon name="chevron-down"></ion-icon> */}
                <IoIosArrowDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute overflow-x-hidden w-full top-20 bg-white z-50 left-0 hidden group-hover:md:block hover:md:block">
                  <div className="div px-10 py-10 gap-2 md:gap-10 lg:gap- flex">
                  <div className="py-3 flex flex-col gap-5">
                   <h1 className="text-xl font-bold w-96">Course Offerings for Rural Youth Empowerment</h1>
                <Link className=" bg-zinc-200 rounded w-fit py-2 px-4" to={link.linked}>{link.linkName}</Link>
                  </div>
                  <div className=" w-[70vw]  p-2 grid grid-cols-3 gap-1">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <h1 className="text-lg uppercase font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, index) => (
                          <li
                            key={index}
                            className="text-base  w-80 text-gray-600 my-2.5"
                          >
                            <Link to={slink.link}> {/* Use to instead of to */}
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
             <div className="py-3  px-5 flex flex-col gap-5">
                   <h1 className="text-base">Since 2009 and Beyond - Redefining our customer &apos; s digital journeys.</h1>
                <Link className=" bg-zinc-200 rounded w-fit py-2 px-4" to={link.linked}>{link.linkName}</Link>
                  </div>
            {/* sublinks */}
            {link.sublinks.map((slinks, index) => (
              <div key={index}>
                <div>
                
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold  md:pr-0 pr-5 flex gap-4 items-center "
                  >
                    {slinks.Head}
                    
                    <span className="text-xl md:mt-1 md:ml-2  md:block  group-hover:rotate-180 group-hover:-mt-2  inline"><IoIosArrowDown /></span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, index) => (
                      <li key={index} className="py-3 pl-14">
                        <Link to={slink.link}>{/* Use to instead of to */}
                         {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
