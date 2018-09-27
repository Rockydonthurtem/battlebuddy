import React from "react";
import axios from "axios";
import Map from "./Map.css";
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDCotZ7y9Nqx8b08RkWG87dGQ4oduLKqIk&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `955px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers({
    onMarkerClustererClick: () => markerClusterer => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 28.0391667, lng: -80.19179020000001 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => {
        console.log(marker);
        return (
          <Marker
            key={marker.photo_id}
            position={{
              lat: parseInt(marker.lat),
              lng: parseInt(marker.lng)
            }}
          />
        );
      })}
    </MarkerClusterer>
  </GoogleMap>
));

class Cluster extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      markers: []
    };
  }
  componentDidMount() {
    axios.get("/api/loc").then(res => {
      console.log(res);
      this.setState({ markers: res.data });
    });
  }

  render() {
    return (
      <div style={{ width: "50%" }}>
        <MapWithAMarkerClusterer markers={this.state.markers} />
      </div>
    );
  }
}
export default Cluster;
