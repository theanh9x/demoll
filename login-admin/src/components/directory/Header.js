import React from 'react';
import DogooLogo from '../../assets/images/DogooLogo.png';

function Header() {
 
    return (
        <div className="header">
            <img src={DogooLogo} alt="Logo" width="260" className="header__logo"/>
        </div>
    );
  }
   
  export default Header;