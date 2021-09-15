import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {  
  return (
    <Router>
      <Header /> 
      <Switch>
          <Route exact path="/">
            <Main />  
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/dashboard">
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
