import React from 'react';
import './Footer.css'
import { FaPhoneAlt, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-items'>
                <FaPhoneAlt className='phn-icon'></FaPhoneAlt>
                <p>Toll free 1800 200 1234</p>
            </div>
            <div className='footer-items'>
                <FaFacebook style={{ fontSize: '30px' }}></FaFacebook>
                <p>www.facebook.com/cripumps</p>
            </div>
            <div className='footer-items'>
                <div className='web-icon-container'>
                    <img className='web-icon' src="/assets/web-icon.png" alt="web logo" />
                </div>
                <p>www.crigroups.com</p>
            </div>
        </div>
    );
};

export default Footer;