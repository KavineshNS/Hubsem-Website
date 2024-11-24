import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faSquareTwitter,faLinkedinIn,faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Littlecontact.css';


const LittleContact = () => {
  return (
    <div className='container d-block d-sm-block d-md-none '>
       <div className='Littlecontact row '>
        <div className='d-flex col-6 col-sm-4 '>
            <a href="mailto:info@hubsem.com"><i className="fa-solid fa-envelope Little-icon"></i></a>
            <a className='Little-contact-hover ' href="mailto:info@hubsem.com" >info@hubsem.com</a>
        </div>

        <div className='d-flex col-6 col-sm-4'>
            <a href="tel:+91 9500590134"><i  className="fa-solid fa-phone Little-icon"></i></a>
            <a className='Little-contact-hover' href="tel:+91 9500590134">+91 9500590134</a>
            
        </div>
        <div className='col-12 col-sm-4 social-media'>
            <a  href='https://www.facebook.com/hubsemsolutions'target='_blank' rel="noreferrer" className="App-Icon">< FontAwesomeIcon icon={faFacebookF} /></a>
            <a  href='https://www.instagram.com/hubsemsolutions/'target='_blank' rel="noreferrer" className="App-Icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a  href='https://x.com/hubsem'target='_blank' rel="noreferrer" className="App-Icon"> <FontAwesomeIcon icon={faSquareTwitter} /></a>
            <a  href='https://www.linkedin.com/company/hubsem-software-solutions/mycompany/'target='_blank' rel="noreferrer" className="App-Icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href='https://www.youtube.com/@hubsemsoftwaresolutions'target='_blank' rel="noreferrer" className="App-Icon"><FontAwesomeIcon icon={faYoutube} /></a>
            
        </div>
       </div>
       
    </div>
  )
}

export default LittleContact
