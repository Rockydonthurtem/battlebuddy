import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { postLoc } from "../../ducks/reducers/userReducer";
import { connect } from "react-redux";
import axios from "axios";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor() {
    super();
    this.state = {
      marker: []
    };
  }

  static defaultProps = {
    center: {
      lat: 27.950575,
      lng: -82.45717760000002
    },
    zoom: 11
  };
  componentDidMount() {
    // this.props.postLoc();
    axios.get("/api/loc").then(response => {
      console.log(response);
      this.setState({
        marker: response.data
      });
    });
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    const { lat, lng } = this.state.marker;
    console.log(this.state.marker);
    let now = this.state.marker.map((e, i) => {
      return (
        <div key={i}>
          {e.lat}
          {e.lng}
        </div>
      );
    });
    console.log(this.state);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        console.log(this.state)
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.state.marker.lat}
            lng={this.state.marker.lng}
          />
        </GoogleMapReact>
        {/* {now} */}
      </div>
    );
  }
}

const mapStateToProps = state => state;

// const mapStateToProps = state => state.user;

export default connect(
  mapStateToProps,
  { postLoc }
)(SimpleMap);
