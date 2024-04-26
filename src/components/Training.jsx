import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { FaArrowAltCircleRight } from "react-icons/fa";
const Training = () => {
  return (
    <div>  
        <Navbar/>
       <div className="div h-[83vh]  flex w-full">
        <div className="left px-10 gap-10 items-start justify-center  flex flex-col h-full w-[50%]">
          <h1 className='text-5xl font-bold'>Skills Development and Learning Center</h1>
          <p className='text-xl'>Welcome to our Training and Learning Hub. Here, rural youth find endless possibilities for growth and development. Explore diverse courses, gain valuable skills, and chart your path to success with our supportive community. Together, let's build a brighter tomorrow through education and empowerment.</p>
          <button  className='bg-[#92cc4f] font-bold rounded-full px-5 py-5'>Join us as a learner</button>
        </div>
        <div className="left bg-yellow-400 h-full w-[50%]">
          <img className='h-full w-full object-cover' src="/images/On-World-Youth-Skills-Day-Vedanta-Aluminium-reaffirms-commitment-to-empowering-rural-youth-big.jpg" alt="" />
        </div>
       </div>
       <div className="div py-10">
<h1 className='text-3xl  py-5 font-bold uppercase text-center'>Programs for Training</h1>
       <div className="div h-fit place-items-center grid p-10 grid-cols-3 w-full ">
        <a href="/training/welders">

       <div
      className="flex flex-col rounded-lg h-96 w-96 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[#92CC4F] md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_c_a6VKF00atyasxtOagfbPWAQ2TJzabon9L1aur0qycHH9ZSeZIKk-og51L8Wq7X6E&usqp=CAU"
        alt="" />
      <div className="flex flex-col justify-start p-6">
        <h5
          className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          Rural Welders
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Empowering rural welders with modern techniques and equipment for enhanced productivity and safety
        </p>
        <FaArrowAltCircleRight className='text-white text-3xl' />
      </div>
    </div>
        </a>
    <a href="/training/agri">
          
       <div
      className="flex flex-col rounded-lg h-96 w-96 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[#92CC4F] md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="https://content.jdmagicbox.com/comp/pune/v7/020pxx20.xx20.190111172340.x4v7/catalogue/asabe-agri-consultant-pune-1dgk0rb6ef.jpg"
        alt="" />
      <div className="flex flex-col justify-start p-6">
        <h5
          className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          Agri Consultant
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Equipping rural agriculture consultants with innovative solutions for sustainable farming practices and increased yields.
        </p>
        <FaArrowAltCircleRight className='text-white text-3xl' />
      </div>
    </div>
        </a>
    <a href="/training/graphics">
          
       <div
      className="flex flex-col rounded-lg h-96 w-96 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[#92CC4F] md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="https://winstonsalemprintservices.b-cdn.net/wp-content/uploads/2021/12/Boise-Graphic-Design-300x200.jpeg"
        alt="" />
      <div className="flex flex-col justify-start p-6">
        <h5
          className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
         Graphic Designer
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        Empowering rural graphic designers with digital tools and creative skills to thrive in the modern design industry.
        </p>
        <FaArrowAltCircleRight className='text-white text-3xl' />
      </div>
    </div>
        </a>
    
       </div>
       </div>
     
       <Footer/>
    </div>
  )
}

export default Training