import React, { Component } from "react";

import Header from "../components/header.js";
import Map from "../components/map.js";

import axios from "axios";

import { Form, InputGroup, FormControl } from "react-bootstrap";

let Departments = [
  "All",
  "English",
  "Math",
  "History",
  "Science",
  "Music",
  "Visual Arts",
  "Theater",
  "Religion",
  "Chinese",
  "Spanish",
  "French",
  "Latin",
  "Other"
];

class NewMoment extends Component {
  constructor() {
    super();
    this.state = {
      dep_value: "All",
      data: [],
      search: ""
    };
    this.handleDepChange = this.handleDepChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentWillMount() {
    axios.get(window.CURRENT_HOST + "items?category=Books").then(res => {
      this.setState({ data: res.data });
      console.log(this.state.data);
    });
  }

  handleDepChange(event) {
    this.setState({ dep_value: event.target.value });
    console.log(event.target.value);
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value });
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <Header/>

        <div className="container-fluid">
          <div className="row min-comp-height">
            <div className="col-6 no-padding">
              <Map/>
            </div>
            <div className="col-6">
              ...
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default NewMoment;

