import SideNav from "@/components/shared/SideNav";
import Ctrlid from "@/components/Centrales/Id";
import AddGrp from "@/components/Groupe/AddGrp";
import {motion,AnimatePresence } from 'framer-motion'
import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken';

const CentraleId = () => {
    
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


    const [AddClick, setAddClick] = useState(false)
    const [userRole,setuser]=useState<any>()
    useEffect(() => {
      if (typeof sessionStorage !== 'undefined') {
      const token = sessionStorage.getItem('token');
     if(token){ const decodedToken = jwt.decode(token as string) as { [key: string]: string };
      const Role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      setuser(Role) }}
    }, []);
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
        <Ctrlid setClicked={setAddClick} dayName={dayName} monthName={monthName} day={day} userRole={userRole} ></Ctrlid>
        </div>
    </div>
     );
}
 
export default CentraleId;