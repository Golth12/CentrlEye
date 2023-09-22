import "./Contact.css"
import Footer from "./Footer";


const Contact = () => {
  return  <div className="contact-page"><div className="contact">
    <div className="contactinfo">
<h1>Get In Touch With Us!</h1>
<h4>Send us a message and we'll get back to you soon. </h4>

    </div>

    <div className="contactform">
    <h1>Contact Form</h1>
  <form>

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Submit"></input>

  </form>

    
</div>


  </div>

  <div className='ad1'>
    <h3>*(AD SPACE)*</h3>
  </div>
  <Footer />
  </div>;
};

export default Contact;