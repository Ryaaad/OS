import SideNav from "@/components/SideNav";
import { useEffect, useState } from "react";
import jwt from 'jsonwebtoken';
import Csp from "@/components/Bilan/Csp";

const Bilans = () => {
  const date = new Date();
   const day = date.getDate();
 const month = date.getMonth();
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
      <SideNav path='Consomations'></SideNav>
      <Csp userRole={userRole}  dayName={dayName} monthName={monthName} day={day} ></Csp>
     </div>
      );
}
 
export default Bilans;