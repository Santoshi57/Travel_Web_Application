import React from 'react'
import './Destinations.css'


import {MdLocationPin} from 'react-icons/md'
const Destinations = () => {
  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">
            EXPLORE NOW
          </span>
          <h3>
            Find Your Dream Destination
          </h3>
          <p>Fill in the fields below to find the best 
            spot for your next tour.
            </p>
        </div>
        <div className="searchField grid">
          <div className="inputField flex">
      <MdLocationPin className='icon'/>
      <input type="text" placeholder='Location'/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Destinations
