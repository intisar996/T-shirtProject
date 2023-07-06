import React, { Component } from 'react'
import '../../css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { images } from './imageImports';
import NavbarMobile from './NavbarMobile';



export class Navbar extends Component {
    static defaultProps = {
        FirstPage: "BUY T-SHIRTS",
        SecondPage: "WOMEN",
        ThirdPage: "MEN",
        ABOUT: "ABOUT",
        CONTACT: "CONTACT",
        Logo :images.logo,
        Search :faSearch,
        Cart: faShoppingBasket,
        CartPrice:"$0.00",
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row align-items-center pt-2 pb-2 nave">
                        <div className="col-5">
                            <nav className="navbar navbar-expand-lg bg-body-white">
                                <div className="container">                                  
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="/">{this.props.FirstPage}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">{this.props.SecondPage}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">{this.props.ThirdPage}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">{this.props.ABOUT}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/">{this.props.CONTACT}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <NavbarMobile />
                        <div className="col-3">
                        <img src={this.props.Logo}   className='Logo' alt="Logo" />
                        </div>
                        <div className="col-4 pt-3 d-flex justify-content-end align-items-center">
                        <div className='col-5'></div>
                         <div className='col-2 search-icon'>
                        <FontAwesomeIcon icon={this.props.Search}  className='Search-icon'/>
                         </div>
                         <div className='col-3 cart-icon d-flex align-items-center'>
                         <p className="cart-p">{this.props.CartPrice}</p>
                         <div className='cartIcon'>
                         <FontAwesomeIcon icon={this.props.Cart}  className='Cart-icon'/> 
                         </div>
                         </div>  
                         <div className='col-2'>
                         <h3 className='Login-p'>LOG IN</h3>
                            </div>                
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default Navbar