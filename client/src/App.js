import React, { Component } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link
} from "react-router-dom";
import { Redirect, IndexRedirect } from "react-router-dom";

// import "./assets/react-toolbox/theme.css";
// import theme from "./assets/react-toolbox/theme.js";
// import ThemeProvider from "react-toolbox/lib/ThemeProvider";

import {
  Nav,
  Navbar,
  NavItem,
  MenuItem,
  NavDropdown,
  Modal,
  Jumbotron
} from "react-bootstrap";

import Books from "./pages/books.js";
import MyItems from "./pages/myitems.js";
import Upload from "./pages/upload.js";
import NewMoment from "./pages/new.js";

import axios from "axios";

import Display from "./components/display.js";

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div className="App">
            <Route exact path="/" render={() => <Redirect to="/new" />} />
            <Route path="/myitems" component={MyItems} />
            <Route path="/new" component={NewMoment} />
            <Route
              path="/furniture"
              component={() => <Display category="Furniture" />}
            />
            <Route
              path="/electronics"
              component={() => <Display category="Electronics" />}
            />
            <Route
              path="/other"
              component={() => <Display category="Other" />}
            />
            <Route path="/upload" component={Upload} />
            <Route
              path="/logout"
              component={() => {
                axios
                  .get("/logout")
                  .then((window.location = window.CURRENT_HOST));
              }}
            />
          </div>
        </HashRouter>
        <footer className="footer">
          Reshwap 2019 - created by Alper Canberk
        </footer>
      </div>
    );
  }
}

export default App;
