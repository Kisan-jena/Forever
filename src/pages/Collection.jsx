import 'react'
import { useContext, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Collection = () => {

  const {product}=useContext(ShopContext)
  const [showFilter,setShowFilter]=useState(false)
  const [filter,setfilter]=useState([])

  

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
        <div className='grid grid-col md:grid-col-3 lg:grid-col-4 gap-4 gap-y-6' >

        </div>

      </div>

    </div>
  )
}

export default Collection
