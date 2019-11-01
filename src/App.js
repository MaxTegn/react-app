import React from 'react';
import ContactCard from './components/ContactCard'

function App(){
  return (
    <div className="contacts">
    	<ContactCard 
    	contact={{name: "Mr Doggo", 
    	imgUrl: "https://i.gyazo.com/ecd30b7184eb4d636f082e288bf18775.png",
    	phone: "0706-60 21 21", email: "mr.doggo@dogmail.bark"}}/>

    	<ContactCard
    	contact={{name:"Black Shepard", 
    	imgUrl: "https://i.gyazo.com/ebd72414f73e80b0e7b86bbc302e616e.png",
    	phone:"0956-41 00 00", email:"bs@dogmail.bark"}}/>

    	<ContactCard
    	contact = {{name: "Golden ponie", 
    	imgUrl: "https://i.gyazo.com/eb93ae2b8ea56a6ac06cd9a3ccd83200.png",
    	phone: "0756-41 21 21", email: "gooldpe@dogmail.bark"}}/>

    	<ContactCard
    	contact= {{name: "Green Lantern", imgUrl: "https://i.gyazo.com/0a10d4bc5ada7d5457d68171861dbd23.png",
    	phone: "0843-11 01 41", email: "greenlant@dogmail.bark"}}/>
    </div>
    )
}

export default App