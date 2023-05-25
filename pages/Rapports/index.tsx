import SideNav from "@/components/shared/SideNav";
import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken';
import Rj from "@/components/Bilan/Rapportj";
    
const Rapport = () => {
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
            <SideNav path='Rapports'></SideNav>
            <Rj  userRole={userRole}  dayName={dayName} monthName={monthName} day={day} ></Rj>
           </div>
         );
    }
     
    export default Rapport;