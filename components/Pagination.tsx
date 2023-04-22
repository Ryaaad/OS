import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import React, { Dispatch, SetStateAction } from 'react'
interface props{
    totalPosts:number,
    postsPerPage:number,
    currentPage:number,
    setCurrentPage:Dispatch<SetStateAction<number>>,
}

const Pagination:React.FC<props>=(props)=> {

    let pages = [];

    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pages.push(i);
    }
    const prev=()=>{
        if(props.currentPage>1) props.setCurrentPage(props.currentPage - 1)
    }
    const next=()=>{
        if(props.currentPage<pages.length) props.setCurrentPage(props.currentPage + 1)
    }
      const Set=(Current:number)=>{
      props.setCurrentPage(Current)
    }
  return (
  <div className='flex gap-3 h-max mx-auto justify-center absolute bottom-[4%] w-full select-none ' >
    <div  className='text-2xl border border-[#DDDDDD] rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer ' onClick={()=>prev()} >
 <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
    </div>
{  props.currentPage>2 && <>
    { props.currentPage==pages.length && <>
 <div  className={`text-lg rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer  `}  onClick={()=>Set(props.currentPage-3)}>
        {props.currentPage-3}
 </div>       
    <div  className={`text-lg rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer  `}  onClick={()=>Set(props.currentPage-2)} >
        {props.currentPage-2}
         </div> 
 </>
}
</>

}

{ props.currentPage>2 && <>
    { props.currentPage==pages.length-1 &&  <div  className={`text-lg rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer  `} 
onClick={()=>Set(props.currentPage-2)} >
        {props.currentPage-2}
         </div> 
}
</>

}
{
    pages.map(page=>{
      return  <div key={page}  className={`text-lg rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer 
      ${page==props.currentPage ? "border border-[#1976D2] text-[#1976D2]" : ""} ${page>props.currentPage+2 && "hidden"} ${page<props.currentPage-1 && "hidden"} `} 
   onClick={()=>Set(page)}   >
        {page}
         </div> 
    })
}
 { pages.length>3 && <>
 
 { props.currentPage==1 && <div  className={`text-lg rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer  `}
 onClick={()=>Set(props.currentPage+3)} >
         {props.currentPage+3}
          </div> 
 }
 </> }

    <div  className='text-2xl  border border-[#DDDDDD] rounded-[10px] w-[35px] h-[35px] grid items-center justify-center cursor-pointer ' onClick={()=>next()} >
    <MdKeyboardArrowRight></MdKeyboardArrowRight>
    </div> 

  </div>
  )
}
export default Pagination;