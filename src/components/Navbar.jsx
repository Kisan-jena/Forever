// import { assets } from '../assets/assets';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div className='flex items-center justify-between py-5 font-medium'>
      
//       <img src={assets.logo} className='w-36' alt="Logo" />

//       <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >

//         <NavLink to="/" className="flex flex-col items-center gap-1" >
//           <p>HOME</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
//         </NavLink>

        
//         <NavLink to="/collection" className="flex flex-col items-center gap-1" >
//           <p>COLLECTION</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
//         </NavLink>

        
//         <NavLink to="about" className="flex flex-col items-center gap-1" >
//           <p>ABOUT</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
//         </NavLink>
        
//         <NavLink to="/contact" className="flex flex-col items-center gap-1" >
//           <p>CONTACT</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
//         </NavLink>

//       </ul>
//     </div>
//   );
// };

// export default Navbar;


//^ Efficient or less code to do above same logic


import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "COLLECTION", path: "/collection" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" }
];

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <img src={assets.logo} className='w-36' alt="Logo" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.path} className="flex flex-col items-center gap-1">
            <p>{link.name}</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        ))}
      </ul>

    </div>
  );
};

export default Navbar;
