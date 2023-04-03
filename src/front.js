import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './front.css';
import Property from './assets/cardimg.png';
// import {AiFillPlayCircle}from 'react-icons/ai';


export function Front()
{
    return(
        <>
        <div  className="container first">
        <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className='col-lg-1'>&nbsp;</div>
  <a className="navbar-brand text-light" href="#">Univers</a>
  <a className="navbar-brand  btn btn-success p-1" href="#">Personal</a>
  <a className="navbar-brand text-light" href="#">Business</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
<div className='col-lg-5'>&nbsp;</div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-light dropdown" href="#">Features <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light disabled" href="#">Help</a>
      </li>
      <li className='nav-item'>
      <a className="navbar-brand text-light" href="#">En</a>
      </li>
    </ul>
    
  </div>
</nav>
            <div className="row">
                <div className="col-lg-6 ">
                <h1 className='text-center text-light mt-5 '>Digitize your<br></br> Univers bank</h1>

                </div>
                <div className="col-lg-6 text-center">
                    <p className="text-center text-light mt-5">Money should be easy,it is time to Say<br></br>
                    goodbye to banks & financial services<br></br>
                    companies that don't work for you</p>
                    <button className="btn btn-success p-1">Digitize Now</button>
                    {/* <div className="icons2 text-dark">
                      <AiFillPlayCircle/>


                    </div> */}

                </div>
                
                <div className="col-lg-3">&nbsp;

                 </div>
                 <div className="col-lg-6">
                    <img src={Property} className="col-lg-12"/>
                </div>
                <div className="col-lg-3">&nbsp;

                </div>   

                
                

            </div>

        </div>
        </>
    );
}