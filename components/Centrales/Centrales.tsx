import { useEffect, useState } from "react";
import { AiOutlineSearch , AiFillEye} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp ,MdKeyboardArrowLeft,MdDeleteOutline,MdOutlineAdd} from "react-icons/md";
import Link from "next/link";
import Pagination from "../Pagination";
import axios from "axios";
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
  

    const [firstFilter, setfirstFilter] = useState(true)
    const [secondFilter, setsecondFilter] = useState(true)
    const [inputValue, setInputValue] = useState<any>();
   
    const [Ligne, setLigne] = useState<any>([0])
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
    const currentPosts = Ligne.slice(firstPostIndex, lastPostIndex);  

    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState(
        Ligne.map((l:any) => ({
          id:l.code,
        isChecked: false
      }))
    );
    useEffect(() => {
        const newCheckboxes = Ligne.map((lign: any) => ({
          id:lign.code,
          isChecked: false
        }));
        setCheckboxes(newCheckboxes);
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
         axios.delete(`https://localhost:7002/api/v1/Centrale/${id}`)
         .then(res => {
             console.log('Successful');
             fetchData()
           }).catch(err=> console.log(err)  )
         }
 const handledeleteAll=()=>{
  if(isCheckedAll)
 { axios.delete(`https://localhost:7002/api/v1/Centrale`)
  .then(response => {
    console.log('All Centrales deleted successfully');
    fetchData()
  })
  .catch(error => {
    console.error('Error deleting all users:', error);
  });}
  else {
    checkboxes.map((checkbox:any)=>{
      if(checkbox.isChecked) axios.delete(`https://localhost:7002/api/v1/Centrale/${checkbox.id}`)
      .then(response => {
        console.log(' Centrales deleted successfully');
      fetchData()
      })
      .catch(error => {
        console.error('Error deleting :', error);
      });
    })
  }
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
        <button className="bg-[#1A73E8] items-center text-white flex gap-2 p-3 py-2 rounded-[10px]  "  onClick={()=>props.setClicked(true)} >
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
            <p className="text-[rgba(191,195,201,1)] " > Affichage de {Ligne.length} résultats </p>
        </div>
       <button className="border border-solid border-[#E91010] font-semibold flex items-center justify-center gap-3 text-[#E91010] rounded-[10px] w-[124px] h-[40px] "   onClick={()=>handledeleteAll()} >
       <MdDeleteOutline className="text-xl " ></MdDeleteOutline>
        Remove
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
  { ( checkboxes.length>1 || currentPosts.length==1 ) &&  <main className="text-[#626D7C] mt-5">
        {currentPosts.map((data: any,index:number) => {
          return (
            <div className="flex p-2 px-[50px] items-center justify-between mt-1 "  key={index} >
              <div className="flex items-center gap-2 ">
              { checkboxes.length>=1 && <input
                  type="checkbox"
                  className="w-[18px] h-[18px]"
                  checked={checkboxes[index+4*(currentPage-1)].isChecked}
                  onChange={()=> handleCheckboxChange(index+4*(currentPage-1)) }
                />}
                <p> {data.code} </p>
              </div> 
              <p>  {data.name} </p>
              <p>{ data.nature }</p>
              <p>{data.capacite}</p>
              <p>{data.wilayaId}</p>
              <p>Production</p>
              <div className="flex gap-4 items-center text-[#33333]">
                <Link href={`/Centrales/${data.code}`}>
                  <AiFillEye className="text-[26px] cursor-pointer" />
                </Link>
                <MdDeleteOutline className="text-[26px] cursor-pointer" onClick={()=>{handleDelete(data.code)}} />
              </div>
            </div>
          );
        })}
      </main>}
      </div>
       
      <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={Ligne.length} ></Pagination>

        </div>
      
        </div>
     );
}
 
export default Ctrl;