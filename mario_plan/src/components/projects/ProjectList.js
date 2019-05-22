import React from 'react';
import ProjectsSummary from './ProjectsSummary';

const ProjectList = ({projects}) =>{
        rerurn (
            <div className ="project-list section">
                {projects && projects.map (project =>{
                    return  <ProjectsSummary project = {project} key ={project.id}/>
                 } )}

                
            </div> 
        )
}

export default ProjectList;