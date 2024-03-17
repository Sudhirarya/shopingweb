import React from 'react'
import { useParams } from 'react-router-dom'
import { getMan } from '../Data/Man'
import { useCart } from 'react-use-cart'

const ShopingPag = () => {
  let pro= useParams();
  let dis= getMan(parseInt(pro.ProductId))
  const {addItem}=useCart();
  return (
    <div className="card mb-3" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={dis.image} className="img-fluid rounded-start p-3" alt="..." style={{ width: "350px" }} />
                    </div>
                    <div className="col-md-7 m-2">
                        <div className="card-body">
                            <p className='card-title'>Brand name</p>
                            <h1 className="card-title">{dis.title}</h1>
                            <h4 className="card-text">Rs. {dis.price}</h4>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <p className='card-text'>size: <span className='mx-2 p-1 border-2 rounded-pill px-2 border'>S</span>
                                <span className='mx-2 p-1 border-2 rounded-pill px-2  border'>M</span>
                                <span className='mx-2 p-1 border-2 rounded-pill px-2 border'>XXL</span> </p>

                            <div className='card-body'>
                                <h5>Available offers</h5>
                                <p className='card-text'> <strong> Bank Offer10% </strong> off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above</p>
                                <p className='card-text'> <strong> Bank Offer10% </strong> off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above</p>
                                <p className='card-text'> <strong> Bank Offer10% </strong> off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above</p>
                                <p className='card-text'> <strong> Bank Offer10% </strong> off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and above</p>
                            </div>

                            <div className='d-flex jus justify-content-evenly'>
                                <button className='card-text btn btn-primary' onClick={() => addItem(dis)}>Add to Cart</button>
                                <button className='card-text btn btn-primary'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ShopingPag