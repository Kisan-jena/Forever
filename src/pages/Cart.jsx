import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';

const Cart = () => {
  const { products, currency, cartItems} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        if (cartItems[item][size] > 0) {
          tempData.push({
            _id: item,
            size: size,
            quantity: cartItems[item][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 ">
      <div className=" text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {/* Cart Items      */}

      <div>
        {cartData.map((item, index) => {
          const productsData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}className="py-3 border-b border-t text-gray-700 grid  grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
              <div className="flex items-start gap-6">
                <img src={productsData.image[0]} alt="" className="w-16 sm:w-20"/>
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productsData.name}
                  </p>

                  <div className="flex items-center gap-5 mt-2">
                    <p className=" ">{currency} {productsData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 ">{item.size}</p>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Cart;