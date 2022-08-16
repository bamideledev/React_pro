import React from 'react';
import techtik from './asset/techtik.jpeg'

function Header() {

    return(
         <div className='All'>
            <div className='header_menu'>
              <img src={techtik} alt="logo"/>
              <button className='btn'>Contact Us</button>
            </div>
        </div>
    )
}
export default Header;