/* eslint-disable react/prop-types */
import  'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from "react-router-dom"

export const ProductItem = ({id,image,name,price}) => {

    const {currency}=useContext(ShopContext)
    return (
    <div>
      <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`} >
      <div className='overflow-hidden' >
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        <p className='pt-3 pb-1 text-sm' >{name}</p>
        <p className='text-sm font-medium' >{price}{currency}</p>
      </div>
      </Link>
    </div>
  )
}
