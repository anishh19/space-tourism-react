import React,{useEffect} from 'react';

const data = 
  [{
    "name": "Douglas Hurley",
    "image": "./assets/crew/image-douglas-hurley.webp",
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  
  {
    "name": "Mark Shuttleworth",
    "image": "/assets/crew/image-mark-shuttleworth.webp",
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "image": "/assets/crew/image-victor-glover.webp",
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "image":  "/assets/crew/image-anousheh-ansari.webp",
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
  ];

console.log(data);


function hideAll(no){
  document.querySelectorAll(".slide").forEach((Element,n)=>{
    Element.style.transform = `translateX(${(no-n)*100}%)`
    console.log((no-n)*100);
    
  });}

function slideSelect(e){
  let index = e.target.id;
  console.log(index);
  hideAll(index-1);
}



function Crew() {
  useEffect(()=>{hideAll(0);},[]);
  return (
    <div className='crew'>
      <div className='contentContainer' id='crewContainer'>
      <h3 id='topHeading'> <span>02 </span>MEET YOUR CREW</h3>
      <div  id='crewContent'>
      <div id='slides'>
      {data.map((each)=>
      <div key={each.name} className='slide' id='crewSlide'>
      <div id='imgContainer'>
      <img alt={each.name} src={each.image}></img>
      </div>
      <div id='circles' onClick={slideSelect}>
        <button className='crewSelectors' id='1'>
        </button>
        <button className='crewSelectors' id='2'>
        </button>
        <button className='crewSelectors' id='3'>
        </button>
        <button className='crewSelectors' id='4'>
        </button>
      </div> 
      <div id='crewAbout'>
      <h3 id='crewRole' >{each.role.toUpperCase()}</h3>
      <h2 id='crewName'>{each.name.toUpperCase()}</h2>
      <p id='crewBio'>{each.bio}</p>
      </div>
      </div>
      )}
      </div>
          
      </div>
    </div>
    </div>
  )
}

export default Crew