import {motion,AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { FiX } from "react-icons/fi";
interface props{
    setClicked:(value:boolean) => void
}


const Add:React.FC<props> = (props) => {
   const [Added,setAdded]=useState(false);
   const [Next,setNext]=useState(0);
   let Type:any={};
   let url=''
// if(props.Title=='Supplier'){
//    Type={
//    nomF: "",
//    prenomF:"",
//    adressF: "",
//    teleF:"",
//    img:"tst",
//    email:"" }
//    url='http://localhost:3000/api/supplier'
// }
// else if(props.Title=='Customer') {
//    Type={  img:"tst",
//    nomC: "",
//    prenomC:"",
//    adressC: "",
//    teleC:""}
//    url='http://localhost:3000/api/customer'
// }
  const [data, setdata] = useState( Type )
     const handleChange = (event:any,attrb: number) => {
      switch (attrb) {
         case 1:
           data.nomF  = event.target.value
            break;
         case 2:
           data.prenomF  = event.target.value
           
            break;
         case 3:
          data.adressF  = event.target.value
         
          break;
         case 4:
          data.teleF= event.target.value
         
        case 5:
           data.email= event.target.value
          break;
         case 6:
            data.email= event.target.value
           break;
         case 7:
            data.email= event.target.value
           break;
           case 8:
            data.email= event.target.value
           break;
           case 9:
            data.email= event.target.value
           break;
           case 10:
            data.email= event.target.value
           break;
           case 11:
            data.email= event.target.value
           break; 
      }
      console.log(data);
      }
    
//    const handleSubmit = () => {
//       console.log(data);
      
//         axios.post(url,data)
//         .then(res => {
//           console.log('Successful');
//         })}
    

//    async 
function SaveClicked() {
//       await handleSubmit() 
//      setAdded(true) 
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
    <h1  className="text-xl text-black font-semibold ">New Centrale </h1>  
    <div className='rounded-full bg-[#e91010] hover:bg-[red] duration-[.5s] text-white text-xl w-[30px] h-[30px] grid justify-center cursor-pointer items-center' 
    onClick={()=>{ setNext(0);
        props.setClicked(false)}}> 
    <FiX></FiX></div>
    </div>
        <form >
      { Next==0 &&  <div className=" grid justify-items-center items-center grid-cols-3 w-full my-6 gap-1 gap-y-3 ">
         <div className="">
            <h1 className="mb-2 text-lg ">Code </h1>
            <input type="text" onChange={(e)=>handleChange(e,1)} className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> Nom </h1>
            <input type="text"  onChange={(e)=>handleChange(e,2)} className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Type * </h1>
            <input type="text" onChange={(e)=>handleChange(e,3)}   className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Nature * </h1>
            <input type="text" onChange={(e)=>handleChange(e,4)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Durre vie Econnomique</h1>
            <input type="text" onChange={(e)=>handleChange(e,5)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Taux Realisation</h1>
            <input type="text" onChange={(e)=>handleChange(e,6)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Durre Fonctionement </h1>
            <input type="text" onChange={(e)=>handleChange(e,7)}  className=" pl-[5%] text-black rounded-[5px] w-[220px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
        </div>}
      { Next==1 &&  <div className=" grid justify-items-center items-center grid-cols-2 w-full my-6 gap-1 gap-y-3 ">
      <div className="">
            <h1 className="mb-2 text-lg ">Date Mise En Service </h1>
            <input type="text" onChange={(e)=>handleChange(e,7)}  className=" pl-[5%] text-black rounded-[5px] w-[350px] h-[35px] border border-solid border-[#a6a7a8] "  />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Code Wilaya </h1>
            {/* <input type="text" onChange={(e)=>handleChange(e,8)} className=" pl-[5%] text-black rounded-[5px] w-[350px] h-[35px] border border-solid border-[#a6a7a8] " /> */}
            <div>
    <select 
    onChange={(e) => handleChange(e, 8)} 
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
  <option value="10">Bouïra</option>
  <option value="11">Tamanrasset</option>
  <option value="12">Tébessa</option>
  <option value="13">Tlemcen</option>
  <option value="14">Tiaret</option>
  <option value="15">Tizi Ouzou</option>
  <option value="16">Algiers</option>
  <option value="17">Djelfa</option>
  <option value="18">Jijel</option>
  <option value="19">Sétif</option>
  <option value="20">Saïda</option>
  </select>
  {/* <input 
    type="text" 
    placeholder="Enter a wilaya name" 
    className="block mt-2 w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
    onChange={(e) => {}}
  /> */}
</div>

         </div>
         <div className="">
            <h1 className="mb-2 text-lg "> Capacite Centrale </h1>
            <input type="text"  onChange={(e)=>handleChange(e,9)} className=" pl-[5%] text-black rounded-[5px] w-[350px] h-[35px] border border-solid border-[#a6a7a8] " />
         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Type Reseau </h1>
            {/* <input type="text" onChange={(e)=>handleChange(e,10)} value={"x"}  className=" pl-[5%] text-black rounded-[5px] w-[150px] h-[35px] border border-solid border-[#a6a7a8] " /> */}
            <select  onChange={(e)=>handleChange(e,10)} placeholder='Choisir le Type' className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="RNI">RNI</option>
            <option value="SAUD">SAUD</option>
            </select>

         </div>
         <div className="">
            <h1 className="mb-2 text-lg ">Code Region </h1>
            <select 
    onChange={(e) => handleChange(e, 11)} 
    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  >
   <option value="01">Adrar</option>
  <option value="02">Chlef</option>
  <option value="03">Laghouat</option>
  <option value="04">Oum El Bouaghi</option>
  <option value="05">Batna</option>
  <option value="06">Béjaïa</option>
           </select>
            {/* <input type="text" onChange={(e)=>handleChange(e,11)}  className=" pl-[5%] text-black rounded-[5px] w-[350px] h-[35px] border border-solid border-[#a6a7a8] " /> */}
         </div>
        </div>}  
        </form>
        <div className="flex w-full justify-end px-3 gap-4">
            <button  className="text-black p-2 px-7 rounded-[5px] border border-solid border-[#a6a7a8] hover:bg-[#f7f2f2]
             hover:border-[#818181] duration-[.5s] " 
              onClick={()=>
              {  Next ? setNext(0) : props.setClicked(false)
                }
            }
              >{ Next ? "retourner" : "Annuler" } </button>
            <button type='submit' className="bg-[#666cde] text-white p-2 duration-[.5s] px-7 rounded-[5px] hover:bg-[#6167d3] " 
            onClick={()=>{
                Next ? SaveClicked() : setNext(1) 
            }} 
              >{ Next ? "Enregistrer" : "Suivant" }</button>
        </div>
        <AnimatePresence>
        { Added &&
  <motion.div className="absolute bottom-[-13%] right-[50%] translate-x-[50%] bg-white rounded-[5px] gap-3 border-l-[3px]
   border-l-solid border-l-[#666cde] w-[180px] items-center justify-center flex h-[45px] text-black "
   initial={{ opacity: 0, y:40 }}
        animate={{ opacity: 1,y:0 }}
        exit={{ opacity: 0, }} 
        transition={{duration:.3, }}
   >
    <div className="rounded-full bg-[#666cde] text-white h-[20px] w-[20px] grid justify-center items-center  ">
    <AiOutlineCheck></AiOutlineCheck> 
    </div>
    Centrale  Added
  </motion.div>
        }
        </AnimatePresence>
    </motion.div> );
}
 
export default Add;