/* eslint-disable react/prop-types */
import  'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3' >
      <p className='text-gray-500'> {text1}
        <span className='text-gray-700 font-medium' >
            {text2}
        </span>
      </p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700' ></p>
    </div>
  )
}
export default Title

//^ instead of props we can do as children
// import 'react';

// const Title = ({ children }) => {
//   return (
//     <div className='inline-flex gap-2 items-center mb-3'>
//       <p className='text-gray-500'>
//         {children[0]} <span className='text-gray-700 font-medium'>{children[1]}</span>
//       </p>
//       <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
//     </div>
//   );
// };

// export default Title;

//^ But in above case if we have to use in LastestCollection file then it will be like
// return (
//     <div className='my-10'>
//         <div className='text-center py-8 text-3xl'>
//             {/* Instead of props, pass children */}
//             <Title>
//                 <span>LATEST</span>
//                 <span>Collection</span>
//             </Title>

//             <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab minus quia numquam nesciunt sapiente reprehenderit harum laborum asperiores. Cum, dolore. Optio molestiae obcaecati laboriosam culpa inventore sed at nam doloribus.
//             </p>
//         </div>
//     </div>
// );