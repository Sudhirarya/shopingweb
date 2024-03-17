import React, { Component } from 'react'
import ShopingCart from './ShopingCart'
import { useCart } from 'react-use-cart'
import impty from '../img/preview.png'



function Scart() {
    const { totalItems, cartTotal, isEmpty } = useCart();
    if (isEmpty) return (
          <center><h1>Your cart it empty</h1> <img className='' src={impty} alt="" style={{maxWidth:'500px'}} /></center>


    )
    return (
        <main className='pb-4'>
            <h1 className='m-4 text-center'>My Shoping Cart ( <small>{totalItems}</small> )</h1>
            <div className='d-flex justify-content-evenly gap-3 flex-wrap mt-5' >
                <div><ShopingCart /></div>
                <div className='' style={{ width: '400px' }}>
                    <h2 className='mb-5'>Price Details</h2>
                    <div className='d-flex gap-5 justify-content-between'>
                        <div>
                            <p>Price ({totalItems} items)</p>
                            <p>Descount</p>
                            <p> Delivery Charges </p>
                        </div>
                        <div>
                            <p>{cartTotal}</p>
                            <p>-000</p>
                            <p>free</p>

                        </div></div><hr style={{ height: '2px' }} />
                    <div className='d-flex justify-content-between mx-3'>
                        <h2 className='p-0 m-0'>Total</h2>
                        <h4>Rs. {cartTotal}</h4>
                    </div>

                </div>

            </div></main>
    )
}
export default Scart
