import SideNav from "@/components/SideNav";
import Group from "@/components/Groupe/IdGroup";
import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken';

const GrpId = () => {
    const date = new Date();
    // Get the day (1-31)
     const day = date.getDate();
    // Get the month (0-11)
   const month = date.getMonth();
   // Get the day of the week (0-6)
   const dayOfWeek = date.getDay();
   const monthNames = [ "January", "February", "March", "April", "May", "June", "July","August", "September", "October","November", "December"];
   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday" ]; 
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
        <SideNav path='Centrales'></SideNav>
        <div  className="relative" >  
        <Group dayName={dayName} monthName={monthName} day={day} userRole={userRole} ></Group>
        </div>
    </div>
     );
}
 
export default GrpId;