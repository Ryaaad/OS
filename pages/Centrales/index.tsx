import SideNav from "@/components/SideNav";
import Ctrl from "@/components/Centrales/Centrales";
import Add from "@/components/Centrales/Add";
import {motion,AnimatePresence } from 'framer-motion'
import { useState } from "react";
import axios from "axios";
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
        <Ctrl  setClicked={setAddClick}></Ctrl>
        </div>
       </div>
     );
}
 
export default Centrales;