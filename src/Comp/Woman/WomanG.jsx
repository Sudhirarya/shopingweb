import React from 'react'
import Girl from '../../Data/girl'
import Card from '../../Card/Card'
import { Link } from 'react-router-dom'

const WomanG = () => {
  return (
    <div className='CardDisplay'>
      {Girl.map((girl) => {
        return (
          <Link to={`/woman/${girl.id}`} key={girl.id} style={{ textDecoration: 'none', color: 'black' }}>
            <Card
              key={girl.id}
              img={girl.image}
              titale={girl.title}
              colo={girl.color}
              price={girl.price}
            /></Link>
        )
      })}
    </div>
  )
}

export default WomanG