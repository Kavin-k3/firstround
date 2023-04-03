import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Frame from './assets/Frame.png';
import Group from './assets/Group.png';
import './metal.css';

export function Metal(){
    return(
        <>
    
        <div className="metal1 container bg-dark">
            <div className="row">
                <div className=" col-lg-6 ">
                    <h3 className="text-light ">Make an impression <br></br>with metal</h3>
                    <p className="text-secondary ">Get our iconic metal cards forged from<br></br>
                        stainless steel,for you and your power players.<br></br>
                        Add your company name to the front for an<br></br>
                        extra professional touch.Exclusively for paid <br></br>
                        plans.Subject to additional fees
                    </p>
                    <h6 className="text-success ">Order a Metal card→</h6>

                </div>
                <div className="col-lg-6">
                    <div className="row">
                    
                            <div className="col-lg-4">&nbsp;

                            </div>
                            <div className="col-lg-8">
                            <img src={Group} className="col-lg-12"/>

                            </div>

                           

                        
                        <div className="col-lg-12">
                        <img src={Frame} className="col-lg-12"/>

                        </div>



                    </div>
                   
                    

                </div>

            </div>

        </div>
        </>
    );
}

