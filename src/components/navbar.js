import React from 'react'
import { Link } from 'react-router-dom';

function openSidebar(){
    document.getElementById("sidebar").style.display= "block";
}
function closeSidebar(){
    document.getElementById("sidebar").style.display=  "none";
}

function navbar() {
  return (
    <>
    <header>
          <img className="toLeft" src={'./assets/shared/logo.svg'} alt="" />
          <img className="toRight" onClick={openSidebar} src={'./assets/shared/icon-hamburger.svg'} alt="" />
    </header><div id='sidebar'>
              <img className="toRight" onClick={closeSidebar} src={'./assets/shared/icon-close.svg'} alt="" />
              <ol id='options' onClick={closeSidebar}>
                  <li>
                    <Link to="/"> HOME </Link>
                  </li>
                  <li>
                    <Link to="/destinations"> DESTINATION</Link>
                  </li>
                  <li>
                     <Link to="/crew">CREW </Link>
                  </li>
                  <li>
                      <Link to="/technology">TECHNOLOGY</Link>
                  </li>
              </ol>
          </div>
          
    </>
  )
}

export default navbar