/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import 'react'
import { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { ProductItem } from '../components/ProductItem'

const Collection = () => {

  const {products}=useContext(ShopContext)
  const [showFilter,setShowFilter]=useState(false)
  const [filterProduct,setFilterProduct]=useState([])
  // Initialize currentPage from localStorage, defaulting to 1 if not set
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage")
    return savedPage ? Number(savedPage) : 1 
  })
  const [category,setCategory]=useState([])
  const [subCategory,setSubCategory]=useState([])
  const [cureentItem,setcurrentItem]=useState([])
  

  // Pagination Logic ------> 
  const itemsPerPage = 16
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  const totalPages = Math.ceil(filterProduct.length / itemsPerPage)
  // ----------->

  // Whenever currentPage changes, store it in localStorage
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage)
  }, [currentPage])

  useEffect(()=>{
    setFilterProduct(products)
    
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    setcurrentItem(products.slice(indexOfFirstItem, indexOfLastItem))
    
  },[currentPage])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t '  >

      {/* Filters options */}
      <div className='min-w-60' >

        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img onClick={()=>setShowFilter(!showFilter)}  className={`h-3 sm:hidden${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category flter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '': 'hidden'} sm:block `} >
          <p className='mb-3 text-sm font-medium' >CATEGORIES</p>
          <div className='flex flex-col gap-2 test-sm font-light text-gray-700'>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={"men"} />Men
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={"women"} />Women
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={"kid"} />Kid
            </p>
          </div>
        </div>

        {/* SubCategory */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 bg ${showFilter ? '': 'hidden'} sm:block `} >
          <p className='mb-3 text-sm font-medium' >TYPE</p>
          <div className='flex flex-col gap-2 test-sm font-light text-gray-700'>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={"topwear"} />Topwear
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={"Bottomwear"} />Bottomwear
            </p>
            <p className='flex gap-2' >
              <input className='w-3' type="checkbox" value={"Winterwear"} />Winterwear
            </p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className='flex-1' >

        <div className='flex justify-between text-base sm:text-2xl mb-4' >
          <Title text1={'ALL'} text2={'COLLECTION'} />
          {/* product Sort */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by : Relavent</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6' >
          {cureentItem.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className='flex justify-center mt-4'>
          {Array.from({length: totalPages}, (_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)} className={`px-3 py-1 mx-1 ${currentPage === index + 1 ? 'bg-red-200' : 'bg-gray-100'}`}>{index + 1}</button>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Collection

//^ pageination By using useMemo hook

// import { useContext, useEffect, useState, useMemo } from 'react';
// import Title from '../components/Title';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import { ProductItem } from '../components/ProductItem';

// const Collection = () => {
//   const { products } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filter, setFilter] = useState([]);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 16;

//   useEffect(() => {
//     setFilter(products);
//     setCurrentPage(1); // Reset to first page when products change
//   }, [products]);

//   // Calculate the current items using useMemo for performance optimization
//   const currentItems = useMemo(() => {
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     return filter.slice(indexOfFirstItem, indexOfLastItem);
//   }, [filter, currentPage]);

//   // Calculate total pages
//   const totalPages = Math.ceil(filter.length / itemsPerPage);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
//       {/* Filters Section */}
//       <div className='min-w-60'>
//         <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>
//           FILTERS
//           <img
//             onClick={() => setShowFilter(!showFilter)}
//             className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
//             src={assets.dropdown_icon}
//             alt=""
//           />
//         </p>
//         {/* Category Filter */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             {["men", "women", "kid"].map((category) => (
//               <label key={category} className='flex gap-2'>
//                 <input className='w-3' type="checkbox" value={category} /> {category.charAt(0).toUpperCase() + category.slice(1)}
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className='flex-1'>
//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTION'} />
//           <select className='border-2 border-gray-300 text-sm px-2'>
//             <option value="relevant">Sort by: Relevant</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* Product Grid */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {currentItems.map((item) => (
//             <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className='flex justify-center mt-4 space-x-2'>
//             <button
//               className={`px-3 py-1 border ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               Prev
//             </button>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`px-3 py-1 border ${currentPage === index + 1 ? 'bg-gray-300' : 'bg-white'}`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               className={`px-3 py-1 border ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;
