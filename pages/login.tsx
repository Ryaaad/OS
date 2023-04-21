
import Image from "next/image";
import pic from "../public/LoginBg.png"
const Login = () => {
    return ( 
        <div className="h-[100vh] flex items-center ">
        <Image   className="h-[100vh] w-[55vw] bg-cover bg-center " alt="" src={pic} ></Image>

        <div className="w-[45vw] bg-white h-[100vh] flex flex-col gap-5 justify-center  items-center" >
            <h1 className="text-3xl  mb-10 font-semibold ">Login</h1>
            <input type="text"  placeholder="UserName"  className=" w-[400px] h-[48px] border border-solid border-[#1A73E8] mx-auto px-5  rounded-md focus:outline-none " />
            <input type="text"  placeholder="Code"  className=" w-[400px] h-[48px] border border-solid border-[#1A73E8] mx-auto px-5 rounded-md focus:outline-none  "  />
            <button className="bg-[#1A73E8] items-center text-white mx-auto w-[200px] text-xl py-2 rounded-[10px] block mt-3 "  onClick={()=>{}} >  Continue </button>
            <p  className="text-[#808080] text-sm cursor-pointer  " > i'm a Visiteur </p>
        </div>
        </div>
     );
}
 
export default Login;