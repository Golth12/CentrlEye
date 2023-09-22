import Search from "./Search";
import "./Search.css"
import  "./Home.css"
import Faq from "./Faq";
import "./Faq.css"
import Reviews from "./Reviews"
import "./Reviews.css"
import Footer from "./Footer"
import "./Footer.css"
import MusicEvents from "../images/concert.png"
import SportingEvents from "../images/sport.png"
import CulturalEvents from "../images/mandala.png"
import SocialEvents from "../images/group.png"
import BusinessEvents from "../images/cooperation.png"
import SeasonalEvents from "../images/christmas-decorations.png"
import MarketingPicture from "../images/Event-planning-guide-illustration-featured-605x366.png"
import Ad from './Ad';



const Home = () => {
  return <div>
    
<Search/>
<Faq />
<div className='home'>
  <div className='ad1'>
  <Ad dataAdSlot='' />
    <h3>*(AD SPACE)*</h3>
  </div>
  <div className='home1'>

    <hr className='hr1'></hr>
   <p>
    Search by events...
   </p>
  </div>
  <div className="events-text-home">
  <div className="events-text">
<h5>From Concept to Execution, We've Got You Covered.</h5>
  </div>
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
  
  </div>
  </div>
  <div className='home-info'>
  <div className='text-picture-marketing'>
    Great chance to host your own events with ease and network with the top proffesionals in your area! <a id="btn-marketing" href='#' className='btn btn-light'>  Learn More</a>
  </div>
  <img  className='marketing-picture' src= {MarketingPicture} size={100}  />
  <hr></hr>
  </div>
 
</div>
<Reviews />
<div className='ad1'>
<Ad dataAdSlot='X7XXXXXX5X' />
    <h3>*(AD SPACE)*</h3>
  </div>

<Footer />


  </div>;
};

export default Home;

