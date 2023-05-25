import axios from 'axios';
import {motion,AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { FiX } from "react-icons/fi";
interface props{
    setClicked:(value:boolean) => void,
    centrale:any
}

const Edit:React.FC<props> = (props) => {
   const [Added,setAdded]=useState(false);

   let Type={
      code:props.centrale.code,
      name:props.centrale.name,
      nature: props.centrale.nature,
      nature_Producteur:props.centrale.nature_Producteur,
      durreVie:props.centrale.durreVie,
      durreFonctionement:props.centrale.durreFonctionement,
      capacite:props.centrale.capacite,
      wilayaId:props.centrale.wilayaId
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
            data.nature_Producteur= event.target.value
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
        }
        console.log(data);
        }
    
   const handleSubmit = () => {
      console.log(data);
      axios.put(`https://localhost:7002/api/v1/Centrale/${props.centrale.code}`, data)
      .then(response => {
        console.log('Value updated successfully:', response.data);
        setAdded(true) 
      })
      .catch(error => {
        console.error('Error updating value:', error);
      });
      }
   
async function SaveClicked(e:any) {
   e.preventDefault()
      await handleSubmit() 
     setTimeout(() => {
      props.setClicked(false) 
     }, 400);
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
    <h1  className="text-xl text-black font-semibold ">Modifier {props.centrale.name} </h1>  
    <div className='rounded-full bg-[#e91010] hover:bg-[red] duration-[.5s] text-white text-xl w-[30px] h-[30px] grid justify-center cursor-pointer items-center' 
    onClick={()=>{ props.setClicked(false)}}> 
    <FiX></FiX></div>
    </div>
    <form onSubmit={(e)=>SaveClicked(e) } >
       <div className=" grid justify-items-center items-center grid-cols-3 w-full my-6 gap-1 gap-y-3 ">
         <div className="">
            <h1 className="mb-2 text-lg "> Nom </h1>
            <input type="text"  defaultValue={data.name} required onChange={(e)=>handleChange(e,2)} className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Nature </h1>
            <input type="text"  defaultValue={data.nature} required onChange={(e)=>handleChange(e,3)}   className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> nature_Producteur * </h1>
            <input type="text"  defaultValue={data.nature_Producteur} required onChange={(e)=>handleChange(e,4)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Durre vie Econnomique</h1>
            <input type="text"  defaultValue={data.durreVie} required onChange={(e)=>handleChange(e,5)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Durre Fonctionement</h1>
            <input type="text"  defaultValue={data.durreFonctionement} required onChange={(e)=>handleChange(e,6)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> Capacite </h1>
            <input type="text"  defaultValue={data.capacite} required onChange={(e)=>handleChange(e,8)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> Wilaya </h1>
            <div>
    <select  defaultValue={data.wilayaId} required
    onChange={(e) => handleChange(e, 9)} 
    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  >
<option value="01">Adrar</option>
<option value="02">Chlef</option>
<option value="03">Laghouat</option>
<option value="04">Oum El Bouaghi</option>
<option value="05">Batna</option>
<option value="06">Béjaïa</option>
<option value="07">Biskra</option>
<option value="08">Béchar</option>
<option value="09">Blida</option>
<option value="10">Bouira</option>
<option value="11">Tamanrasset</option>
<option value="12">Tébessa</option>
<option value="13">Tlemcen</option>
<option value="14">Tiaret</option>
<option value="15">Tizi Ouzou</option>
<option value="16">Alger</option>
<option value="17">Djelfa</option>
<option value="18">Jijel</option>
<option value="19">Sétif</option>
<option value="20">Saïda</option>
<option value="21">Skikda</option>
<option value="22">Sidi Bel Abbès</option>
<option value="23">Annaba</option>
<option value="24">Guelma</option>
<option value="25">Constantine</option>
<option value="26">Médéa</option>
<option value="27">Mostaganem</option>
<option value="28">M'Sila</option>
<option value="29">Mascara</option>
<option value="30">Ouargla</option>
<option value="31">Oran</option>
<option value="32">El Bayadh</option>
<option value="33">Illizi</option>
<option value="34">Bordj Bou Arréridj</option>
<option value="35">Boumerdès</option>
<option value="36">El Tarf</option>
<option value="37">Tindouf</option>
<option value="38">Tissemsilt</option>
<option value="39">El Oued</option>
<option value="40">Khenchela</option>
<option value="41">Souk Ahras</option>
<option value="42">Tipaza</option>
<option value="43">Mila</option>
<option value="44">Aïn Defla</option>
<option value="45">Naâma</option>
<option value="46">Aïn Témouchent</option>
<option value="47">Ghardaïa</option>
<option value="48">Relizane</option>
<option value="49">El M'ghair</option>
<option value="50">El Menia</option>
<option value="51">Ouled Djellal</option>
<option value="52">Bordj Baji Mokhtar</option>
<option value="53">Béni Abbès</option>
<option value="54">Timimoun</option>
<option value="55">Touggourt</option>
<option value="56">Djanet</option>
<option value="57">In Salah</option>
<option value="58">In Guezzam</option>

  </select>
</div>

         </div>

        </div>
        <div className="flex w-full justify-end px-3 gap-4">
            <button  className="text-black p-2 px-7 rounded-[5px] border border-solid border-[#a6a7a8] hover:bg-[#f7f2f2]
             hover:border-[#818181] duration-[.5s] " 
              onClick={()=> { setdata(Type);  props.setClicked(false)  }    }
              >Annuler </button>
            <button type='submit' className="bg-[#666cde] text-white p-2 duration-[.5s] px-7 rounded-[5px] hover:bg-[#6167d3] " > Modifier </button>
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
    Centrale  Modifier
  </motion.div>
        }
        </AnimatePresence>
    </motion.div> );
}
 
export default Edit;
