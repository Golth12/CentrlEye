import React from 'react'
import ProfieImage from "../images/profilepic.png"
import ReviewPic from "../images/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faThumbsDown,faShare,faAngleDown } from '@fortawesome/free-solid-svg-icons'


const Reviews = () => {
  return (
    <div className='reviews'>
  <div id='reviews-title'><h1>Reviews</h1></div>
     <div class="testimonial-container">
  <div class="testimonial">

    <div class="profile-info">
    <img  className='profile-pic' src= {ProfieImage} size={500}/>
      <div class="profile-text">
        <h2 class="name">UserName</h2>
        <p>(REVIEW-LOCATION)</p>
      </div>
    </div>

    <div class="testimonial-text">
      <h3>
        (User will post review title here.)
      </h3>
   
      <p>
     (User will post review text here.)
      </p>
      <img  className='reviewpic-big' src= {ReviewPic} size={100} />
    </div>
  </div>

  
  <div class="testimonial">
  
    <div class="profile-info">
    <img  className='profile-pic' src= {ProfieImage} size={500}/>
      <div class="profile-text">
        <h2 class="name">UserName</h2>
        <p>(REVIEW-LOCATION)</p>
      </div>
    </div>

 
    <div class="testimonial-text">
     <h3>(User will post review title here.)</h3>
      <p>(User will post review text here.)</p>
      <img  className='reviewpic-big' src= {ReviewPic} size={100} />
    </div>
  </div>

 
  <div class="testimonial">

    <div class="profile-info">
    <img  className='profile-pic' src= {ProfieImage} size={500}/>
      <div class="profile-text">
        <h2 class="name">UserName</h2>
        <p>(REVIEW-LOCATION)</p>
      </div>
    </div>


    <div class="testimonial-text">
    <h3>(User will post review title here.)</h3>
    <p>(User will post review text here.)</p>
    <img  className='reviewpic-big' src= {ReviewPic} size={100} />
    </div>

  </div>


  <div class="testimonial">

    <div class="profile-info">
    <img  className='profile-pic' src= {ProfieImage} size={500}/>
      <div class="profile-text">
        <h2 class="name">UserName</h2>
        <p>(REVIEW-LOCATION)</p>
      </div>
    </div>


    <div class="testimonial-text">
    <h3>(User will post review title here.)</h3>
    <p>(User will post review text here.)</p>
    <img  className='reviewpic-big' src= {ReviewPic} size={100} />
    </div>
  </div>


  <div class="testimonial">

    <div class="profile-info">
    <img  className='profile-pic' src= {ProfieImage} size={500} />
      <div class="profile-text">
        <h2 class="name">UserName</h2>
        <p>(REVIEW-LOCATION)</p>
    </div>
    </div>


    <div class="testimonial-text">
    <h3> (User will post review title here.)</h3>
    <p>(User will post review text here.)</p>
    <img  className='reviewpic-big' src= {ReviewPic} size={100} />
    </div>
  </div>
</div>
<div className='see-more-review'>
<h2>See more</h2>
<FontAwesomeIcon className='see-more' icon={faAngleDown}/>
</div>
    </div>
  
    
  )
}
export default Reviews