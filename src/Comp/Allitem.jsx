import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Homed } from '../Data/home1'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

export class Home extends Component {
  
  static propTypes = {}

  render() {

    
    return (
      //  img titale colo price
      <div className='CardDisplay'>
      {Homed.map((home)=>{
        return(
          <Link to={`/home/${home.id}`} key={home.id} style={{textDecoration: 'none', color: 'black'}}> 
          <Card
          key={home.id}
          img={home.image}
          titale={home.title}
          color={"all"}
          price={home.price + "$" }

          />
          </Link>
        )
      })}
      </div>
      
      
   
    
      
    )
  }
}

export default Home