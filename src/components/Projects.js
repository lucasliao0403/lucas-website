import React, { Component } from "react";

export default function Projects() {



    const projects = [
        {
            title:"breatheEasy", 
            description:"desc"
        }
    ]

    console.log(projects)

    const ProjectCard = (title, description) => {

        
        <div> 
            {title} <br/> {description}
        </div>
        
    }



    return (
        <div className="projects">
            <h1>Projects</h1>
            {projects.map((title, description) => (
                ProjectCard(title, description)
            ))
            }
            
        </div>
    )

}