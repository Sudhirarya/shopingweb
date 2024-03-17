import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Kid from '../../Data/Kide'
import Card from '../../Card/Card'
import { Link } from 'react-router-dom'

export default class KisdH extends Component {
  static propTypes = {}

  render() {
    return (
      <main>
    <h1 className='m-3' style={{color:'blue'}}>Kids lobby</h1>
        <div className="CardDisplay">
      {Kid.map((kid)=>{
        return(
            <Link to={`/Kids/${kid.id}`} key={kid.id} style={{textDecoration: 'none', color: 'black'}} >
            <Card
            key={kid.id}
            img={kid.image}
             titale={kid.title}
             colo={kid.color}
             price={kid.price}
             />
            </Link>
        )
      })}
      </div></main>
    )
  }
}
