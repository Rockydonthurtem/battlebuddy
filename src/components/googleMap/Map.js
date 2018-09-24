// import React, { Component } from "react";
// import "./Map.css";
// import axios from "axios";

// import { timingSafeEqual } from "crypto";

// class Map extends Component {
//   constructor() {
//     super();
//     this.state = {
//       center: {
//         lat: 32.8653014,
//         lng: -96.75820979999997
//       },
//       zoom: 11
//     };
//   }
//   render() {
//     console.log(this.state);
//     // let now = [];
//     // let gtr = now.push(this.state.center);
//     let k = [];
//     const { lat, lng } = this.state.center;
//     let now = k.push({ lat }, { lng });
//     console.log(now);
//     let j = now.map((i, o) => {
//       return <div key={o}>{i.lat}</div>;
//     });
//     return (
//       <div className="map">
//         <GoogleMapReact
//           defaultCenter={this.state.center}
//           defaultZoom={this.state.zoom}
//         />
//         {j}
//       </div>
//     );
//   }
// }
// export default Map;
// const Marker = props => {
//   return <Room style={{ fill: "red" }} />;
// };
// const Marker = props => {
//   return <Room style={{ fill: "red" }} />;
// }; //--------------------------------------------------------------------------------
import React, { Component } from "react";
import { GoogleMapReact } from "google-map-react";
import axios from "axios";

import "./Map.css";

const Marker = props => {
  return (
    <img
      className="map_marker"
      src="https://image.flaticon.com/icons/svg/149/149059.svg"
      alt="Map marker"
    />
  );
};

class Map extends Component {
  state = {
    center: {
      lat: 32.735687,
      lng: -97.10806559999997
    },
    marker: [],
    zoom: 5
  };
  componentDidMount() {
    axios.get("/api/loc").then(response => {
      console.log(response.data);
      this.setState({ marker: response.data });
    });
  }

  render() {
    console.log(this.state);
    console.log(this.state.lat);
    let pin = this.state.marker.map((e, map_id) => {
      return (
        <div key={map_id}>
          <Marker lat={e.lat} lng={e.lng} />
        </div>
      );
    });
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="google_map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.state.zoom}
        >
          <Marker lat={this.state.lat} lng={this.state.lng} />
        </GoogleMapReact>
        {pin}
      </div>
    );
  }
}

export default Map;
