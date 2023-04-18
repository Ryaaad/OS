import { useEffect, useState } from "react";
import { AiOutlineSearch , AiFillEye} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp ,MdKeyboardArrowLeft,MdDeleteOutline,MdOutlineAdd} from "react-icons/md";
import Pagination from "./Pagination";
const Ctrl = () => {
   
    const [firstFilter, setfirstFilter] = useState(true)
    const [secondFilter, setsecondFilter] = useState(true)

    const [FilterClicked, setFilterClicked] = useState(false)
    const [Add, setAdd] = useState(false)
    const [inputValue, setInputValue] = useState<any>();
    const FirstCards=[
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
    const [Cards, setCards] = useState<any>([0])
  
    useEffect(() => {
    setCards(FirstCards)
    }, [inputValue])
    const [currentPage, setCurrentPage] = useState(1);
   const postsPerPage= 4;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = Cards.slice(firstPostIndex, lastPostIndex);  
    const date = new Date();

// Get the day (1-31)
const day = date.getDate();

// Get the month (0-11)
const month = date.getMonth();

// Get the day of the week (0-6)
const dayOfWeek = date.getDay();
const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  
  const dayNames = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday",
    "Saturday"
  ];
  
  const monthName = monthNames[month];
  const dayName = dayNames[dayOfWeek];
  
    return ( 
        <div className=" w-[81vw] p-7 py-4 bg-[#F0F8FF] ">
         <div className="flex items-center justify-between w-full text-[#808080] "> 
            <div className="flex items-center gap-3 ">
            <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
                Regions
            </div>
         {dayName} , {monthName} {day}
            </div>
          <div className="flex items-center justify-between mt-10 ">
         <div>
        <h1 className="text-2xl  font-semibold ">  Centrales </h1>
        <p   className="text-[#8E8F90] mt-2 " >  in this page you can add or update or delete a centrale </p>
        </div>   
        <button className="bg-[#1A73E8] items-center text-white flex gap-2 p-3 py-2 rounded-[10px] ">
        <MdOutlineAdd  className="text-xl" ></MdOutlineAdd>  Add Centrale
        </button>
         </div>   
          
        <div  className=" bg-white w-full h-[65vh] relative mt-9 " >

       <div className="flex justify-between items-center p-5 py-3 ">
        <div className="flex gap-3 items-center  ">
            <div  className="relative" >
            <input type="text" placeholder="Search" className="w-[200px] h-[32px] px-7 border border-solid border-[#E4EAF0]   " />
            <AiOutlineSearch  className="absolute top-[25%] left-[4%] text-[#E4EAF0] " ></AiOutlineSearch>
            </div>
            <div  className="relative w-[85px] h-[32px] cursor-pointer flex justify-between items-center p-2 border border-solid border-[#E4EAF0] text-[#6E7886] "
            onClick={()=>setfirstFilter(!firstFilter)}
            >
            Filter
          {  firstFilter ? <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> : <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>  }
            </div>
            <div  className=" relative w-[85px] h-[32px] cursor-pointer flex justify-between items-center p-2 border border-solid border-[#E4EAF0] text-[#6E7886]"
              onClick={()=>setsecondFilter(!secondFilter)}
            >
            Filter
            {  secondFilter ? <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> : <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>  }


            </div>
            <p className="text-[rgba(191,195,201,1)] " > Displaying {Cards.length} results </p>
        </div>
       <button className="border border-solid border-[#E91010] font-semibold flex items-center justify-center gap-3 text-[#E91010] rounded-[10px] w-[124px] h-[40px] ">
       <MdDeleteOutline className="text-xl " ></MdDeleteOutline>
        Remove
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
         <input type="checkbox" name="" id="" className="w-[18px] h-[18px] " />
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
       
      <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={Cards.length} ></Pagination>

        </div>
      
        </div>
     );
}
 
export default Ctrl;