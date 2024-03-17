import React from 'react'
import Card from '../../Card/Card'
import man from '../../Data/Man';
import { Link } from 'react-router-dom';

const ManH = () => {
  return (
    <>
    <div className="CardDisplay">
        { man.map((p)=>{
          return(
            <Link to={`/buy/${p.id}`} key={p.id} style={{textDecoration: 'none', color: 'black'}}>
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
    </>
  )
}

export default ManH