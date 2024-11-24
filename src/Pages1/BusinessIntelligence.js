import React from 'react'
import Header from '../MainComponents/Header'
import Footer from '../MainComponents/Footer'
import Whatsappicon from '../Components/Footer/Whatsappicon'
import './CSS/BusinessIntelligence.css'

//import Json
import { BusinessIntelligencekey,BusinessIntelligenceTechStack } from '../Data'

//import timeline component
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

//import images
import Experience from '../Images1/Home/Experience.png'
import Client from '../Images1/Home/Client-Centric.png'
import Innovation from '../Images1/Home/Innovation.png'
import bi1 from '../Images1/BusinessIntelligence/BI-image1.png'
import bi2 from '../Images1/BusinessIntelligence/BI-image2.webp'

//import Link Tag
import { Link } from 'react-router-dom'

//import Aos
import Aos from 'aos';

//import slider 
import Slider from "react-slick";

const BusinessIntelligence = () => {
  Aos.init();

  // Slider settings
  const settings = {
    dots: false,          // Hide dots
    infinite: true,       // Infinite scrolling
    speed: 1000,           // Scrolling speed
    slidesToShow: 4,      // Show 6 cards at a time
    slidesToScroll: 1,    // Scroll 1 card at a time
    autoplay: true,       // Auto-scroll
    autoplaySpeed: 2000,  // Stop for 2 seconds
    pauseOnHover: false,   // Pause when hovering
    draggable: true,      // Enable dragging
    swipeToSlide: true,   // Allow swipe to slide functionality
    arrows: false,

    responsive: [
      {
        breakpoint: 763,   // Tablet view
        settings: {
          slidesToShow: 3,  // Show 2 cards on tablet
        }
      },
      {
        breakpoint: 567,    // Mobile view
        settings: {
          slidesToShow: 1,  // Show 1 card on mobile

        }
      }
    ]
  };
  return (
    <>
      <Header />
      <main className='container-fluid'>

        {/* 1st row -> webdesign content  */}
        <div className='row bi-r1-container '>

          {/* left side -> content  */}
          <div className='col-12  col-md-6'>

            <h4 className='bi-r1-first-cont'>Transforming Data into Actionable Insights</h4>
            <h3 className='bi-r1-heading'>Business Intelligence Solutions</h3>
            <h4 className='bi-r1-sml-heading'>POWERFUL, INTEGRATED, AND EFFICIENT</h4>
            <p className='bi-r1-para'>At Hubsem, we excel in delivering comprehensive Business Intelligence solutions that empower your organization to make informed decisions. Our expertise in PowerApp, PowerBI, PowerAutomate, and SharePoint enables us to provide tailored solutions that streamline your processes and enhance data-driven decision-making. Our goal is to turn your data into actionable insights that drive business growth and efficiency.</p>

          </div>

          {/* right side -> image  */}
          <div className='col-12 col-md-6 d-flex justify-content-center align-item-center' data-aos="fade-left" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">

            <img src={bi1} alt='Animation' className='bi-Animation-img'></img>

          </div>

        </div>

        {/* 2nd row -> Our Key Offerings  */}
        <div className='bi-r2-container'>

          {/* Our Key Offering  */}
          <h3 className='bi-r2-heading'>Our Key Offerings</h3>


          <div className='bi-custom-timeline m-0 '>
            <VerticalTimeline >

              {BusinessIntelligencekey.map((record) => {
                return (
                  <VerticalTimelineElement
                    key={record.id}

                    icon={<img src={record.image} alt='nothing' className='ec-r2-image'/>}
                    className='bi-r2-icon'
                  >
                    <div className='bi-r2-div'>
                      <h3 className='bi-r2-sml-heading'>{record.title}</h3>
                      <p className='bi-r2-para'> {record.description}</p>
                    </div>
                  </VerticalTimelineElement>

                )
              })}
            </VerticalTimeline>


          </div>





        </div>

        {/* 3rd row -> Why Invest in Responsive Design?  */}
        <div className='row bi-r3-container'>

          {/* left -side-image */}
          <div className='col-12 col-md-6 bi-r3-image-div' data-aos="fade-right" data-aos-once="true" data-aos-easing="linear" data-aos-duration="600">
            <div>
            <img src={bi2} alt='Animation' className='bi-Animation-img2' ></img>
            </div>

          </div>

          {/* Right-side-content */}
          <div className='col-12 col-md-6'>

            <h3 className='bi-r3-heading'>Why Invest in Business Intelligence Solutions?</h3>


            <li className='bi-r3-list'>
              <i className="fa-solid fa-globe bi-r3-icon"></i>
              <div>
                <b>Enhanced Decision-Making: </b>
                By leveraging advanced BI tools, you can gain deeper insights into your business operations, leading to more informed and strategic decisions.
              </div>
            </li>


            <li className='bi-r3-list'>
              <i className="fa-solid fa-globe bi-r3-icon"></i>
              <div>
                <b>Increased Productivity:   </b>
                Automating repetitive tasks with PowerApps and PowerAutomate frees up your team to focus on more critical activities, boosting overall productivity.
              </div>
            </li>


            <li className='bi-r3-list'>
              <i className="fa-solid fa-globe bi-r3-icon"></i>
              <div>
                <b>Better Collaboration:   </b>
                With SharePoint, teams can collaborate more effectively, share information seamlessly, and access the resources they need, whenever they need them.
              </div>
            </li>


            <li className='bi-r3-list border-0' >
              <i className="fa-solid fa-globe bi-r3-icon"></i>
              <div>
                <b>Improved Data Visualization:    </b>
                PowerBI’s robust visualization capabilities allow you to see your data in new ways, making it easier to identify trends, patterns, and areas for improvement.
              </div>
            </li>





          </div>

        </div>

        {/* 4th-Row -> Cards */}
        <div className='bi-r4-container Container-fluid overflow-hidden '>

          <div className='d-flex justify-content-center'>
            <h3 className='bi-r4-heading'>Why We Stand Out?</h3>
          </div>
          <div className='row bi-r4-row'>

            {/* 1st Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4  bi-r4-div" width="auto" height="auto">
                <div>
                  <img src={Experience} className="bi-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title bi-r4-card-heading">EXPERTISE AND EXPERIENCE</h5>
                  <p className="card-text bi-r4-card-para">Our team has extensive experience in implementing Business Intelligence solutions across various industries. We combine technical expertise with industry knowledge to deliver solutions that meet your specific needs.</p>
                </div>
              </div>
            </div>

            {/* 2nd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 bi-r4-div" width="auto" height="auto">
                <div>
                  <img src={Client} className="bi-r4-card-img" alt="Desktop" />
                </div>

                <div className="card-body">
                  <h5 className="card-title bi-r4-card-heading">CLIENT-CENTRIC APPROACH</h5>
                  <p className="card-text bi-r4-card-para">We prioritize understanding your business objectives and challenges. Our client-centric approach ensures that we deliver customized BI solutions that align with your goals and drive tangible results.</p>
                </div>
              </div>
            </div>

            {/* 3rd Element  */}
            <div className='col-12 col-md-4   '>

              <div className="card p-4 bi-r4-div" width="auto" height="auto">
                <div>
                  <img src={Innovation} className="bi-r4-card-img" alt="Desktop" />
                </div>
                <div className="card-body">
                  <h5 className="card-title bi-r4-card-heading">INNOVATIVE SOLUTIONS</h5>
                  <p className="card-text bi-r4-card-para">We stay at the forefront of BI technology, using the latest tools and techniques to provide innovative solutions that give you a competitive edge. Our solutions are designed to be scalable and adaptable, ensuring they grow with your business.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      {/* 5th-Row ->slider */}
      <div className='bi-r5-container'>
          <h3 className='bi-r5-heading'>Our Comprehensive BI Tech Stack</h3>

          <Slider {...settings}>
            {
              BusinessIntelligenceTechStack.map(record => {
                return (

                  <div key={record.id} className='bi-r5-slider-container'>
                    <div className='d-flex justify-content-center'>
                      <img src={record.image} alt='' className='bi-r5-slider-images' />
                    </div>
                    <div>
                      <h3 className='bi-r5-slider-caption'>{record.caption}</h3>
                    </div>
                  </div>

                )
              })
            }

          </Slider>



        </div>
      </main>

      {/* 6th-Row -> Get a Quote */}
      <div className='bi-r6-container'>
          <div className='bi-r6-parallax-container'>
            <h1 className='bi-r6-parallax-txt'>Ready to Transform Your Business with BI Solutions?</h1>
            <p className='bi-r6-parallax-para'>Unlock the potential of your data and drive business growth with our Business Intelligence solutions. Contact Hubsem today for a consultation and quote. Let’s turn your data into actionable insights and take your business to the next level.</p>
            <div className='bi-r6-btn-container'>
              <button className='bi-r6-btn' ><Link to='/contact' className='bi-r6-btn-link' >Get a Quote</Link></button>
            </div>
          </div>
          <div className='bi-r6-parallax'></div>
        </div>

      <Whatsappicon />
      <Footer />
    </>
  )
}

export default BusinessIntelligence
