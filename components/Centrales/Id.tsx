import { useEffect, useState } from "react";
import { AiOutlineSearch , AiFillEye} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp ,MdKeyboardArrowLeft,MdDeleteOutline,MdOutlineAdd} from "react-icons/md";
import Pagination from "../Pagination";
import Link from "next/link";

interface props{
    setClicked:(value:boolean) => void
}

const Ctrlid:React.FC<props> = (props) => {
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

  
    return ( 
        <div className=" w-[81vw] p-7 py-4 bg-[#F0F8FF] max-h-[100vh] overflow-y-scroll ">
         <div className="flex items-center justify-between w-full text-[#808080] "> 
            <Link className="flex items-center gap-2 cursor-pointer " href={'/Centrales'}>
            <MdKeyboardArrowLeft className="text-lg" ></MdKeyboardArrowLeft>
             Centrales
            </Link>
         {dayName} , {monthName} {day}
            </div>
          <div className="flex items-center justify-between mt-10 ">
        <h1 className="text-2xl  font-semibold ">  Kahrama </h1>
        <button className="bg-[#1A73E8] items-center text-white flex gap-2 p-3 py-2 rounded-[10px] "  onClick={()=>props.setClicked(true)} >
        <MdOutlineAdd  className="text-xl" ></MdOutlineAdd>  Ajouter Groupe
        </button>
         </div>   

         <div className="mt-5 bg-white w-full h-[35vh]  "></div>
          
        <div  className=" bg-white w-full h-[60vh] relative mt-4 " >
        <div className="flex justify-between items-center p-5 py-3 ">
        <div className="flex gap-3 items-center justify-between border-b border-solid-b p-2 pb-0 border-b-[#D9D9D9] w-[60%] mx-auto text-lg text-[#808080] font-semibold ">
           <p className={` ${Filter==0 && "text-[#3A78F1] border-b-[2px] border-b-solid border-b-[#3A78F1] "} cursor-pointer `}  onClick={()=>setFilter(0)} >All</p>
           <p className={` ${Filter==1 && "text-[#3A78F1] border-b-[2px] border-b-solid border-b-[#3A78F1] "} cursor-pointer `}  onClick={()=>setFilter(1)} >TG</p>
           <p className={` ${Filter==2 && "text-[#3A78F1] border-b-[2px] border-b-solid border-b-[#3A78F1] "} cursor-pointer `}  onClick={()=>setFilter(2)} >TVA</p>
           <p className={` ${Filter==3 && "text-[#3A78F1] border-b-[2px] border-b-solid border-b-[#3A78F1] "} cursor-pointer `}  onClick={()=>setFilter(3)} >TG + TVA</p>
           <p className={` ${Filter==4 && "text-[#3A78F1] border-b-[2px] border-b-solid border-b-[#3A78F1] "} cursor-pointer `}  onClick={()=>setFilter(4)} >Mobile</p>
        </div>
       <button className="border border-solid border-[#E91010] font-semibold flex items-center justify-center gap-3 text-[#E91010] rounded-[10px] w-[50px] h-[30px] ">
       <MdDeleteOutline className="text-xl " ></MdDeleteOutline>
       </button>
       </div>

      <div className="mt-3">
        <header  className="bg-[#F1F4F9] mx-[2px] " >
        <div className="flex p-2 px-12 items-center text-[#D9D9D9] justify-between w-[85%] ">
            <div className="flex items-center gap-2 ">
         <input type="checkbox" name="" id="" className="w-[18px] border-[#D9D9D9] h-[18px] " />
         <p>Code</p>
            </div>
         <p>Nom</p>
         <p>Type</p>
         <p> Nbr Groupes </p>
         <p> Code Wilaya </p>
         <p> Production </p>
        </div>

        </header>
        <main className="text-[#626D7C] mt-5 ">
        {currentPosts.map((card:any)=>{
            return(<div className="flex p-2 px-[50px] items-center justify-between mt-1 ">
            <div className="flex items-center gap-2 ">
         <input type="checkbox" name="" id="i" className="w-[18px] h-[18px] " onClick={()=> console.log(  document.getElementById('i')?.checkVisibility )} />
         <p>Code</p>
            </div>
         <p>Nom</p>
         <p>Type</p>
         <p> Nbr Groupes </p>
         <p> Code Wilaya </p>
         <p> Production </p>
        <div className="flex gap-4 items-center text-[#33333]  ">  
        <AiFillEye  className="text-[26px] cursor-pointer" ></AiFillEye>
        <MdDeleteOutline    className="text-[26px] cursor-pointer " > </MdDeleteOutline>
        </div>
        </div>)
        })}
        
        </main>
     
      </div>
       
      <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={Ligne.length} ></Pagination>

        </div>
      
        </div>
     );
}
 
export default Ctrlid;