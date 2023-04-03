import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Money2 } from "./money2";
import { Universe3 } from "./universe3";
import { Metal } from "../metal";
import { Relation } from "../relation";
import { Business } from "../business";
import { Smarter } from "../smarter";
import { Finance } from "../finance";
import { Digitize } from "./Digitize1";
import { Front } from "../front";
// import {BrowserRouter,Routes,Route} from 'react-router-dom';


export function Home(){
    return(
       <>
          <Front/> 
           <Money2/>
          <Universe3/>
           <Metal/>
          <Relation/>
          <Business/> 
          <Smarter/>
           <Finance/> 


       </>
    );
}


