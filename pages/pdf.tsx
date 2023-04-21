import Add from "@/components/Centrales/Add";
import AddCtrl from "@/components/Centrales/AddCentrale";
import { useState } from "react";

const ATEST = () => {
    const [Clicked, setClicked] = useState(false)
    return (
        <AddCtrl Title=""  setClicked={setClicked}></AddCtrl>
      );
}
 
export default ATEST;