import React from 'react';
import './Reviews.css';


import {AiFillStar} from 'react-icons/ai'

import Image1 from "../../assets/image1.jpeg";
import Image2 from "../../assets/image1.jpeg";
import Image3 from "../../assets/image1.jpeg";
import Image4 from "../../assets/image1.jpeg";



const Reviews = () => {
  return  <div className="review section container">
    <div className="secContainer grid">
      <div className="textDiv">
        <span className="redText">
          FROM OUR CLIENTS
        </span>
        <h3>
          Real Travel History From our Beloved Clients
        </h3>
        <p>
          By choosng us as their tour agency, customers can expect an enriching and enjoyable travel experience,
          filled with unforgettable
          memories that will last a lifetime.
        </p>
        <span className="stars flex">
          <AiFillStar className ="icon"/>
          <AiFillStar className ="icon"/>
          <AiFillStar className ="icon"/>
          <AiFillStar className ="icon"/>
          <AiFillStar className ="icon"/>
        </span>

<div className="clientsImages flex">
  <img src={Image1} alt=" Client Image"/>
  <img src={Image2} alt=" Client Image"/>
  <img src={Image3} alt=" Client Image"/>
  <img src={Image4} alt=" Client Image"/>

</div>
      </div>

      <div className="imgDiv">
        <img src={image1} alt="Div image"/>
      </div>
    </div>
      
    </div>;
  
};

export default Reviews;