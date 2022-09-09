import React,{useState, useEffect} from 'react';
const data = {
  "Moon":{
  "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  "distance": "384,400 km",
  "travel": "3 days"
  },
  "Mars":{
  "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  "distance": "225 mil. km",
  "travel": "9 months"
  },
  "Europa":{
  "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  "distance": "628 mil. km",
  "travel": "3 years"
  },
  "Titan":{
  "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  "distance": "1.6 bil. km",
  "travel": "7 years"
  }
};



function Destination() {

  function changeDestination(e){
    if(e.target.id!=="planetList"){
    setState({destinationName : e.target.id, destinationData: data[e.target.id] });
    console.log(e.target.id);
  }
  };

  const [state,setState] = useState({destinationName : "Moon", destinationData: data.Mars });

  useEffect(() => {
    console.log();
  }, [state]); 

  return (
    <div  className='destination'>
      <div className='content'>
      <h3>
          <span>01</span> PICK YOUR DESTINATION
      </h3>
      <img id='planet' src= {`/assets/destination/image-${state.destinationName}.webp`} alt="" />
      <ul id='planetList' onClick={changeDestination}>
          <li id='Moon' className='horizontal'>MOON</li>
          <li id='Mars' className='horizontal'>MARS</li>
          <li id='Europa' className='horizontal'>EUROPA</li>
          <li id= 'Titan' className='horizontal'>TITAN</li>
      </ul>
      <h1 id='planetName'>{state.destinationName.toUpperCase()}</h1>
      <h3>{state.destinationData.description}</h3>
      <hr className='horizontalLine'/>
      <p> AVG. DISTANCE: <h3>{state.destinationData.distance.toUpperCase()}</h3>
      </p>
      <p> EST. TRAVEL TIME: <h3>{state.destinationData.travel.toUpperCase()}</h3></p>
      </div>
      
    </div>
  )
}

export default Destination;