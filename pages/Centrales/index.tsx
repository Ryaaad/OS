import SideNav from "@/components/SideNav";
import Ctrl from "@/components/Centrales/Centrales";
import Add from "@/components/Centrales/Add";
import {motion,AnimatePresence } from 'framer-motion'
import { useState } from "react";
import axios from "axios";
const Centrales = () => {
    const [AddClick, setAddClick] = useState(false)
    const date = new Date();
    // Get the day (1-31)
    const day = date.getDate();
    // Get the month (0-11)
    const month = date.getMonth();
    // Get the day of the week (0-6)
    const dayOfWeek = date.getDay();
    const monthNames = ["Janvier", "Février", "Mars","Avril", "Mai", "Juin", "Juillet","Août", "Septembre", "Octobre","Novembre", "Décembre"];
    const dayNames = [ "Dimanche", "Lundi", "Mardi","Mercredi", "Jeudi", "Vendredi", "Samedi" ];
    const monthName = monthNames[month];
    const dayName = dayNames[dayOfWeek];
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
        <Ctrl  setClicked={setAddClick}    dayName={dayName} monthName={monthName} day={day} ></Ctrl>
        </div>
       </div>
     );
}
 
export default Centrales;