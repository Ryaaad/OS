import SideNav from "@/components/SideNav";
import Ctrlid from "@/components/Centrales/Id";
import AddGrp from "@/components/Groupe/AddGrp";
import {motion,AnimatePresence } from 'framer-motion'
import { useState } from "react";
const CentraleId = () => {
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
         <AddGrp setClicked={setAddClick} ></AddGrp>
         </motion.div> }
         </AnimatePresence>     
        <Ctrlid setClicked={setAddClick} ></Ctrlid>
        </div>
    </div>
     );
}
 
export default CentraleId;