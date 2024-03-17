import React from 'react';
import { Link } from 'react-router-dom'
import Carousel from '../../Comp/Home/Carousel'
import img1 from '../../img/fashion/kids/kids/sl(2).webp'
import img2 from '../../img/fashion/kids/kids/sl(1).webp'
import img3 from '../../img/fashion/kids/kids/sl(3).webp'
//  price range
import img4 from '../../img/fashion/kids/kids/of(1).jpg'
import img5 from '../../img/fashion/kids/kids/of(2).jpg'
import img6 from '../../img/fashion/kids/kids/of(3).jpg'
import img7 from '../../img/fashion/kids/kids/of(4).jpg'
import img8 from '../../img/fashion/kids/kids/of(5).jpg'
//  FASHION Kids
import im0 from '../../img/fashion/kids/kids/cl(1).jpg'
import im1 from '../../img/fashion/kids/kids/cl(2).jpg'
import im2 from '../../img/fashion/kids/kids/cl(3).jpg'
import im3 from '../../img/fashion/kids/kids/cl(4).jpg'
import im4 from '../../img/fashion/kids/kids/cl(5).jpg'
import im5 from '../../img/fashion/kids/kids/cl(6).jpg'
import im6 from '../../img/fashion/kids/kids/cl(7).jpg'
import im7 from '../../img/fashion/kids/kids/cl(8).jpg'
import im8 from '../../img/fashion/kids/kids/cl(9).jpg'
import im9 from '../../img/fashion/kids/kids/cl(10).jpg'
// shoes
import sh0 from '../../img/fashion/kids/kids/ki1.jpg'
import sh1 from '../../img/fashion/kids/kids/ki2.jpg'
import sh2 from '../../img/fashion/kids/kids/ki3.jpg'
import sh3 from '../../img/fashion/kids/kids/ki4.jpg'
import sh4 from '../../img/fashion/kids/kids/ki5.jpg'
import sh5 from '../../img/fashion/kids/kids/ki6.jpg'

import kd1 from '../../img/fashion/kids/kids/kd1.jpg'
import kd2 from '../../img/fashion/kids/kids/kd2.jpg'



const Kid = () => {
    return (
        <main>
            <Carousel
                img1={img1}
                img2={img2}
                img3={img3}
            />
            <hr />
            <div className='m-4'>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <Link to='/kisdh'><img className='my-2 card' src={img4} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/kisdh'><img className='my-2 card' src={img5} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/kisdh'><img className='my-2 card' src={img6} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/kisdh'><img className='my-2 card' src={img7} alt="" style={{ width: '200px' }} /></Link>
                    <Link to='/kisdh'><img className='my-2 card' src={img8} alt="" style={{ width: '200px' }} /></Link>
                    {/* <Link to='/kisdh'><img className='my-2 card' src={img9} alt="" style={{ width: '200px' }} /></Link> */}
                </div>
            </div>
            <hr />
            <div className='m-4'>
                <h2 className='m-3'>FASHION & ESSENTIALS</h2>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>

                    <Link to='/kisdh'><img src={im0} className='my-2 card' alt="..." style={{ width: '250px' }} /></Link>
                    <Link to='/kisdh'><img src={im1} className='my-2 card' alt="..." style={{ width: '250px' }} /></Link>
                    <Link to='/kisdh'><img src={im2} className='my-2 card' alt="..." style={{ width: '250px' }} /></Link>
                    <Link to='/kisdh'><img src={im3} className='my-2 card' alt="..." style={{ width: '250px' }} /></Link>
                    <Link to='/kisdh'><img src={im4} className='my-2 card' alt="..." style={{ width: '250px' }} /></Link>
                    <Link to='/kisdh'><img src={im5} className='my-2 card' alt="..." style={{ width: '250px' }} /></Link>
                    <Link to='/kisdh'><img src={im6} className='my-2 card' alt="..." style={{ width: '250px' }} /></Link>
                    <Link to='/kisdh'><img src={im7} className='my-2 card' alt="..." style={{ width: '250px' }} /></Link>
                    <Link to='/kisdh'><img src={im8} className='my-2 card' alt="..." style={{ width: '250px' }} /></Link>
                    <Link to='/kisdh'><img src={im9} className='my-2 card' alt="..." style={{ width: '250px' }} /></Link>
                    {/* <Link to='/kisdh'><img src={im5} className="card-img-top" alt="..." style={{ width: '200px' }}/></Link> */}

                </div>
            </div>
            <hr />
            <div className='m-4'>
                <h2 className='m-3 mb-5'>EXPLORE MORE</h2>

                <div className='d-flex justify-content-center gap-1 flex-wrap my-2'>
                    <Link to='/kisdh'><img src={sh0} className='mb-1 cardo' alt="..." style={{ minWidth:'300px', maxWidth: '600px' }} /></Link>
                    <Link to='/kisdh'><img src={sh1} className='mb-1 cardo' alt="..." style={{ minWidth:'300px', maxWidth: '600px' }} /></Link>
                    <Link to='/kisdh'><img src={sh2} className='mb-1 cardo' alt="..." style={{ minWidth:'300px', maxWidth: '600px' }} /></Link>
                    <Link to='/kisdh'><img src={sh3} className='mb-1 cardo' alt="..." style={{ minWidth:'300px', maxWidth: '600px' }} /></Link>
                    <Link to='/kisdh'><img src={sh4} className='mb-1 cardo' alt="..." style={{ minWidth:'300px', maxWidth: '600px' }} /></Link>
                    <Link to='/kisdh'><img src={sh5} className='mb-1 cardo' alt="..." style={{ minWidth:'300px', maxWidth: '600px' }} /></Link>
                </div>

            </div>
            <div>
                <h2 className='m-3 mb-5'>THE KIDS SPACE</h2>
                <div className='d-flex justify-content-center gap-1 flex-wrap my-2'>
                    <img src={kd1} alt="" style={{ minWidth:'300px', maxWidth: '600px' }} />
                    <img src={kd2} alt="" style={{ minWidth:'300px', maxWidth: '600px' }} />
                </div>
            </div>
        </main>
    )
}

export default Kid