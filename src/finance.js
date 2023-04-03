import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export function Finance(){
    return(
        <>
        <div className="rt container mt-4 p-5 ">
            <div className="row">
            <div className="col-lg-12">
            <h1 className="text-center text-light p-5">Connect your finance<br></br> with carty</h1>

            </div>
            <div className="col-lg-5">&nbsp;

            </div>
            <div className="col-lg-3">
                <button className="btn btn-success text-dark p-1">RejoignezI'univers</button>

            </div>
            <div className="col-lg-4">

            </div>
            <div className="container mt-4">
            <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className='col-lg-1'>&nbsp;</div>
  <a className="btn navbar-brand text-dark bg-success p-1" href="#">Univers</a>
  {/* <a className="navbar-brand  butto " href="#">Personal</a> */}
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

            </div>

            </div>
           
            
        </div>


        {/* <div className="container bg-dark p-5">
            <div className="row p-5">
                <div className="col-lg-12">
                <h3 className="text-center p-5">Connect your finance with carty</h3>

                </div>
          
                

                

            </div>

        </div> */}
        </>
    );
} 