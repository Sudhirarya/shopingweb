import React from 'react'
import Buying from '../Card/Buying'
import { useParams } from 'react-router-dom'
import { getGirl } from '../Data/girl';
import { useCart } from 'react-use-cart';

function Womanbuy() {
    let pro = useParams();
    let dis = getGirl(parseInt(pro.WomanId))
    const {addItem} = useCart();
  return (
    <Buying 
    image={dis.image}
    title={dis.title}
    price={dis.price}
    btn={()=> addItem(dis)}
    />
  )
}

export default Womanbuy