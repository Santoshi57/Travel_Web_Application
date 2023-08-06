import React from 'react';
import './Portifolio.css';

import icon1 from '../../assets/photo.webp '
import icon2 from '../../assets/photo.webp '
import icon3 from '../../assets/photo.webp '

const Portifolio = () => {
  return <div className="portifolio section container">
    <div className="secContainer grid">
      <div className="leftContent">
        <div className="secHeading">
          <h3>
            Why Should You Choose Us
          </h3>
          <p>
            We have extensive knowledge and experience in the travel industry.
          </p>
        </div>

        <div className="grid">
          <div className="singlePortifolio flex">
            <div className="iconDiv">
              <img src={icon1} alt="Icon image "/>
            </div>

            <div className="infor">
              <h4>Safety and Support</h4>
              <p>
                Our top priorty is the safety and well-being of our clients.
                We maintain high safety standards and have emergency support available during the trip.

              </p>
            </div>
          </div>
          <div className="singlePortifolio flex">
            <div className="iconDiv">
              <img src={icon2} alt="Icon image "/>
            </div>

            <div className="infor">
              <h4>Diverse Range of Destination</h4>
              <p>
                Our top priorty is the safety and well-being of our clients.
                We maintain high safety standards and have emergency support available during the trip.

              </p>
            </div>
          </div>

          <div className="singlePortifolio flex">
            <div className="iconDiv">
              <img src={icon3} alt="Icon image "/>
            </div>

            <div className="infor">
              <h4>24/7 Customer Support</h4>
              <p>
                Our top priorty is the safety and well-being of our clients.
                We maintain high safety standards and have emergency support available during the trip.

              </p>
            </div>
          </div>
        </div>
<div className="rightContent">
  <img src="" alt=""/>
</div>

      </div>
    </div>
      
    </div>;
  
};

export default Portifolio;