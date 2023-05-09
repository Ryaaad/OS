import {MdKeyboardArrowLeft} from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

interface props{
    dayName:string,
    monthName:string,
    day:number ,
    userRole:string
}

const Group:React.FC<props> = (props) => {
    const router = useRouter();
    const { id,group } = router.query;
  
    return ( 
        <div className=" w-[81vw] p-7 py-4 bg-[#F0F8FF] h-[100vh]">
         <div className="flex items-center justify-between w-full text-[#808080] "> 
            <Link className="flex items-center gap-2 cursor-pointer " href={`/Centrales/${id}`}>
            <MdKeyboardArrowLeft className="text-lg" ></MdKeyboardArrowLeft>
             {id}
            </Link>
         {props.dayName} , {props.monthName} {props.day}
            </div>
        <div className="h-[90vh] flex flex-col justify-center " >
        <h1 className="text-2xl  font-semibold text-center "> Group {group} </h1>
         <div className="mt-5 bg-white w-full h-[70vh]  "></div>
        </div>
          
      
        </div>
     );
}
 
export default Group;