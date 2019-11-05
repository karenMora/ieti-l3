import React, { Component } from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import { Login }  from './App/LoginComponet/Login';
import Profile from './App/ProfileComponent/Profile';
//import Profile from '.App/ProfileComponent/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: '', priority: 0, dueDate: moment()};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginView}/>
          <Route exact path="/Profile" component={ProfileView}/>
        </div>
      </Router>
    );
  }

}

const LoginView = () => (
  <div>
    <Login />
  </div>
);

const ProfileView = () => (
  <div>
    <Profile />
  </div>
);


export default App;
