import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class CartCArd extends Component {
  static propTypes = {}

  render() {
    return (
        <main>
<div className='' style={{ maxWidth: '950px' }}>

                <div className='py-4 px-5 d-flex flex-wrap gap-5 border justify-content-around align-items-center'>
                    <div><img src={this.props.img} alt="" style={{ width: '100px' }} /></div>
                    <div className='px-3'><div>{this.props.pname}</div>
                        <div>Color: {this.props.color}</div>
                        <div><p>Type: Shirt</p></div>
                        <div><p>Price {this.props.pprice}</p></div>
                    </div>
                    <div>
                        <button onClick={this.props.sub} className='btn border-primary border rounded-circle px-3 py-0'><h3>-</h3></button>
                        <input className='mx-3 text-center' type="text" value={this.props.qun} style={{ width: '40px' }} />
                        <button onClick={this.props.add} className='btn border-primary border rounded-circle py-0'><h3>+</h3></button>
                    </div>
                    <div>Price: Rs.{this.props.total}</div>
                    <div><button onClick={this.props.delete} className='btn btn-secondary'>Remove</button></div>
                </div>


            </div>






    </main>
    )
  }
}

export default CartCArd