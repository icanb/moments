import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxwZXJrdWJ1cyIsImEiOiJjamw4emt6N2MxaW9zM3FudDk4eWl2djlvIn0.i0FiJHQU6H8COQwpJq1ZfA';


class Map extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/alperkubus/cjl906vac0mqy2sqrrd8rotq9'
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

export default Map;
