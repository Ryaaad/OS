import axios from 'axios';
import {motion,AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { FiX } from "react-icons/fi";
interface props{
    setClicked:(value:boolean) => void,
    isCheckedAll:boolean,
    checkboxes:any
}


const Delete:React.FC<props> = (props) => {
   const [Added,setAdded]=useState(false);
   const [Cmpt,setCmpt]=useState(0);

   const handleDelete = (id:any) => {
    axios.delete(`https://localhost:7002/api/v1/Centrale/${id}`)
    .then(res => {
        console.log('Successful');
        // fetchData()
      }).catch(err=> console.log(err)  )
    }
const handledeleteAll=()=>{
if(props.isCheckedAll)
{ axios.delete(`https://localhost:7002/api/v1/Centrale`)
.then(response => {
console.log('All Centrales deleted successfully');
// fetchData()
})
.catch(error => {
console.error('Error deleting all users:', error);
});}
else {
props.checkboxes.map((checkbox:any)=>{
 if(checkbox.isChecked) { handleDelete(checkbox.id); setCmpt(prev=>prev=prev+1) }
})
}
}
   
async function SaveClicked() {
      await handledeleteAll() 
     setAdded(true) 
     setTimeout(() => {
      props.setClicked(false) 
     }, 400);
 }

    return ( 
    <motion.div  className=" w-[650px] ml-[100px] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] h-[180px] shadow-2xl
    rounded-[10px] mb-10 bg-white p-7 text-[#b0b1b3] z-10 " 
    initial={{ y: '-200%',x: '50%',opacity: 0 }}
    animate={{ y: '-55%',x: '50%', opacity: 1 }} 
    exit={{ y: '-200%',x: '50%',opacity: 0 , }}
    transition={{ type: "spring", stiffness: 60,delay:.5 }}
     >
    <div  className='flex justify-between' >
    <h1  className="text-xl text-black font-semibold ">Confirmer L'action </h1>  
    <div className='rounded-full bg-[#e91010] hover:bg-[red] duration-[.5s] text-white text-xl w-[30px] h-[30px] grid justify-center cursor-pointer items-center' 
    onClick={()=>{props.setClicked(false)}}> 
    <FiX></FiX>
    </div>
    </div>
     
     <p  className="text-lg my-4 " >  Voulez-vous vraiment supprimer cet élément ? </p>
   

        <div className="flex w-full justify-end px-3 gap-4">
            <button  className="text-black p-2 px-7 rounded-[5px] border border-solid border-[#a6a7a8] hover:bg-[#f7f2f2]
             hover:border-[#818181] duration-[.5s] " 
              onClick={()=>
              {props.setClicked(false)}
            }
              >Annuler</button>
            <button type='submit' className="bg-[#666cde] text-white p-2 duration-[.5s] px-7 rounded-[5px] hover:bg-[#6167d3] " 
            onClick={()=>{ SaveClicked() }} 
              >Confimer</button>
        </div>
        <AnimatePresence>
        { Added &&
  <motion.div className="absolute bottom-[-13%] right-[50%] translate-x-[50%] bg-white rounded-[5px] gap-3 border-l-[3px]
   border-l-solid border-l-[#666cde] w-[180px] items-center justify-center flex h-[45px] text-black "
   initial={{ opacity: 0, y:40 }}
        animate={{ opacity: 1,y:0 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.3, }}
   >
    <div className="rounded-full bg-[#666cde] text-white h-[20px] w-[20px] grid justify-center items-center  ">
    <AiOutlineCheck></AiOutlineCheck> 
    </div>
    Centrale  Deleted
  </motion.div>
        }
        </AnimatePresence>
    </motion.div> );
}
 
export default Delete;