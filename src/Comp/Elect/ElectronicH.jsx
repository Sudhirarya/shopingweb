import React from 'react'
import electronic from '../../Data/know'
import Card from '../../Card/Card'
import { Link } from 'react-router-dom'

function ElectronicH() {
  return (
    <main>
    <h1 className='m-3' style={{color:'blue'}}>Electronic</h1>
    <div className='CardDisplay'>
        {electronic.map((elec)=>{
            return(
              
               <Link to={`/elect/${elec.id}`} key={elec.id} style={{textDecoration: 'none', color: 'black'}}>
                <Card 
                key={elec.id}
                img={elec.image}
                 titale={elec.title}
                 colo={elec.color}
                 price={elec.price}
                />
               </Link>
            )
        })}
    </div></main>
  )
}

export default ElectronicH