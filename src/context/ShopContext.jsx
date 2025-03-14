/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext=createContext();


const ShopContextprovider=({children})=>{
    const currency="$";
    const delivery_fee=10;
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(true)
    const [cartItems,setCartitems]=useState({})
    const navigate=useNavigate()

    const addToCart=(itemId,size)=>{
        let cartData=structuredClone(cartItems)

        if (cartData[itemId]){
            if (cartData[itemId][size]){
                cartData[itemId][size]+=1
            }else{
                cartData[itemId][size]=1
            }
        }else{
            cartData[itemId]={}
            cartData[itemId][size]=1
        }
        setCartitems(cartData)
        console.log(cartData)
    }

    const getCartCount=()=>{
        let totalCount=0
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item]
                    }
                }catch (error){
                    toast.error("something happen")
                }
            }
        }
        return totalCount
    }

    const updateQuantity=(itemId,size,quantity) => {
        const cartData=structuredClone(cartItems)
        
        cartData[itemId][size]=quantity
        setCartitems(cartData)
    }

    const getCartAmount=()=>{
        let totalAmount=0
        for (const items in cartItems){
            let itemInfo=products.find((product)=>product._id===items)
            for (const item in cartItems[items]){
                try {
                    if (cartItems[items][item]>0){
                        totalAmount=totalAmount+itemInfo.price*cartItems[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalAmount
    }

    const value={
        updateQuantity,getCartCount,products,currency,
        delivery_fee,search,setSearch,showSearch,navigate,
        setShowSearch,cartItems,addToCart,getCartAmount
    }

    return (
        <ShopContext.Provider value={value} >
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