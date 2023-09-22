import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUsers,faHandshake,faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Faq = () => {
  return(
      
       <div className='faq'>
       <div className='faqservice'>
              <h2>WHAT WE OFFER</h2>
             <hr></hr>
             <h4> Central location for anything event planning related.</h4>
       </div>
       
       <div className='faqmain'>
        <div className='faqtext'>
          <div className='text1'>
          <FontAwesomeIcon className='icon1' icon={faUsers}/>
           <h2>Network</h2>  
       <h5> Connect with other proffesionals in your domain.</h5>
         </div>
         <div className='text2'>
         <FontAwesomeIcon className='icon2' icon={faHandshake}/>
          <h2>Oppurtunities</h2>
         <h5>Create oppurtunities for your own buissnes.</h5>
         </div>
         <div className='text3'>
          <FontAwesomeIcon className='icon3' icon={faCircleCheck}/>
          <h2>Hosting</h2>
         <h5>Host your own events with ease.</h5>
         </div>
        </div>
         </div>
        
      </div>

  )
};

export default Faq;