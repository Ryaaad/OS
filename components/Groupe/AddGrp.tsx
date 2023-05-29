import {motion,AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { useRouter } from 'next/router';
import axios from 'axios';
interface props{
    setClicked:(value:boolean) => void
}


const AddGrp:React.FC<props> = (props) => {
   const router = useRouter();
   const { id } = router.query;
   const [Added,setAdded]=useState(false);
   const [Next,setNext]=useState(0);
   let Type={
          name: "",
          type: "",
          puissanceTH: 0,
          puissanceS: 0,
          centraleId: id
}
  const [data, setdata] = useState( Type )
  const handleChange = (event:any,attrb: number) => {
   switch (attrb) {
      case 1:
        data.name  = event.target.value
         break;
      case 2:
       data.type = event.target.value
       break;
     case 3:
        data.puissanceTH= parseInt(event.target.value,10)
       break;
      case 4:
         data.puissanceS= parseInt(event.target.value,10)
        break;
   }
   console.log(data);
   }

const handleSubmit = () => {
 console.log(data);
   axios.post('https://localhost:7002/api/v1/Group',data)
   .then(res => {
     console.log('Successful');
     window.location.reload(); // a change 
   }).catch(err=> console.log(err)  )
 }

async function SaveClicked(e:any) {
e.preventDefault()
 await handleSubmit() 
setAdded(true) 
setTimeout(() => {
 props.setClicked(false) 
}, 400);
}


    return ( 
    <motion.div  className=" w-[700px] ml-[100px] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] h-[330px] shadow-2xl
    rounded-[10px] mb-10 bg-white p-7 text-[#b0b1b3] z-10 " 
    initial={{ y: '-200%',x: '50%',opacity: 0 }}
    animate={{ y: '-55%',x: '50%', opacity: 1 }} 
    exit={{ y: '-200%',x: '50%',opacity: 0 , }}
    transition={{ type: "spring", stiffness: 60,delay:.5 }}
     >
    <div  className='flex justify-between' >
    <h1  className="text-xl text-black font-semibold ">Nouveau groupe </h1>  
    <div className='rounded-full bg-[#e91010] hover:bg-[red] duration-[.5s] text-white text-xl w-[30px] h-[30px] grid justify-center cursor-pointer items-center' 
    onClick={()=>{ setNext(0);
        props.setClicked(false)}}> 
    <FiX></FiX></div>
    </div>
        <form  onSubmit={(e)=>SaveClicked(e) } >
        <div className=" grid justify-items-center items-center grid-cols-2 w-full my-6 gap-1 gap-y-3 ">
         <div className="">
            <h1 className="mb-2 text-lg ">Nom </h1>
            <input type="text" onChange={(e)=>handleChange(e,1)} className=" pl-[5%] text-black rounded-[5px] w-[300px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> type * </h1>
            <input type="text"  onChange={(e)=>handleChange(e,2)} className=" pl-[5%] text-black rounded-[5px] w-[300px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">puissance TH </h1>
            <input type="text" onChange={(e)=>handleChange(e,3)}   className=" pl-[5%] text-black rounded-[5px] w-[300px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> puissance Nominale </h1>
            <input type="text" onChange={(e)=>handleChange(e,4)}  className=" pl-[5%] text-black rounded-[5px] w-[300px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
      
        </div>
         <div className="flex w-full justify-end px-3 gap-4">
            <button  className="text-black p-2 px-7 rounded-[5px] border border-solid border-[#a6a7a8] hover:bg-[#f7f2f2]
             hover:border-[#818181] duration-[.5s] " 
              onClick={()=>  props.setClicked(false)      }
              >Annuler </button>
            <button type='submit' className="bg-[#666cde] text-white p-2 duration-[.5s] px-7 rounded-[5px] hover:bg-[#6167d3] " >Enregistrer</button>
        </div>
        </form>
      
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
    Centrale  Added
  </motion.div>
        }
        </AnimatePresence>
    </motion.div> );
}
 
export default AddGrp;