import React from 'react'

const Pagination = ({totalpost,postPerPage,currentPage,setPage}) => {
   let pages = [];
    for(let i  = 1; i<=Math.ceil(totalpost/8);i++){
        pages.push(i);
    }
  return (
    <div className='w-full flex justify-center mt-4 items-center gap-5'>
       {
        pages.map((page,index) => {
            return <button  key={index} className={`h-6 w-6 rounded-full 
        ${page === currentPage ? "bg-rose-500 text-white" : "bg-teal-50"}
      `} onClick={()=>{
                setPage(page)
            }}>{page}</button>
        })
       }
    </div>
  )
}

export default Pagination
