/* eslint-disable no-unused-vars */
import 'react'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar=()=>{
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
    const [visible,setVisble]=useState(false)
    const location=useLocation()

    useEffect(()=>{
        if (location.pathname.includes('collection')){
            setVisble(true)
        }else{
            setVisble(false)
        }
    },[location, showSearch])

    return showSearch && visible ? (
        <div className='text-center' >
            <div className='inline-flex item-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ' >
                <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm ' />
                <img src={assets.search_icon} className='w-4' alt="" />
            </div>
            <img src={assets.cross_icon} onClick={()=>setShowSearch(false)} alt="" className='inline w-3 cursor-pointer' />
        </div>
    ) : null
}



export default SearchBar