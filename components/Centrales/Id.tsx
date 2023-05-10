import { useEffect, useState } from "react";
import {MdKeyboardArrowLeft,MdDeleteOutline,MdOutlineAdd,MdModeEdit} from "react-icons/md";
import { useRouter } from 'next/router';
import Pagination from "../Pagination";
import Link from "next/link";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import Delete from "../Delete";
import Edit from "./Edit";

interface props{
    setClicked:(value:boolean) => void,
    dayName:string,
    monthName:string,
    day:number ,
    userRole:string
}

const Ctrlid:React.FC<props> = (props) => {
   
   const router = useRouter();
   const { id } = router.query;
   const [DeleteClick, setDeleteClick] = useState(false)
   const [EditClick, setEditClick] = useState(false)
   const [Type, setType] = useState<any>()
    const [Filter, setFilter] = useState(0)
    const [inputValue, setInputValue] = useState<any>();
    const [Ligne, setLigne] = useState<any>()
    const [FirstLigne, setFirstLigne] = useState<any>([0])
  
    async function fetchData() {
      try {
        const response = await axios.get(`https://localhost:7002/api/v1/Centrale/${id}`);
        setFirstLigne(response.data)
        setLigne(response.data.groupes)
        console.log(response.data.groupes);
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(()=>{
      fetchData();  
    },[])

    // useEffect(() => {
    // setLigne(FirstLigne)
    // }, [inputValue])

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage= 4;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = Ligne && Ligne.slice(firstPostIndex, lastPostIndex);  

   const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState(
      Ligne &&  Ligne.map((l:any) => ({
          id:l.num,
        isChecked: false
      }))
    );

    useEffect(() => {
    if(Ligne)  {  const newCheckboxes = Ligne.map((lign: any) => ({
          id:lign.num,
          isChecked: false
        }));
      console.log(Ligne);
        setCheckboxes(newCheckboxes);}
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
  
      const handleDelete = (id:any) => {
        setType(id)
        setDeleteClick(true)
           }
    return ( 
        <div className=" w-[81vw] p-7 py-4 bg-[#F0F8FF] max-h-[100vh] overflow-y-scroll ">
         <div className="flex items-center justify-between w-full text-[#808080] "> 
            <Link className="flex items-center gap-2 cursor-pointer " href={'/Centrales'}>
            <MdKeyboardArrowLeft className="text-lg" ></MdKeyboardArrowLeft>
             Centrales
            </Link>
            {props.dayName} , {props.monthName} {props.day}
            </div>
          <div className="flex items-center justify-between mt-10 ">
        <h1 className="text-2xl  font-semibold ">  {id} </h1>
    { (props.userRole=="Admin" || props.userRole=="Manager") &&  <button className="bg-[#1A73E8] items-center text-white flex gap-2 p-3 py-2 rounded-[10px] hover:bg-[#176ad6] duration-700 "  onClick={()=>props.setClicked(true)} >
        <MdOutlineAdd  className="text-xl" ></MdOutlineAdd> Groupe
        </button> }
         </div>   

         <div className="mt-5 bg-white w-full h-[35vh] p-5 grid justify-end  ">
      {  (props.userRole=="Admin" || props.userRole=="Manager") &&   <MdModeEdit className="text-[25px] cursor-pointer duration-700  hover:text-[#1a73e8] " onClick={()=>setEditClick(true)} />}
         </div>
          
        <div  className=" bg-white w-full h-[60vh] relative mt-4 " >
        <div className="flex justify-between items-center p-5 py-3 ">
        <div className="flex gap-3 items-center justify-between border-b border-solid-b p-2 pb-0 border-b-[#D9D9D9] w-[60%] mx-auto text-lg text-[#808080] font-semibold ">
           <p className={` ${Filter==0 && "text-[#3A78F1] border-b-[2px] border-b-solid border-b-[#3A78F1] "} cursor-pointer `}  onClick={()=>setFilter(0)} >Tout</p>
           <p className={` ${Filter==1 && "text-[#3A78F1] border-b-[2px] border-b-solid border-b-[#3A78F1] "} cursor-pointer `}  onClick={()=>setFilter(1)} >TG</p>
           <p className={` ${Filter==2 && "text-[#3A78F1] border-b-[2px] border-b-solid border-b-[#3A78F1] "} cursor-pointer `}  onClick={()=>setFilter(2)} >TVA</p>
           <p className={` ${Filter==3 && "text-[#3A78F1] border-b-[2px] border-b-solid border-b-[#3A78F1] "} cursor-pointer `}  onClick={()=>setFilter(3)} >TG + TVA</p>
           <p className={` ${Filter==4 && "text-[#3A78F1] border-b-[2px] border-b-solid border-b-[#3A78F1] "} cursor-pointer `}  onClick={()=>setFilter(4)} >Mobile</p>
        </div>
     { props.userRole=="Admin" &&   <button className="border border-solid border-[#E91010] font-semibold flex items-center justify-center gap-3 text-[#E91010] rounded-[10px] w-[50px] h-[30px] "
         onClick={()=>{
          if (checkboxes.some((obj:any) => obj.hasOwnProperty('isChecked') && obj.isChecked === true)) {
            handleDelete(0)
          }
        }}>
       <MdDeleteOutline className="text-xl " ></MdDeleteOutline>
       </button>}
       </div>

       <div className="mt-3">
      <header className="bg-[#F1F4F9] mx-[2px] ">
        <div className="flex p-2 px-12 items-center text-[#aeacac] justify-between w-[85%] ">
          <div className="flex items-center gap-2 ">
      { props.userRole=="Admin" &&       <input
            type="checkbox"
            name=""
            id=""
            className="w-[18px] border-[#D9D9D9] h-[18px]"
            checked={isCheckedAll}
            onChange={handleAllCheckboxChange}
          />}
            <p>Code</p>
          </div>
          <p>Nom</p>
          <p>Type</p>
          <p>puissance TH</p>
          <p>puissance S</p>
        </div>
      </header>
      {Ligne &&  <main className="text-[#626D7C] mt-5">
        {currentPosts.map((data: any,index:number) => {
          return (
            <div className="flex p-2 px-[50px] items-center justify-between mt-1 "  key={index} >
              <div className="flex items-center gap-2 ">
           {  (props.userRole=="Admin" &&  checkboxes )  &&  <input
                  type="checkbox"
                  className="w-[18px] h-[18px]"
                  checked={checkboxes[index+4*(currentPage-1)].isChecked}
                  onChange={()=> handleCheckboxChange(index+4*(currentPage-1)) }
                />}
                <p className="  " > {data.num} </p>
              </div> 
              <p className=""  >  {data.name} </p>
              <p className="" >{ data.type}</p>
              <p className=""  >{data.puissanceTH}</p>
              <p className=" " >{data.puissanceS}</p>
              <div className="flex gap-4 items-center text-[#33333]">
              {  (props.userRole=="Admin" || props.userRole=="Manager") &&    <MdModeEdit className="text-[25px] cursor-pointer duration-700  hover:text-[#1a73e8] " />}
             { props.userRole=="Admin" &&    <MdDeleteOutline className="text-[25px] cursor-pointer duration-700  hover:text-[#c33c3c] " 
                 onClick={()=>{handleDelete(data.num)}}
                />}
              </div>
            </div>
          );
        })}
      </main>}
      </div>
       
      <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={ Ligne && Ligne.length} ></Pagination>
        </div>
        <AnimatePresence>
        {DeleteClick &&  <motion.div   
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.5, }}>
         <Delete setClicked={setDeleteClick} checkboxes={checkboxes}  isCheckedAll={false} Type={Type} Centrale={false} ></Delete>
         </motion.div> }
         </AnimatePresence>    
         <AnimatePresence>
        {EditClick &&  <motion.div   
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.5, }}>
         <Edit setClicked={setEditClick} centrale={FirstLigne} ></Edit>
         </motion.div> }
         </AnimatePresence>    
        
        </div>
     );
}
 
export default Ctrlid;