import React, { Component } from "react";

import axios from "axios";

import Thumbnail from "./thumbnail.js";

import { Form, InputGroup, FormControl } from "react-bootstrap";

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row">
              <div className="col-sm-6">
                <a id="logo-link" href="/">
                    <img src="/static/temp_logo.png" width="46" height="46" className="logo" id="logo"/>
                </a>
              </div>
              <div className="col-sm-6 d-flex justify-content-end align-self-center">
                <nav className="navbar-nav">
                  <ul className="nav">
                    <li className="nav-link"><a href="/auth/google">Profile</a></li>
                  </ul>
                </nav>
              </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
