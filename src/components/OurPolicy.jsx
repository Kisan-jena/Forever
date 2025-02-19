import 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700' >
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold' >Easy exchaange policy</p>
        <p className='text-gray-400'>Hassle free exchange policy</p>
      </div>

      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold' >7 Days return policy</p>
        <p className='text-gray-400'>7 Days free return policy</p>
      </div>

      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold' >Best customer Support</p>
        <p className='text-gray-400'>24/7 customer support</p>
      </div>

    </div>
  )
}

export default OurPolicy
