import React from 'react';
import '../../css/header.css';
import { images } from './imageImports';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Header = () => {



  const defaultProps = {
    h6: "WOMEN",
    h1: "Slick. Modern. Awesome.",
    ShopCollection: "Shop Collection",
    HeaderBackImage: images.HeaderBackImage,
    HeaderFrontImage: images.HeaderFrontImage,
    fatimes :faTimes,
  };

  return (
    <div>
      <div className='container header-cont'>
        <div className='header-box'>
          <div className='header-container'>
            <div className='row'>
              <div className='col-6'>
                <div className='header-text'>
                  <h6>{defaultProps.h6}</h6>
                  <h1>{defaultProps.h1}</h1>
                  <div className='ShopCollection'>
                    <p>{defaultProps.ShopCollection}</p>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='group-image'>
                  <img src={defaultProps.HeaderBackImage} className='HeaderBackImage' alt="HeaderBackImage" />
                  <img src={defaultProps.HeaderFrontImage} className='HeaderFrontImage' alt="HeaderFrontImage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



     

    </div>
  );
};

export default Header;
