import React from 'react'
import {Link} from 'react-router-dom';
import whitelogo from '../../Images1/logo-white.png';
import Backgroundimg from '../../Images1/Background image.jpeg'
import "./Footer.css"


const Footercode = () => {
  
 

  return (
    <>
    <footer className='footer container-fluid '>

      {/* Background image  */}
        <img src={Backgroundimg} alt="" className="Background-Image"/> 

        {/* Footer-content */}
      <div className='footer-top col-12 row'>

            {/* footer logo */}
            <div className='col-12 col-sm-4 col-md-6 ps-5'>
                <Link  to="/">
                  <img src={whitelogo} alt="" height="150px" width="128px" className='footer-logo'></img>
              </Link>
              <p className='logo-content'>Our team of experts specializes in a wide range of IT services, ensuring that we can meet all your technology needs.</p>
            </div>

            {/* Quick Links  */}
            <div className='col-12 col-sm-3 col-md-2 d-flex flex-column align-content-end ps-5'>
                <h3 className='footer-links'>Quick Links</h3>
                <ul>
                    <li className='list-tag'><Link className='links-content' to="/">Home</Link></li>
                    <li className='list-tag'><Link className='links-content' to="/about">About Us</Link></li>
                    <li className='list-tag'><Link className='links-content' to="/services">Services</Link></li>
                    <li className='list-tag'><Link className='links-content' to="/internship">Internship</Link></li>
                    <li className='list-tag'><Link className='links-content' to="/contact">Contact Us</Link></li>
                </ul>
            </div>

            {/* Services  */}
            <div className='col-12 col-sm-5 col-md-4 d-flex flex-column align-content-end ps-5'>
                <h3 className='footer-links '>Services</h3>
                  <ul>
                    <li className='list-tag'><Link className='links-content' to="/webdesign">Responsive Website Design / Development</Link></li>
                    <li className='list-tag'><Link className='links-content' to="/ecommerce">Ecommerce Solutions</Link></li>
                    <li className='list-tag'><Link className='links-content' to="/businessintelligence">Business Intelligence Services</Link></li>
                    <li className='list-tag'><Link className='links-content' to="/seo">Search Engine Optimization (SEO)</Link></li>
                    <li className='list-tag'><Link className='links-content' to="/smm">Social Media Marketing (SMM)</Link></li>
                    <li className='list-tag'><Link className='links-content' to="/desktop">Desktop / Web / Mobile Applications</Link></li>

                  </ul>
            </div>
      </div>
      <hr/>

      <div className='d-flex justify-content-center footer-bottom col-12 '>
        &copy;
        <p className='copyright'> Copyright 2024, Hubsem Software Solutions Pvt. Ltd. | All rights reserved.</p>
      </div>
      </footer>
    </>
  )
}

export default Footercode
