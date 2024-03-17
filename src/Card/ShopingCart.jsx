import React from 'react'
import { useCart } from "react-use-cart";
import CartCArd from './CartCArd';
const ShopingCart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
      } = useCart();
  return (
   <>
{/* <h1>My Shoping Cart ( <small>{totalItems}</small> )</h1> */}
    {items.map((as)=>{
        return(
            <CartCArd
            key={as.id}
            pname={as.title}
            sub={() => updateItemQuantity(as.id, as.quantity - 1)}
            qun={as.quantity}
            add={() => updateItemQuantity(as.id, as.quantity  + 1)}
            img={as.image}
            color={as.color}
            pprice={as.price}
            total={as.quantity * as.price}
            delete={()=>removeItem(as.id)}
            />
        )
    })}
   </>
  )
}

export default ShopingCart