import React from 'react';
import './Questions.css';
import Accordion from "./Accordion";

const Questions = () => {
  const [active, setActive] = useState(" How do I choose the right travel destination for me?"
  );


  return  <div className="questions section container">
      <div className="secHeading">
       <h3>Frequently Asked Questions</h3> 
      </div>
      <div className="secContainer grid">
        <div className="accordion grid">

        </div>
        <div className="accordion grid">
        <Accordion title="How do I choose the right travel destination for me?"/>
        <Accordion/>

        </div>
        <div className="form">
          <div className="secHeading">
            <h4>DO you have any specific questions?</h4>
            <p>
              Please fill the form below and our dedicated team will get in touch with you as soon as possible.
            </p>
          </div>
          <div className="formContent grid">
            <input type="email" placeholder="Enter email address"/>
            <textarea placholder="Enter your question here"></textarea>
            <button className="btn">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>;
  
};

export default Questions;