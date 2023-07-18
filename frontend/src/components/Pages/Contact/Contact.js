import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

import {  faEnvelope, faLocation, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
function Contact() {
    return (
        <div className="Contact">
            <h1>Contact Us</h1>
            <img src='contact.png'></img>
            <div className="Container_Contact">
                <input className="Name" placeholder="Name"></input>{' '}
                <input className="Email" placeholder="Email"></input>
            </div>
            <div className="Container_Contact">
                <input className="Subject" placeholder="Subject"></input>{' '}
                <input className="Telephone" placeholder="Telephone"></input>
            </div>
            <div className='Container_Contact'>
                <input className='Message' placeholder='Message'></input>
            </div>
            <div className="Send">
                <button>Send Message</button>
            </div>
            <div className="Connect_address">
                <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                <h3>Address</h3>
                <desc>Dai Hoc Dong A, Da Nang</desc>
            </div>
            <div className="Connect_phone">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                <h3>Telephone</h3>
                <desc>   +0366 9311 95 3213</desc>
            </div>
            <div className="Connect_email">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <h3>Email</h3>
                <desc>DaiHocDongA@gmail.com</desc>
            </div>
        </div>
    );
}

export default Contact;
