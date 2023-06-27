import React, { Component } from "react";
import {Tilt} from "react-tilt";
import {motion, useScroll} from "framer-motion";



import {projects} from "../constants";

const ProjectCard = ({title, description, img}) => {

    // console.log(img);
    var a = './breatheEasy.png';
   return (
    <motion.div
        initial={{ x: 0 , y: 0, opacity: -1}}
        whileInView={{ x: 0 , y: 0, opacity: 1}}
        transition={{ duration: 1, delay: 0}}
    >
        <Tilt 
        className = "project-card"
        options={{
            reverse:true,
            max:50,
        }}
          >
            <img src={require("../assets/breatheEasy.png")}/>
            <h1>{title}</h1>
            <p>{description} </p> 
            
        </Tilt>

    </motion.div>
    
   )
}

export default function Projects() {

    const {scrollYProgress} = useScroll(); // distance scrolled down

    return (
        <div className="projects">
            <h1>projects</h1>
            <div className="projects-flex">
                {projects.map((project) => (
                    <ProjectCard title={project.title} description={project.description} img={project.img}/>             
                ))}
            </div>
            
        </div>
    )

}