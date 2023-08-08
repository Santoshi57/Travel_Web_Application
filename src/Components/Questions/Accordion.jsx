import React from 'react';
import './Questions.css';
//Imported icons
import{BsArrowDownCircle} from 'react-icons/bs';

const Accordion = () => {
  return (
    <div className ='accordionContainer'>
        <span className="title flex ">
           How do i choose the right travel destination for me?
          <span>
          <BsArrowDownCircle className='icon'/> 
          </span> 
        </span>
  <p>
    Consider your interests, budget,desired experiences,and the type of environment you 
    enjoy. Research destinations that allign with your preferences and offer attractions or activities you 
    find appealing.
  </p>
    </div>
  );
};

export default Accordion;
