import React from 'react'

const Footer = () => {
  return (
    <div className='end'>

<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">CentrlEye</h1>

    <address>
      Houston,Tx
      <br></br>
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Events</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Hosting</a>
        </li>

        <li>
          <a href="#">Categories</a>
        </li>
            
        <li>
          <a href="#">Proffesionals</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">CentrlEye+</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Pricing</a>
        </li>
        
        <li>
          <a href="#">Categories</a>
        </li>
        
        <li>
          <a href="#">Benefits</a>
        </li>
        
        <li>
          <a href="#">Get Started</a>
        </li>
        
        <li>
          <a href="#">Faq</a>
        </li>
        
        <li>
          <a href="#">Mention Us</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Faq</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2023 CentrlEye. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Product of DrissTechnolgies</span>
    </div>
  </div>
</footer>
</div>
  )
}

export default Footer