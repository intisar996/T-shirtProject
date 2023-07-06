import React, { Component } from 'react'
import '../../css/BaseCollection.css';
import { images } from './imageImports';



export class BaseCollection extends Component {
  static defaultProps = {
    BaseCollectionImage1: images.BaseCollectionImage1,
    BaseCollectionImage2: images.BaseCollectionImage2,
    Gender: "MEN",
    Title: "The base collection - Ideal every day.",

  }
  render() {
    return (
      <div>
        <div className='BaseCollection  pt-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='ImageOne'>
                  <div className='row'>
                    <img src={this.props.BaseCollectionImage1} className='BaseCollectionImage1' alt="base collection" />
                  </div>
                  <div className='row d-flex justify-content-center text-BaseCollection'>
                    <p>{this.props.Gender}</p>
                    <h2>{this.props.Title}</h2>
                    <a href="/" className='ShopNow'>
                      <span>Shop Now</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='ImageOne'>
                  <img src={this.props.BaseCollectionImage2} className='BaseCollectionImage2' alt="base collection" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BaseCollection