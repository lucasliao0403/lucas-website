import React from 'react';
import {motion, useScroll} from "framer-motion";


export default function About() {
    return (
        <motion.div 
        className="about"
        initial={{ x: 0 , y: 0, opacity: -1}}
        whileInView={{ x: 0 , y: 0, opacity: 1}}
        transition={{ duration: 1, delay: 0}}
        >
            <div className = "about-flex">
                <div className="about-text">
                    <h1>about me</h1> 
                    <p>
                        <span>Hi! </span> 
                        I'm a 17 year old web developer from 
                        Markham, Ontario. With a passion for crafting 
                        visually appealing websites, I combine creativity with 
                        technical skills to deliver engaging digital experiences.
                        Feel free to explore my page and don't hesitate to 
                        contact me - I'd love to talk!
                    </p>
                </div>

                <div className="about-img">
                    <img src = {require("../assets/profilepic.png")}/>
                </div>
            </div>
            
        </motion.div>
    );
}
