import React, { Component } from 'react'
import '../../css/Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




export class Reviews extends Component {
    static defaultProps = {
        Title: 'Reviews',
        Reviews:'“Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”',
        faStar: faStar,
        Username :'JANE OLIVER',
    }
  render() {
    const stars = Array(5).fill(faStar);

    return (
      <div>
       <div className='container'>
       <div className='Reviews'>
       <div className='ReviewsText'>
       <h2>{this.props.Title}</h2>
       <p>{this.props.Reviews}</p>
       <div className='star-group'>
       {stars.map((star, index) => (
        <FontAwesomeIcon key={index} icon={star} className='star-icon' />
      ))}
      <h6>{this.props.Username}</h6>

       </div>
       </div>
         </div>
       </div>
      </div>
    )
  }
}

export default Reviews