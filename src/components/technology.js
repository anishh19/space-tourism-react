import React,{useEffect} from 'react'

const data = [{
  "name": "Launch vehicle",
  "images": {
    "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
    "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
  },
  "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
},
{
  "name": "Spaceport",
  "images": {
    "portrait": "./assets/technology/image-spaceport-portrait.jpg",
    "landscape": "./assets/technology/image-spaceport-landscape.jpg"
  },
  "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
},
{
  "name": "Space capsule",
  "images": {
    "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
    "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
  },
  "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
}
]


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

function Technology() {
  useEffect(()=>{hideAll(0);},[]);
  return (
    <div id='technology'>
      <div className='contentContainer'>
      <h3 id='topHeading'> <span> 03 </span>SPACE LAUNCH 101</h3>
      <div id='techContent'>
      
      <div id='techSlides'>
      {data.map((each)=>
      <div key={each.name} className='slide' id='techSlide'>
      <img id='techImageLandscape' alt={each.name} src={each.images.landscape}></img>
      <img id='techImagePotrait' alt={each.name} src={each.images.portrait}></img>
      <div id='techCircles' onClick={slideSelect}>
        <button className='techSelector' id='1'>
          1
        </button>
        <button className='techSelector' id='2'>
          2
        </button>
        <button className='techSelector' id='3'>
          3
        </button>
      </div>     
      <div id='techInfo'> 
      <h3>THE TERMINOLOGY...</h3>
      <h1 id='techName'>{each.name.toUpperCase()}</h1>
      <p>{each.description}</p>
      </div>
      </div>
      )}
      </div>
      
      
      </div>
    </div>
    </div>
  )
}

export default Technology