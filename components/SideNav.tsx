import Image from "next/image";
import logo from "../public/OS_logo.png"
import Link from "next/link";
import { MdOutlineDashboard,MdEvStation } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { GiPowerGenerator } from "react-icons/gi";
import { GoHome } from "react-icons/go";


interface props{
    path:string
}
const SideNav:React.FC<props> = (props) => {
    return ( 
    <div className="flex flex-col p-3 items-center w-[19vw] bg-white h-[100vh]  gap-[60px] " >
   
    <div className="flex items-center gap-4 font-bold text-xl text-[rgba(0,66,236,1)] border-b border-b-solid border-b-[rgba(243, 242, 246,1)] p-2 ">
    <Image alt="" src={logo} className=" w-[35px] h-[35px] "  ></Image>
        Os Management
    </div>
      <ul  className=" font-semibold flex flex-col gap-[30px] " >
        <Link href={'/'} >
        <div className={`flex gap-4 items-center  cursor-pointer ${props.path=="Accueil" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
        <GoHome className="text-2xl" ></GoHome>   Accueil 
        </div>
        </Link>
        <Link href={'/Centrales'} >
        <div className={`flex gap-4 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <GiPowerGenerator className="text-2xl" ></GiPowerGenerator>  Centrales
        </div>
        </Link>
           <Link href={'/Consomations'} >
        <div className={`flex gap-4 items-center  cursor-pointer ${props.path=="Consomations" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <MdEvStation className="text-2xl" ></MdEvStation>  Consomations
        </div>
        </Link>
           <Link href={'/Bilans'} >
        <div className={`flex gap-4 items-center  cursor-pointer ${props.path=="Bilans" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <BsFileEarmarkSpreadsheet className="text-2xl" ></BsFileEarmarkSpreadsheet>  Bilans
        </div>
        </Link>
        <Link href={'/Rapports'} >
        <div className={`flex gap-4 items-center  cursor-pointer ${props.path=="Rapports" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
            <TbReportAnalytics className="text-2xl" ></TbReportAnalytics>  Rapports
        </div>
        </Link>
      </ul>


    </div> );
}
 
export default SideNav;