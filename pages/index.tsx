import Image from "next/image";
import pic from "../public/LoginBg.png"
import { useFormik } from "formik";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const Login = () => {
  const router = useRouter();
  const [err,seterr]=useState<any>()
  const [token, setToken] = useState<string>(); // Add token state
  const Submit = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7002/api/v1/Auth/login",
        {
          username: formik.values.user,
          password: formik.values.code,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      if (response.status === 200) {
        const token = response.data;
        sessionStorage.setItem("token", token);
        console.log("token: ", token);
        setToken(token); // Store token in state
        router.push("/Accueil");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error(error);
      // seterr(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      user: "",
      code: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted with values", values);
      Submit();
    },
  });

  console.log(err);

  
    return ( 
        <div className="h-[100vh] flex items-center ">
         <Image   className="h-[100vh] w-[55vw] bg-cover bg-center " alt="" src={pic} ></Image>
        <form className="w-[45vw] bg-white h-[100vh] flex flex-col gap-5 justify-center  items-center" onSubmit={formik.handleSubmit} >
            <h1 className="text-3xl  mb-10 font-semibold ">Login</h1>
          {err  && <h1 className="text-[red] text-semibold text-sm text-start  "> {err} </h1> }
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
           
           <Link href={"/Accueil"}>
            <p  className="text-[#808080] text-sm  "  > Visiteur </p>
           </Link>
        </form>
        </div>
     );
}
 
export default Login;

function usestate(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
