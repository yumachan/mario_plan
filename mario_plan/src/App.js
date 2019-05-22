import React from 'react';
import './App.css';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetail from './components/projects/ProjectDetail';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
     <Switch>
       <Route exact path="/" component ={SignIn} />
       <Route exact path="/" component ={SignUp} />
       <Route path="/project/:id" component ={ProjectDetail}/> 
       <Route path="/signin" component ={SignIn} />
       <Route path="/signup" component ={SignUp} />
       <Route path="/create" component ={CreateProject}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

