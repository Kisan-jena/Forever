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

import { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "COLLECTION", path: "/collection" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" }
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch,getCartCount } = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 px-4 sm:px-8 font-medium bg-white'>
      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} className='w-28 sm:w-36' alt='Logo' />
      </Link>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex gap-6 text-sm text-gray-700'>
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.path} className='flex flex-col items-center gap-1 hover:text-black'>
            {link.name}
            <hr className='w-2/4 border-none h-[0.5px] bg-gray-700 hidden' />
          </NavLink>
        ))}
      </ul>

      {/* Icons & Sidebar Menu */}
      <div className='flex items-center gap-5'>
        <img onClick={() => setShowSearch((prev) => !prev)} src={assets.search_icon} className='w-5 cursor-pointer' alt='Search' />

        <div className='relative group'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt='Profile' />
          {/* Profile Dropdown */}
          <div className='absolute right-0 hidden group-hover:block bg-white shadow-lg rounded-md w-40 p-3'>
            <p className='cursor-pointer hover:text-black py-1'>My Profile</p>
            <p className='cursor-pointer hover:text-black py-1'>Orders</p>
            <p className='cursor-pointer hover:text-black py-1'>Logout</p>
          </div>
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5' alt='Cart' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white rounded-full text-xs'>{getCartCount()}</p>
        </Link>

        {/* Mobile Menu Icon */}
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-6 cursor-pointer md:hidden' alt='Menu' />
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${visible ? "translate-x-0 w-64" : "translate-x-full w-0"}`}>
        <div className='flex flex-col text-gray-600 h-full'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer bg-gray-100'>
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt='Back' />
            <p>Back</p>
          </div>
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.path} onClick={() => setVisible(false)} className='py-3 pl-6 border-b hover:text-black'>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
