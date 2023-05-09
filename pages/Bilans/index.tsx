import SideNav from "@/components/SideNav";
import { useState } from "react";
import Enrg from "@/components/Bilan/Enrg";
const Bilans = () => {
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
      <SideNav path='Bilans'></SideNav>
      <Enrg  dayName={dayName} monthName={monthName} day={day} ></Enrg>
     </div>
      );
}
 
export default Bilans;