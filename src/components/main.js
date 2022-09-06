import React,{useState, useEffect} from 'react';

function openSidebar(){
    document.getElementById("sidebar").style.display= "block";
}
function closeSidebar(){
    document.getElementById("sidebar").style.display=  "none";
}




function Main() {
  const [state, setState] = useState("home"); 

  useEffect(()=> {console.log( `State Changed to ${state}`)}),[];
  
  function changeState(){
    setState("hello");
  }


  return (
    <>
        <header >
           <img className="toLeft"  src={require('./assets/shared/logo.svg').default} alt=""/>
           <img className="toRight" onClick={openSidebar} src={require('./assets/shared/icon-hamburger.svg').default} alt=""/>
        </header>
        <div id='sidebar'>
            <img className="toRight" onClick={closeSidebar} src={require('./assets/shared/icon-close.svg').default} alt=""/>
            <ol id='options'>
                <li onClick={changeState}>
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
        <div className='content'>
            <div>
                <h2>
                SO, YOU WANT TO TRAVEL TO
                </h2>
                <h1>
                SPACE
                </h1>
                <div>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </div>
            </div>
            <div className='circle'>
                EXPLORE
            </div>
        </div>
    </>
  )
}

export default Main