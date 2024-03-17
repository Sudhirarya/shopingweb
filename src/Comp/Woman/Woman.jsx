import React from 'react'
import Carousel from '../../Comp/Home/Carousel'
import img1 from '../../img/fashion/girl/girl/sl(1).jpg'
import img2 from '../../img/fashion/girl/girl/sl(2).jpg'
import img3 from '../../img/fashion/girl/girl/sl(3).jpg'

import img4 from '../../img/fashion/girl/girl/bi(1).jpg'
import img5 from '../../img/fashion/girl/girl/bi(1).webp'
import img6 from '../../img/fashion/girl/girl/bi(2).webp'
import img7 from '../../img/fashion/girl/girl/bi(3).webp'
import img8 from '../../img/fashion/girl/girl/bi(4).webp'
import img9 from '../../img/fashion/girl/girl/bi(5).webp'

import ig4 from '../../img/fashion/girl/girl/ca(1).jpg'
import ig5 from '../../img/fashion/girl/girl/ca(2).jpg'
import ig6 from '../../img/fashion/girl/girl/ca(3).jpg'
import ig7 from '../../img/fashion/girl/girl/ca(4).jpg'
import ig8 from '../../img/fashion/girl/girl/ca(5).jpg'
import ig9 from '../../img/fashion/girl/girl/ca(6).jpg'

//  WESTERN WEAR
import i0 from '../../img/fashion/girl/girl/wd(1).jpg'
import i1 from '../../img/fashion/girl/girl/wd(2).jpg'

import i3 from '../../img/fashion/girl/girl/wd(4).jpg'
import i4 from '../../img/fashion/girl/girl/wd(5).jpg'
import i5 from '../../img/fashion/girl/girl/wd(6).webp'
//  Indian wiears
import im0 from '../../img/fashion/girl/girl/in(1).jpg'
import im1 from '../../img/fashion/girl/girl/in(2).jpg'
import im2 from '../../img/fashion/girl/girl/in(3).jpg'
import im3 from '../../img/fashion/girl/girl/in(4).jpg'
import im4 from '../../img/fashion/girl/girl/in(5).jpg'
// shoes
import sh0 from '../../img/fashion/man/man/sh(1).jpg'
import sh1 from '../../img/fashion/man/man/sh(2).jpg'
import sh2 from '../../img/fashion/man/man/sh(3).jpg'
import sh3 from '../../img/fashion/man/man/sh(4).jpg'
import sh4 from '../../img/fashion/man/man/sh(5).jpg'
import sh5 from '../../img/fashion/man/man/sh(6).jpg'
import { Link } from 'react-router-dom'


const Woman = () => {
    return (
        <main>
            <Carousel
                img1={img1}
                img2={img2}
                img3={img3}
            />
            <div className='m-4'>
                <h2 className='m-3'>BIGGEST DEALS ON TOP BRANDS</h2>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <Link to='/womanG'><img className='my-2 card' src={img4} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/womanG'><img className='my-2 card' src={img5} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/womanG'><img className='my-2 card' src={img6} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/womanG'><img className='my-2 card' src={img7} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/womanG'><img className='my-2 card' src={img8} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/womanG'><img className='my-2 card' src={img9} alt="" style={{ width: '200px' }} /></Link>
                </div>
            </div>


            <div className='m-4'>
                <h2 className='m-3'>CATEGORIES TO BAG</h2>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <Link to='/womanG'><img className='my-2 card' src={ig4} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/womanG'><img className='my-2 card' src={ig5} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/womanG'><img className='my-2 card' src={ig6} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/womanG'><img className='my-2 card' src={ig7} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/womanG'><img className='my-2 card' src={ig8} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/womanG'><img className='my-2 card' src={ig9} alt="" style={{ width: '200px' }} /></Link>
                </div>
            </div>

            <div className='m-4'>
                <h2 className='m-3'>TRENDING IN WESTERN WEAR</h2>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <Link to='/womanG'><div className="card" style={{ width: "15rem" }}>
                        <img src={i0} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Western Wear</h5>
                        </div></div></Link>

                   <Link to='/womanG'> <div className="card" style={{ width: "15rem" }}>
                        <img src={i1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Western Wear</h5>
                        </div></div></Link>


                   <Link to='/womanG'> <div className="card" style={{ width: "15rem" }}>
                        <img src={i3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Western Wear</h5>
                        </div></div></Link>

                    <Link to='/womanG'><div className="card" style={{ width: "15rem" }}>
                        <img src={i4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Western Wear</h5>
                        </div></div></Link>

                    <Link to='/womanG'><div className="card" style={{ width: "15rem" }}>
                        <img src={i5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Western Wear</h5>
                        </div></div></Link>
                </div>
            </div>


            <div className='m-4'>
                <h2 className='m-3'>TRENDING IN INDIAN WEAR</h2>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <Link to='/womanG'><div className="card" style={{ width: "15rem" }}>
                        <img src={im0} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/womanG'> <div className="card" style={{ width: "15rem" }}>
                        <img src={im1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/womanG'> <div className="card" style={{ width: "15rem" }}>
                        <img src={im2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/womanG'> <div className="card" style={{ width: "15rem" }}>
                        <img src={im3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                    <Link to='/womanG'><div className="card" style={{ width: "15rem" }}>
                        <img src={im4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                    
                </div>
            </div>
{/*  TRENDING IN FOOTWEAR */}
            <div className='m-4'>
                <h2 className='m-3'>TRENDING IN FOOTWEAR</h2>

                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                 <Link to='/womanG'><div className="card" style={{ width: "12rem" }}>
                        <img src={sh0} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/womanG'> <div className="card" style={{ width: "12rem" }}>
                        <img src={sh1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/womanG'> <div className="card" style={{ width: "12rem" }}>
                        <img src={sh2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/womanG'> <div className="card" style={{ width: "12rem" }}>
                        <img src={sh3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                    <Link to='/womanG'><div className="card" style={{ width: "12rem" }}>
                        <img src={sh4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>

                   <Link to='/womanG'> <div className="card" style={{ width: "12rem" }}>
                        <img src={sh5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div></Link>
                </div>

            </div>
        </main>
    )
}

export default Woman