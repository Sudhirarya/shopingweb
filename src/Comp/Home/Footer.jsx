import React from 'react'


import logo from '../../img/logo_white.png'

function Footer() {
  return (
    <>
    <div className='footer_outer container-fluid px-4'><h1 className='py-2 text-center'>Contact us.</h1><hr/>

    <div className='footer mt-5'>

    <div className='footer-cont'>
    <img src={logo} className='my-4' alt="logo" style={{width:'15rem',marginLeft:'3rem'}} />
    <p>🛍️ Welcome to OpealShoping! Your Ultimate Destination for Online Shopping! 🛒

Discover a world of convenience and style as you navigate through our user-friendly online store. At [Shopping Website Name], we strive to redefine your shopping experience with a seamless blend of variety, quality, and innovation.</p>
    
    </div>
    <div className='footer-cont'>
        <p><strong>Wide Selection:</strong> Explore a curated collection of the latest fashion trends, electronics, home essentials, and more. We've got something for everyone!
<br/><br/>
           <strong>Secure Shopping:</strong> Shop with confidence! Our secure payment gateways ensure a safe and protected transaction every time you make a purchase.
<br/><br/>
           <strong>Fast Shipping:</strong> Say goodbye to long waits! Enjoy swift and reliable delivery to your doorstep. We value your time as much as you do.
<br/><br/>
           </p>
    </div>
    <div className='footer-cont'>
        <p><strong>Customer Support:</strong> Have a question or need assistance? Our 
           dedicated customer support team is ready to assist you. Your satisfaction is our priority.</p>
        <strong>Mobile no.</strong> +91-00-0000-0000 <br />
        <strong>Email Id.</strong> OpealShoping@gmail.com <br />
        <strong>WebSite.</strong> WWW.OperalShoping.in.com
    </div>
    
    </div></div>
    </>
  )
}

export default Footer