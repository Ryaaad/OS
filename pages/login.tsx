import Image from "next/image";
import pic from "../public/LoginBg.png"
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
const Login = () => {
      const {data:session}=useSession()
      const  Submit=async()=>{
      // try{  const result=await signIn("credentials",{
      //     username:formik.values.user,
      //     password:formik.values.code,
      //     redirect:false
      //   })}
      //    catch (error) {
      //     // Display the error message to the user
      //     console.error(error);
      //     // You can set the error message in the formik state or display it directly in the UI
      //     formik.setStatus({ error: "Invalid username or password" });
      //   }
      try{
        const result=await axios.post('https://localhost:7002/api/v1/Auth/login',{
          username:formik.values.user,
          password:formik.values.code
        })
        console.log(result.data);
        
      }catch(error){
        
        console.log(error);
      }
        }
    
      const formik=useFormik({
        initialValues:{
            user:"",
            code:""
        },
        onSubmit:(values)=>{
          console.log("Form submitted with values", values);
          Submit();
        }
      })

    
    return ( 
        <div className="h-[100vh] flex items-center ">
          {
            session?.user ? "user Conected" : <Image   className="h-[100vh] w-[55vw] bg-cover bg-center " alt="" src={pic} ></Image>
          }
        

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
             type="text" 
             placeholder="Code"  
             required
             className=" w-[400px] h-[48px] border border-solid border-[#1A73E8] mx-auto px-5 rounded-md focus:outline-none  " 
            value={formik.values.code}  
            onChange={formik.handleChange} />
            <button type="submit" className="bg-[#1A73E8] items-center text-white mx-auto w-[200px] text-xl py-2 rounded-[10px] block mt-3 "  >  Continue </button>
            <p  className="text-[#808080] text-sm cursor-pointer  " > i'm a Visiteur </p>
        </form>
        </div>
     );
}
 
export default Login;