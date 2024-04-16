import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Card extends Component {
  static propTypes = {}

  render() {
    return (

      // <div className="card" style={{ width: "14rem", height: '100%' }}>
      //   <img src={this.props.img} className="card-img-top " alt="..." />
      //   <div className="card-body">
      //     <h5 className="card-title mb-1">{this.props.titale}</h5>
      //     <p className="card-text my-0"><strong>Color: </strong>{this.props.colo}</p>
      //     <p className='card-text'><strong>Price: </strong>{this.props.price}</p></div>
      // </div>

      <div className="card" style={{ width: "14rem" }}>
        <div className="card-img">
          <img className="card-img1 " src={this.props.img} alt="" />
        </div>
        <div className="card-titale">
          <p className="brand mb-0 pb-0">XYZ</p>
          <p className="pr-Name mb-0 pb-0">{this.props.titale}</p>
          <p className="desp mb-0 pb-0">{this.props.colo}</p>
          <p className="Preice mb-0 pb-1"><span className="Curr-rate">{this.props.price}</span> <span className="offer">Rs.1999</span> <span className="dis">15%</span></p>
          <p className="size mb-0 pb-2"> <span className='Sixet' >S</span>,  <span className='Sixet' >M</span>,  <span className='Sixet' >L</span></p>
        </div>
      </div>

    )
  }
}

export default Card