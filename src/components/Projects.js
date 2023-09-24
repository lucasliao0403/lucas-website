import React, { Component } from "react";
import {Tilt} from "react-tilt";
import {motion, useScroll} from "framer-motion";



import {projects} from "../constants";

const ProjectCard = ({title, description, img, github, link}) => {

    
    return (
        <motion.div
            initial={{ x: 0 , y: 0, opacity: -1}}
            whileInView={{ x: 0 , y: 0, opacity: 1}}
            transition={{ duration: 1, delay: 0}}
            className="project-card-motion"
        >
            <Tilt
            className="project-card"
            options={{
                reverse: true,
                max: 5,
            }}
        > 
                <a href={link}>
                    {
                    img===0 ? 
                        <img src={require('../assets/cafe.png')}/> :
                    img===1?
                        <img src={require('../assets/portfoliosite.png')}/> :
                    img===2?
                    <img src={require('../assets/breatheEasy.png')}/> :
                    img===3?
                    <img src={require('../assets/nameify.png')}/> :
                    <img src={require('../assets/airesponder.png')}/>
                    }
                </a>   
                
                <a href={link}> <h1>{title}</h1> </a>
                <div className="project-desc">
                    <div className="project-desc-text">
                        <p>{description} </p> 
                    </div>
                    <div className="project-icons"> 
                        <a href={github}><img src={require("../assets/github.png")}/></a>
                    </div>
                </div>
                
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
                    <ProjectCard 
                    title={project.title} 
                    description={project.description} 
                    img={project.img} 
                    github={project.github}
                    link={project.link}
                    />             
                ))}
            </div>
            
        </div>
    )

}