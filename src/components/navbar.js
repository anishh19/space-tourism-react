import React from 'react'

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
              <img className="toRight" onClick={closeSidebar} src={require('./assets/shared/icon-close.svg').default} alt="" />
              <ol id='options'>
                  <li>
                      HOME
                  </li>
                  <li>
                      DESTINATION
                  </li>
                  <li>
                      CREW
                  </li>
                  <li>
                      TECHNOLOGY
                  </li>
              </ol>
          </div>
          
    </>
  )
}

export default navbar