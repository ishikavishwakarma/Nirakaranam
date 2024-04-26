import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useForm } from "react-hook-form";


const Logintraine = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = handleSubmit((data) => {
        console.log(data)
      });
      
  return (
    <div>   <Navbar/>
    <div className='lg:pt-14 sm:p-16 p-5 lg:pl-14'>
      <p className=' text-[#00000088]'><a href="/">Home </a>/ Log In</p>
<div className="div head flex-col gap-10 sm:gap-32 lg:flex-row flex">

<div className="flex items-center w-full  h-fit">
      <form onSubmit={onSubmit} noValidate className="sm:w-[50vw] w-full  sm:h-[25vw]   shadow-xl p-8 rounded ">
        <h2 className="sm:text-3xl text-xl text-black font-bold ">LogIn
        </h2>
        <p className='mb-6 pt-5 text-sm sm:text-lg text-black '>Login Your Account to unlock exclusive benefits on our website!</p>
        
         <div className='grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2'>   
          
                 <div className="mb-4">
         
            <input
              type="text"
              id="username"
              placeholder='Email'
              {...register("email", {
                required: "email id is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "please enter valid email id",
                },
              })}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#5fef42]"
             
            />
             {errors?.email && (
                    <p className="text-sm capitalize text-red-500">
                      {errors?.email.message}
                    </p>
                  )}
          </div>
       
        <div className="mb-6">
          
          <input
           placeholder='Password'
            type="password"
            id="password"
            name="password"
            {...register("password", {
              required: "password is required",
              // pattern: {
              //   value:
              //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/,
              //   message: "please enter valid password",
              // },
            })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#5fef42]"
          
          />
           {errors?.password && (
                    <p className="text-sm capitalize text-red-500">
                      {errors?.password.message}
                    </p>
                  )}
        </div>
        </div>
       
        
        <button
          type="submit"
         
          className="bg-[#5fef42] text-white px-4 py-2 rounded hover:bg-[#5fef42] focus:outline-none"
        >
     Log In
        </button>
        <p className="text-sm text-[#000000c7] mt-4">
        New to Nirakarnam?  <a className='text-[#5fef42] font-[600] hover:underline focus:outline-none' href="/register">Sign up</a> to create an account.
          
        </p>
      </form>
    </div>
    <div className="img h-96 w-88 sm:h-[400px] sm:w-[750px] ">
        <img src="/images/image1.jpeg" className='h-full object-cover w-full' alt="" />
       </div>
</div>
    </div></div>
  )
}

export default Logintraine