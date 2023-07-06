import React, { useState, useEffect } from 'react';
import '../../css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../layout/Navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from '../layout/Header';
import PopularTShirts from '../layout/PopularTShirts';
import BaseCollection from '../layout/BaseCollections.js';
import NEWCOLLECTION from '../layout/NEWCOLLECTION';
import SpringSummer from '../layout/SpringSummer';
import OnSale from '../layout/OnSale';
import Reviews from '../layout/Reviews';
import Type from '../layout/Type';
import FooterSection from '../layout/FooterSection';


export const HomePage = () => {

 // Fonts
 const [isFontChange, setFontChange] = useState(true);
// State
 const [fontTheme, setFontTheme] = useState('FontDefault');

 // effect
useEffect(() => {
 const currentFontTheme = localStorage.getItem('theme-font');
 if (currentFontTheme) {
  setFontTheme(currentFontTheme);
 }
},[]);

 // set theme 
 const handleClicks = (font) => {
  setFontTheme(font);
  localStorage.setItem('theme-font', font);
}
  //Colors
  const [isCustomize, setIsCustomize] = useState(true);
  // State
  const [colorTheme, setColorTheme] = useState('BlackBox');
  // effect 
  useEffect(() => {
    // check for selected theme in localStorage value
    const currentThemeColor = localStorage.getItem('theme-color');
    // if found set selected theme value in state
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }

  }, []);
  // set theme 
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme);
  }
  //ColorBoxDisable
  return (
    <div className={`App ${colorTheme} ${fontTheme}`}>
      <div className={isCustomize ? "ColorBoxDisable" : "ColorBox"}>
        <div className='headerBox'>
          <p>T-Shirts Store</p>
          <FontAwesomeIcon icon={faTimes} className='fatimes' onClick={() => setIsCustomize(!isCustomize)} />
        </div>
        <div className='bodyBox'>
          <p className='bodyBoxP'>Use the template as-is or try different colors and fonts from the options below.</p>
          <div className='ContentBox d-flex flex-column'>
            <div className='OtherColors'>
              <p>Try Other Colors</p>
              <span className='Default'>Default</span>
            </div>
            <div className='DEFAULTCOLORS d-flex'>
              <p>DEFAULT COLORS</p>
              <div className='BlackBox' onClick={() => handleClick('BlackBox')} >
                <ul>
                  <li id='ThemeBlack'></li>
                  <li id='ThemeBlack'></li>
                  <li id='ThemeBlack'></li>
                  <li id='ThemeBlack'></li>
                  <li id='ThemeBlack'></li>
                </ul>
              </div>
            </div>

            <div className='colOne d-flex  justify-content-between'>
              <div className='col-6 PurpleBox'>
                <ul>
                  <li id='ThemePurple' onClick={() => handleClick('ThemePurple')}></li>
                  <li id='ThemePurple' onClick={() => handleClick('ThemePurple')}></li>
                  <li id='ThemePurple' onClick={() => handleClick('ThemePurple')}></li>
                  <li id='ThemePurple' onClick={() => handleClick('ThemePurple')}></li>
                  <li id='ThemePurple' onClick={() => handleClick('ThemePurple')}></li>
                </ul>
              </div>


              <div className='col-6 RedBox'>
                <ul>
                  <li id='ThemeRed' onClick={() => handleClick('ThemeRed')}></li>
                  <li id='ThemeRed' onClick={() => handleClick('ThemeRed')}></li>
                  <li id='ThemeRed' onClick={() => handleClick('ThemeRed')}></li>
                  <li id='ThemeRed' onClick={() => handleClick('ThemeRed')}></li>
                  <li id='ThemeRed' onClick={() => handleClick('ThemeRed')}></li>
                </ul>
              </div>
            </div>





            
            <div className='colOne d-flex  justify-content-between'>
              <div className='col-6 PinkBox'>
                <ul>
                  <li id='ThemePink' onClick={() => handleClick('ThemePink')}></li>
                  <li id='ThemePink' onClick={() => handleClick('ThemePink')}></li>
                  <li id='ThemePink' onClick={() => handleClick('ThemePink')}></li>
                  <li id='ThemePink' onClick={() => handleClick('ThemePink')}></li>
                  <li id='ThemePink' onClick={() => handleClick('ThemePink')}></li>
                </ul>
              </div>


              <div className='col-6 SecondPinkBox'>
                <ul>
                  <li id='ThemeSecondPink' onClick={() => handleClick('ThemeSecondPink')}></li>
                  <li id='ThemeSecondPink' onClick={() => handleClick('ThemeSecondPink')}></li>
                  <li id='ThemeSecondPink' onClick={() => handleClick('ThemeSecondPink')}></li>
                  <li id='ThemeSecondPink' onClick={() => handleClick('ThemeSecondPink')}></li>
                  <li id='ThemeSecondPink' onClick={() => handleClick('ThemeSecondPink')}></li>
                </ul>
              </div>
            </div>
            <div className='colOne d-flex  justify-content-between'>
              <div className='col-6 OrangeBox'>
                <ul>
                  <li id='ThemeOrange' onClick={() => handleClick('ThemeOrange')}></li>
                  <li id='ThemeOrange' onClick={() => handleClick('ThemeOrange')}></li>
                  <li id='ThemeOrange' onClick={() => handleClick('ThemeOrange')}></li>
                  <li id='ThemeOrange' onClick={() => handleClick('ThemeOrange')}></li>
                  <li id='ThemeOrange' onClick={() => handleClick('ThemeOrange')}></li>
                </ul>
              </div>


              <div className='col-6 YellowBox'>
                <ul>
                  <li id='ThemeYellow' onClick={() => handleClick('ThemeYellow')}></li>
                  <li id='ThemeYellow' onClick={() => handleClick('ThemeYellow')}></li>
                  <li id='ThemeYellow' onClick={() => handleClick('ThemeYellow')}></li>
                  <li id='ThemeYellow' onClick={() => handleClick('ThemeYellow')}></li>
                  <li id='ThemeYellow' onClick={() => handleClick('ThemeYellow')}></li>
                </ul>
              </div>
            </div>
            <div className='colOne d-flex  justify-content-between'>
              <div className='col-6 LightGreenBox'>
                <ul>
                  <li id='ThemeLightGreen' onClick={() => handleClick('ThemeLightGreen')}></li>
                  <li id='ThemeLightGreen' onClick={() => handleClick('ThemeLightGreen')}></li>
                  <li id='ThemeLightGreen' onClick={() => handleClick('ThemeLightGreen')}></li>
                  <li id='ThemeLightGreen' onClick={() => handleClick('ThemeLightGreen')}></li>
                  <li id='ThemeLightGreen' onClick={() => handleClick('ThemeLightGreen')}></li>
                </ul>
              </div>


              <div className='col-6 GreenBox'>
                <ul>
                  <li id='ThemeGreen' onClick={() => handleClick('ThemeGreen')}></li>
                  <li id='ThemeGreen' onClick={() => handleClick('ThemeGreen')}></li>
                  <li id='ThemeGreen' onClick={() => handleClick('ThemeGreen')}></li>
                  <li id='ThemeGreen' onClick={() => handleClick('ThemeGreen')}></li>
                  <li id='ThemeGreen' onClick={() => handleClick('ThemeGreen')}></li>
                </ul>
              </div>
            </div>




            <div className='colOne d-flex  justify-content-between'>
              <div className='col-6 LightBlueBox'>
                <ul>
                  <li id='ThemeLightBlue' onClick={() => handleClick('ThemeLightBlue')}></li>
                  <li id='ThemeLightBlue' onClick={() => handleClick('ThemeLightBlue')}></li>
                  <li id='ThemeLightBlue' onClick={() => handleClick('ThemeLightBlue')}></li>
                  <li id='ThemeLightBlue' onClick={() => handleClick('ThemeLightBlue')}></li>
                  <li id='ThemeLightBlue' onClick={() => handleClick('ThemeLightBlue')}></li>
                </ul>
              </div>


              <div className='col-6 BlueBox'>
                <ul>
                  <li id='ThemeBlue' onClick={() => handleClick('ThemeBlue')}></li>
                  <li id='ThemeBlue' onClick={() => handleClick('ThemeBlue')}></li>
                  <li id='ThemeBlue' onClick={() => handleClick('ThemeBlue')}></li>
                  <li id='ThemeBlue' onClick={() => handleClick('ThemeBlue')}></li>
                  <li id='ThemeBlue' onClick={() => handleClick('ThemeBlue')}></li>
                </ul>
              </div>
            </div>
          </div>
          <hr/>

          <div className='BoxName'>
           <div className='FontDefault d-flex justify-content-between align-items-center' >
            <p>Try Other Fonts</p>
            <span id='Default' onClick={() => handleClicks()}>Default</span>
           </div>
           <div className='Poppins'>
            <span className='PoppinsDark'>Poppins /</span>
            <span className='PoppinsLight'>Poppins</span>
           </div>

           <div className='FontType'>
            <div class='row gap-3'>
              <div className='col FontOne'>
                  <span id="PlayFair" onClick={() => handleClicks('PlayFair')}>Aa</span>
              </div>
              <div className='col FontTow' id='lato' onClick={() => handleClicks('lato')}>
                  <span>A</span>
                  <span>a</span>
                </div>
            
              <div className='col FontThree' id='Montserrat' onClick={() => handleClicks('Montserrat')}>
              <span>A</span>
              <span>a</span>
                </div>
            
              <div className='col FontFive'>
                  <span>Aa</span>
                </div>
            
            </div>
           </div>
          </div>
        </div>
      </div>
      <div className='customizeColor'>
      <FontAwesomeIcon icon={faPalette} className='faPalette'/>
        <span className='customize' onClick={() => setIsCustomize(!isCustomize)}>customize</span>

      </div>



           <Navbar />   
           <Header />
           <PopularTShirts />
           <BaseCollection />
           <NEWCOLLECTION />
           <SpringSummer />
           <OnSale />
           <Reviews />
           <Type />
           <FooterSection />
















    </div>
  );
};

export default HomePage;
