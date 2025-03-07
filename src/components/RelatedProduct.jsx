/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import 'react'
import { useContext, useEffect, useState } from 'react'
import { ProductItem } from './ProductItem'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const RelatedProduct = ({ category, subCategory, currentProductId }) => {
  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  const getRelatedProducts = () => {
    if (!products || !category || !subCategory) return;

    // Filter products with same category and subCategory, excluding current product
    const filteredProducts = products.filter(item => 
      item.category === category && 
      item.subCategory === subCategory && 
      item._id !== currentProductId
    );

    // Get up to 4 related products
    setRelated(filteredProducts.slice(0, 5));
  };


  useEffect(() => {
    getRelatedProducts();
  }, [products, category, subCategory, currentProductId]);

  // Don't render anything if no related products
  if (!related || related.length === 0) {
    return null
  }

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'Related'} text2={'Products'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Explore similar products that complement your choices. Find top-rated items that match your style and needs.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 gap-y-6 mt-8'>
        {related.map((item) => (
          <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct
