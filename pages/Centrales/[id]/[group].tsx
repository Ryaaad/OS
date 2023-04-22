import SideNav from "@/components/SideNav";
import Group from "@/components/Groupe/IdGroup";
import AddGrp from "@/components/Groupe/AddGrp";
import {motion,AnimatePresence } from 'framer-motion'
import { useState } from "react";
const GrpId = () => {
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
        <Group setClicked={setAddClick} ></Group>
        </div>
    </div>
     );
}
 
export default GrpId;