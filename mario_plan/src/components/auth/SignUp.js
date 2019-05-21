import React, { Component } from 'react'

export class SignUp extends Component {

    state ={
       email:'',
       password:'',
       firstName:'',
       lastName:''
    }
    handleChange = e =>{
        this.setState({
            [e.target.id]:e.target.value
        });
    } 

    handleSubmit = e =>{
       e.preventDefault();
       console.log(this.state);　//console.logで表示させる
    }
  render() {

    return (
        <div className ="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
           </div>
           <div className="input-field">
                <label htmlFor="password">password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
      
           </div>
           <div className="input-field">
                <label htmlFor="firstname">firstName</label>
                <input type="text" id="firstname" onChange={this.handleChange}/>
      
          </div>
           <div className="input-field">
                <label htmlFor="lastname">lastName</label>
                <input type="text" id="lastname" onChange={this.handleChange}/>
      
         </div>
    <div className="input-Field" >
        <button className="btn pink lightn-1 z-depth-0">Log iN</button>

    </div>
    </form>
    </div>
    )
  }
}

export default SignUp
