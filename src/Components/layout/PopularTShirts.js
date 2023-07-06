import React, { Component } from 'react';
import '../../css/PopularTShirts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { productInfo } from '../layout/productInfo';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';


export class PopularTShirts extends Component {
    static defaultProps = {
        SUMMER_COLLECTION: 'SUMMER COLLECTION',
        Popular_TShirts: 'Popular T-Shirts',
        Cart: faShoppingBasket,
        faEye: faEye,

    }


    render() {
        return (
            <div>
                <div className="popular">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12  d-flex justify-content-center align-items-center'>
                                <h6>{this.props.SUMMER_COLLECTION}</h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-center pb-5'>
                                <h1>{this.props.Popular_TShirts}</h1>
                            </div>
                        </div>
                        <div className='row card-T'>
                            <div className='col-12 d-flex justify-content-center prod'>
                                <div className='popularBox'>
                                    <div className='row'>
                                        <ul className='popularList row'>
                                        {productInfo.map((product) => (
                                            <li className='col-6 col-sm-2 col-md-3 popular_card'>
                                                <div className='popular_Image'>
                                                    <span className='iconCart'>
                                                    <FontAwesomeIcon icon={this.props.Cart}  className='Cart-icon'/> 
                                                    </span>
                                                    <span className='icon_faEye'>
                                                    <FontAwesomeIcon icon={this.props.faEye}  className='icon_faEyess'/> 
                                                    </span>
                                                    <div className='Discount'>
                                                    <p>10%</p>
                                                 </div>
                                                    <img src={product.ProductDefaultImage} className='ProductDefaultImage' alt="ProductImage" />
                                                    <img src={product.ProductHoverImage} className='ProductHoverImage' alt="ProductImage" />
                                                </div>
                                                
                                                <div className='popular_summary'>
                                                    <span className='ProductType'>{product.ProductType}</span>
                                                    <a className="ProductName" href="/">
                                                        <h2 className='ProductName'>{product.ProductName}</h2>
                                                    </a>
                                                    <span className='ProductPrice'>{product.ProductPrice}</span>
                                                </div>
                                            </li>
                                             ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PopularTShirts