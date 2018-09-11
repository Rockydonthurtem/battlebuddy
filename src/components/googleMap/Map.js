import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 32.8653014,
        lng: -96.75820979999997
      },
      zoom: 11
    };
  }
  render() {
    return (
      <div className="map">
        <GoogleMapReact
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        />
      </div>
    );
  }
}
export default Map;
