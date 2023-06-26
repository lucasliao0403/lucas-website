

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
                    <p className = 'description'> ya mudda </p>
                </div>
                <div className="hero-model">
                    <ModelCanvas/>
                </div>
            </div>
        </div>
    )

}