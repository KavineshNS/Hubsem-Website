import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faSquareTwitter,faLinkedinIn,faYoutube } from '@fortawesome/free-brands-svg-icons'
import './WorkTime.css'

function SocialMedia(){
    return(
        <div className='socialmedia'>
          
            <a href='https://www.facebook.com/hubsemsolutions'target='_blank' rel="noreferrer" className="AppIcon">< FontAwesomeIcon icon={faFacebookF} /></a>
            <a href='https://www.instagram.com/hubsemsolutions/'target='_blank' rel="noreferrer" className="AppIcon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='https://x.com/hubsem'target='_blank'rel="noreferrer" className="AppIcon"> <FontAwesomeIcon icon={faSquareTwitter} /></a>
            <a href='https://www.linkedin.com/company/hubsem-software-solutions/mycompany/'target='_blank'rel="noreferrer" className="AppIcon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href='https://www.youtube.com/@hubsemsoftwaresolutions'target='_blank' rel="noreferrer" className="AppIcon"><FontAwesomeIcon icon={faYoutube} /></a>
            
        </div>
    )
}

export default SocialMedia;