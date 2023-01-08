import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='trophy'>
                <img src="/assets/1.png" alt="" />
            </div>
            <div className='details'>
                <p className='header'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                <ul>
                    <li style={{ fontSize: '16px' }}>
                        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                    </li>
                    <li style={{ fontSize: '16px' }}>
                        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                    </li>
                </ul>
                <img src="/assets/2.png" alt="" />
                <p style={{ fontSize: '16px' }}>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </div>
    );
};

export default Banner;