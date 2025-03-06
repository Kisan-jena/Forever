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
import { Link,NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "COLLECTION", path: "/collection" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" }
];

const Navbar = () => {

  const [visible,setVisble]=useState(false)
  const {setShowSearch}=useContext(ShopContext)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      {/* Logo */}
      <Link to='/'  >
        <img src={assets.logo} className='w-36' alt="Logo" />
      </Link>


      {/* Desktop Navigation */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.path} className="flex flex-col items-center gap-1">
            <p>{link.name}</p>
            <hr className='w-2/4 border-none h-[0.5px] bg-gray-700 hidden' />
          </NavLink>
        ))}
      </ul>


      {/* Icons & Sidebar Menu */}
      <div className='flex item-center gap-6 ' >
        <img onClick={()=>setShowSearch(value=>!value)} src={assets.search_icon} className='w-5 cursor-pointer'  alt="" />

        <div className='group relative' >
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
          {/* Profile Dropdown */}
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4' >
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-400 rounded' >
              <p className='cursor-pointer hover:text-black' >My Profile</p>
              <p className='cursor-pointer hover:text-black' >Orders </p>
              <p className='cursor-pointer hover:text-black' >logout</p>
            </div> 
          </div>
        </div>

        {/* Cart */}
        <Link to='/cart' className='relative' >
        <img src={assets.cart_icon} className='w-5 min-w-5'  alt="" />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>2</p>
        </Link>

        {/* Mobile Menu Icon */}
        <img onClick={()=>setVisble(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu" />
      </div>

      {/* sidebar menu for small screen (we will use dynamic class) */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white transition-transform duration-300 ${visible ? "translate-x-0 w-64" : "translate-x-full w-0"} `} >

        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisble(false)} className='flex items-center gap-4 p-3 cursor-pointer ' >
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
            <p>Back</p>
          </div>
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.path} onClick={() => setVisble(false)}className="py-2 pl-6 border transition-all hover:text-black">
              {link.name}
            </NavLink>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
