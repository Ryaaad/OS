import { useEffect, useState } from "react";
import {MdKeyboardArrowLeft,MdDeleteOutline,MdOutlineAdd,MdModeEdit} from "react-icons/md";
import { useRouter } from 'next/router';
import Pagination from "../shared/Pagination";
import Link from "next/link";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import Delete from "../shared/Delete";
import Edit from "./Edit";
import Editgrp from "../Groupe/EditGrp";

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
   console.log(id);
   
   const [DeleteClick, setDeleteClick] = useState(false)
   const [EditClick, setEditClick] = useState(false)
   const [Type, setType] = useState<any>()
   const [Filter, setFilter] = useState(0)
    // const [inputValue, setInputValue] = useState<any>();
  const [SelectedCode, setCode] = useState<string | undefined>();
    const [Groupes, setGroupes] = useState<any>()
    const [centraleData, setcentraleData] = useState<any>([0])
  
    async function fetchData() {
      try {
        const response = await axios.get(`https://localhost:7002/api/v1/Centrale/${id}`);
        setcentraleData(response.data)
        setGroupes(response.data.groupes)
        console.log(response.data.groupes);
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(()=>{
     id && fetchData();  
    },[id])
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage= 4;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = Groupes && Groupes.slice(firstPostIndex, lastPostIndex);  

   const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState(
      Groupes &&  Groupes.map((l:any) => ({
          id:l.num,
        isChecked: false
      }))
    );

    useEffect(() => {
    if(Groupes)  {  const newCheckboxes = Groupes.map((lign: any) => ({
          id:lign.num,
          isChecked: false
        }));
      console.log(Groupes);
        setCheckboxes(newCheckboxes);}
      }, [Groupes]);
  
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
    { (props.userRole=="Admin" || props.userRole=="Manager") &&  <button className="bg-[#1A73E8] items-center text-white flex gap-2 p-3 py-2 rounded-[10px] hover:bg-[#176ad6] duration-700 "  
    onClick={()=>props.setClicked(true)} >
        <MdOutlineAdd  className="text-xl" ></MdOutlineAdd> Groupe
        </button> }
         </div>   

         <div className="mt-5 bg-white w-full h-[35vh] p-5">
          <div className="flex  w-full justify-end ">
      {  (props.userRole=="Admin" || props.userRole=="Manager") &&   <MdModeEdit className="text-[25px] cursor-pointer duration-700  hover:text-[#1a73e8] " onClick={()=>setEditClick(true)} />}
          </div>
   
    { centraleData &&  <div  className="mt-1 grid grid-cols-2 gap-5 items-center justify-center w-full " >
      <div className="flex gap-2 items-center">
        <h3 className="text-lg font-semibold">  Designation :</h3>
       <p> {centraleData.name} </p>
      </div>
      <div className="flex gap-2 items-center">
        <h3 className="text-lg font-semibold">  Nature :</h3>
       <p> {centraleData.nature} </p>
      </div>
      <div className="flex gap-2 items-center">
        <h3 className="text-lg font-semibold">  Wilaya :</h3>
       <p> Alger </p>
      </div>
      <div className="flex gap-2 items-center">
        <h3 className="text-lg font-semibold">  Durre Vie :</h3>
       <p> {centraleData.DurreVie} </p>
      </div>
      <div className="flex gap-2 items-center">
        <h3 className="text-lg font-semibold"> Durre Fonctionement :</h3>
       <p> {centraleData.DurreFonctionement} </p>
      </div>
      <div className="flex gap-2 items-center">
        <h3 className="text-lg font-semibold"> Puissance Nominale :</h3>
       <p> {centraleData.PuissanceNominale} </p>
      </div>
       </div>}
         </div>
          
        <div  className=" bg-white w-full h-[60vh] relative mt-4 " >
        <div className="flex justify-between items-center p-5 py-3 ">
     <h1 className="text-xl  font-semibold ">  {id} Groupes </h1>
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
        <div className="flex p-2 px-12 items-center text-[#aeacac] justify-between text-start ">
          <div className="flex items-center gap-2 ">
      { props.userRole=="Admin" &&  <input
            type="checkbox"
            name=""
            id=""
            className="w-[18px] border-[#D9D9D9] h-[18px]"
            checked={isCheckedAll}
            onChange={handleAllCheckboxChange}
          />}
            <p  className="w-[65px] " >Num</p>
          </div>
          <p  className=" w-[60px] " >Type</p>
          <p  className=" w-[120px]" >puissance TH</p>
          <p  className=" w-[100px] " >puissance S</p>
          <div className="flex gap-4 items-center text-[#33333]  invisible ">
              {  (props.userRole=="Admin" || props.userRole=="Manager") &&    <MdModeEdit className="text-[25px] cursor-pointer duration-700  hover:text-[#1a73e8] " />}
             { props.userRole=="Admin" &&    <MdDeleteOutline className="text-[25px] cursor-pointer duration-700  hover:text-[#c33c3c] "  />}
              </div>
        </div>
      </header>
      {Groupes &&  <main className="text-[#626D7C] mt-5">
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
                <p className="w-[65px] " > {data.name} </p>
              </div> 
              <p  className=" w-[60px] " >{ data.type}</p>
              <p className=" w-[120px]" >{data.puissanceTH}</p>
              <p  className=" w-[100px] " >{data.puissanceS}</p>
              <div className="flex gap-4 items-center text-[#33333]">
              {  (props.userRole=="Admin" || props.userRole=="Manager") &&    <MdModeEdit className="text-[25px] cursor-pointer duration-700  hover:text-[#1a73e8] " onClick={()=>setCode(data.num)} />}
             { props.userRole=="Admin" &&    <MdDeleteOutline className="text-[25px] cursor-pointer duration-700  hover:text-[#c33c3c] " 
                 onClick={()=>{handleDelete(data.num)}}
                />}
              </div>
            </div>
          );
        })}
      </main>}
      </div>
       
      <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={ Groupes && Groupes.length} ></Pagination>
        </div>
        <AnimatePresence>
        {DeleteClick &&  <motion.div   
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.5, }}>
         <Delete setClicked={setDeleteClick} checkboxes={checkboxes} Type={Type} Centrale={false} ></Delete>
         </motion.div> }
         </AnimatePresence>    
         <AnimatePresence>
        {EditClick &&  <motion.div   
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.5, }}>
         <Edit setClicked={setEditClick} centrale={centraleData} ></Edit>
         </motion.div> }
         </AnimatePresence>    
         <AnimatePresence>
        {SelectedCode &&  <motion.div   
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.5, }}>
         <Editgrp setClicked={setCode} grpId={SelectedCode} ></Editgrp>
         </motion.div> }
         </AnimatePresence>
         
        </div>
     );
}
 
export default Ctrlid;