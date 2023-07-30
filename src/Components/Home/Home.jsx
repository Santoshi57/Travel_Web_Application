import React from 'react';
import './Home.css';

import Video from '../../assets/video.mp4'


import {AiOutLineSwapRight} from 'react-icons/ai'
const Home = () => {
  return 
    <div className="Home">
      <div className="videoBg">
        <video src ={Video} autoPlay loop muted></video>
      </div>
  

  <div className="sectionText">
    <h1>
      Unlock Your Travel Dreams With Us!
    </h1>
    <p>
      Discover the worl's most adventurous nature,
      life is so short for a trip.
    </p>
    <button> GET STARTED <AiOutLineSwapRight className='icon'/>
     </button>
  </div>
<div className="popularPlaces">
  <div className="content">
    <h3>Popular Places</h3>
   <div className="images flex">
  
  
   </div>
  </div>
</div>
    </div>;
  
};

export default Home;