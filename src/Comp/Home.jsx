import React from 'react'
import Carousel from './Home/Carousel'
import Card from '../Card/Card';
import man from '../Data/Man';
import Girl from '../Data/girl';
import Kid from '../Data/Kide';
import electronic from '../Data/know';
import { Link } from 'react-router-dom';
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'


const Home = () => {
  
  return (
   <>
   <Carousel
   img1={img1}
   img2={img2}
   img3={img3}
   />
   <div className='container-fluid' style={{color:'rgb(28,36,245)'}}>
<h1 className=''>Man Fashion</h1>

<div className="CardDisplay">
      
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
    <h1>Woman Fashion</h1>

    <div className="CardDisplay">
    
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
    <h1>Kids Wears</h1>

    <div className="CardDisplay">
    
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
    <h1>Select Your Gadget</h1>

    <div className="CardDisplay">
    
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