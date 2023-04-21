import SideNav from "@/components/SideNav";
import Region from "@/components/Centrales/regions";
const Centrales = () => {
    return ( 
        <div className="flex">
        <SideNav path='Centrales'></SideNav>
        <Region></Region>
       </div>
     );
}
 
export default Centrales;