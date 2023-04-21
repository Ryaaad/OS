import SideNav from "@/components/SideNav";
import { useState } from "react";
import Rj from "@/components/Bilan/Rapportj";
    
    const Rapport = () => {
        return ( 
            <div className="flex">
            <SideNav path='Rapports'></SideNav>
            <Rj></Rj>
           </div>
         );
    }
     
    export default Rapport;