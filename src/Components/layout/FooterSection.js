import React, { Component } from 'react'
import '../../css/FooterSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export class FooterSection extends Component {
     static defaultProps = {
      Subscribe:"Subscribe",
      FooterTitle:"Subscribe To Get Offers In Your Inbox",
      FooterP:"Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum",
      BUYTSHIRTS: "Buy T-Shirts",
      WOMEN: "Women",
      MEN: "Men",
      ABOUT: "About",
      CONTACT: "Contact",
      faFacebook:faFacebookF,
      faTwitter:faTwitter,
      faInstagram :faInstagram,


     } 
 

  render() {
    return (
      <div>
        <div className='container F'>
          <div className='Footer-box'>
           <div className='FooterText'>
           <h3>{this.props.FooterTitle}</h3>
            <p>{this.props.FooterP}</p>
            <div className='email'>
              <input type='text' className='emailInput' placeholder='Your email address...' />
              <a href="/" className='SendEmail'>
                <span>{this.props.Subscribe}</span>
              </a>
              </div>
           </div>
              <ul className='links d-flex justify-content-center align-items-center gap-5'>
                <li className="Footer_Links">
                  <a className="FLink" aria-current="page" href="/">{this.props.BUYTSHIRTS}</a>
                </li>
                <li className="Footer_Links">
                  <a className="FLink" aria-current="page" href="/">{this.props.WOMEN}</a>
                </li>
                <li className="Footer_Links">
                  <a className="FLink" aria-current="page" href="/">{this.props.MEN}</a>
                </li>
                <li className="Footer_Links">
                  <a className="FLink" aria-current="page" href="/">{this.props.ABOUT}</a>
                </li>
                <li className="Footer_Links">
                  <a className="FLink" aria-current="page" href="/">{this.props.CONTACT}</a>
                </li>
              </ul>
              <div className='Icons d-flex justify-content-center gap-3'>
              <span className='facebook'>
              <FontAwesomeIcon icon={this.props.faFacebook} className="facebook-icon" />
              </span>
              <span className='Twitter'>
              <FontAwesomeIcon icon={this.props.faTwitter} className="Twitter-icon" />
              </span>
              <span className='Instagram'>
              <FontAwesomeIcon icon={this.props.faInstagram} className="Instagram-icon" />
              </span>
              </div>
            
              <div className='Copyright'>
              <p>Copyright © 2023 T-Shirts Store | Powered by T-Shirts Store</p>
            </div>
          </div>
         
        </div>

      </div>
    )
  }
}

export default FooterSection
