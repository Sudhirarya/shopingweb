import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Carousel from './Carousel'
import Card from '../../Card/Card';
import man from '../../Data/Man';
import Girl from '../../Data/girl';
import Kid from '../../Data/Kide';
import electronic from '../../Data/know';
import { Link } from 'react-router-dom';
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'


import img4 from '../../img/fashion/girl/girl/bi(1).jpg'
import img5 from '../../img/fashion/girl/girl/bi(1).webp'
import img6 from '../../img/fashion/girl/girl/bi(2).webp'
import img7 from '../../img/fashion/girl/girl/bi(3).webp'
import img8 from '../../img/fashion/girl/girl/bi(4).webp'
import img9 from '../../img/fashion/girl/girl/bi(5).webp'
import im4 from '../../img/fashion/man/man/bi(1).jpg'
import im5 from '../../img/fashion/man/man/bi(2).webp'
import im6 from '../../img/fashion/man/man/bi(2).jpg'
import im7 from '../../img/fashion/man/man/bi(3).webp'
import im8 from '../../img/fashion/man/man/bi(3).jpg'
import im9 from '../../img/fashion/man/man/bi(4).jpg'



const Home = () => {
  
  return (
   <>
   <Carousel
   img1={img1}
   img2={img2}
   img3={img3}
   />
<div className='m-4'>
                <h2 className='m-3 prodtit'>BIGGEST DEALS ON TOP BRANDS</h2>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <Link className='ashish' to='/womanG'><img className='my-2 card' src={img4} alt="" style={{ width: '200px' }} /></Link>
                    <Link className='ashish' to='/womanG'><img className='my-2 card' src={img5} alt="" style={{ width: '200px' }} /></Link>
                    <Link className='ashish' to='/womanG'><img className='my-2 card' src={img6} alt="" style={{ width: '200px' }} /></Link>
                    <Link className='ashish' to='/womanG'><img className='my-2 card' src={img7} alt="" style={{ width: '200px' }} /></Link>
                    <Link className='ashish' to='/womanG'><img className='my-2 card' src={img8} alt="" style={{ width: '200px' }} /></Link>
                    <Link className='ashish' to='/womanG'><img className='my-2 card' src={img9} alt="" style={{ width: '200px' }} /></Link>
                </div>
            </div>

            <div className='m-4'>
                <h2 className='m-3 prodtit'>CATEGORIES TO BAG</h2>
                <div className='d-flex justify-content-evenly flex-wrap my-2'>
                    <Link className='ashish' to='/manH'><img className='my-2 card' src={im4} alt="" style={{ width: '200px' }} /></Link>
                    <Link className='ashish' to='/manH'><img className='my-2 card' src={im5} alt="" style={{ width: '200px' }} /></Link>
                    <Link className='ashish' to='/manH'><img className='my-2 card' src={im6} alt="" style={{ width: '200px' }} /></Link>
                    <Link className='ashish' to='/manH'><img className='my-2 card' src={im7} alt="" style={{ width: '200px' }} /></Link>
                    <Link className='ashish' to='/manH'><img className='my-2 card' src={im8} alt="" style={{ width: '200px' }} /></Link>
                    <Link className='ashish' to='/manH'><img className='my-2 card' src={im9} alt="" style={{ width: '200px' }} /></Link>
                </div>
            </div>



   <div className='container-fluid' style={{color:'rgb(28,36,245)'}}>
<h1 className='animate__animated animate__bounce prodtit'>Man Fashion</h1>

<div className="CardDisplay animate__animated animate__fadeInUp animate__delay-1s">
      
      { man.slice(0,5).map((p)=>{
        return(
          <Link  key={p.id} style={{textDecoration: 'none', color: 'black'}}>
          <Card 
          key={p.id}
          img={p.image}
           titale={p.title}
           colo={p.color}
           price={p.price}
           /></Link>
        )
      })

      }
    </div>
    <h1 className='prodtit'>Woman Fashion</h1>

    <div className="CardDisplay animate__animated animate__fadeInUp animate__delay-2s">
    
      { Girl.slice(0,5).map((p)=>{
        return(
          <Link to='/woman' key={p.id} style={{textDecoration: 'none', color: 'black'}}>
          <Card 
          key={p.id}
          img={p.image}
           titale={p.title}
           colo={p.color}
           price={p.price}
           /></Link>
        )
      })

      }
    </div>
    <h1 className='prodtit'>Kids Wears</h1>

    <div className="CardDisplay animate__animated animate__fadeInUp">
    
      { Kid.slice(0,5).map((p)=>{
        return(
          <Link to='/kids' key={p.id} style={{textDecoration: 'none', color: 'black'}}>
          <Card 
          key={p.id}
          img={p.image}
           titale={p.title}
           colo={p.color}
           price={p.price}
           /></Link>
        )
      })

      }
    </div>
    <h1 className='prodtit'>Select Your Gadget</h1>

    <div className="CardDisplay animate__animated animate__fadeInUp">
    
      { electronic.slice(0,5).map((p)=>{
        return(
          <Link  key={p.id} style={{textDecoration: 'none', color: 'black'}}>
          <Card 
          key={p.id}
          img={p.image}
           titale={p.title}
           colo={p.color}
           price={p.price}
           /></Link>
        )
      })

      }
    </div>
  
</div>



   </>
  )
}

export default Home