import 'react'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'

import { MdVerified } from "react-icons/md"; // Verified/Original Product Icon
import { FaTruck } from "react-icons/fa"; // Truck for Cash on Delivery
import { MdCached } from "react-icons/md"; // Exchange Policy Icon
import { toast } from 'react-toastify'


const Product = () => {
  const { productId } = useParams()
  const { products, currency ,addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please select a size before adding to cart!");
      return;
    }
    addToCart(productData._id, size);
  };

  useEffect(() => {
    const fetchProductData = () => {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
      }
    };

    if (products.length > 0 && productId) {
      fetchProductData();
    }
  }, [productId, products]);

  if (!productData) {
    return <div className='min-h-screen flex items-center justify-center'>Loading...</div>;
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex flex-col sm:h-[320px] overflow-y-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
            {
            productData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} alt='' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
            ))
            }
          </div>
          <div className='w-full sm:w-[75%]'>
            <img className='w-full h-auto' src={image} alt='' />
          </div>
        </div>

        {/* Product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_dull_icon} alt='' className='w-3 5' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          {/* Size Diplay div */}
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border p-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* Add to cart button */}
          <button onClick={handleAddToCart} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p><MdVerified className="inline-block text-gray-500 text-lg mr-2" /> 100% Original product</p>
              <p><FaTruck className="inline-block text-gray-500 text-lg mr-2" /> Cash on delivery is available on this product</p>
              <p><MdCached className="inline-block text-gray-500 text-lg mr-2" /> Easy return and exchange policy within 7 days</p>
          </div>
        </div>

      </div>

      {/* Description and Reviews */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productId}/>
    </div>
  )
}

export default Product
