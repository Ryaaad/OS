import axios from 'axios';
import {motion,AnimatePresence } from 'framer-motion'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { FiX } from "react-icons/fi";
interface props{
    setClicked: Dispatch<SetStateAction<string | undefined>>,
    grpId:string
}

const Editgrp:React.FC<props> = (props) => {
   const [Added,setAdded]=useState(false);
async function fetchGroupe() {
    try {
      const response = await axios.get(`https://localhost:7002/api/v1/Group/${props.grpId}`);
      setdata(response.data)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
   useEffect(() => {
    fetchGroupe()
   }, [props.grpId])
   
    const [data, setdata] = useState<any>()
       const handleChange = (event:any,attrb: number) => {
        switch (attrb) {
           case 2:
             data.name  = event.target.value
              break;
           case 3:
            data.type  = event.target.value
            break;
           case 4:
            data.puissanceTH= parseInt(event.target.value)
          case 5:
             data.puissanceS= parseInt(event.target.value,10)
            break;
           case 6:
              data.centraleId= parseInt(event.target.value,10)
             break;
        }
        console.log(data);
        }
    
   const handleSubmit = () => {
    //   console.log(data);
    //   axios.put(`https://localhost:7002/api/v1/Centrale/${props.centrale.code}`, data)
    //   .then(response => {
    //     console.log('Value updated successfully:', response.data);
    //     setAdded(true) 
    //     window.location.reload(); // a change 
    //   })
    //   .catch(error => {
    //     console.error('Error updating value:', error);
    //   });
      }
   
async function SaveClicked(e:any) {
   e.preventDefault()
      await handleSubmit() 
     setTimeout(() => {
      props.setClicked(undefined) 
     }, 400);
 }

    return ( 
    <motion.div  className=" w-[750px] ml-[100px] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] h-[320px] shadow-2xl
    rounded-[10px] mb-10 bg-white p-7 text-[#b0b1b3] z-10 " 
    initial={{ y: '-200%',x: '50%',opacity: 0 }}
    animate={{ y: '-55%',x: '50%', opacity: 1 }} 
    exit={{ y: '-200%',x: '50%',opacity: 0 , }}
    transition={{ type: "spring", stiffness: 60,delay:.5 }}
     >
    <div  className='flex justify-between' >
   { data &&   <h1  className="text-xl text-black font-semibold ">Modifier {data.name} </h1>  }
    <div className='rounded-full bg-[#e91010] hover:bg-[red] duration-[.5s] text-white text-xl w-[30px] h-[30px] grid justify-center cursor-pointer items-center' 
    onClick={()=>{ props.setClicked(undefined)}}> 
    <FiX></FiX></div>
    </div>
   {data && <form onSubmit={(e)=>SaveClicked(e) } >
       <div className=" grid justify-items-center items-center grid-cols-3 w-full my-6 gap-1 gap-y-3 ">
         {/* <div className="">
            <h1 className="mb-2 text-lg "> Nom </h1>
            <input type="text"  defaultValue={data.name} required onChange={(e)=>handleChange(e,2)} className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div> */}
         <div className="">
            <h1 className="mb-2 text-lg ">Type *  </h1>
            <input type="text"  defaultValue={data.type} required onChange={(e)=>handleChange(e,3)}   className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> puissanceTH </h1>
            <input type="text"  defaultValue={data.puissanceTH} required onChange={(e)=>handleChange(e,4)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">puissanceS</h1>
            <input type="text"  defaultValue={data.puissanceS} required onChange={(e)=>handleChange(e,5)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">puissanceS Nominale</h1>
            <input type="text"  defaultValue={data.durreFonctionement} required  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
    
        </div>
        <div className="flex w-full justify-end px-3 gap-4">
            <button  className="text-black p-2 px-7 rounded-[5px] border border-solid border-[#a6a7a8] hover:bg-[#f7f2f2]
             hover:border-[#818181] duration-[.5s] " 
              onClick={()=> { setdata(undefined);  props.setClicked(undefined)  }    }
              >Annuler </button>
            <button type='submit' className="bg-[#666cde] text-white p-2 duration-[.5s] px-7 rounded-[5px] hover:bg-[#6167d3] " > Modifier </button>
        </div>
    </form>}
        <AnimatePresence>
        { Added &&
  <motion.div className="absolute bottom-[-14%] font-semibold right-[38%] translate-x-[50%] bg-white rounded-[5px] gap-3 border-l-[3px]
   border-l-solid border-l-[#666cde] w-[182px] items-center justify-center flex h-[45px] text-black "
   initial={{ opacity: 0, y:40 }}
        animate={{ opacity: 1,y:0 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.3, }}
   >
    <div className="rounded-full bg-[#666cde] text-white h-[20px] w-[20px] grid justify-center items-center  ">
    <AiOutlineCheck></AiOutlineCheck> 
    </div>
    Groupe  Modifier
  </motion.div>
        }
        </AnimatePresence>
    </motion.div> );
}
 
export default Editgrp;
