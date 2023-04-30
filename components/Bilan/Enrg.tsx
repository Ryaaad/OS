import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp ,MdKeyboardArrowLeft,MdDeleteOutline,MdOutlineAdd} from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import {FiDownload} from "react-icons/fi";
import { SiMicrosoftexcel} from "react-icons/si";

import Pagination from "../Pagination";
  const Enrg = () => {
    const date = new Date();
    // Get the day (1-31)
    const day = date.getDate();
    // Get the month (0-11)
    const month = date.getMonth();
    // Get the day of the week (0-6)
    const dayOfWeek = date.getDay();
    const monthNames = ["Janvier", "Février", "Mars","Avril", "Mai", "Juin", "Juillet","Août", "Septembre", "Octobre","Novembre", "Décembre"];
    const dayNames = [ "Dimanche", "Lundi", "Mardi","Mercredi", "Jeudi", "Vendredi", "Samedi" ];
    const monthName = monthNames[month];
    const dayName = dayNames[dayOfWeek];


    const [inputValue, setInputValue] = useState<any>();
    const FirstLigne=[
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
        if(inputValue!=undefined)
   {  let filterCards=  FirstLigne.filter((card)=> card.name.includes(inputValue))
    setLigne(filterCards)}
      else setLigne(FirstLigne)
      console.log(Ligne);  
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
      

      const [DateFilter,setDateFilter]=useState()
      const handleChange = (event:any) => {
            setDateFilter(event.target.value)
           }


    return ( 
        <div  className="w-[81vw] p-7 py-4 bg-[#F0F8FF] max-h-[100vh]" >
            <div className="flex items-center justify-between w-full text-[#808080] "> 
            <Link href={'/'} >
            <div className="flex items-center gap-2 cursor-pointer ">       
            <MdKeyboardArrowLeft className="text-lg" ></MdKeyboardArrowLeft>
            Accueil
            </div>
            </Link>
         {dayName} , {monthName} {day}
            </div>
        <div className="flex items-center justify-between mt-10 ">
         <div>
        <h1 className="text-2xl  font-semibold ">  Bilans énergétique  </h1>
        <p   className="text-[#8E8F90] mt-2 " >  in this page you can add or update or delete a centrale </p>
        </div>   
        </div>   
       <div className="mt-5 py-4 bg-white rounded-[10px] border-[1.5px] border-solid border-[#ddd] relative h-[70vh] ">
       <div className="flex items-center justify-between pb-3 border-b-[1.5px] border-b-solid border-b-[#ddd] px-7 ">
         <div>
        <h1 className="text-lg font-semibold ">  Archives  </h1>
        <p   className="text-[#8E8F90] mt-1 " >  in this page you can add or update or delete a centrale </p>
        </div>   
        <div className="flex items-center space-x-4">
      <label htmlFor="date-input" className="font-medium text-gray-700">Choisissez une date :</label>
      <input id="date-input" type="month" className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 leading-tight focus:outline-none
       focus:bg-white focus:border-blue-500"  max="2023-04"  min="2010-01"   onChange={(e)=>handleChange(e)} />
    </div>
        </div>  
       
      <header className="bg-[#F1F4F9] text-sm border-b-[1.5px] border-b-solid border-b-[#ddd] ">
        <div className="flex p-2 px-12 items-center justify-between w-full ">
            <p>FileName</p>
          <p>FileSize</p>
          <p>Date Uploaded</p>
          <p>Nbr Groupes</p>
          <p>Code Wilaya</p>
        <MdDeleteOutline className={`text-[20px] text-red-500 cursor-pointer ${isCheckedAll ? "visible" : "invisible"} `}/>

        </div>
      </header>
  {  checkboxes.length>1 &&  <main className="text-[#626D7C] ">
        {currentPosts.map((card: any,index:number) => {
          return (
            <div className="flex p-2 px-5 items-center justify-between border-b-[1.5px] border-b-solid border-b-[#ddd] "  key={index} >
              
             
                <div className="flex gap-3 items-center">
                    <div  className=" rounded-full w-[35px] text-[green] h-[35px] text-xl grid justify-center items-center bg-[#16a31629] " >
                    <SiMicrosoftexcel></SiMicrosoftexcel>
                    </div>
                    <div>
                <p  className="font-semibold text-black text-[16px]  "> Report  </p>
                <p  className="text-[#aeacac] text-[13px] "> 200 KB  </p>

                    </div>
                </div>
             
              <p>200MO</p>
              <p>jan 4,2022</p>
              <p>Nbr Groupes</p>
              <p>Code Wilaya</p>
             
                <Link href={`/Centrales/${card.id}`}>
                  <FiDownload className="text-[24px] cursor-pointer text-[#333333163] duration-500 hover:text-[#1f1f1f]" />
                </Link>
            </div>
          );
        })}
      </main>}
      
      <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={Ligne.length} ></Pagination>
   
        </div>   
   

        </div>
       
     );
  }
   
  export default Enrg;