import SideNav from "@/components/SideNav";
import Ctrlid from "@/components/Centrales/Id";
import Add from "@/components/Centrales/Add";
import {motion,AnimatePresence } from 'framer-motion'
import { useState } from "react";
const Centrales = () => {
    const [AddClick, setAddClick] = useState(false)
   
    return ( 
        <div className="flex">
        <SideNav path='Centrales'></SideNav>
        <div  className="relative" >
        <AnimatePresence>
        {AddClick &&  <motion.div   
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.5, }}>
         <Add setClicked={setAddClick} ></Add>
         </motion.div> }
         </AnimatePresence>     
        <Ctrlid setClicked={setAddClick} ></Ctrlid>
        </div>
    </div>
     );
}
 
export default Centrales;