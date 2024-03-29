import Link from "next/link";
import { useEffect, useState } from "react";
import {FiDownload} from "react-icons/fi";
import { SiMicrosoftexcel} from "react-icons/si";
import Pagination from "../shared/Pagination";

interface props{
  dayName:string,
  monthName:string,
  day:number ,
}
  const Enrg:React.FC<props> = (props) => {

 
    const [Bilans, setBilans] = useState<any>()
    async function fetchAllRaportDates(){
      try{
        const res = await fetch('https://localhost:7002/api/v1/Production');
        const data = await res.json();
        console.log(data);
        setBilans(data)
        console.log("bilans:"+ Bilans);
      }catch(err){
        console.error("Error");
      }
    }
    useEffect(() => {
      fetchAllRaportDates();  
    }, [])
   
  
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage= 4;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts =Bilans && Bilans.slice(firstPostIndex, lastPostIndex);      

      const [DateFilter,setDateFilter]=useState()
      const handleChange = (event:any) => {
            setDateFilter(event.target.value)
           }


           const handleClick = async (DateString: string) => {
            console.log(DateString);
          
            try {
              const response = await fetch(`https://localhost:7002/api/v1/Production/${DateString}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/pdf'
                }
              });
              console.log(response);
              const blob = await response.blob();
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'report.pdf'); // Update the filename to 'report.pdf'
              document.body.appendChild(link);
              link.click();
              link.remove();
            } catch (err) {
              console.error(err);
            }
          };
          


    return ( 
        <div  className="w-[81vw] p-7 py-4 bg-[#F0F8FF] max-h-[100vh]" >
            <div className="flex items-center justify-end w-full text-[#808080] "> 
           {props.dayName} , {props.monthName} {props.day}
            </div>
        <div className="flex items-center justify-between mt-10 ">
         <div>
        <h1 className="text-2xl  font-semibold ">  Bilans Energétique Mensuel de la Production  </h1>
        <p   className="text-[#8E8F90] mt-2 " > Sur cette page, vous pouvez consulter les archives du Bilans Energétique Mensuel de la Production.</p>
        </div>   
        </div>   
       <div className="mt-5 py-4 bg-white rounded-[10px] border-[1.5px] border-solid border-[#ddd] relative h-[70vh] ">
       <div className="flex items-center justify-between pb-3 border-b-[1.5px] border-b-solid border-b-[#ddd] px-7 ">
         <div>
        <h1 className="text-lg font-semibold ">  Archives  </h1>
        </div>   
        <div className="flex items-center space-x-4">
      <label htmlFor="date-input" className="font-medium text-gray-700">Choisissez une date :</label>
      <input id="date-input" type="month" className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 leading-tight focus:outline-none
       focus:bg-white focus:border-blue-500"  max="2023-04"  min="2010-01"   onChange={(e)=>handleChange(e)} />
    </div>
        </div>  
       
      <header className="bg-[#F1F4F9] text-sm border-b-[1.5px] border-b-solid border-b-[#ddd] ">
        <div className="flex p-2 px-10 items-center justify-between w-full  text-start ">
            <p  className="w-[45%] " >File Name</p>
          <button><FiDownload className="text-[24px] cursor-pointer text-[#333333163] duration-500 hover:text-[#1f1f1f]  invisible " /></button>

        </div>
      </header>
  { Bilans &&  <main className="text-[#626D7C] ">
        {currentPosts.map((card: any,index:number) => {
          const months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

          const frenchDateString=`${months[card.month-1]} ${card.year}`
          console.log(frenchDateString);
          
          return (
            <div className="flex p-2 px-5 items-center justify-between border-b-[1.5px] border-b-solid border-b-[#ddd] "  key={index} >
              
             
                <div className="flex gap-3 items-center w-[45%] ">
                    <div  className=" rounded-full w-[35px] text-[green] h-[35px] text-xl grid justify-center items-center bg-[#16a31629] " >
                    <SiMicrosoftexcel></SiMicrosoftexcel>
                    </div>
                    <div >
                <p  className="font-semibold text-black text-[16px]  "> Production  </p>
                <p  className="text-[#aeacac] text-[13px]   "> 346 KB  </p>

                    </div>
                </div>
             
             <button onClick={()=>{handleClick(frenchDateString)}}><FiDownload className="text-[24px] cursor-pointer text-[#333333163] duration-500 hover:text-[#1f1f1f]" /></button>

            </div>
          );
        })}
      </main>}
      
      <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={Bilans && Bilans.length} ></Pagination>
   
        </div>   
   

        </div>
       
     );
  }
   
  export default Enrg;