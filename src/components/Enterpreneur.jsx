import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { FaArrowAltCircleRight } from "react-icons/fa";
const Enterpreneur = () => {
  return (
    <div>  
    <Navbar/>
   <div className="div h-[83vh]  flex w-full">
    <div className="left px-10 gap-10 items-start justify-center  flex flex-col h-full w-[50%]">
      <h1 className='text-5xl font-bold'>Networking Hub: Empowering Entrepreneurs for Success</h1>
      <p className='text-xl'>In our Entrepreneurship and Networking Hub, we foster a dynamic environment where aspiring entrepreneurs can thrive. Through strategic partnerships, mentorship programs, and networking opportunities, we empower individuals to turn their innovative ideas into successful ventures. Join our vibrant community and unlock the resources and support you need to navigate the entrepreneurial journey with confidence.</p>
      <button  className='bg-[#92cc4f] font-bold rounded-full px-5 py-5'>Join us as a learner</button>
    </div>
    <div className="left bg-yellow-400 h-full w-[50%]">
      <img className='h-full w-full object-cover' src="/images/five-entrepreneurs-offering-innovative-solutions-in-rural-india.jpg" alt="" />
    </div>
   </div>
   <div className="div py-10">
<h1 className='text-3xl  py-5 font-bold uppercase text-center'>Programs for Enterpreneurship and Network</h1>
   <div className="div h-fit place-items-center grid p-10 grid-cols-3 w-full ">
    <a href="/training/welders">

   <div
  className="flex flex-col rounded-lg h-96 w-96 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[#92CC4F] md:flex-row">
  <img
    className="h-96 w-full rounded-t-lg object-cover  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="https://c8.alamy.com/comp/2J6X087/smiling-small-business-owner-showing-white-empty-sign-board-by-looking-at-camera-at-garments-concept-of-advertising-professional-occupation-and-2J6X087.jpg"
    alt="" />
  <div className="flex flex-col justify-start p-6">
    <h5
      className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
     Business Incubation Platforms:
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    Offering access to specialized software and tools tailored to incubate and grow startup businesses.</p>
    <FaArrowAltCircleRight className='text-white text-3xl' />
  </div>
</div>
    </a>
<a href="/training/agri">
      
   <div
  className="flex flex-col rounded-lg h-96 w-96 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[#92CC4F] md:flex-row">
  <img
    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="https://way2barak.com/wp-content/uploads/2020/04/entrepreneur.1jpg.jpg"
    alt="" />
  <div className="flex flex-col justify-start p-6">
    <h5
      className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
    Financial Management Software
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    Offering software solutions for budgeting, a and financial forecasting to help entrepreneurs manage their finances effectively.</p>
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
  Cloud Computing Services
    </h5>
    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    Offering access to cloud infrastructure and services for scalable and cost-effective hosting, storage, and computing resources.</p>
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

export default Enterpreneur