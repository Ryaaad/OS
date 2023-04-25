import Image from "next/image";
import pic from "../public/LoginBg.png"
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
const Login = () => {

      const formik=useFormik({
        initialValues:{
            user:"",
            code:""
        },
        onSubmit:(values)=>{
          console.log(values)
        }
      })

    
    return ( 
        <div className="h-[100vh] flex items-center ">
        <Image   className="h-[100vh] w-[55vw] bg-cover bg-center " alt="" src={pic} ></Image>

        <form className="w-[45vw] bg-white h-[100vh] flex flex-col gap-5 justify-center  items-center" onSubmit={formik.handleSubmit} >
            <h1 className="text-3xl  mb-10 font-semibold ">Login</h1>
            <input 
            id="user" 
            name="user" 
            type="text" 
            required
           placeholder="UserName"  
           className=" w-[400px] h-[48px] border border-solid border-[#1A73E8] mx-auto px-5  rounded-md focus:outline-none " 
            value={formik.values.user}
            onChange={formik.handleChange} />
            <input 
             id="code" 
             name="code"
             type="number" 
             placeholder="Code"  
             required
             className=" w-[400px] h-[48px] border border-solid border-[#1A73E8] mx-auto px-5 rounded-md focus:outline-none  " 
            value={formik.values.code}  
            onChange={formik.handleChange} />
            <button type="submit" className="bg-[#1A73E8] items-center text-white mx-auto w-[200px] text-xl py-2 rounded-[10px] block mt-3 "  onClick={()=>{}} >  Continue </button>
            <p  className="text-[#808080] text-sm cursor-pointer  " > i'm a Visiteur </p>
        </form>
        </div>
     );
}
 
export default Login;