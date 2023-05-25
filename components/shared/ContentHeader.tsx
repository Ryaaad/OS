
interface props{
    title:string,
    subtitle?:string
}

const ContentHeader:React.FC<props> = ({ title, subtitle }) => {
    return ( 
        <div>
        <h1 className="text-2xl  font-semibold ">  {title} </h1>
  <p  className="text-[#8E8F90] mt-2 " > {subtitle} </p>
        </div>   
     );
}
 
export default ContentHeader;