import React from 'react'

function Pagination({pageNumber,paginate,next,prev,currentPage}) {
  return (
    <div>
      

<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px text-sm">
    <li onClick={prev}>
      <a  class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white ease-in-out">Previous</a>
    </li>
    {pageNumber.map((item,i)=>(
      
    <li onClick={()=>paginate(item)}>
      <a  className={`${currentPage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-[#fff] bg-[#262626] border border-gray-300"  : "flex items-center justify-center px-3 h-8 leading-tight text-gray] bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black" } `}>{item + 1}</a>
    </li>
    ))}
    
    <li onClick={next}>
      <a  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white ease-in-out">Next</a>
    </li>
  </ul>
</nav>


    </div>
  )
}

export default Pagination
