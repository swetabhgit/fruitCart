import React from 'react'
import '../styles/css/footer.css'

import { SocialIcon } from 'react-social-icons';

const Footer=()=>(
    <div className="footer-wrapper">
        <div className="footer-wrapper-first">
        <ul className="footer-list-wrapper">
        <li className="footer-list">Home</li>
        <li className="footer-list-break">|</li>
        <li className="footer-list">About Us</li>
        <li className="footer-list-break">|</li>
        <li className="footer-list"> Contact Us</li>
        </ul>
        <div className="social-media">
        <div className="socialIcon1"><SocialIcon url="https://www.facebook.com"/></div>
        <div className="socialIcon2"><SocialIcon url="https://www.twitter.com"/></div>
        </div>
        </div>

        <div className="footer-wrapper-second"><span className="footer-text">We serves fresh fruits</span><span>Copyright &copy; </span></div>
       
    </div>
)

export default Footer