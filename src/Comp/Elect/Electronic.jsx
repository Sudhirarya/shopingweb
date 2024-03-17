import React from 'react'
import Carousel from '../../Comp/Home/Carousel'
import img1 from '../../img/fashion/electo/electo/sl(1).jpeg'
import img2 from '../../img/fashion/electo/electo/sl(2).jpeg'
import img3 from '../../img/fashion/electo/electo/sl(3).jpeg'
// mobile
import img4 from '../../img/fashion/electo/electo/mb(1).jpeg'
import img5 from '../../img/fashion/electo/electo/mb(2).jpeg'
import img6 from '../../img/fashion/electo/electo/mb(3).jpeg'
import img7 from '../../img/fashion/electo/electo/mb(4).jpeg'
import img8 from '../../img/fashion/electo/electo/mb(5).jpeg'

//  Indian wiears
import im0 from '../../img/fashion/electo/electo/tv(1).jpeg'
import im1 from '../../img/fashion/electo/electo/tv(2).jpeg'
import im2 from '../../img/fashion/electo/electo/tv(3).jpeg'
import im3 from '../../img/fashion/electo/electo/tv(4).jpeg'
import im4 from '../../img/fashion/electo/electo/tv(5).jpeg'
// shoes
import sh0 from '../../img/fashion/man/man/sh(1).jpg'
import sh1 from '../../img/fashion/man/man/sh(2).jpg'
import sh2 from '../../img/fashion/man/man/sh(3).jpg'
import sh3 from '../../img/fashion/man/man/sh(4).jpg'
import sh4 from '../../img/fashion/man/man/sh(5).jpg'
import sh5 from '../../img/fashion/man/man/sh(6).jpg'
import { Link } from 'react-router-dom'


const Electronic = () => {
    return (
        <main>
            <Carousel
                img1={img1}
                img2={img2}
                img3={img3}
            />
            <div className='m-4'>
                <h2 className='m-3'>Mobile</h2>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <Link to='/electronicH'>
                    <div className="card" style={{ width: "12rem" }}>
                        <img src={img4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Poco</h5>
                        </div></div>
                    </Link>
                    <Link to='/electronicH'>
                    <div className="card" style={{ width: "12rem" }}>
                        <img src={img5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Apple</h5>
                        </div></div></Link>
                    <Link to='/electronicH'>
                    <div className="card" style={{ width: "12rem" }}>
                        <img src={img6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Vivo</h5>
                        </div></div></Link>
                    <Link to='/electronicH'>
                    <div className="card" style={{ width: "12rem" }}>
                        <img src={img7} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Moto-G</h5>
                        </div></div></Link>
                    <Link to='/electronicH'><div className="card" style={{ width: "12rem" }}>
                        <img src={img8} className="card-img-top p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pco C51</h5>
                        </div></div></Link>
                </div>
            </div>
            <div className='m-4'>
                <h2 className='m-3'>TRENDING IN INDIAN WEAR</h2>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <Link to='/electronicH'><div className="card" style={{ width: "12rem" }}>
                        <img src={im0} className="card-img-top" alt="..." style={{height:'150px'}} />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/electronicH'> <div className="card" style={{ width: "12rem" }}>
                        <img src={im1} className="card-img-top" alt="..." style={{height:'150px'}} />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/electronicH'> <div className="card" style={{ width: "12rem" }}>
                        <img src={im2} className="card-img-top" alt="..." style={{height:'150px'}} />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/electronicH'> <div className="card" style={{ width: "12rem" }}>
                        <img src={im3} className="card-img-top" alt="..." style={{height:'150px'}} />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                    <Link to='/electronicH'><div className="card" style={{ width: "12rem" }}>
                        <img src={im4} className="card-img-top " alt="..." style={{height:'150px'}} />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                     
                </div>
            </div>
{/*  TRENDING IN FOOTWEAR */}
            <div className='m-4'>
                <h2 className='m-3'>TRENDING IN FOOTWEAR</h2>

                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                 <Link to='/electronicH'><div className="card" style={{ width: "12rem" }}>
                        <img src={sh0} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/electronicH'> <div className="card" style={{ width: "12rem" }}>
                        <img src={sh1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/electronicH'> <div className="card" style={{ width: "12rem" }}>
                        <img src={sh2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/electronicH'> <div className="card" style={{ width: "12rem" }}>
                        <img src={sh3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                    <Link to='/electronicH'><div className="card" style={{ width: "12rem" }}>
                        <img src={sh4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/electronicH'> <div className="card" style={{ width: "12rem" }}>
                        <img src={sh5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>
                </div>

            </div>
        </main>
    )
}

export default Electronic