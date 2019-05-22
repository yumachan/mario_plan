import React, { Component } from 'react'

export class CreateProject extends Component {
    state ={
        title:"",
        content:""
    }

    handleChange = e =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div classname="container">
                <form onSubmit ={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">create new project</h5>
                    <div className ="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id ="title" onChange={this.handleChange}/>
                    </div>
                    <div className ="input-field">
                        <label htmlFor="title">Project Content</label>
                        <textarea  id ="content" className="materialize-textarea" />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">create</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default CreateProject
