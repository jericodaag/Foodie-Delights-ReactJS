import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
} from 'react-router-dom';

import './main.css';
import logo from './image/logo.png';
import Home from './Home/homepage';
import Blogs from './Blog/BlogPage';
import About from './About/aboutus';
import Contact from './Contact/ContactForm';

class Main extends Component {
  render() {
    const { username, onLogout } = this.props;

    return (
      <Router>
        <div>
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body shadow p-3 mb-5" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/myhome" className="nav-link active">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/myblog" className="nav-link active">Blog</Link>
                  </li>
                  <Link to="/myhome" className="navbar-brand">
                  <li>
                  <img src={logo} alt="Logo" width="60" height="60" className="d-inline-block align-top logo logo-adjust" />
                  </li>
                  </Link>
                  <li class="nav-item">
                    <Link to="/myabout" className="nav-link active">About</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/mycontact" className="nav-link active">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="ms-auto">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {username}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={onLogout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <Routes>
            <Route  
              exact 
              path="/myblog" 
              element={<Blogs username={username} />}  // Pass the username as a prop
            />

            <Route  
                exact 
                path="/myabout" 
                element={<About />} 
            />

            <Route 
                exact
                path="/mycontact" 
                element={<Contact />} 
                />

            <Route 
                exact
                path="/myhome" 
                element={<Home />} 
            />

          </Routes>
        </div>
      </Router>
    );
  }
}

export default Main;
