import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddStaff from "./components/AddStaff";
import Staffs from "./components/Staffs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <a className='navbar-brand'>Add an Argonaute</a>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item active'>
                  <Link className='nav-link' to={"/AddStaff"}>
                    Add Staff
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={"/Staffs"}>
                    Staffs
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Switch>
                <Route exact path='/' component={AddStaff} />
                <Route path='/AddStaff' component={AddStaff} />
                <Route path='/Staffs' component={Staffs} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
