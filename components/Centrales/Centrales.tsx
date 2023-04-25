import { useEffect, useState } from "react";
import { AiOutlineSearch , AiFillEye} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp ,MdKeyboardArrowLeft,MdDeleteOutline,MdOutlineAdd} from "react-icons/md";
import Link from "next/link";
import Pagination from "../Pagination";
import axios from "axios";
import Delete from "../Delete";
import { AnimatePresence, motion } from "framer-motion";
interface props{
    setClicked:(value:boolean) => void
}
const Ctrl:React.FC<props> = (props) => {
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
  
   const [DeleteClick, setDeleteClick] = useState(false)

   const [Type, setType] = useState<any>()
    const [firstFilter, setfirstFilter] = useState(true)
    const [secondFilter, setsecondFilter] = useState(true)
    const [inputValue, setInputValue] = useState<any>();
   
    const [Ligne, setLigne] = useState<any>()
    const [FirstLigne, setFirstLigne] = useState<any>([0])
   
    async function fetchData() {
      try {
        const response = await axios.get('https://localhost:7002/api/v1/Centrale');
        setFirstLigne(response.data)
        setLigne(response.data)
        
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(()=>{
      fetchData();
 },[])
  useEffect(() => {
      if(inputValue!=undefined)
 { 
  const filterCards = FirstLigne.filter((card:any) => {
    if (card && card.name) {
      return card.name.toLowerCase().includes(inputValue.toLowerCase());
    } else {
      return false;
    }
  });
  
  setLigne(filterCards)
    }
    else  fetchData();
  }, [inputValue])
 
   
  
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage= 4;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = Ligne && Ligne.slice(firstPostIndex, lastPostIndex);  

    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState(
      Ligne &&  Ligne.map((l:any) => ({
          id:l.code,
        isChecked: false
      }))
    );
    useEffect(() => {
    if(Ligne)  {  const newCheckboxes = Ligne.map((lign: any) => ({
          id:lign.code,
          isChecked: false
        }));
        setCheckboxes(newCheckboxes);}
      }, [Ligne]);
  
    const handleCheckboxChange = (index:number) => {
      const newCheckboxes = [...checkboxes];
      newCheckboxes[index].isChecked = !newCheckboxes[index].isChecked;
      setCheckboxes(newCheckboxes);
  
      const allChecked = newCheckboxes.every((checkbox) => checkbox.isChecked);
      setIsCheckedAll(allChecked);
    };
  
    const handleAllCheckboxChange = () => {
      const newCheckboxes = checkboxes.map((checkbox: any) => ({
        ...checkbox,
        isChecked: !isCheckedAll
      }));
      setCheckboxes(newCheckboxes);
      setIsCheckedAll(!isCheckedAll);
    };

    const handleDelete = (id:any) => {
      setType(id)
      setDeleteClick(true)
         }
 
    return ( 
        <div className=" w-[81vw] p-7 py-4 bg-[#F0F8FF] ">
         <div className="flex items-center justify-between w-full text-[#808080] "> 
         <Link href={'/'} >
            <div className="flex items-center gap-2 cursor-pointer ">       
            <MdKeyboardArrowLeft className="text-lg" ></MdKeyboardArrowLeft>
            Accueil
            </div>
        </Link>
         {dayName} , {monthName} {day}
            </div>
          <div className="flex items-center justify-between mt-10 ">
         <div>
        <h1 className="text-2xl  font-semibold ">  Centrales </h1>
        <p  className="text-[#8E8F90] mt-2 " >  Sur cette page, vous pouvez ajouter, mettre à jour ou supprimer une Centrale </p>
        </div>   
        <button className="bg-[#1A73E8] hover:bg-[#176ad6] duration-700 items-center text-white flex gap-2 p-3 py-2 rounded-[10px]  "  onClick={()=>props.setClicked(true)} >
        <MdOutlineAdd  className="text-xl" ></MdOutlineAdd>  Centrale
        </button>
          </div>   
          
        <div  className=" bg-white w-full h-[65vh] relative mt-9 " >

       <div className="flex justify-between items-center p-5 py-3 ">
        <div className="flex gap-3 items-center  ">
            <div  className="relative" >
            <input type="text" placeholder="Search" className="w-[200px] h-[32px] px-7 border border-solid border-[#E4EAF0] " value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
            <AiOutlineSearch  className="absolute top-[25%] left-[4%] text-[#E4EAF0] " ></AiOutlineSearch>
            </div>
            <div  className="relative w-[85px] h-[32px] cursor-pointer flex justify-between items-center p-2 border border-solid border-[#E4EAF0] text-[#6E7886] "
            onClick={()=>setfirstFilter(!firstFilter)}
            >
            Filter
          {  firstFilter ? <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> : <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>  }
            </div>
            <div  className=" relative w-[85px] h-[32px] cursor-pointer flex justify-between items-center p-2 border border-solid border-[#E4EAF0] text-[#6E7886]"
              onClick={()=>setsecondFilter(!secondFilter)}
            >
            Filter
            {  secondFilter ? <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> : <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>  }
            </div>
            <p className="text-[rgba(191,195,201,1)] " > Affichage de { Ligne ? Ligne.length  : "0" } résultats </p>
        </div>
       <button className="border border-solid border-[#E91010] font-semibold flex items-center justify-center gap-2 text-[#E91010] rounded-[10px] text-sm w-[110px] h-[35px] "   

      onClick={()=>{
        if (checkboxes.some((obj:any) => obj.hasOwnProperty('isChecked') && obj.isChecked === true)) {
          handleDelete(0)
        }
      }}
       >
       <MdDeleteOutline className="text-lg" ></MdDeleteOutline>
       Supprimer
       </button>
       </div>

      <div className="mt-3">
      <header className="bg-[#F1F4F9] mx-[2px] ">
        <div className="flex p-2 px-12 items-center text-[#aeacac]  justify-between w-[85%] ">
          <div className="flex items-center gap-2 ">
            <input
            type="checkbox"
            name=""
            id=""
            className="w-[18px] border-[#D9D9D9] h-[18px]"
            checked={isCheckedAll}
            onChange={handleAllCheckboxChange}
          />
            <p>Code</p>
          </div>
          <p>Nom</p>
          <p>Nature</p>
          <p>Capacite</p>
          <p>Wilaya</p>
          <p>Production</p>
        </div>
      </header>
  {Ligne &&  <main className="text-[#626D7C] mt-5">
        {currentPosts.map((data: any,index:number) => {
          return (
            <div className="flex p-2 px-[50px] items-center justify-between mt-1 "  key={index} >
              <div className="flex items-center gap-2 ">
           { checkboxes &&  <input
                  type="checkbox"
                  className="w-[18px] h-[18px]"
                  checked={checkboxes[index+4*(currentPage-1)].isChecked}
                  onChange={()=> handleCheckboxChange(index+4*(currentPage-1)) }
                />}
                <p className=" max-w-[20%] " > {data.code} </p>
              </div> 
              <p className=" max-w-[15%] "  >  {data.name} </p>
              <p className=" max-w-[15%] " >{ data.nature }</p>
              <p className=" max-w-[15%] "  >{data.capacite}</p>
              <p className=" max-w-[10%] " >{data.wilayaId}</p>
              <p className=" max-w-[15%] "  >Production</p>
              <div className="flex gap-4 items-center text-[#33333]">
                <Link href={`/Centrales/${data.code}`}>
                  <AiFillEye className="text-[25px] cursor-pointer duration-700  hover:text-[#1a73e8] " />
                </Link>
                <MdDeleteOutline className="text-[25px] cursor-pointer duration-700  hover:text-[#c33c3c] " 
                 onClick={()=>{handleDelete(data.code)}}
                />
              </div>
            </div>
          );
        })}
      </main>}
      </div>
       
      <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={ Ligne && Ligne.length} ></Pagination>
        </div>
        <AnimatePresence>
        {DeleteClick &&  <motion.div   
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.5, }}>
         <Delete setClicked={setDeleteClick} checkboxes={checkboxes}  isCheckedAll={isCheckedAll} Type={Type} ></Delete>
         </motion.div> }
         </AnimatePresence>    
        </div>
     );
}
 
export default Ctrl;