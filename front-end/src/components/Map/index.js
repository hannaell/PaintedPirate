import React, { Component } from 'react';
import { H2 } from '../typo';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const DivStyled = styled.div`
    height: 83vh;
    width: 100vw;
    margin-top: 18vh;
    margin-bottom: 12vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const MapStyled = styled.div`
    height: 78vh;
    width: 74vw;
    border: 2px solid #E5E5E5;
    margin-left: 13vw;
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
            <DivStyled>
                <H2 text='Location' fontWeight='bold' marginLeft='13vw' marginBottom='1vh' />
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
            </DivStyled>
        );
    }
    }
 
export default Map;