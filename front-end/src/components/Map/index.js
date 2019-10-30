import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
        lat: 57.6316,
        lng: 12.3332
    },
    zoom: 17
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '50%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={57.6316794}
                        lng={12.3332669}
                        text='Painted Pirate Tattoo'
                    />
                </GoogleMapReact>
        </div>
    );
  }
}
 
export default Map;