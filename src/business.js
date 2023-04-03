import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import img1 from './assets/Group 644 1.png';
import img2 from './assets/Group 237629.png';
import img3 from './assets/Group 657.png';
import img4 from './assets/Component 1.png';
import './business.css';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

import {GiStarFormation}from 'react-icons/gi';


export function Business(){
    return(
        <>
        <div className="container-fluid mt-5 p-5 bg-dark">
            <div className="row mt-3">
                <div className="col-lg-12">
                <p className="text-center text-secondary">Teamwork make the dream work</p>
                <h1 className="text-center text-light p-3">Discover the meaning of efficiency<br></br>
                with Univers Business</h1>

                </div>
               
                <div className="col-lg-6">
                    <div className="box col-lg-12 bg-success p-3">
                        <h3 className="mt-3">Send and receive<br></br> without borders</h3>
                        <p className="mt-3">Explore Payments</p>
                        
                        <div className="row">
                        <div className="col-lg-3">&nbsp;

                        </div>
                        <div className="col-lg-6">
                        <img src={img1} className="col-lg-12 m-3"/>

                       </div>
                       <div className="col-lg-3">&nbsp;

                        </div>

                        </div>
                         


                    </div>
                  

                </div>
                <div className="col-lg-6">
                <div className="box col-lg-12 bg-secondary p-5">
                    <h3 className="text-light mt-3">Invoices that work smaster</h3>
                    <p className="text-success mt-3">Learn more about Invoices</p>
                    <div className="row">
                        <div className="col-lg-3">&nbsp;

                        </div>
                        <div className="col-lg-6 mt-5 m-3">
                        <img src={img2} className="col-lg-12"/>

                       </div>
                       <div className="col-lg-3">&nbsp;

                        </div>

                        </div>

                </div>

                </div>

                </div>

        </div>
                
                <div className="col-lg-12  bg-dark">
                    <div className="row">
                        <div className="col-lg-1">&nbsp;

                        </div>
                        <div className="kk col-lg-6 p-5">
                            <div className="col-lg-12">
                            <h3 className="text-light">Smart company debit cards help
                            you and your team go further
                             </h3>
                            <p className="text-primary">Learn more about Cards</p>
                            <img src={img3} className="card1 col-lg-8 ml-5 p-5 "/>


                            </div>

                        </div>
                        <div className="col-lg-1">&nbsp;

                        </div>
                        <div className="kk col-lg-3 p-3">
                            <div className="icona1 text-light">
                                <GiStarFormation />

                            </div>
                        <h3 className="text-light">Exchange,sendand spend at greatrates</h3>
                         <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>    <br/>  
                        <h6 className="mt-5 text-success">Explore Exchanges</h6>

                        </div>
                        <div className="col-lg-1">&nbsp;
                            

                        </div>


                    </div>
                </div>
              
              
                
            
        <div className="container-fluid bg-dark p-5">
            <div className="box row m-1 bg-secondary">
            <div className="col-lg-6 mt-1 p-5">
                    
                    <h3 className="p-2">Set and change team permissions with a tap</h3>
                    <p className="p-2">Stay in total control of your team's spending by
                        managing their permissions and levels of access
                        Create custom roles and choose the combination of
                        apps and features you want them to use
                    </p>

                </div>    
                    <div className="col-lg-6 bg-secondary">
                        <img src={img4} className="col-lg-12 p-5"/>

                    </div>
                   
                   

                   

                
                

            </div>

        </div>
        {/* first */}

        <div className="container-fluid bg-dark p-5">
            <div className="row">
               <div className="col-lg-12">
                 <h1 className="text-center text-light p-3">Control all yours spend<br></br> with smartrules</h1>
                </div>
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6 ">
                 <div className="bg-light boxcol col-lg-12 p-3 mt-2">
                  <div className=" row ">
                    <div className="col-lg-2 text-center icona text-danger">
                    < RiMoneyDollarCircleFill />
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>cosmetics</p>
                    </div>
                    <div className="col-lg-3  text-center">
                      <p>March 25,2022</p>
                    </div>
                    <div className="col-lg-1">&nbsp;
                    </div>
                   <div className="col-lg-3  text-center">
                     <h5>$100</h5>
               </div>
              </div>
             </div>
            </div>

        <div className="col-lg-3">&nbsp;
                       
        </div> 
       {/* second */}
                 <div className="col-lg-3">&nbsp;
                       
                 </div>
                 <div className="col-lg-6">
                 <div className="bg-light boxcol col-lg-12 p-3 mt-2">
                 <div className="row ">
                 <div className="col-lg-2 text-center icona text-primary">
                    < RiMoneyDollarCircleFill />
                    </div>
                   <div className="col-lg-3  text-center">
                    <p>Food</p>
                   </div>
                   <div className="col-lg-3  text-center">
                        <p>March 29,2022</p>
                   </div>
                   <div className="col-lg-1">&nbsp;
   
                   </div>
                   <div className="col-lg-3  text-center">
                        <h5>$45</h5>
                   </div>
                </div>
             </div>
        </div>
        <div className="col-lg-3">&nbsp;
        </div>

   {/* therd */}
           <div className="col-lg-3">&nbsp;
           </div>
            <div className="col-lg-6">
                <div className="bg-light boxcol col-lg-12 p-3 mt-2">
                    <div className="row ">
                    <div className="col-lg-2 text-center icona text-danger">
                    < RiMoneyDollarCircleFill />
                    </div>
                       <div className="col-lg-3  text-center">
                         <p>Shooping</p>
                       </div>
                       <div className="col-lg-3  text-center">
                        <p>March 27,2022</p>
   
                       </div>
                       <div className="col-lg-1">&nbsp;
   
                       </div>
                       <div className="col-lg-3  text-center">
                        <h5>-$241</h5>
   
                       </div>
                     </div>
                    </div>
                   </div>
            <div className="col-lg-3">&nbsp;
                          
             </div>
            {/* four */}
               <div className="col-lg-3">&nbsp;
                       
               </div>
                <div className="col-lg-6">
                   <div className="bg-light boxcol col-lg-12 p-3 mt-2">
                     <div className="row ">
                     <div className="col-lg-2 text-center icona text-primary">
                    < RiMoneyDollarCircleFill />
                    </div>
                       <div className="col-lg-3  text-center">
                         <p>Others</p>
                       </div>
                       <div className="col-lg-3  text-center">
                        <p>March 25,2022</p>
                       </div>
                       <div className="col-lg-1">&nbsp;
   
                       </div>
                      <div className="col-lg-3  text-center">
                        <h5>$100</h5>
                      </div>
                    </div>
                  </div>
                </div>
             <div className="col-lg-3">&nbsp;
                          
             </div>

             {/* five */}
                <div className="col-lg-3">&nbsp;
                       
                </div>
                <div className="col-lg-6">
                    <div className="bg-light boxcol col-lg-12 p-3 mt-2">
                       <div className="row ">
                       <div className="col-lg-2 text-center icona text-danger">
                    < RiMoneyDollarCircleFill />
                    </div>
                        <div className="col-lg-3  text-center">
                        <p>tech</p>
                        </div>
                       <div className="col-lg-3  text-center">
                        <p>March 25,2022</p>
   
                       </div>
                       <div className="col-lg-1">&nbsp;
   
                       </div>
                      <div className="col-lg-3  text-center">
                        <h5>$45</h5>
   
                      </div>
                   </div>
                </div>
            </div>
            <div className="col-lg-3">&nbsp;
            </div>

            </div>

        </div>
        </>
    );
}