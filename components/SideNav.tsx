import Image from "next/image";
import logo from "../public/OS_logo.png"
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
interface props{
    path:string
}
const SideNav:React.FC<props> = (props) => {
    return ( 
    <div className="flex flex-col p-3 items-center w-[19vw] bg-white h-[100vh]  gap-[60px] ">
   
    <div className="flex items-center gap-4 font-bold text-xl text-[rgba(0,66,236,1)] border-b border-b-solid border-b-[rgba(243, 242, 246,1)] p-2 ">
    <Image alt="" src={logo} className=" w-[35px] h-[35px] "  ></Image>
        Os Management
    </div>
      <ul  className="text-lg font-semibold flex flex-col gap-[30px] " >
        <Link href={'/Dashboard'} >
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Dashboard" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
        <MdOutlineDashboard className="text-2xl" ></MdOutlineDashboard>   Dashboard
        </div>
        </Link>
        <Link href={'/Centrales'} >
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <MdOutlineDashboard className="text-2xl" ></MdOutlineDashboard>  Centrales
        </div>
        </Link>
           <Link href={'/Centrales'} >
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <MdOutlineDashboard className="text-2xl" ></MdOutlineDashboard>  Centrales
        </div>
        </Link>
           <Link href={'/Centrales'} >
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <MdOutlineDashboard className="text-2xl" ></MdOutlineDashboard>  Centrales
        </div>
        </Link>
           <Link href={'/Centrales'} >
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <MdOutlineDashboard className="text-2xl" ></MdOutlineDashboard>  Centrales
        </div>
        </Link>
        <Link href={'/Centrales'} >
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <MdOutlineDashboard className="text-2xl" ></MdOutlineDashboard>  Centrales
        </div>
        </Link>
      </ul>


    </div> );
}
 
export default SideNav;