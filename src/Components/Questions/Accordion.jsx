import React from 'react';
import './Questions.css';
//Imported icons
import{BsArrowDownCircle} from 'react-icons/bs';

const Accordion = ({title, desc, active, aetActive}) => {


  return (
    <div className ="accordionContainer">
        <span className="title flex ">
           {title}
          <span>
          <BsArrowDownCircle className="icon"/> 
          </span> 
        </span>
  <p className="description"/>
{desc}
    </div>
  );
};

export default Accordion;
