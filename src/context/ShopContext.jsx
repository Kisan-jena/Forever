/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext=createContext();


const ShopContextprovider=({children})=>{
    const currency="Rs";
    const delivery_fee=10;

    return (
        <ShopContext.Provider value={{products,currency,delivery_fee}} >
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextprovider

//^ same function using props instead of  Destructing
// const ShopContextprovider = (props) => {  
//     return (
//         <ShopContext.Provider value={{products,currency,delivery_fee}}>
//             {props.children}  
//         </ShopContext.Provider>
//     );
// };


// ^ Same function using normal function instead of arrow function
// function ShopContextProvider(props) {  
//     return (
//         <ShopContext.Provider value={{products,currency,delivery_fee}}>
//             {props.children}  
//         </ShopContext.Provider>
//     );
// }