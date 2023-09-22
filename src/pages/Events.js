import "./Events.css"
import Eventsimg from "../images/eventplanning.jpg"
import $ from 'jquery'
import VenueImg from "../images/spotlights.png"
import StaffingImg from "../images/search.png"
import SecurityImg from "../images/policeman.png"
import CateringImg from  "../images/catering.png"
import InvetoryImg from "../images/cargo.png"
import Missicelanous from "../images/photographer.png"
import  Footer from "./Footer"
import MusicEvents from "../images/concert.png"
import SportingEvents from "../images/sport.png"
import CulturalEvents from "../images/mandala.png"
import SocialEvents from "../images/group.png"
import BusinessEvents from "../images/cooperation.png"
import SeasonalEvents from "../images/christmas-decorations.png"
import MarketingPicture from "../images/Event-planning-guide-illustration-featured-605x366.png"
import { faThumbsUp,faThumbsDown,faShare,faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Events = () => {
  $(".default_option").click(function(){
    $(".dropdown ul").addClass("active");
  });
  
  $(".dropdown ul li").click(function(){
    var text = $(this).text();
    $(".default_option").text(text);
    $(".dropdown ul").removeClass("active");
  });
  return( 
    
 <div className="eventspage">
  <div className="eventshead">
 <div className="eventspagehead">
<h1>Your Vision, Our Expertise</h1>
<h3>Find everything you need in one place and start planning your own events stress free today. Connect with venue holders, photographes, invetory agencies and etc...</h3>
  <button className="events-btn">GET STARTED</button>
  </div>
  <img  className='eventplanningimg' src= {Eventsimg} size={500}  />
 </div>

<div className="eventssearchpage">
<hr className="hrevents"></hr>
<h1>Search by category</h1>

<div class="wrapper">

    <div class="search_box">
    
        <div class="dropdown">
            <div class="default_option">All</div>  
            {/* <ul>
              <li>All</li>
              <li>Recent</li>
              <li>Popular</li>
            </ul> */}
        </div>
        <div class="search_field">
          <input type="text" class="input" placeholder="Search event"></input>
          <i class="fas fa-search"></i>
      </div>
    </div>
</div>
</div>
<div className="events-cat">
<h1>Categories</h1>
<h4>From weddings to corporate gatherings, our event planning website offers a wide range of services to suit your needs. Experience the art of celebration with our innovative and personalized event planning solutions.</h4>
<div className="cat-line1">
  <div className="cat-1">
    <div className="cat-image">
    <img  className='venueimg' src= {VenueImg} size={500}  />
    </div>
<div className="cat-text">

   <h3>Venue</h3>
   <h5>Finding the right venue for a event is essential because an appropriate space is needed to accommodate guests to ensure content and comfortbility.</h5>
   
</div>
  </div>
  <div className="cat-2">
  <div className="cat-image">
  <img  className='staffinimg' src= {StaffingImg} size={500}  />
</div>
<div className="cat-text">
    <h3>Event staffing</h3>
    <h5>Hiring the right event staff for a concert should be crucial as they play a vital role in ensuring the smooth execution of various tasks</h5>
  </div>
  </div>
  <div className="cat-3">
  <div className="cat-image">
  <img  className='securityimg' src= {SecurityImg} size={500}  />
</div>

<div className="cat-text">
   
   <h3>Security</h3>
   <h5>Hiring  security for an event is crucial to ensure the safety and well-being of the attendees and staff.</h5>
  </div>
</div>
</div>
<div className="cat-line2">

  <div className="cat-4">
  <div className="cat-image">
  <img  className='cateringimg' src= {CateringImg} size={500}  />
</div>
<div className="cat-text">
<h3>Catering</h3>
<h5>Hiring catering/concessionaires for an event is important as they provide food and beverage services to enhance the attenedes experience.</h5>
</div>
  </div>
  <div className="cat-5">
  <div className="cat-image">
  <img  className='invetoryimg' src= {InvetoryImg} size={500}  />
</div>
<div className="cat-text">
<h3>Invetory</h3>
<h5>Hiring invetory personel or inquiring invetory to make sure that the chairs,tables and etc.. are properly allocated. </h5>
</div>
  </div>
  <div className="cat-6">
  <div className="cat-image">
  <img  className='miss' src= {Missicelanous} size={500}  />
</div>
<div className="cat-text">
    <h3>Missicelanous</h3>
    <h5>Making sure your get photographers , florists, promoters and etc.. is crucial to add to the finishing touch.</h5>
    </div>
  </div>
</div>
</div>
<h1 id="events-search-title">Search for events...</h1>
   <div className="events-events">
    <div className='events-home'>
  <div className='events'>

    <div className='music-events'>
    <img src= {MusicEvents} size={33} />
<h3>Music</h3>
    </div>
    <div className='sporting-events'>
    <img src= {SportingEvents} size={33} />
<h3>Sporting</h3>
    </div>
    <div className='cultural-events'>
    <img src= {CulturalEvents} size={33} />
<h3>Cultural</h3>
    </div>
    </div>
    <div className='events2'>
    <div className='social-events'>
    <img src= {SocialEvents} size={33} />
   <h3>Social</h3>
    </div>
    <div className='buisness-events'>
    <img src= {BusinessEvents} size={33} />
    <h3>Business</h3>
    </div>
    <div className='seasonal-events'>
    <img src= {SeasonalEvents} size={33} />
 <h3> Seasonal/Holiday</h3>
    
  </div>
  
  </div>
  <div className='see-more-review-2'>
<h2>See more</h2>
<FontAwesomeIcon className='see-more-2' icon={faAngleDown}/>
</div>
  </div>
  
  </div>
  
< Footer />
</div>


  );

}

export default Events;