import axios from 'axios';
import {motion,AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { FiX } from "react-icons/fi";
interface props{
    setClicked:(value:boolean) => void
}

const Add:React.FC<props> = (props) => {
   const [Added,setAdded]=useState(false);
   const Producteur = ["SPE", "SKS", "SKD", "SKB", "KAHRAMA", "SKT", "SPP1", "SKH", "SKTM"];
   const Wilayas=[
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

   let Type={
      name:"",
      nature: "TG",
      durreVie:0,
      durreFonctionement:0,
      capacite:0,
      puissanceNominale:0,
      wilayaId:1,
      societe_DistrubitionId: "",
      abrv:""
  }
    const [data, setdata] = useState( Type )
       const handleChange = (event:any,attrb: number) => {
        switch (attrb) {
           case 2:
             data.name  = event.target.value
              break;
           case 3:
            data.nature  = event.target.value
            break;
           case 4:
            data.societe_DistrubitionId= event.target.value
            break;
            case 5:
             data.durreVie= parseInt(event.target.value,10)
            break;
           case 6:
              data.durreFonctionement= parseInt(event.target.value,10)
             break;
             case 8:
              data.capacite= parseInt(event.target.value,10)
             break;
             case 9:
              data.wilayaId= parseInt(event.target.value,10)
             break;
             case 10:
               data.puissanceNominale= parseInt(event.target.value,10)
              break;
              case 11:
               data.abrv= event.target.value
              break;
        }
        console.log(data);
        }
    
   const handleSubmit = () => {
      console.log(data);
        axios.post('https://localhost:7002/api/v1/Centrale',data)
        .then(res => {
        setAdded(true) 
          console.log('Successful');
          setTimeout(() => {
            props.setClicked(false) 
            window.location.reload();
           }, 200);
        }).catch(err=> console.log(err)  )
      }
   
async function SaveClicked(e:any) {
   const targetButton = document.getElementById('submitbutton') as HTMLButtonElement;
   targetButton.style.backgroundColor = 'gainsboro';
  targetButton.disabled = true;
  targetButton.style.cursor = 'not-allowed';
   e.preventDefault()
      await handleSubmit() 
 }
  function Annuler(e:any) {
   const targetButton = document.getElementById('submitbutton') as HTMLButtonElement;
   targetButton.style.backgroundColor = '#666cde';
  targetButton.disabled = false;
  targetButton.style.cursor = 'pointer';
  e.preventDefault()
  props.setClicked(false)     
 }

    return ( 
    <motion.div  className=" w-[800px] ml-[100px] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] h-[420px] shadow-2xl
    rounded-[10px] mb-10 bg-white p-7 text-[#b0b1b3] z-10 " 
    initial={{ y: '-200%',x: '50%',opacity: 0 }}
    animate={{ y: '-55%',x: '50%', opacity: 1 }} 
    exit={{ y: '-200%',x: '50%',opacity: 0 , }}
    transition={{ type: "spring", stiffness: 60,delay:.5 }}
     >
    <div  className='flex justify-between' >
    <h1  className="text-xl text-black font-semibold ">Nouvelle Centrale </h1>  
    <div className='rounded-full bg-[#e91010] hover:bg-[red] duration-[.5s] text-white text-xl w-[30px] h-[30px] grid justify-center cursor-pointer items-center' 
    onClick={()=>{ props.setClicked(false)}}> 
    <FiX></FiX></div>
    </div>
    <form onSubmit={(e)=>SaveClicked(e) } >
       <div className=" grid justify-items-center items-center grid-cols-3 w-full my-6 gap-1 gap-y-3 ">
         <div className="">
            <h1 className="mb-2 text-lg "> Nom </h1>
            <input type="text"  required onChange={(e)=>handleChange(e,2)} className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> Type </h1>
            <select required
    onChange={(e) => handleChange(e, 3)} 
    className="block appearance-none text-center bg-white border border-gray-400 hover:border-gray-500  w-[220px] h-[35px] rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  >
           <option value="TG">TG</option>
          <option value="TV">TV</option>
          <option value="CC">CC</option>
            <option value="PV">PV</option>
            <option value="Eolienne">Eolienne</option>
            </select>
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> Producteur </h1>
            <select required
    onChange={(e) => handleChange(e, 4)} 
    className="block appearance-none text-center bg-white border border-gray-400 hover:border-gray-500  w-[220px] h-[35px] rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  >
   {Producteur.map((Pr)=>{
          
           return  <option key={Pr} value={Pr}>{Pr}</option>

   })}
            </select>
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Durre vie Econnomique</h1>
            <input type="text" required onChange={(e)=>handleChange(e,5)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Durre Fonctionement</h1>
            <input type="text" required onChange={(e)=>handleChange(e,6)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> Capacite </h1>
            <input type="text" required onChange={(e)=>handleChange(e,8)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> Wilaya </h1>
            <div>
            <select required
    onChange={(e) => handleChange(e, 9)} 
    className="block appearance-none  w-[220px] h-[35px] bg-white border border-gray-400 hover:border-gray-500 text-center rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  >
  {Wilayas.map(wilaya=>{
   return <option value={wilaya.value}>{wilaya.name}</option>
  })}
            </select>
            </div>

         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> Puissance Nominale </h1>
            <input type="text" required onChange={(e)=>handleChange(e,10)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> Abreivation </h1>
            <input type="text" required onChange={(e)=>handleChange(e,11)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
        </div>
        <div className="flex w-full justify-end px-3 gap-4">
            <button  className="text-black p-2 px-7 rounded-[5px] border border-solid border-[#a6a7a8] hover:bg-[#f7f2f2]
             hover:border-[#818181] duration-[.5s] " 
              onClick={(e)=>  Annuler(e)      }
              >Annuler </button>
            <button type='submit' id="submitbutton" className="bg-[#666cde] text-white p-2 duration-[.5s] px-7 rounded-[5px] hover:bg-[#6167d3] " >Enregistrer</button>
        </div>
        </form>
        <AnimatePresence>
        { Added &&
  <motion.div className="absolute bottom-[-14%] font-semibold right-[38%] translate-x-[50%] bg-white rounded-[5px] gap-3 border-l-[3px]
   border-l-solid border-l-[#666cde] w-[182px] items-center justify-center flex h-[45px] text-black "
   initial={{ opacity: 0, y:40 }}
        animate={{ opacity: 1,y:0 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.3, }}
   >
    <div className="rounded-full bg-[#666cde] text-white h-[20px] w-[20px] grid justify-center items-center  ">
    <AiOutlineCheck></AiOutlineCheck> 
    </div>
    Centrale  Ajouter
  </motion.div>
        }
        </AnimatePresence>
    </motion.div> );
}
 
export default Add;