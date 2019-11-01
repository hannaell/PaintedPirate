import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const MapStyled = styled.div`
    height: 78vh;
    width: 74vw;
    border: 2px solid #E5E5E5;
    margin: 13vw;
`;
 
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
        <MapStyled>
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
        </MapStyled>
    );
  }
}
 
export default Map;