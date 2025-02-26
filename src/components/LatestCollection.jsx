// eslint-disable react-hooks/exhaustive-deps
import  'react'
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { ProductItem } from './ProductItem.jsx';

const LatestCollection = () => {
  const [latestProducts,setLatestProducts]=useState([])
  const {products}=useContext(ShopContext);

  // useEffect(() => {
  //   if (products.length > 0) {
  //     const startIndex = Math.max(0, Math.floor(Math.random() * (products.length - 9))); // Ensures at least 10 products exist
  //     setLatestProducts(products.slice(startIndex, startIndex + 10));
  //   }
  // }, [products]); //^ Ensures new products update the component

  useEffect(() => {
    // Function to update latest products
    const updateLatestProducts = () => {
      if (products.length > 0) {
        setLatestProducts(products.slice(10, 20));
      }
    };

    updateLatestProducts();

    // Cleanup function
    return () => {
      setLatestProducts([]); // Clear products when component unmounts
    };
  }, [products]); // Dependency array to respond to product updates
    // empty array means it will mount one time when components loaded

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl' >
        <Title text1={"LATEST "} text2={"Collection"}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our newest arrivals and find the perfect addition to your style. Fresh trends, just for you!
          </p>
      </div>

      {/* rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6  ' >
        {latestProducts.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>

    </div>
  )
}

export default LatestCollection



// ^ Can be done by this approach
// import { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';

// const LatestCollection = () => {
//     const { products } = useContext(ShopContext);

//     return (
//         <SectionContainer children={
//             <div className='my-10'>
//                 <div className='text-center py-8 text-3xl'>
//                     <Title text1={"LATEST"} text2={"Collection"} />
//                     <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus quia numquam nesciunt sapiente reprehenderit harum laborum asperiores. Cum, dolore. Optio molestiae obcaecati laboriosam culpa inventore sed at nam doloribus.
//                     </p>
//                 </div>
//             </div>
//         } />
//     );
// };

// // Wrapper Component (Similar to `Card` in Your Example)
// const SectionContainer = ({ children }) => {
//     return (
//         <div className="container mx-auto p-4">
//             {children}
//         </div>
//     );
// };

// export default LatestCollection;
