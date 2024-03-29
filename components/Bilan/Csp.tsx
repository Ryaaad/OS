import { useEffect, useState } from "react";
import {FiDownload} from "react-icons/fi";
import {AiFillFileWord} from "react-icons/ai"
import Pagination from "../shared/Pagination";
import DropZone from "../shared/DropZone";
import ContentHeader from "../shared/ContentHeader";


interface props{
  dayName:string,
  monthName:string,
  day:number ,
  userRole:string
}

const Csp:React.FC<props> = (props) => {
    const [Repoorts, setRepoorts] = useState<any>()

    async function fetchAllRaportDates(){
      try{
        const res = await fetch('https://localhost:7002/api/v1/Csp');
        const data = await res.json();
        console.log(data);
        setRepoorts(data)
        console.log("Repoorts:"+ Repoorts);
      }catch(err){
        console.error("Error");
      }
    }
    async function fetchRaportDates(){
      try{
        const res = await fetch(`https://localhost:7002/api/v1/Rapport/${DateFilter}`);
        const data = await res.json();
        console.log(data);
        setRepoorts(data)
        console.log("Repoorts:"+ Repoorts);
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
    const currentPosts =Repoorts && Repoorts.slice(firstPostIndex, lastPostIndex);  

    const [DateFilter,setDateFilter]=useState<any>()
    const [DateFile,setDateFile]=useState<any>()
    const handleChange = (event:any) => {
      const dateString = event.target.value;
      const date = new Date(dateString);
      const yearRapport = date.getFullYear();
      const monthRapport = date.toLocaleString('fr-FR', { month: 'long' });
      const dayRapport = date.getDate();
      const frenchDateString = dayRapport+" "+monthRapport+" "+yearRapport
      setDateFilter(frenchDateString)
    }
  
    const handleSelectedDate = (event:any) => {
      const dateString = event.target.value;
      const date = new Date(dateString);
      const yearRapport = date.getFullYear();
      const monthRapport = date.toLocaleString('fr-FR', { month: 'long' });
      const dayRapport = date.getDate();
      const frenchDateString = dayRapport+" "+monthRapport+" "+yearRapport
       setDateFile(frenchDateString) 
         }     
        const [isUploading, setIsUploading] = useState(false);
        const handleClick = async(DateString: string) => {
          try{   
           setIsUploading(true);
          const response = await fetch(`https://localhost:7002/api/v1/Csp/${DateString}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/pdf'
            }
          });
          console.log(response);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Csp.pdf');
          document.body.appendChild(link);
          link.click();
          link.remove();
          setIsUploading(false);
          }catch(err){
            console.error(err);
          setIsUploading(false);
          }
          
        };
    return ( 
        <div  className={`w-[81vw] p-7 py-4 bg-[#F0F8FF] max-h-[100vh] ${ (props.userRole=="Admin" || props.userRole=="Manager") && "overflow-y-scroll" }   `} >
            <div className="flex items-center justify-end w-full text-[#808080] "> 
         {props.dayName} , {props.monthName} {props.day}
            </div>
        <div className="flex items-center justify-between mt-10 ">
        <div>
     <ContentHeader title="Consommation spécifique par producteur" 
     subtitle={ (props.userRole=="Admin" || props.userRole=="Manager") ? "Sur cette page, vous pouvez créer ou consulter un bilan de la Consommation Spécifique par Producteur." : "Sur cette page, vous pouvez consulter les archives du Consommation Spécifique par Producteur." }/>
        </div>   
        </div>   
     { (props.userRole=="Admin" || props.userRole=="Manager") &&   
     <div  className="mt-5 bg-white p-5 px-6 " >
      <div className="flex items-center justify-between ">
      <h1 className="text-lg  font-semibold "> Qhs </h1>
      <div className="flex items-center space-x-4">
      <label htmlFor="date-input" className="font-medium text-gray-700">Date Fichier :</label>
      <input id="date-input" type="date" className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 leading-tight focus:outline-none
       focus:bg-white focus:border-blue-500"  
       onChange={(e)=>handleSelectedDate(e)}
       />
    </div>
      </div>
      <div className="grid grid-cols-[repeat(5,16%)] items-center gap-y-8 justify-between mt-5">
       <div className="h-[13vh] ">
       <DropZone accept="" Name="Qh Adrar" date={DateFile} endpoint="https://localhost:7002/api/v1/Qh/QhAdrar" />
       </div>
       <div className="h-[13vh] ">
       <DropZone accept="" Name="Qh Alger" date={DateFile} endpoint="https://localhost:7002/api/v1/Qh/QhAlger" />
       </div>
       <div className="h-[13vh] ">
       <DropZone accept="" Name="Qh Anaba" date={DateFile} endpoint="https://localhost:7002/api/v1/Qh/QhAnnaba" />
       </div>
       <div className="h-[13vh] ">
       <DropZone accept="" Name="Qh Saud" date={DateFile} endpoint="https://localhost:7002/api/v1/Qh/QhSud" />
       </div>
       <div className="h-[13vh] ">
       <DropZone accept="" Name="Qh Setif" date={DateFile} endpoint="https://localhost:7002/api/v1/Qh/QhSetif" />
       </div>
       <div className="h-[13vh] ">
       <DropZone accept="" Name="Qh Oran" date={DateFile} endpoint="https://localhost:7002/api/v1/Qh/QhOran" />
       </div>
      </div>
   
      <h1 className="text-lg mt-5 font-semibold "> Consommation Gaz </h1>
       <div className="h-[15vh] mt-3 ">
       <DropZone accept="" Name="Consommation Gaz" date={DateFile} endpoint="https://localhost:7002/api/v1/ReadingFiles/ConsomationGaz" />
       </div>
     </div>}

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
        <div className="flex p-2 px-10 items-center justify-between text-start ">
          <p  className="w-[45%] ">File Name</p>
      
          <p className="w-[25%]">Date Uploaded</p>
          <button><FiDownload className="text-[24px] cursor-pointer text-[#333333163] duration-500 hover:text-[#1f1f1f]  invisible " /></button>
        </div>
      </header>
  {  Repoorts && <main className="text-[#626D7C] ">
        {currentPosts.map((card: any,index:number) => {
          const dateString = card;
          const date = new Date(dateString);
          const yearRapport = date.getFullYear();
          const monthRapport = date.toLocaleString('fr-FR', { month: 'long' });
          const monthRapportShort = date.toLocaleString('fr-FR', { month: 'short' });
          const dayRapport = date.getDate();
          const frenchDateString = dayRapport+" "+monthRapport+" "+yearRapport
          return (
            <div className="flex p-2 px-5 items-center justify-between border-b-[1.5px] border-b-solid border-b-[#ddd] "  key={index} >
              
            <div className="flex gap-3 items-center w-[45%] ">
                    <div  className=" rounded-full w-[35px] text-[#2162c0] h-[35px] text-xl grid justify-center items-center bg-[#8ec8f1] " >
                    <AiFillFileWord></AiFillFileWord>
                    </div>
                    <div>
                <p  className="font-semibold text-black text-[16px]  "> CSP  </p>
                <p  className="text-[#aeacac] text-[13px] "> 3KB  </p>
                </div>
              </div> 
              <p className="w-[25%]">{monthRapportShort} {dayRapport},{yearRapport}</p>
              <button disabled={isUploading}  onClick={()=>{handleClick(frenchDateString)}}><FiDownload className="text-[24px] cursor-pointer text-[#333333163] duration-500 hover:text-[#1f1f1f]" /></button>
            </div>
          );
        })}
    </main>}
      
      <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={Repoorts && Repoorts.length} ></Pagination>
   
        </div>   
        </div>
       
     );
  }
   
  export default Csp;