import React from 'react';
import {motion, useScroll} from "framer-motion";
import {Tilt} from "react-tilt";


export default function About() {
    return (
        <div className="about">
            <motion.div 
            initial={{ x: 0 , y: 0, opacity: -1}}
            whileInView={{ x: 0 , y: 0, opacity: 1}}
            transition={{ duration: 1, delay: 0}}
            >
                <div className = "about-flex">
                    <div className="about-desc">
                        <h1>about me</h1> 
                        <p>
                            <span>Hi! </span> 
                            I'm a student developer from 
                            Markham, Ontario, and I love building software and working with new technologies.
                            I specialize in developing interactive web 
                            applications using NextJS and React, and I'm always eager to learn.
                            Feel free to explore my page 
                            and don't hesitate to contact me - I'd love to talk!
                        </p>

                    </div>

                    <div className="about-icons">
                        <div> 
                            <Tilt
                                options={{
                                    reverse: true,
                                    
                                }}
                            > 
                                <img src={require("../assets/react.png")}/> 
                            </Tilt> 
                        </div>

                        <div> <Tilt> <img src={require("../assets/nextjs.png")}/> </Tilt> </div>
                        <div> <Tilt> <img src={require("../assets/threejs.png")}/> </Tilt> </div>
                        
                    </div>
                    
                    <div className="about-img">
                        <img src = {require("../assets/profilepic.png")}/>
                    </div>
                    
                </div>
                    
            </motion.div>
        </div>
    );
}
