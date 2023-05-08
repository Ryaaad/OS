import {MdKeyboardArrowLeft} from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import {FiDownload} from "react-icons/fi";
import {AiFillFileWord} from "react-icons/ai"
import { BsFillFileEarmarkPdfFill} from "react-icons/bs";

import Pagination from "../Pagination";
import axios from "axios";
  
const Rj = () => {
    const date = new Date();
    // Get the day (1-31)
    const day = date.getDate();
    // Get the month (0-11)
    const month = date.getMonth();
    // Get the day of the week (0-6)
    const dayOfWeek = date.getDay();
    const monthNames = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];;
    const dayNames = [ "Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"  ];
    const monthName = monthNames[month];
    const dayName = dayNames[dayOfWeek];


    const [inputValue, setInputValue] = useState<any>();
    const [Ligne, setLigne] = useState<any>([0])
  //   async function fetchData() {
  //       try {
  //         const response = await axios.get('https://localhost:7002/api/v1/Centrale');
  //         setLigne(response.data)
          
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
   
      
  //   useEffect(() => {
  //       if(inputValue!=undefined)
  //  {  let filterCards=  Ligne.filter((card:any)=> card.name.includes(inputValue))
  //   setLigne(filterCards)}
  //     else  fetchData();
  //   }, [inputValue])



    async function fetchAllRaportDates(){
      try{
        const res = await fetch('https://localhost:7002/api/v1/Rapport');
        const data = await res.json();
        console.log(data);
        setLigne(data)
        console.log("Ligne:"+ Ligne);
      }catch(err){
        console.error("Error");
      }
    }
    useEffect(() => {
      fetchAllRaportDates()
  }, [])
   
  
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage= 4;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = Ligne.slice(firstPostIndex, lastPostIndex);  

    const [DateFilter,setDateFilter]=useState()
    const handleChange = (event:any) => {
          setDateFilter(event.target.value)
         }
        //  useEffect(() => {
        //     console.log("UseEffcet : ");
            
        //     console.log(DateFilter);
        //   }, [DateFilter]);

        const [isUploading, setIsUploading] = useState(false);
        const handleClick = async(DateString: string) => {
          try{
            
            setIsUploading(true);
          const response = await fetch(`https://localhost:7002/api/v1/Rapport/${DateString}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            }
          });
          console.log(response);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(new Blob([blob]));

          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'report.docx');
          document.body.appendChild(link);
          link.click();
          link.remove();
          console.log("Hii")
          setIsUploading(false);
          }catch(err){
            console.error(err);
          setIsUploading(false);
          }
          
        };
    return ( 
        <div  className="w-[81vw] p-7 py-4 bg-[#F0F8FF] max-h-[100vh] overflow-y-scroll" >
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
        <h1 className="text-2xl  font-semibold ">  Rapport journalier d’exploitation  </h1>
        <p   className="text-[#8E8F90] mt-2 " >  in this page you can add or delete a Rapport journalier</p>
        </div>   
        </div>   
        <div  className="mt-5 " >
       <div className="rounded-[10px] border border-dashed border-black w-full h-[22vh] "></div>
       <div className="rounded-[10px] border border-solid mt-3 border-black w-full h-[12vh] "></div>

      </div>

       <div className="mt-5 py-3 bg-white rounded-[10px] border-[1.5px] border-solid border-[#ddd] relative h-[70vh] ">
       <div className="flex items-center justify-between pb-2 border-b-[1.5px] border-b-solid border-b-[#ddd] px-5 ">
         <div>
        <h1 className="text-lg font-semibold ">  Archives  </h1>
        <p   className="text-[#8E8F90] mt-1 " >    </p>
        </div>   
        <div className="flex items-center space-x-4">
      <label htmlFor="date-input" className="font-medium text-gray-700">Choisissez une date :</label>
      <input id="date-input" type="date" className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 leading-tight focus:outline-none
       focus:bg-white focus:border-blue-500"  min="2022-01-01" max="2022-12-31"
       onChange={(e)=>handleChange(e)}
       />
    </div>
        </div>  
       
      <header className="bg-[#F1F4F9] text-sm border-b-[1.5px] border-b-solid border-b-[#ddd] ">
        <div className="flex p-2 px-[65px] items-center justify-between w-[85%] ">
          <p>FileName</p>
          <p>FileSize</p>
          <p>Date Uploaded</p>
        </div>
      </header>
  <main className="text-[#626D7C] ">
        {currentPosts.map((card: any,index:number) => {
          const dateString = card;
          const date = new Date(dateString);

          

          const yearRapport = date.getFullYear();
          const monthRapport = date.toLocaleString('default', { month: 'long' });
          const monthRapportShort = date.toLocaleString('default', { month: 'short' });
          const dayRapport = date.getDate();
          
          const frenchDateString = dayRapport+" "+monthRapport+" "+yearRapport
          return (
            <div className="flex p-2 px-5 items-center justify-between border-b-[1.5px] border-b-solid border-b-[#ddd] "  key={index} >
              
            <div className="flex gap-3 items-center">
                    <div  className=" rounded-full w-[35px] text-[#2162c0] h-[35px] text-xl grid justify-center items-center bg-[#8ec8f1] " >
                    <AiFillFileWord></AiFillFileWord>
                    </div>
                    <div>
                <p  className="font-semibold text-black text-[16px]  "> Report  </p>
                <p  className="text-[#aeacac] text-[13px] "> 200 KB  </p>
                </div>
              </div> 
              <p>200MO</p>
              <p>{monthRapport} {dayRapport},{yearRapport}</p>
              <button disabled={isUploading}  onClick={()=>{handleClick(frenchDateString)}}><FiDownload className="text-[24px] cursor-pointer text-[#333333163] duration-500 hover:text-[#1f1f1f]" /></button>
            </div>
          );
        })}
      </main>
      
      <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={Ligne.length} ></Pagination>
   
        </div>   
   

        </div>
       
     );
  }
   
  export default Rj;