import { useEffect, useState } from "react";
import { AiOutlineSearch , AiFillEye} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp ,MdKeyboardArrowLeft,MdDeleteOutline,MdOutlineAdd} from "react-icons/md";
import ContentHeader from "../shared/ContentHeader";
import Link from "next/link";
import Pagination from "../shared/Pagination";
import axios from "axios";
import Delete from "../shared/Delete";
import { AnimatePresence, motion } from "framer-motion";
interface props{
    setClicked:(value:boolean) => void,
    dayName:string,
    monthName:string,
    day:number ,
    userRole:string
}
const Ctrl:React.FC<props> = (props) => {
 
  
  const [DeleteClick, setDeleteClick] = useState(false)
  const [Type, setType] = useState<any>()
  const [firstFilter, setfirstFilter] = useState(true)
  const [secondFilter, setsecondFilter] = useState(true)
  const [inputValue, setInputValue] = useState<any>();
  const [ChosenFiltrage, setChosenFiltrage] = useState<undefined | String>()
  const [Filtring, setFiltring] = useState<number | String | undefined>(0)
  const [FiltedCentrales, setFiltedCentrales] = useState<any>()
  const [centraleData, setcentraleData] = useState<any>([0])
  const Wilayas=[
    {value:0,name:"All"},
    {value:1,name:"Adrar"},
    {value:2,name:"Chlef"},
    {value:3,name:"Laghouat"},
    {value:4,name:"Oum El Bouaghi"},
    {value:5,name:"Batna"},
    {value:6,name:"Béjaïa"},
    {value:7,name:"Biskra"},
    {value:8,name:"Béchar"},
    {value:9,name:"Blida"},
    {value:10,name:"Bouira"},
    {value:11,name:"Tamanrasset"},
    {value:12,name:"Tébessa"},
    {value:13,name:"Tlemcen"},
    {value:14,name:"Tiaret"},
    {value:15,name:"Tizi Ouzou"},
    {value:16,name:"Alger"},
    {value:17,name:"Djelfa"},
    {value:18,name:"Jijel"},
    {value:19,name:"Sétif"},
    {value:20,name:"Saïda"},
    {value:21,name:"Skikda"},
    {value:22,name:"Sidi Bel Abbès"},
    {value:23,name:"Annaba"},
    {value:24,name:"Guelma"},
    {value:25,name:"Constantine"},
    {value:26,name:"Médéa"},
    {value:27,name:"Mostaganem"},
    {value:28,name:"M'Sila"},
    {value:29,name:"Mascara"},
    {value:30,name:"Ouargla"},
    {value:31,name:"Oran"},
    {value:32,name:"El Bayadh"},
    {value:33,name:"Illizi"},
    {value:34,name:"Bordj Bou Arréridj"},
    {value:35,name:"Boumerdès"},
    {value:36,name:"El Tarf"},
    {value:37,name:"Tindouf"},
    {value:38,name:"Tissemsilt"},
    {value:39,name:"El Oued"},
    {value:40,name:"Khenchela"},
    {value:41,name:"Souk Ahras"},
    {value:42,name:"Tipaza"},
    {value:43,name:"Mila"},
    {value:44,name:"Aïn Defla"},
    {value:45,name:"Naâma"},
    {value:46,name:"Aïn Témouchent"},
    {value:47,name:"Ghardaïa"},
    {value:48,name:"Relizane"},
    {value:49,name:"El M'ghair"},
    {value:50,name:"El Menia"},
    {value:51,name:"Ouled Djellal"},
    {value:52,name:"Bordj Baji Mokhtar"},
    {value:53,name:"Béni Abbès"},
    {value:54,name:"Timimoun"},
    {value:55,name:"Touggourt"},
    {value:56,name:"Djanet"},
    {value:57,name:"In Salah"},
    {value:58,name:"In Guezzam"}
];

    async function fetchData() {
      try {
        const response = await axios.get('https://localhost:7002/api/v1/Centrale');
        setcentraleData(response.data)
        setFiltedCentrales(response.data)
        
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
  const filterCards = centraleData.filter((card:any) => {
    if (card && card.name) {
      setCurrentPage(1);
      return card.name.toLowerCase().includes(inputValue.toLowerCase());
    } else {
      return false;
    }
  });
  
  setFiltedCentrales(filterCards)
    }
    else  fetchData();
  }, [inputValue])

