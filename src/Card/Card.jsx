import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Card extends Component {
  static propTypes = {}

  render() {
    return (

      <div className="card" style={{ width: "14rem", height: '100%' }}>
        <img src={this.props.img} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title mb-1">{this.props.titale}</h5>
          <p className="card-text my-0"><strong>Color: </strong>{this.props.colo}</p>
          <p className='card-text'><strong>Price: </strong>{this.props.price}</p></div>
      </div>

    )
  }
}

export default Card