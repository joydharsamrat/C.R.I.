import React from 'react';
import './Products.css'

const Products = () => {
    return (
        <div className='products'>
            <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            <div className='img-container'>
                <img src="/assets/3.png" alt="" />
            </div>
            <p style={{ textAlign: 'center' }}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
            <hr className='line' />
            <p style={{ textAlign: 'center', fontWeight: '700' }}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
            <p style={{ textAlign: 'center', }}>
                CHEMICALS & PROCESS <span className='divider'>|</span> POWER <span className='divider'>|</span> WATER & WASTE WATER <span className='divider'>|</span> OILS & GAS <span className='divider'>|</span> PHARMA <span className='divider'>|</span> SUGARS & DISTILLERIES <span className='divider'>|</span> PAPER & PULP <span className='divider'>|</span> MARINE & DEFENCE <span className='divider'>|</span> METAL & MINING <span className='divider'>|</span> FOOD & BEVERAGE <span className='divider'>|</span> PETROCHEMICAL & REFINERIES <span className='divider'>|</span> SOLAR <span className='divider'>|</span> BUILDING <span className='divider'>|</span> HVAC <span className='divider'>|</span> FIRE FIGHTING <span className='divider'>|</span> AGRICULTURE & RESIDENTIAL
            </p>
        </div>
    );
};

export default Products;