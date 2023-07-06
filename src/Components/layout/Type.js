import React, { Component } from 'react'
import '../../css/Type.css';



export class Type extends Component {
    static defaultProps = {
      Type: "Men",
      ProductCount :"5 Products",
      TypeWomen: "Women",
    }

  render() {
    return (
      <div>
   <div className='container T'>
  <div className='TypeContainer'>
    <div className='row'>
      <div className='col Men'>
        <span className='Men-Text'>
        <h4>{this.props.Type}</h4>
        <h6>{this.props.ProductCount}</h6>
        </span>
      </div>
      <div className='col Women'>
      <span className='Men-Text'>
        <h4>{this.props.TypeWomen}</h4>
        <h6>{this.props.ProductCount}</h6>
        </span>
      </div>
    </div>
  </div>
</div>




      </div>
    )
  }
}

export default Type