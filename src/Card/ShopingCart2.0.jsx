import React from 'react'

const ShopingCart = () => {
    return (
        <div className='d-flex justify-content-evenly gap-3 flex-wrap mt-5' >
            <div className='' style={{ maxWidth: '950px' }}>
                <h1 className='my-3'>Shoping Cart</h1>
                <div className='py-4 px-5 d-flex flex-wrap gap-5 border justify-content-around align-items-center'>
                    <div><img src="https://pixlr.com/img/general/e-icon.svg" alt="" style={{ width: '100px' }} /></div>
                    <div className='px-3'><div>Product name</div>
                        <div>Product detail</div>
                    </div>
                    <div>
                        <button className='btn border-primary border rounded-circle px-3 py-0'><h3>-</h3></button>
                        <input className='mx-3' type="text" style={{ width: '40px' }} />
                        <button className='btn border-primary border rounded-circle py-0'><h3>+</h3></button>
                    </div>
                    <div>Price: Rs.2500</div>
                    <div><button className='btn btn-secondary'>Remove</button></div>
                </div>


            </div>
            <div className='' style={{ width: '400px' }}>
                <h2 className='mb-5'>Price Details</h2>
                <div className='d-flex gap-5 justify-content-between'>
                    <div>
                        <p>Price (2 items)</p>
                        <p>Descount</p>
                        <p> Delivery Charges </p>
                    </div>
                    <div>
                        <p>1800</p>
                        <p>-4000</p>
                        <p>free</p>
                        
                    </div></div><hr style={{height:'2px'}} /> 
                    <div className='d-flex justify-content-between mx-3'>
                        <h2 className='p-0 m-0'>Total</h2>
                        <h4>Rs. 1800</h4>
                    </div>

            </div>

        </div>
    )
}

export default ShopingCart