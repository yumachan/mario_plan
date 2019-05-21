import React from 'react';
import './App.css';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import {BrowserRouter , Switch , Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
       <Route exact path="/" component ={SignIn} />
       <Route exact path="/" component ={SignUp} />
       <Route path="/signin" component ={SignIn} />
       <Route path="/signup" component ={SignUp} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

