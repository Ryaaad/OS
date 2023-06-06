import Image from "next/image";
import logo from "../../public/OS_logo.png"
import Link from "next/link";
import {MdEvStation } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { SiHomeassistant } from "react-icons/si";
import { VscOutput } from "react-icons/vsc";
import {FiLogOut} from "react-icons/fi"
import {IoMdLogIn} from "react-icons/io"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';
import React from "react";

interface props{
    path:string
}
const SideNav:React.FC<props> = (props) => {
    const router = useRouter();
    const [userRole,setuser]=useState<any>()
        useEffect(() => {
          if (typeof sessionStorage !== 'undefined') {
          const token = sessionStorage.getItem('token');
         if(token){ const decodedToken = jwt.decode(token as string) as { [key: string]: string };
          const Role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          setuser(Role) }}
        }, []);
    const handelLogout=()=>{
        if (typeof sessionStorage !== 'undefined') {
            const token = sessionStorage.getItem('token');
           if(token){     
              sessionStorage.removeItem('token');
              router.push('/');
               }}
    }
    return ( 
    <div className="flex flex-col p-3 items-center w-[19vw] bg-white h-[100vh] relative gap-[60px] " >
   
    <div className="flex items-center gap-4 font-bold text-xl text-[rgba(0,66,236,1)] border-b border-b-solid border-b-[rgba(243, 242, 246,1)] p-2 ">
    <Image alt="" src={logo} className=" w-[35px] h-[35px] "  ></Image>
        Os Management
    </div>
      <ul  className=" font-semibold flex flex-col gap-[30px] " >
        <Link href={'/Centrales'} >
        <div className={`flex gap-4 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <SiHomeassistant className="text-2xl" ></SiHomeassistant>  Centrales
        </div>
        </Link>
           <Link href={'/Consomations'} >
        <div className={`flex gap-4 items-center  cursor-pointer ${props.path=="Consomations" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <MdEvStation className="text-2xl" ></MdEvStation>  Consomations
        </div>
        </Link>
           <Link href={'/Bilans'} >
        <div className={`flex gap-4 items-center  cursor-pointer ${props.path=="Bilans" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <VscOutput className="text-2xl" ></VscOutput>  Bilans
        </div>
        </Link>
        <Link href={'/Rapports'} >
        <div className={`flex gap-4 items-center  cursor-pointer ${props.path=="Rapports" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <TbReportAnalytics className="text-2xl" ></TbReportAnalytics>  Rapports
        </div>
        </Link>
      </ul>
  { userRole && <div className="border-t border-t-solid border-t-[rgba(243, 242, 246,1)] bottom-[2%] left-[50%] absolute flex gap-2 items-center p-2 w-full translate-x-[-50%] font-sembold justify-center text-[rgba(115,115,115,1)] " >
    <FiLogOut className="text-2xl cursor-pointer"    onClick={()=>{handelLogout()}} ></FiLogOut> 
    Déconnexion
    </div>}
    { !userRole && <div className="border-t border-t-solid border-t-[rgba(243, 242, 246,1)] bottom-[2%] left-[50%] absolute flex gap-2 items-center p-2 w-full translate-x-[-50%] font-sembold justify-center text-[rgba(115,115,115,1)] " >
    <IoMdLogIn className="text-2xl cursor-pointer"    onClick={()=>{ router.push('/');}} ></IoMdLogIn> 
    Connexion
    </div>}
    </div> );
}
 
export default SideNav;