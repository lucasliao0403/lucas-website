

import React, { Component } from "react";
import {ModelCanvas} from './Model.js';
import {Tilt} from "react-tilt";
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {

    return (
        <div className="hero">
            <div className="hero-flex">
                <div className="hero-text">
                    <h1 className='name'> Lucas Liao </h1>
                    <div className="hero-text-flex">
                        <div className = 'description'> 
                            <li> web developer </li> 
                        </div>
                        
                        <div className="icons">
                            <a href="https://github.com/lucasliao0403"><img src={require("../assets/github.png")}/></a>
                            <a href="https://www.linkedin.com/in/lucas-liao-570a19278/"><img src={require("../assets/linkedin.png")}/></a>
                            <a href="https://discordapp.com/users/290228422473416706"><img src={require("../assets/discord.png")}/></a>           
                        </div>
                    </div>

                </div>
                <div className="hero-model">
                    <ModelCanvas/>
                </div>
            </div>
        </div>
    )

}