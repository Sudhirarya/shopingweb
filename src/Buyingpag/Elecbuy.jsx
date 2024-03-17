import React from 'react'
import Buying from '../Card/Buying'
import { useParams } from 'react-router-dom'
import { getElec } from '../Data/know';
import { useCart } from 'react-use-cart';

function Elecbuy() {
    let usp = useParams();
    let ele = getElec(parseInt(usp.ElectronicId))
    const {addItem} = useCart();
  return (
    <Buying
    image={ele.image}
    title={ele.title}
    price={ele.price}
    btn={()=> addItem(ele)}
    />
  )
}

export default Elecbuy