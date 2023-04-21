import SideNav from "@/components/SideNav";
import { useState } from "react";
import Enrg from "@/components/Bilan/Enrg";
const Bilans = () => {
    const [Clicked, setClicked] = useState(false)
    return (
      <div className="flex">
      <SideNav path='Bilans'></SideNav>
      <Enrg></Enrg>
     </div>
      );
}
 
export default Bilans;