useEffect(() => {
  const filterCentrales = () => {
    let filterCards = centraleData;
    if(Filtring==0){
      setChosenFiltrage(undefined)
      setFiltring(undefined)
    }
    if (ChosenFiltrage === "Wilaya" && Filtring !== 0) {
      filterCards = centraleData.filter((card: { wilayaId: any; }) => Number(card.wilayaId) === Number(Filtring));
    } else if (ChosenFiltrage === "Type" && Filtring !== "All") {
      filterCards = centraleData.filter((card: { nature: (number | String | undefined)[]; }) => card.nature.includes(Filtring));
    }
    
    setFiltedCentrales(filterCards);
  };

  setCurrentPage(1);
  
  if (Filtring && ChosenFiltrage) {
    filterCentrales();
  } else {
    setFiltedCentrales(centraleData);
  }
}, [Filtring, ChosenFiltrage]);






    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage= 4;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = FiltedCentrales && FiltedCentrales.slice(firstPostIndex, lastPostIndex);  

    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [checkboxes, setCheckboxes] = useState(
      FiltedCentrales &&  FiltedCentrales.map((l:any) => ({
          id:l.code,
        isChecked: false
      }))
    );
    
    useEffect(() => {
    if(FiltedCentrales)  {  const newCheckboxes = FiltedCentrales.map((lign: any) => ({
          id:lign.code,
          isChecked: false
        }));
      console.log(FiltedCentrales);
        setCheckboxes(newCheckboxes);}
      }, [FiltedCentrales]);
  
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
        <div className=" w-[81vw] p-7 py-4 bg-[#F0F8FF] h-[100vh] ">
         <div className="flex items-center justify-end w-full text-[#808080] "> 
         {props.dayName} , {props.monthName} {props.day}
            </div>
          <div className="flex items-center justify-between mt-10 ">
         <div>
     <ContentHeader title="Centrales" subtitle={ (props.userRole=="Admin" || props.userRole=="Manager") ? "Sur cette page, vous pouvez ajouter, mettre à jour ou supprimer une Centrale" : "" }/>
        </div>   
        { (props.userRole=="Admin" || props.userRole=="Manager") && 
        <button className="bg-[#1A73E8] hover:bg-[#176ad6] duration-700 items-center text-white flex gap-2 p-3 py-2 rounded-[10px]  "  onClick={()=>props.setClicked(true)} >
        <MdOutlineAdd  className="text-xl" ></MdOutlineAdd>  Centrale
        </button> }
          </div>   
          
        <div  className=" bg-white w-full h-[65vh] relative mt-9 " >

       <div className="flex justify-between items-center p-5 py-3 ">
        <div className="flex gap-3 items-center  ">
            <div  className="relative" >
            <input type="text" placeholder="Search" className="w-[200px] h-[32px] px-7 border border-solid border-[#E4EAF0] " value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
            <AiOutlineSearch  className="absolute top-[25%] left-[4%] text-[#E4EAF0] " ></AiOutlineSearch>
            </div>



    
     

      


            <div  className="relative min-w-[85px] h-[32px] cursor-pointer flex justify-between items-center p-2 border border-solid border-[#E4EAF0] text-[#6E7886] "
            onClick={()=>setfirstFilter(!firstFilter)}   >
            Filter
          {  firstFilter ? <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> : <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>  }
        { !firstFilter && <div className="w-[85px] py-2 flex flex-col gap-2 items-center absolute bottom-[-108px] border right-[50%] translate-x-[50%] bg-white ">
            <p  className="border-solid border-[#E4EAF0] w-[85px] cursor-pointer px-2 hover:bg-[#03101e35] hover:text-black "  onClick={()=>setChosenFiltrage(undefined)}  >None</p>
             <p className="border-solid border-[#E4EAF0] w-[85px] cursor-pointer px-2 hover:bg-[#03101e35] hover:text-black "  onClick={()=>setChosenFiltrage("Wilaya")} >Wilaya</p>
             <p className="border-solid border-[#E4EAF0] w-[85px] cursor-pointer px-2 hover:bg-[#03101e35] hover:text-black "  onClick={()=>setChosenFiltrage("Type")} >Type</p>
          </div>}
            </div>
     {    ChosenFiltrage &&   <div   className=" relative text-[#6E7886]"  >
            {  secondFilter ? <MdOutlineKeyboardArrowDown   className="absolute top-[50%] translate-y-[-50%] right-[5%] z-20" ></MdOutlineKeyboardArrowDown> : 
            <MdOutlineKeyboardArrowUp  className="absolute z-20 top-[50%] translate-y-[-50%] right-[5%] " ></MdOutlineKeyboardArrowUp>  }
{        ChosenFiltrage=="Wilaya"  &&  <select
    onChange={(e) => setFiltring(e.target.value)} 
    onClick={()=>setsecondFilter(!secondFilter)}
    className=" appearance-none  relative w-[160px] h-[32px] cursor-pointer px-2 border border-solid border-[#E4EAF0] z-10 focus:outline-none focus:shadow-outline"  >
      {Wilayas.map(wilaya=>{
        return  <option value={wilaya.value}> {wilaya.name} </option>
      })}
            </select>}

        { ChosenFiltrage=="Type" &&    <select
        onChange={(e) => setFiltring(e.target.value)} 
    onClick={()=>setsecondFilter(!secondFilter)}
    className=" appearance-none  relative w-[90px] h-[32px] cursor-pointer px-2 border border-solid border-[#E4EAF0] z-10 focus:outline-none focus:shadow-outline"  >
       <option value={0}>All</option>
            <option value="TG">TG</option>
          <option value="TV">TV</option>
          <option value="CC">CC</option>
            <option value="PV">PV</option>
            <option value="Eolienne">Eolienne</option>
            </select>}
            </div>}
            <p className="text-[rgba(191,195,201,1)] " > Affichage de { FiltedCentrales ? FiltedCentrales.length  : "0" } résultats </p>
        </div>
   {( props.userRole=="Admin"  && FiltedCentrales ) &&  <button className="border border-solid border-[#E91010] font-semibold flex items-center justify-center gap-2 text-[#E91010] rounded-[10px] text-sm w-[110px] h-[35px] "   

      onClick={()=>{
        if (checkboxes.some((obj:any) => obj.hasOwnProperty('isChecked') && obj.isChecked === true)) {
          handleDelete(0)
        }
      }}
       >
       <MdDeleteOutline className="text-lg" ></MdDeleteOutline>
       Supprimer
       </button>}
       </div>

      <div className="mt-3">
      <header className="bg-[#F1F4F9] mx-[2px] ">
        <div className={`flex p-2 px-12 items-center text-[#aeacac]  justify-between text-start `} >
          <div className="flex items-center gap-2 ">
      { (FiltedCentrales && props.userRole=="Admin" ) &&  <input
            type="checkbox"
            name=""
            id=""
            className="w-[18px] border-[#D9D9D9] h-[18px]"
            checked={isCheckedAll}
            onChange={handleAllCheckboxChange}
          />}
            <p className="w-[65px] " >Code</p>
          </div>
          <p  className=" w-[160px] "  >Designation</p>
          <p   className=" w-[120px]" >Nature</p>
          <p className=" w-[20px] ">Wilaya</p>
          <div className="flex gap-4 items-center text-[#33333]  invisible ">
                <Link href={`/Centrales`}>
                  <AiFillEye className="text-[25px] cursor-pointer duration-700  hover:text-[#1a73e8] " />
                </Link>
              { props.userRole=="Admin" &&  <MdDeleteOutline className="text-[25px] cursor-pointer duration-700  hover:text-[#c33c3c] " />}
              </div>
        </div>
      </header>
  {FiltedCentrales &&  <main className="text-[#626D7C] mt-5">
        {currentPosts.map((data: any,index:number) => {
          return (
            <div className="flex p-2 px-[50px] items-center justify-between text-start mt-1 "  key={index} >
              <div className="flex items-center gap-2 ">
           { (checkboxes && props.userRole=="Admin" ) &&  <input
                  type="checkbox"
                  className="w-[18px] h-[18px]"
                  checked={checkboxes && checkboxes[index+4*(currentPage-1)] && checkboxes[index+4*(currentPage-1)].isChecked}
                  onChange={()=> handleCheckboxChange(index+4*(currentPage-1)) }
                />}
                <p className="w-[65px] " > {data.code} </p>
              </div> 
              <p className="w-[160px] "  >  {data.name} </p>
              <p className="w-[120px]" >{ data.nature}</p>
              <p className=" w-[20px] " >{data.wilayaId}</p>
              <div className="flex gap-4 items-center text-[#33333]">
                <Link href={`/Centrales/${data.code}`}>
                  <AiFillEye className="text-[25px] cursor-pointer duration-700  hover:text-[#1a73e8] " />
                </Link>
              { props.userRole=="Admin" &&  <MdDeleteOutline className="text-[25px] cursor-pointer duration-700  hover:text-[#c33c3c] " 
                 onClick={()=>{handleDelete(data.code)}}
                />}
              </div>
            </div>
          );
        })}
      </main>}
      </div>
       
      <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} totalPosts={ FiltedCentrales && FiltedCentrales.length} ></Pagination>
        </div>
        <AnimatePresence>
        {DeleteClick &&  <motion.div   
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.5, }}>
         <Delete setClicked={setDeleteClick} checkboxes={checkboxes} Centrale={true} Type={Type} ></Delete>
         </motion.div> }
         </AnimatePresence>    
        </div>
     );
}



export default Ctrl;