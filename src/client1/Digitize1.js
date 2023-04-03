import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Digitize1.css';
// import card1 from './assets/Property 1=Variant2.png';

export function Digitize(){
    return(
        <div  className='container first-img'>
            <div className='row'>
             <div className='col-lg-6 mt-4'>
                <h1 className=' in'>Digitize your Univers bank</h1>

             </div>
             <div className='col-lg-6 mt-4'>
                <p className='text-light'>Money should be easy,it is time to Stay
                    goodbye to banks & financial services
                    companies that don't work for you
                </p>

             </div>
             <div className='col-lg-2'>&nbsp;

             </div>
             <div className='col-lg-8'>
                <div className='col-lg-12'>
                    {/* <img src={card1}/> */}

                </div>

             </div>
             <div className='col-lg-2'>&nbsp;

             </div>
                

            </div>
        </div>
    );
}