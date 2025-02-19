import 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="Company Logo" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Explore a wide range of products and enjoy seamless shopping with us. Quality you trust, deals you love!
                </p>
            </div>

            <div >
                <p className='text-xl font-medium mb-5' >Company</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5' >Contact us</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>+91 9321505511</li>
                    <li>kisan.k.k.jena.01@gmial.com</li>
                </ul>
            </div>            
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center' >Copyright 2025 forever.com -All Right Reserves  </p>
        </div>

    </div>
  )
}

export default Footer
