import { useEffect, useState } from "react";
import { AiOutlineSearch , AiFillEye} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp ,MdKeyboardArrowLeft,MdDeleteOutline,MdOutlineAdd} from "react-icons/md";
import Pagination from "../Pagination";
import Link from "next/link";

interface props{
    setClicked:(value:boolean) => void
}

const Group:React.FC<props> = (props) => {
    const date = new Date();
    // Get the day (1-31)
     const day = date.getDate();
    // Get the month (0-11)
   const month = date.getMonth();
   // Get the day of the week (0-6)
   const dayOfWeek = date.getDay();
   const monthNames = [ "January", "February", "March", "April", "May", "June", "July","August", "September", "October","November", "December"];
   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday" ]; 
   const monthName = monthNames[month];
   const dayName = dayNames[dayOfWeek];
   


    const [Filter, setFilter] = useState(0)
    const [Add, setAdd] = useState(false)
    const [inputValue, setInputValue] = useState<any>();
    const FirstLigne=[
            {
            name :'arduino Nano',
            type:'MicroController',
            img:'',
            qte:5,
            },
            {
                name :'XBX',
                type:'MicroController',
                img:'',
                qte:5,
                },
                {
                    name :'atmega328',
                    type:'MicroController',
                    img:'',
                    qte:5,
                    },
            {
                name :'arduino',
                type:'MicroController',
                img:'',
                qte:5,
                },
                {
                    name :'arduino nano',
                    type:'MicroController',
                    img:'',
                    qte:5,
                    },
                    {
                        name :'arduino uno',
                        type:'MicroController',
                        img:'',
                        qte:5,
                        },
            {
             name :'Rasberypi',
                type:'MicroController',
                img:'',
                qte:15,
                },
                {
                    name :'arduino',
                    type:'MicroController',
                    img:'',
                    qte:5,
                    },
                    {
                     name :'Rasberypi',
                        type:'MicroController',
                        img:'',
                        qte:15,
                        },
                        {
                            name :'arduino',
                            type:'MicroController',
                            img:'',
                            qte:5,
                            },
                            {
                             name :'Rasberypi',
                                type:'MicroController',
                                img:'',
                                qte:15,
                                },           
                {
                    name :'Esp32',
                    type:'MicroController',
                    img:'',
                    qte:5,
                    },
                    {
                        name :'Pic',
                        type:'MicroController',
                        img:'',
                        qte:5,
                        },
                        {
                            name :'UC-06',
                            type:'MicroController',
                            img:'',
                            qte:20,
                            },
                            {
                                name :'UC-05',
                                type:'beuthuf',
                                img:'',
                                qte:15,
                                },
        
        {
        name :'arduino',
        type:'MicroController',
        img:'',
        qte:5,
        },
        {
            name :'arduino',
            type:'MicroController',
            img:'',
            qte:5,
            },
            {
                name :'arduino',
                type:'MicroController',
                img:'',
                qte:5,
                },
                {
                    name :'arduino',
                    type:'MicroController',
                    img:'',
                    qte:5,
                    },
        {
         name :'Rasberypi',
            type:'MicroController',
            img:'',
            qte:15,
            },
            {
                name :'arduino',
                type:'MicroController',
                img:'',
                qte:5,
                },
                {
                 name :'Rasberypi',
                    type:'MicroController',
                    img:'',
                    qte:15,
                    },
                    {
                        name :'arduino',
                        type:'MicroController',
                        img:'',
                        qte:5,
                        },
                        {
                         name :'Rasberypi',
                            type:'MicroController',
                            img:'',
                            qte:15,
                            },           
            {
                name :'Esp32',
                type:'MicroController',
                img:'',
                qte:5,
                },
                {
                    name :'Pic',
                    type:'MicroController',
                    img:'',
                    qte:5,
                    },
                    {
                        name :'UC-06',
                        type:'MicroController',
                        img:'',
                        qte:20,
                        },
                        {
                            name :'UC-05',
                            type:'beuthuf',
                            img:'',
                            qte:15,
                            },
    ]
    const [Ligne, setLigne] = useState<any>([0])
  
    useEffect(() => {
    setLigne(FirstLigne)
    }, [inputValue])
    const [currentPage, setCurrentPage] = useState(1);
   const postsPerPage= 4;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = Ligne.slice(firstPostIndex, lastPostIndex);  

    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState(
        Ligne.map((l:any) => ({
        isChecked: false
      }))
    );
    useEffect(() => {
        const newCheckboxes = Ligne.map((ligne: any) => ({
          isChecked: false
        }));
        setCheckboxes(newCheckboxes);
      }, [Ligne]);
  
    const handleCheckboxChange = (index:number) => {
      const newCheckboxes = [...checkboxes];
      newCheckboxes[index].isChecked = !newCheckboxes[index].isChecked;
      setCheckboxes(newCheckboxes);
  
      const allChecked = newCheckboxes.every((checkbox) => checkbox.isChecked);
      setIsCheckedAll(allChecked);
    };
  
    const handleAllCheckboxChange = () => {
      const newCheckboxes = checkboxes.map((checkbox: any) => ({
        ...checkbox,
        isChecked: !isCheckedAll
      }));
      setCheckboxes(newCheckboxes);
      setIsCheckedAll(!isCheckedAll);
    };
    return ( 
        <div className=" w-[81vw] p-7 py-4 bg-[#F0F8FF] h-[100vh]">
         <div className="flex items-center justify-between w-full text-[#808080] "> 
            <Link className="flex items-center gap-2 cursor-pointer " href={'/Centrales/1'}>
            <MdKeyboardArrowLeft className="text-lg" ></MdKeyboardArrowLeft>
             Kahrma
            </Link>
         {dayName} , {monthName} {day}
            </div>
        <div className="h-[90vh] flex flex-col justify-center " >
        <h1 className="text-2xl  font-semibold text-center ">  Groupe 1 </h1>
         <div className="mt-5 bg-white w-full h-[70vh]  "></div>
        </div>
          
      
        </div>
     );
}
 
export default Group;