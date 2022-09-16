import React from 'react';
import {Link} from 'react-router-dom'

function Main() {
  return (
    <>
       
        <div className='content' id='main'>
            <div>
                <h2>
                SO, YOU WANT TO TRAVEL TO
                </h2>
                <h1>
                SPACE
                </h1>
                <div id='intro'>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </div>
            </div>
            <div className='circle'>
            <Link to="/destinations"> EXPLORE </Link>
            </div>
        </div>
    </>
  )
}

export default Main