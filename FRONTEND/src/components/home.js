import React from "react";
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, faClock} from '@fortawesome/free-solid-svg-icons';
import { faInstagram , faFacebook } from '@fortawesome/free-brands-svg-icons';

import './nav.css';
import Navbar from './navbar';
function Home() {
  return (
    <div className="nav">
      <Navbar />
    <div>
      <section className="section">
        <div className="wear">
        <div className="box-main">
		<Carousel controls={false} indicators={false}>
  
            <Carousel.Item>
			<img src="/bag.gif" style={{width:"1500px",height:"800px"}} alt="first slide"/>
              <Carousel.Caption>
                <center>
                <img id="log" src ="/penguin.jpg" alt="logo" style={{width:"100px",height:"100px"}}/>
                  <h1><i>ELEGANZO </i>- The Fashion Store</h1>
                  <h1>Transform your wardrobe without breaking the bank! Explore our latest collection at "ELEGANZO" and redefine your style effortlessly.Elevate your shopping game with the extraordinary deals</h1>
                <h3>Discover the art of shopping on our website.</h3>
                <h3>Elevate your retail therapy experience with our exquisite shopping sanctuary</h3></center>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="/dress.gif" style={{width:"1500px",height:"800px"}} alt="second slide"/>
              <Carousel.Caption><center>
                <h1><FontAwesomeIcon icon={faClock} />Transform your shopping journey into a treasure hunt with our dazzling 40% discount, where surprises await</h1>
                <h3>Embrace the allure of savings with exclusive discounts awaiting you on our website</h3>
                <h3>Experience the thrill of shopping smarter with jaw-dropping 40% discounts, only on our website.</h3></center>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="/men.webp" style={{width:"1500px",height:"800px"}} alt="third slide"/>
              <Carousel.Caption><center>
                <h3><FontAwesomeIcon icon={faShoppingCart} size="2x" color="brown" />Your journey to timeless elegance begins here. Explore our shopping haven today</h3>
               <h1>Fashion-forward, trendsetting, and always in vogue – our website is your style destination</h1></center>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="/womenss.webp" style={{width:"1500px",height:"800px"}} />
              {/* <Carousel.Caption><center>
               <h1>Fashion is what you buy, style is what you do with it</h1></center>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
        </div>
      </section>
       {/* Footer Section */}
      <footer className="footer-background">
        <div className="footer-content">  
          <div className="footer-social">
        <h2>Follow us on Social Media....</h2>
        <label>Facebook</label>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <br></br>
        <label>Instagram</label>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <br/>
          </div>
          <div className="footer-copyright">
          <p>&copy; Eleganzo. All rights reserved.</p>
        </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Home;




