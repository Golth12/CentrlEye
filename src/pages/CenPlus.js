import "./CenPlus.css"
import Footer from "./Footer"

const CenPlus = () => {
  return <>
    <div className="cenplus">
 <h1>CentrlEye+</h1>
 <h3>Enjoy exclusive services with CentrlEye+ starting today</h3>
 <section class="pricing-tables content-area">
    <div class="container">
        <div class="main-title text-center">
            <h1>Pricing Tables</h1>
        <button className="pricing-btn">Sign Up</button>
        </div>
        <div class="row">
            <div class="col-sm-12 col-lg-4 col-md-4">
                <div class="pricing">
                    <div class="price-header">
                        <div class="title">Basic Plan</div>
                        <div class="price">$5.99/Month</div>
                    </div>
                    <div class="content">
                        <ul>
                            <li>-Access to basic event management tools.</li>
                            <li>-Event creation tools.</li>
                            <li>-Basic event promotion options.</li>
                            <li>-Limited networking services.</li>
                            <li>-Limited amount of outreach</li>
                        </ul>
                        <div class="button"><a href="#" class="btn btn-outline pricing-btn">Get Started</a></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-4 col-md-4">
                <div class="pricing featured">
                    <div class="listing-badges">
                        <span class="featured">Featured</span>
                    </div>
                    <div class="price-header price-header-2">
                        <div class="title">Professional</div>
                        <div class="price">$12.99/Month</div>
                    </div>
                    <div class="content">
                        <ul>
                            <li>-All Basic Subscription features.</li>
                            <li>-Customized event pages with branding options</li>
                            <li>-Advanced marketing analytics to track performance.</li>
                            <li>-Unlimited chatting with users.</li>
                            
                        </ul>
                        <div class="button"><a href="#" class="btn btn-outline pricing-btn button-theme">Get Started</a></div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-4 col-md-4">
                <div class="pricing">
                    <div class="price-header">
                        <div class="title">Exclusive</div>
                        <div class="price">$20.99/Month</div>
                    </div>
                    <div class="content">
                        <ul>  <li>-All Proffesional Subscription features.</li>
                            <li>-Team collaboration tools for efficient event planning.</li>
                            <li>-Attendee engagement tools, including surveys and feedback collection.</li>
                            <li>-Detailed analytics and reporting for insights.</li>
                            
                        </ul>
                        <div class="button"><a href="#" class="btn btn-outline pricing-btn">Get Started</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  <div className='ad1'>
    <h3>*(AD SPACE)*</h3>
  </div>
<Footer/>
</div>
    
  </>
};

export default CenPlus;