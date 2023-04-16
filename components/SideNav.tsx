import Image from "next/image";
import logo from "../public/OS_logo.png"
import dashboard from "../public/Dashboard.png"

interface props{
    path:string
}
const SideNav:React.FC<props> = (props) => {
    return ( 
    <div className="flex flex-col p-5 items-center w-[23vw] bg-white h-[100vh]  gap-[50px] ">
   
    <div className="flex items-center gap-4 font-bold text-xl text-[rgba(0,66,236,1)] border-b border-b-solid border-b-[rgba(243, 242, 246,1)] p-2 ">
    <Image alt="" src={logo} className=" w-[25px] h-[25px] "  ></Image>
        Os Management
    </div>
      <ul  className="text-lg font-semibold flex flex-col gap-[30px] " >
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Dashboard" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
         <Image alt="" src={dashboard} ></Image>   Dashboard
        </div>
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
        <Image alt="" src={dashboard} ></Image>  Centrales
        </div>
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
        <Image alt="" src={dashboard} ></Image> Centrales
        </div>
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
        <Image alt="" src={dashboard} ></Image> Centrales
        </div>
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
        <Image alt="" src={dashboard} ></Image> Centrales
        </div>
        <div className={`flex gap-5 items-center  cursor-pointer ${props.path=="Centrales" ? "text-[rgba(0,66,236,1)]" : "text-[rgba(115,115,115,1)]" } `}>
        <Image alt="" src={dashboard} ></Image>  Centrales
        </div>
      </ul>


    </div> );
}
 
export default SideNav;