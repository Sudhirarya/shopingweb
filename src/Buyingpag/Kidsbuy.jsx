import React from 'react'
import { useParams } from 'react-router-dom'
import { getKid } from '../Data/Kide';
import Buying from '../Card/Buying';
import { useCart } from 'react-use-cart';


function Kidsbuy() {
    let kidid=useParams();
    let kido= getKid(parseInt(kidid.KidsId))
    const {addItem} =useCart();
  return (
    <Buying 
    image={kido.image}
    title={kido.title}
    price={kido.price}
    btn={()=> addItem(kido)}
    />
  )
}

export default Kidsbuy