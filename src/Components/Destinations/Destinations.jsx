import React from 'react'
import './Destinations.css'




//Imporetd icons
import {MdLocationPin} from "react-icons/md"
import {BsFillCreditCardFill} from "react-icons/bs"
import {BsFillCalendarDateFill} from "react-icons/bs"
import {BiSearchAlt} from 'react-icons/bi'
import {TiLocation} from 'react-icons/ti'


//impotred images
import  image1 from '../../assets'

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

          <div className="inputField flex">
            <BsFillCreditCardFill className="icon"/>
            <input type="text" placeholder="Budget"/>
          </div>

          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon"/>
            <input type="text" placeholder="Date"/>
          </div>

          <button className="btn flex"><BiSearchAlt className='icon'/>
          Search </button>
        </div>


        <div className="secMenu">
          <ul className="flex">
            <li className="active">All</li>
            <li>Recommendeded</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>

        </div>

        <div className="destinationContainer grid">
          <div className="singleDestination">
            <div className="imgDiv">
            <img src={image1} alt="Destination Image "/>
            
            <div className="descInfo flex">
              <div className="text">
                <span className="name">
                  Baro Baro Island
                </span>
                <p className ="flex">
                  <TiLocation className="icon"/>
                  Netherlands
                  </p>
              </div>
              <span className="rating">
                4.6
              </span>
            </div>
            
            </div>
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default Destinations
