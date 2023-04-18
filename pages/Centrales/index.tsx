import SideNav from "@/components/SideNav";
import Ctrl from "@/components/Centrales";
const Centrales = () => {
    return ( 
        <div className="flex">
        <SideNav path='Centrales'></SideNav>
      
        <Ctrl></Ctrl>
    </div>
     );
}
 
export default Centrales;