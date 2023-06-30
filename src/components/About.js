import React from 'react';
import {motion, useScroll} from "framer-motion";
import {Tilt} from "react-tilt";


export default function About() {
    return (
        <motion.div 
        className="about"
        initial={{ x: 0 , y: 0, opacity: -1}}
        whileInView={{ x: 0 , y: 0, opacity: 1}}
        transition={{ duration: 1, delay: 0}}
        >
            <div className = "about-flex">
                <div className="about-desc">
                    <h1>about me</h1> 
                    <p>
                        <span>Hi! </span> 
                        I'm a 17 year old web developer from 
                        Markham, Ontario with a passion for crafting 
                        visually appealing websites. Combining creativity with 
                        technical skills, I specialize in developing interactive web 
                        applications using React and Three.js. Feel free to explore my page 
                        and don't hesitate to contact me - I'd love to talk!
                    </p>

                </div>

                <div className="about-icons">
                    <Tilt> <img src={require("../assets/react.png")}/> </Tilt>
                    {/* <Tilt> <img src={require("../assets/js.png")}/> </Tilt> */}
                    <Tilt> <img src={require("../assets/threejs.png")}/> </Tilt>
                </div>
                
                <div className="about-img">
                    <img src = {require("../assets/profilepic.png")}/>
                </div>
                
            </div>
                
        </motion.div>
    );
}
