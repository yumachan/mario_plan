import React from 'react';

const ProjectDetail = props =>{
    const id = props.match.params.id;
    return (
        <div classNam="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title -{id}</span>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>posted by yuma</div>
                        <div>22 May , 12 pm</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;