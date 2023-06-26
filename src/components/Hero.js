

import React, { Component } from "react";
import {ModelCanvas} from './Model.js';
import {Tilt} from "react-tilt";

export default function Hero() {

    return (
        <div className="hero">
            <div className="hero-flex">
                <div className="hero-text">

                    {/* <Tilt> */}
                        <h1 className='name'> Lucas Liao </h1>
                    {/* </Tilt> */}
                    <p className = 'description'> 
                    <li> <a> Front-End Developer </a> </li> 
                    <li> <a> Producer </a> </li>
                    <li> <a> Mother </a> </li>
                    <li> <a> President </a> </li>
                    
                     </p>
                </div>
                <div className="hero-model">
                    <ModelCanvas/>
                </div>
            </div>
        </div>
    )

}