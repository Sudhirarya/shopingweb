import React from 'react'
import Carousel from '../Comp/Home/Carousel'
import img1 from '../img/fashion/man/man/a(1).jpg'
import img2 from '../img/fashion/man/man/a(2).jpg'
import img3 from '../img/fashion/man/man/a(3).jpg'
import img4 from '../img/fashion/man/man/bi(1).jpg'
import img5 from '../img/fashion/man/man/bi(2).webp'
import img6 from '../img/fashion/man/man/bi(2).jpg'
import img7 from '../img/fashion/man/man/bi(3).webp'
import img8 from '../img/fashion/man/man/bi(3).jpg'
import img9 from '../img/fashion/man/man/bi(4).jpg'
//  Indian wiears
import im0 from '../img/fashion/man/man/in(1).jpg'
import im1 from '../img/fashion/man/man/in(2).jpg'
import im2 from '../img/fashion/man/man/in(3).jpg'
import im3 from '../img/fashion/man/man/in(4).jpg'
import im4 from '../img/fashion/man/man/in(5).jpg'
import im5 from '../img/fashion/man/man/in(6).jpg'
// shoes
import sh0 from '../img/fashion/man/man/sh(1).jpg'
import sh1 from '../img/fashion/man/man/sh(2).jpg'
import sh2 from '../img/fashion/man/man/sh(3).jpg'
import sh3 from '../img/fashion/man/man/sh(4).jpg'
import sh4 from '../img/fashion/man/man/sh(5).jpg'
import sh5 from '../img/fashion/man/man/sh(6).jpg'


const Redigine = () => {
    return (
        <main>
            <Carousel
                img1={img1}
                img2={img2}
                img3={img3}
            />
            <div className='m-4'>
                <h2 className='m-3'>CATEGORIES TO BAG</h2>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <img className='my-2 card' src={img4} alt="" style={{ width: '200px' }} />
                    <img className='my-2 card' src={img5} alt="" style={{ width: '200px' }} />
                    <img className='my-2 card' src={img6} alt="" style={{ width: '200px' }} />
                    <img className='my-2 card' src={img7} alt="" style={{ width: '200px' }} />
                    <img className='my-2 card' src={img8} alt="" style={{ width: '200px' }} />
                    <img className='my-2 card' src={img9} alt="" style={{ width: '200px' }} />
                </div>
            </div>
            <div className='m-4'>
                <h2 className='m-3'>TRENDING IN INDIAN WEAR</h2>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <div className="card" style={{ width: "12rem" }}>
                        <img src={im0} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>

                    <div className="card" style={{ width: "12rem" }}>
                        <img src={im1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>

                    <div className="card" style={{ width: "12rem" }}>
                        <img src={im2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>

                    <div className="card" style={{ width: "12rem" }}>
                        <img src={im3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>

                    <div className="card" style={{ width: "12rem" }}>
                        <img src={im4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>

                    <div className="card" style={{ width: "12rem" }}>
                        <img src={im5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>
                </div>
            </div>
{/*  TRENDING IN FOOTWEAR */}
            <div className='m-4'>
                <h2 className='m-3'>TRENDING IN FOOTWEAR</h2>

                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <div className="card" style={{ width: "12rem" }}>
                        <img src={0} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>

                    <div className="card" style={{ width: "12rem" }}>
                        <img src={1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>

                    <div className="card" style={{ width: "12rem" }}>
                        <img src={2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>

                    <div className="card" style={{ width: "12rem" }}>
                        <img src={3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>

                    <div className="card" style={{ width: "12rem" }}>
                        <img src={4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>

                    <div className="card" style={{ width: "12rem" }}>
                        <img src={5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian wear</h5>
                        </div></div>
                </div>

            </div>
        </main>
    )
}

export default Redigine