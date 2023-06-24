

import React, { Component } from "react";
import {ModelCanvas} from './Model.js';

export default function About() {

    return (
        <div className="about">
            <div className="about-flex">
                <div className="about-text">
                    <h1 className='name'> Lucas Liao </h1>
                    <p className = 'description'> ya mudda </p>
                </div>

                <div className="about-model">
                    <ModelCanvas/>
                </div>
            </div>
        </div>
    )

}