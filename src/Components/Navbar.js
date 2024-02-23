import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState (true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick (false);

  const showButton = () => {
    if(window.innerWidth <= 960){
        setButton (false)

    }
    else {
        setButton(true);
    }
  };
  useEffect (() => {
    showButton () 
  }, []);
  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div Navbar className="navbar-container">
          <Link to="/" className="navbar-logo" onClick ={closeMobileMenu}>
            TRVL <i className="fab fa-typo3"/>
          </Link>
          <div className="menu-icon" onCLICK = {handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to ='/Home' className=" 'nav-Links" onClick={closeMobileMenu}> Home </Link>

                </li>
                <li className="nav-item">
                    <Link to ='/Services' className=" 'nav-Links" onClick={closeMobileMenu}> Services </Link>

                </li>
                <li className="nav-item">
                    <Link to ='/Products' className=" 'nav-Links" onClick={closeMobileMenu}> Products </Link>

                </li>
                <li className="nav-item">
                    <Link to ='/Sign-up' className=" 'nav-Links-mobile" onClick={closeMobileMenu}> Sign-up </Link>
 
                </li>


            </ul>
            {button && <button buttonStyle ='btn--outline'>SIGN UP</button> }

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
