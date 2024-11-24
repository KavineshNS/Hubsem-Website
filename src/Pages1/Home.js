import React from 'react'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import Whatsappicon from '../Components/Footer/Whatsappicon'
import '../Pages1/CSS/Home.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';

// Import Images 
import Mainimg from '../Images1/Home/Home Page img.jpg'
import Secondimg from '../Images1/Home/Home-img-2.jpg';
import webdesign from '../Images1/Home/Webdesign.jpg'
import Ecommerce from '../Images1/Home/Ecommerce.jpg'
import Businessintelligence from '../Images1/Home/Business Intelligence.jpg'
import Seo from '../Images1/Home/SEO.jpg'
import Smm from '../Images1/Home/SMM.jpg'
import Desktop from '../Images1/Home/Desktop.jpg'
import Experience from '../Images1/Home/Experience.png'
import Client from '../Images1/Home/Client-Centric.png'
import Innovation from '../Images1/Home/Innovation.png'



//Importing recapcha
import ReCAPTCHA from "react-google-recaptcha";

//Import Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Home = () => {

  // useEffect(() => {

  // }, [])
  Aos.init();


  // const [selectedOption, setSelectedOption] = useState('');
  // const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const form = document.querySelector('form');

    if (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault(); // Prevent form submission if invalid
          event.stopPropagation(); // Stop the event from propagating further
        }

        form.classList.add('was-validated'); // Apply Bootstrap validation styles
      });
    }
  }, []);  // Empty dependency array to ensure this effect runs only once

  function onChange(value) {
    
  }



  return (

    <>
      <Header />
      <main className=''>
        {/* 1-row Main Image  */}
        <div className='Home-main-img'>
          <img src={Mainimg} className='main-img' alt='main.png' data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" />

          {/* image content  */}
          <div className="main-home-img-content" data-aos="slide-right" data-aos-once="true" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="1000"  >

            <p className="main-home-img-txt" data-aos="zoom-in" data-aos-once="true" data-aos-easing="linear" data-aos-duration="500" data-aos-delay="1500">
              Elevating Business through Technology-<br />Your Gateway to IT Excellence
            </p>
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------- */}
        {/* 2-row  */}
        <div className=' row  me-0 Home-second-row'>

          {/* Home 2nd Image  */}
          <div className='col-12 col-md-6 Home-second-img-div'>
            <img src={Secondimg} alt='Second img' className='Home-Second-img ' />
          </div>

          {/* Home 2nd Column content  */}
          <div className='col-12 col-md-6 order-first order-md-1 '>

            <h6 className='welcome'>WELCOME TO HUBSEM SOLUTIONS</h6>
            <h2 className='Home-2-heading'>Innovative IT Services for Seamless Business Operations</h2>
            <p className='Home-2-para'>We are dedicated to providing comprehensive and reliable IT solutions to help businesses thrive in the digital age. Our team of experts specializes in a wide range of IT services, ensuring that we can meet all your technology needs. We believe that technology should be a powerful tool that enhances your business operations. With our IT services, we aim to empower organizations by leveraging cutting-edge technology to drive growth, increase efficiency, and improve overall productivity.</p>


            <div className='container-fluid '>
              {/* Customized solutions */}
              <div className=' Home-2nd-container row mb-4'>
                {/* logo  */}
                <div className='col-12 col-md-2 Home-2nd-icon-div'>
                  <i className="fa-solid fa-desktop Home-2nd-icon "></i>
                </div>

                {/* Content  */}
                <div className='col-12 col-md-10'>
                  <h4 className='Home-2nd-heading'>Customized Solutions</h4>
                  <p className='Home-2nd-para'>Our team works closely with you to design and implement customized solutions that address your immediate needs and align with your long-term vision.</p>
                </div>
              </div>


              {/* Cutting edge Technology */}
              <div className='d-flex Home-2nd-container row mb-5'>
                {/* logo  */}
                <div className='col-12 col-md-2 Home-2nd-icon-div'>
                  <i className="fa-regular fa-lightbulb Home-2nd-icon"></i>
                </div>

                {/* Content  */}
                <div className='col-12 col-md-10'>
                  <h4 className='Home-2nd-heading'>Cutting-Edge Technology</h4>
                  <p className='Home-2nd-para'>From implementing robust network infrastructure to developing cutting-edge software applications, we ensure that your business remains technologically competitive and equipped to meet evolving market demands.</p>
                </div>
              </div>

            </div>
            {/* Button */}
            <button className='History-btn'><Link to='/about' className='history-link' > KNOW OUR HISTORY</Link></button>


          </div>
        </div>



        {/* -------------------------------------------------------------------------------------------------- */}

        {/* 3rd-row Services content  */}
        <div className='third-row container-fluid overflow-hidden'>

          {/* text  */}
          <div className='d-flex row'>
            <div className='col-12 col-md-9'>
              <h6 className='lookat'> HAVE A LOOK AT</h6>
              <h2 className='Home-3-heading'>Our Services</h2>
            </div>

            {/* Button */}
            <div className='col-12 col-md-3 service-btn-div '>
              <button className=' service-btn '><Link to='/services' className='service-btn-link' > VIEW OUR SERVICES</Link></button>
            </div>
          </div>


          {/* Box content  */}
          <div className='container-fluid mt-5'>

            {/* 1-row  */}
            <div className='row '>

              {/* 1st Element */}
              <div className='col-12 col-md-4 pb-5'>

                <div className="card p-4" width="auto" height="auto" >
                  <Link to='/webdesign'><img src={webdesign} className="card-img-top" alt="web design" /></Link>

                  <div className="card-body">
                    <Link to='/webdesign' className='sec-3rd-link'><h5 className="card-title sec-3rd-heading">RESPONSIVE WEBSITE DESIGN / DEVELOPMENT</h5></Link>
                    <p className="card-text sec-3rd-para">Crafting visually stunning and user-friendly websites that adapt seamlessly across all devices</p>
                  </div>
                </div>

              </div>

              {/* 2nd Element */}
              <div className='col-12 col-md-4 pb-5  '>

                <div className="card p-4" width="auto" height="auto">
                  <Link to='/ecommerce'><img src={Ecommerce} className="card-img-top" alt="E-commerce" /></Link>

                  <div className="card-body">
                    <Link to='/ecommerce' className='sec-3rd-link'><h5 className="card-title sec-3rd-heading">ECOMMERCE SOLUTIONS</h5></Link>
                    <p className="card-text sec-3rd-para">Empowering your online business with customized, robust, and scalable eCommerce solutions.</p>
                  </div>
                </div>
              </div>

              {/* 3rd Element */}
              <div className='col-12 col-md-4 pb-5 '>

                <div className="card p-4" width="auto" height="auto">
                  <Link to='/businessintelligence'><img src={Businessintelligence} className="card-img-top" alt="Business Intelligence" /></Link>

                  <div className="card-body">
                    <Link to='/businessintelligence' className='sec-3rd-link'> <h5 className="card-title sec-3rd-heading">BUSINESS INTELLIGENCE SERVICES</h5></Link>
                    <p className="card-text sec-3rd-para">Transforming data into actionable insights with cutting-edge Business Intelligence services.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2-row */}
            <div className='row pb-5'>

              {/* 4th Element */}
              <div className='col-12 col-md-4 pb-5  '>

                <div className="card p-4" width="auto" height="auto">
                  <Link to='/seo'><img src={Seo} className="card-img-top" alt="SEO" /></Link>

                  <div className="card-body">
                    <Link to='/seo' className='sec-3rd-link'><h5 className="card-title sec-3rd-heading">SEARCH ENGINE OPTIMIZATION (SEO)</h5></Link>
                    <p className="card-text sec-3rd-para">Boosting your online visibility and driving organic traffic with expert Search Engine Optimization (SEO) services.</p>
                  </div>
                </div>
              </div>


              {/* 5th Element */}

              <div className='col-12 col-md-4 pb-5 '>

                <div className="card p-4" width="auto" height="auto">
                  <Link to='/smm'><img src={Smm} className="card-img-top" alt="SMM" /></Link>

                  <div className="card-body">
                    <Link to='/smm' className='sec-3rd-link'> <h5 className="card-title sec-3rd-heading">SOCIAL MEDIA MARKETING (SMM)</h5></Link>
                    <p className="card-text sec-3rd-para">Elevating your brand's presence and engagement through strategic Social Media Marketing (SMM) campaigns.</p>
                  </div>
                </div>
              </div>


              {/* 6th Element  */}
              <div className='col-12 col-md-4 pb-5  '>

                <div className="card p-4" width="auto" height="auto">
                  <Link to='/desktop'><img src={Desktop} className="card-img-top" alt="Desktop" /></Link>

                  <div className="card-body">
                    <Link to='/desktop' className='sec-3rd-link' > <h5 className="card-title sec-3rd-heading">DESKTOP / WEB / MOBILE APPLICATIONS</h5></Link>
                    <p className="card-text sec-3rd-para">Tailor-made applications for desktop, web, and mobile, designed to fit your unique business needs perfectly.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* --------------------------------------------------------------------------------------- */}


        {/* 4th- row Why we stand out  */}
        
        <div className='fourth-row Container-fluid overflow-hidden '>

          <div className='d-flex justify-content-center'>
            <h3 className='stand-heading'>Why We Stand Out?</h3>
          </div>
          <div className='row Stand-card-row'>

            {/* 1st Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4  stand-card-div" width="auto" height="auto">
                <div>
                  <img src={Experience} className="stand-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">EXPERTISE AND EXPERIENCE</h5>
                  <p className="card-text sec-3rd-para">Leveraging deep industry knowledge and a wealth of experience, we deliver expertly crafted solutions that drive success and exceed expectations.</p>
                </div>
              </div>
            </div>

            {/* 2nd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 stand-card-div" width="auto" height="auto">
                <div>
                  <img src={Client} className="stand-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">CLIENT-CENTRIC APPROACH</h5>
                  <p className="card-text sec-3rd-para">Focused on understanding and meeting your unique needs, our client-centric approach ensures personalized solutions and exceptional service tailored to your goals.</p>
                </div>
              </div>
            </div>

            {/* 3rd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 stand-card-div" width="auto" height="auto">
                <div>
                  <img src={Innovation} className="stand-card-img" alt="Desktop" />
                </div>
                <div className="card-body">
                  <h5 className="card-title sec-3rd-heading">INNOVATIVE SOLUTIONS</h5>
                  <p className="card-text sec-3rd-para">Bringing creativity and cutting-edge technology together to provide innovative solutions that drive success and set new standards in your industry.</p>
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* --------------------------------------------------------------------------------------- */}

        {/* 5th- row Form */}

        <div className='overflow-hidden'>
          <div className='fifth-row row '>

            {/* contact details */}
            <div className='col-12 col-md-5 contact-details '>

              <h3 className='form-follow'>FOLLOW US ON</h3>

              {/* social media */}
              <div className='Form-socialmedia'>

                <a href='https://www.facebook.com/hubsemsolutions' target='_blank' rel="noreferrer" className="Form-AppIcon facebook">< FontAwesomeIcon icon={faFacebookF} /></a>
                <a href='https://www.instagram.com/hubsemsolutions/' target='_blank' rel="noreferrer" className="Form-AppIcon instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href='https://x.com/hubsem' target='_blank' rel="noreferrer" className="Form-AppIcon twitter"> <i className="fa-brands fa-twitter"></i></a>
                <a href='https://www.linkedin.com/company/hubsem-software-solutions/mycompany/' target='_blank' rel="noreferrer" className="Form-AppIcon linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href='https://www.youtube.com/@hubsemsoftwaresolutions' target='_blank' rel="noreferrer" className="Form-AppIcon youtube"><FontAwesomeIcon icon={faYoutube} /></a>

              </div>

              <p className='follow-para'>We look forward to hearing from you and assisting you with any inquiries or concerns you may have.</p>


              {/* phone number */}
              <div className="col-12   call-us-div">
                <a href="tel:+91 9500590134"><i className="fa-solid fa-phone form-contact-icon"></i></a>
                <div>
                  <a href="tel:+91 9500590134" className='form-reachus'><h3 className='form-heading'>CALL US TODAY</h3></a>
                  <p className='form-content'><a className='form-contact-hover form-reachus' href="tel:+91 9500590134">+91 9500590134</a></p>
                </div>
              </div>


              {/* E-mail */}
              <div className="col-12  call-us-div">
                <a href="mailto:info@hubsem.com"><i className="fa-solid fa-envelope form-contact-icon"></i></a>
                <div>
                  <a href="mailto:info@hubsem.com " className='form-reachus'><h3 className='form-heading'>SEND US AN EMAIL</h3></a>
                  <p className='form-content'><a className='form-contact-hover form-reachus' href="mailto:info@hubsem.com" >info@hubsem.com</a></p>
                </div>
              </div>

              {/* Address */}
              <div className="col-12  call-us-div ">
                <i className="fa-regular fa-address-card form-contact-icon"></i>
                <div >
                  <h3 className='form-heading '>OFFICE ADDRESS</h3>
                  <p className='form-content form-contact-hover form-reachus'>#714A,Spencer Plaza, Phase II, 7th Floor, #769, Anna Salai, Thousand Lights, Chennai-600002</p>
                </div>
              </div>
            </div>

            {/* Form */}

            <div className="col-12 col-md-6 home-5th-form ">
              <form className="row g-0 needs-validation" noValidate>

                <h4 className="stay-in-touch">STAY IN TOUCH</h4>
                <h2 className="lets-connect">Let's Connect!</h2>

                {/* Full Name */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom01" className="form-label"></label>
                  <input type="text" className="form-control sec-5th-input" id="validationCustom01" placeholder="Full name*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                {/* E MAIL */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label"></label>
                  <input type="email" className="form-control sec-5th-input" id="validationCustom02" placeholder="Email*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                {/* PHONE */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom03" className="form-label"></label>
                  <input type="tel" className="form-control sec-5th-input" id="validationCustom03" placeholder="Phone*" required />
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                <h4 className="home-interest">Service of Interest:</h4>

                {/* Please choose an option */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom04" className="form-label"></label>
                  <select className="form-select  sec-5th-input  select-option " id="validationCustom04" placeholder="--Please choose an option--" required>
                    <option className='select-option' >--Please choose an option--</option>
                    <option className='select-option'>Web Application</option>
                    <option className='select-option'>Mobile Application</option>
                    <option className='select-option'>Web Design & Development</option>
                    <option className='select-option'>Graphic Design</option>
                    <option className='select-option'>Digital Marketing</option>
                    <option className='select-option'>Maintenance & Support</option>
                  </select>
                  <div className="invalid-feedback">
                    Please fill out this field.
                  </div>
                </div>

                {/* IT Needs */}
                <div className="col-md-12">
                  <label htmlFor="validationCustom05" className="form-label"></label>
                  <input type="text" className="form-control sec-5th-input" id="validationCustom05" placeholder="Description of Your IT Needs" />
                </div>

                {/* Additional Comments */}
                <div className="mb-3">
                  <label htmlFor="validationTextarea" className="form-label"></label>
                  <textarea className="form-control  sec-5th-txtarea" id="validationTextarea" placeholder="Additional Comments or Questions"></textarea>
                </div>


                <ReCAPTCHA className="col-12"
                  sitekey="Your client site key"
                  onChange={onChange}
                />

                <div className="col-12">
                  <button className=" home-form-btn" type="submit">SUBMIT</button>
                </div>
              </form>

            </div>


          </div>
        </div>


      </main>
      <Whatsappicon />
      <Footer />
    </>
  )
}

export default Home
