import React from 'react';
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
  
    </div>
  );
};

export default Accordion;
